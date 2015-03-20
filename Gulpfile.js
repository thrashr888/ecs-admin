'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

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
        bucket: process.env.ECSADMIN_BUCKET_NAME,
        region: process.env.ECSADMIN_REGION || 'us-east-1',
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
        .pipe($.size())
        // .pipe($.filter('**/*.css')) // Filtering stream to only css files
        .pipe(reload({stream: true}));
});


// Scripts
gulp.task('scripts', function () {

    // affects the compilation of aws-sdk-js
    process.env.AWS_SERVICES = 'ecs,ec2,s3,cognitoidentity';

    try {
        return gulp.src(['scripts/main.jsx'], { read: false })
            .pipe($.browserify({
                transform: [
                    // ['babelify', {'experimental': true}],
                    // ['babelify'],
                    require('babelify').configure({
                        extensions: [".jsx", ".es6"],
                        only: ["scripts"],
                        experimental: true
                    }),
                    ['reactify', {es6: true}],
                    ['envify', {
                        BUILD_ENV: process.env.BUILD_ENV,
                        ECSADMIN_BUCKET_NAME: process.env.ECSADMIN_BUCKET_NAME,
                        ECSADMIN_HOST_NAME: process.env.ECSADMIN_HOST_NAME,
                        ECSADMIN_ACCOUNT_NAME: process.env.ECSADMIN_ACCOUNT_NAME,
                        ECSADMIN_REGION: process.env.ECSADMIN_REGION || 'us-east-1',
                    }]
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
            .pipe($.size())
            .pipe(reload({stream: true}));
    } catch (e) {
        console.error(e);
    }
});


// HTML
gulp.task('html', function () {
    var assets = $.useref.assets();

    return gulp.src('templates/*.html')
        .pipe(assets)
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe(gulp.dest('dist'))
        .pipe(reload({stream: true}));
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
        .pipe($.size())
        .pipe(reload({stream: true}));
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


// Static server
// Express Server
gulp.task('server', function() {
    process.env.DEBUG = 'server';
    browserSync({
        server: {
            baseDir: "dist",
            index: "index.html"
        },
        https: true,
        port: 8080,
        logLevel: "info",
        open: false,
    });
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

