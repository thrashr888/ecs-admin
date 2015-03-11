'use strict';

var gulp = require('gulp');

// Load plugins
var $ = require('gulp-load-plugins')();


var onError = function (err) {
    //gutil.beep();
    console.error(err);
    throw err;
};

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
process.env.AWS_SERVICES = 'ecs,ec2,cognitoidentity';
gulp.task('scripts', function () {
    return gulp.src(['scripts/main.jsx'], { read: false })
        .pipe($.browserify({
            // insertGlobals: true,
            // transform: ['reactify', {'harmony': true}],
            // AWS_SERVICES=ecs,ec2,cognitoidentity
            transform: [
                ['babelify'],
                ['reactify', {'es6': true}]
            ],
            insertGlobals : false,
            // transform: ['reactify'],
            extensions: ['.jsx'],
            harmony: true,
            // debug: !gulp.env.production
        }))
        .pipe($.rename(function (path) {
            path.extname = '.js';
        }))
        // .pipe($.jshint('.jshintrc'))
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

// Default task
gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

// Connect
gulp.task('connect', function() {
    $.connect.server({
        root: ['dist'],
        index: 'dist/index.html',
        port: 9000,
        livereload: true,
        middleware: function(connect, opt) {
            // mod-rewrite behavior
            var staticFile = /!\.html|\.js(x)?|\.css|\.svg|\.jp(e?)g|\.png|\.gif$/;
            return [function(req, res, next) {
                if (!req.url.match(staticFile)) {
                    require('fs').createReadStream(opt.index).pipe(res);
                } else {
                    next();
                }
            }];
        }
    });
});

// var env = fs.readFileSync('env').toString();
// var env = require('env');
// console.log(process.env)


// Watch
gulp.task('watch', ['html', 'bundle', 'connect'], function () {

    // Watch .html files
    gulp.watch('templates/*.html', ['html']);


    // Watch .scss files
    gulp.watch('styles/**/*.less', ['styles']);


    // Watch .jsx files
    gulp.watch('scripts/**/*.jsx', ['scripts']);

    // Watch .js files
    gulp.watch('scripts/**/*.js', ['scripts']);

    // Watch image files
    gulp.watch('images/**/*', ['images']);
});
