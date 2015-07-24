/**
 * Created by pligor on 5/26/15.
 */
///<reference path="./declarations/node.d.ts"/>
///<reference path="./declarations/gulp.d.ts"/>
///<reference path="./declarations/gulp-typescript.d.ts"/>
///<reference path="./declarations/gulp-concat.d.ts"/>
var PLIGOR_DOT_COM_APP_VERSION = 1.08;
var gulp = require("gulp");
//var plugins = require('gulp-load-plugins')(); // Load all gulp plugins
// automatically and attach
// them to the `plugins` object
var eventStream = require('event-stream'); //no orderding
//var streamqueue = require('streamqueue')    //works only with txt files
var gulpOrder = require("gulp-order");
var runSequence = require("run-sequence"); //https://www.npmjs.com/package/run-sequence
// Temporary solution until gulp 4
// https://github.com/gulpjs/gulp/issues/355
var preprocess = require('gulp-preprocess'); //https://www.npmjs.com/package/gulp-preprocess
//DEPRECATED var clean = require('gulp-clean')   //https://www.npmjs.com/package/gulp-clean
var rimraf = require("rimraf"); //https://www.npmjs.com/package/gulp-rimraf
var gulpRimraf = require("gulp-rimraf"); //https://www.npmjs.com/package/gulp-rimraf
var rename = require('gulp-rename');
var ts = require('gulp-typescript'); //https://www.npmjs.com/package/gulp-typescript
var concat = require("gulp-concat"); //https://www.npmjs.com/package/gulp-concat
var uglify = require('gulp-uglify'); //https://www.npmjs.com/package/gulp-uglify
var minifyCss = require('gulp-minify-css'); //https://www.npmjs.com/package/gulp-minify-css
var pkg = require('./package.json');
var dirs = pkg['h5bp-configs'].directories; //h5bp means html5 boiler plate
var indexHtmlPath = dirs.src + "/index.html";
var _indexHtmlPath = dirs.src + "/_index.html";
/*class Task {
 //private _name: string

 public get name():string {
 return this._name;
 }

 constructor(private _name: string) {

 }
 }*/
//todo make it with a class and like a silly literal object
var tasks = {
    cleanDist: "cleanDist",
    indexToProduction: "indexToProduction",
    indexToDevelopment: "indexToDevelopment",
    copyallrest: "copyallrest",
    compileTSdev: "compileTSdev",
    compileTSprod: "compileTSprod",
    jsOneFileDev: "jsOneFileDev",
    jsOneFileProd: "jsOneFileProd",
    cssOneFileDev: "cssOneFileDev",
    cssOneFileProd: "cssOneFileProd"
};
function cssOneFile(isProduction) {
    function getCssPath(filename) {
        return dirs.src + "/css/" + filename + ".css";
    }
    var stream = gulp.src([
        getCssPath("normalize"),
        getCssPath("generic"),
        getCssPath("fontello"),
        getCssPath("header"),
        getCssPath("jumbotron"),
        getCssPath("jumbotron_video"),
        getCssPath("announcement"),
        getCssPath("how_it_works"),
        getCssPath("calculations"),
        getCssPath("calculation_form"),
        getCssPath("portfolio"),
        getCssPath("testimonials"),
        getCssPath("contact")
    ]).pipe(concat("main.css"));
    var finalStream = isProduction ? stream.pipe(minifyCss()) : stream;
    return finalStream.pipe(gulp.dest((isProduction ? dirs.dist : dirs.src) + "/css"));
}
gulp.task(tasks.cssOneFileDev, function () {
    return cssOneFile(false);
});
gulp.task(tasks.cssOneFileProd, function () {
    return cssOneFile(true);
});
gulp.task(tasks.cleanDist, function (cb) {
    /*return gulp.src(dirs.dist + "/!**!/!*", {
     read: false //the file and the contents will not be available in the next pipe call, deleted forever here
     }).pipe(clean())*/
    return rimraf(dirs.dist + "/", cb);
    /*return gulp.src(dirs.dist + "/!**!/!*", {read: false}).pipe(
     gulpRimraf({
     force: false    //false means not outside of current working dir
     })
     )*/
});
function preProcessIndex(isForProduction) {
    return gulp.src(_indexHtmlPath).pipe(preprocess({
        context: {
            //production: null    //does not care of the value, just to define the element
            production: isForProduction,
            PLIGOR_DOT_COM_APP_VERSION: PLIGOR_DOT_COM_APP_VERSION
        }
    })).pipe(rename({
        basename: "index"
    })).pipe(gulp.dest(isForProduction ? dirs.dist : dirs.src));
}
gulp.task(tasks.indexToProduction, function () {
    return preProcessIndex(true);
});
gulp.task(tasks.copyallrest, function () {
    var not = "!";
    return gulp.src([
        dirs.src + '/**/*',
        not + _indexHtmlPath,
        not + indexHtmlPath,
        not + dirs.src + "/ts/**/*",
        not + dirs.src + "/css/**/*",
        not + dirs.src + "/js/main.js",
        not + dirs.src + "/js/typescripts.js",
    ]).pipe(gulp.dest(dirs.dist));
});
gulp.task(tasks.indexToDevelopment, function () {
    return preProcessIndex(false);
});
function compileTypescripts(production) {
    var tsResult = gulp.src(dirs.src + "/ts/**/*.ts").pipe(ts({
        removeComments: production,
        noImplicitAny: true,
        out: "typescripts.js"
    }));
    return tsResult.js.pipe(gulp.dest(dirs.src + "/js"));
}
gulp.task(tasks.compileTSdev, function () {
    return compileTypescripts(false);
});
gulp.task(tasks.compileTSprod, function () {
    return compileTypescripts(true);
});
var jsAlreadyMin = [
    dirs.src + "/bower_components/ScrollMagic/scrollmagic/minified/plugins/animation.gsap.min.js",
    dirs.src + "/bower_components/simple-text-rotator/jquery.simple-text-rotator.min.js",
    dirs.src + "/bower_components/waypoints/lib/jquery.waypoints.min.js"
];
var jsToBeMinified = [
    dirs.src + "/js/vendor/radio.shim.js",
    dirs.src + "/js/typescripts.js"
];
gulp.task(tasks.jsOneFileDev, function () {
    return gulp.src(jsAlreadyMin.concat(jsToBeMinified).concat([
        dirs.src + "/js/plugins.js"
    ])).pipe(concat("main.js")).pipe(gulp.dest(dirs.src + "/js"));
});
gulp.task(tasks.jsOneFileProd, function () {
    var alreadyMinifiedStream = gulp.src(jsAlreadyMin).pipe(concat("alreadyMinified.js"));
    var nowMinifiedStream = gulp.src(jsToBeMinified).pipe(concat("toBeMinified.js")).pipe(uglify({}));
    /*return streamqueue(
     alreadyMinifiedStream,
     nowMinifiedStream
     )*/
    //return eventStream.merge([alreadyMinifiedStream, nowMinifiedStream])  //event stream is unreliable
    eventStream.merge(alreadyMinifiedStream, nowMinifiedStream).pipe(gulpOrder([
        "alreadyMinified.js",
        "toBeMinified.js",
    ])).pipe(concat("main.js")).pipe(gulp.dest(dirs.dist + "/js"));
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
gulp.task("default", function (done) {
    runSequence(tasks.compileTSdev, [tasks.cssOneFileDev, tasks.jsOneFileDev, tasks.indexToDevelopment], done);
});
gulp.task("dist", function (done) {
    runSequence(tasks.cleanDist, tasks.compileTSprod, tasks.cssOneFileProd, tasks.indexToProduction, tasks.copyallrest, tasks.jsOneFileProd, done);
});
//all run in parallel which is unwanted
//gulp.task("taskname", ["clean_dist", "compile_typescripts", "index_to_production", ""])
require("./extra_tasks.js");
//# sourceMappingURL=gulpfile.js.map