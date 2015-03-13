'use strict';

var gulp = require('gulp');

// Load plugins
var $ = require('gulp-load-plugins')();


var onError = function (err) {
    //gutil.beep();
    console.error(err);
    throw err;
};


gulp.task('set-production', function () {
    process.env.BUILD_ENV = 'production';
});
gulp.task('set-development', function () {
    process.env.BUILD_ENV = 'development';
});

// Deploy
gulp.task('deploy', ['set-production', 'build'], function () {
    var aws = {
        key: process.env.AWS_ACCESS_KEY_ID,
        secret: process.env.AWS_SECRET_ACCESS_KEY,
        bucket: process.env.S3_BUCKET,
        region: process.env.S3_REGION || 'us-east-1',
    };
    var options = {headers: {
        'x-amz-acl': 'public-read'
    }};
    gulp.src('dist/**')
        .pipe($.s3(aws, options));
});


// Styles
gulp.task('styles', function () {
    return gulp.src('styles/*.scss')
        .pipe($.sourcemaps.init())
            .pipe($.sass())
            .pipe($.autoprefixer('last 1 version'))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest('dist/styles'))
        .pipe($.size());
});


// Scripts
gulp.task('scripts', function () {

    // affects the compilation of aws-sdk-js
    process.env.AWS_SERVICES = 'ecs,ec2,s3,cognitoidentity';

    return gulp.src(['scripts/main.jsx'], { read: false })
        .pipe($.browserify({
            transform: [
                // ['babelify', {'experimental': true}],
                // ['babelify'],
                require('babelify').configure({
                  experimental: true
                }),
                ['reactify', {es6: true}],
                ['envify', {BUILD_ENV: process.env.BUILD_ENV}]
            ],
            insertGlobals : true,
            extensions: ['.jsx'],
            harmony: true,
            debug: !(process.env.BUILD_ENV === 'production')
        }))
        .pipe($.rename(function (path) {
            path.extname = '.js';
        }))
        // .pipe($.jshint('.jshintrc')) // too slow
        // .pipe($.jshint.reporter('default'))
        .pipe(gulp.dest('dist/scripts'))
        .pipe($.size());
});


// HTML
gulp.task('html', function () {
    var assets = $.useref.assets();

    return gulp.src('templates/*.html')
        .pipe(assets)
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe(gulp.dest('dist'))
        .pipe($.connect.reload());
});


// Images
gulp.task('images', function () {
    return gulp.src('images/**/*')
        .pipe($.cache($.imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
        .pipe($.size());
});


// Bower helper
gulp.task('bower', function() {
    gulp.src('bower_components/**/*.js', {base: 'bower_components'})
        .pipe(gulp.dest('dist/bower_components/'));
});


// Clean
gulp.task('clean', function () {
    return gulp.src(['dist/styles', 'dist/scripts', 'dist/images', 'dist/.'], {read: false})
        .pipe($.rm());
});


// Bundle
gulp.task('bundle', ['styles', 'scripts', 'images', 'bower'], function () {
    var assets = $.useref.assets();
    return gulp.src('templates/*.html')
        .pipe($.plumber({
            errorHandler: onError
        }))
        .pipe(assets)
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe(gulp.dest('dist'));
});


// Build
gulp.task('build', ['html', 'bundle', 'images']);


// Default Task
gulp.task('default', ['clean'], function () {
    gulp.start('build');
});


// Express Server
gulp.task('server', function() {
    process.env.DEBUG = 'server';
    $.nodemon({ script: 'server.js' })
        .on('restart', function () {
            console.log('restarted!')
        })
});


// Watch
gulp.task('watch', ['set-development', 'html', 'bundle', 'server'], function () {

    // Watch .html files
    gulp.watch('templates/*.html', ['html']);

    // Watch .scss files
    gulp.watch('styles/**/*.scss', ['styles']);

    // Watch .jsx files
    gulp.watch('scripts/**/*.jsx', ['scripts']);

    // Watch .js files
    gulp.watch('scripts/**/*.js', ['scripts']);

    // Watch image files
    gulp.watch('images/**/*', ['images']);
});

