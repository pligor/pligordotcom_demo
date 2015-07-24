/**
 * Created by pligor on 5/26/15.
 */

///<reference path="./declarations/node.d.ts"/>
///<reference path="./declarations/gulp.d.ts"/>
///<reference path="./declarations/gulp-typescript.d.ts"/>
///<reference path="./declarations/gulp-concat.d.ts"/>
var PLIGOR_DOT_COM_APP_VERSION = 1.08

var gulp = require("gulp")
//var plugins = require('gulp-load-plugins')(); // Load all gulp plugins
// automatically and attach
// them to the `plugins` object

var eventStream = require('event-stream') //no orderding
//var streamqueue = require('streamqueue')    //works only with txt files
var gulpOrder = require("gulp-order")

var runSequence = require("run-sequence")   //https://www.npmjs.com/package/run-sequence
                                            // Temporary solution until gulp 4
// https://github.com/gulpjs/gulp/issues/355
var preprocess = require('gulp-preprocess') //https://www.npmjs.com/package/gulp-preprocess
//DEPRECATED var clean = require('gulp-clean')   //https://www.npmjs.com/package/gulp-clean
var rimraf = require("rimraf") //https://www.npmjs.com/package/gulp-rimraf
var gulpRimraf = require("gulp-rimraf") //https://www.npmjs.com/package/gulp-rimraf
var rename = require('gulp-rename')
var ts = require('gulp-typescript') //https://www.npmjs.com/package/gulp-typescript
var concat = require("gulp-concat") //https://www.npmjs.com/package/gulp-concat
var uglify = require('gulp-uglify') //https://www.npmjs.com/package/gulp-uglify
var minifyCss = require('gulp-minify-css') //https://www.npmjs.com/package/gulp-minify-css

var pkg = require('./package.json')
var dirs = pkg['h5bp-configs'].directories //h5bp means html5 boiler plate

var indexHtmlPath = dirs.src + "/index.html"
var _indexHtmlPath = dirs.src + "/_index.html"

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
}

function cssOneFile(isProduction:boolean) {
    function getCssPath(filename:string):string {
        return dirs.src + "/css/" + filename + ".css"
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
    ]).pipe(
        concat("main.css")
    )

    var finalStream = isProduction ? stream.pipe(minifyCss()) : stream

    return finalStream.pipe(
        gulp.dest((isProduction ? dirs.dist : dirs.src) + "/css")
    )
}

gulp.task(tasks.cssOneFileDev, () => {
    return cssOneFile(false)
})

gulp.task(tasks.cssOneFileProd, () => {
    return cssOneFile(true)
})

gulp.task(tasks.cleanDist, (cb) => {
    /*return gulp.src(dirs.dist + "/!**!/!*", {
     read: false //the file and the contents will not be available in the next pipe call, deleted forever here
     }).pipe(clean())*/

    return rimraf(dirs.dist + "/", cb)

    /*return gulp.src(dirs.dist + "/!**!/!*", {read: false}).pipe(
     gulpRimraf({
     force: false    //false means not outside of current working dir
     })
     )*/
})

function preProcessIndex(isForProduction:boolean) {
    return gulp.src(_indexHtmlPath).pipe(
        preprocess({
            context: {
                //production: null    //does not care of the value, just to define the element
                production: isForProduction,    //does not care of the value, just to define the element
                PLIGOR_DOT_COM_APP_VERSION: PLIGOR_DOT_COM_APP_VERSION
            }
        })
    ).pipe(
        rename({
            basename: "index"
        })
    ).pipe(
        gulp.dest(isForProduction ? dirs.dist : dirs.src)
    )
}

gulp.task(tasks.indexToProduction, () => {
    return preProcessIndex(true)
})

gulp.task(tasks.copyallrest, () => {
    var not = "!"

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

gulp.task(tasks.indexToDevelopment, () => {
    return preProcessIndex(false)
})

function compileTypescripts(production:boolean) {
    var tsResult = gulp.src(dirs.src + "/ts/**/*.ts")
        .pipe(ts({
            removeComments: production, /*production ? true : false*/
            noImplicitAny: true,    //Warn on expressions and declarations with an implied 'any' type.
            out: "typescripts.js"
        }));

    return tsResult.js.pipe(gulp.dest(dirs.src + "/js"));
}

gulp.task(tasks.compileTSdev, () => {
    return compileTypescripts(false)
})

gulp.task(tasks.compileTSprod, () => {
    return compileTypescripts(true)
})

var jsAlreadyMin = [
    //there is nothing on the namespace that we could check, therefore we have to include them ourselves
    dirs.src + "/bower_components/ScrollMagic/scrollmagic/minified/plugins/animation.gsap.min.js",
    dirs.src + "/bower_components/simple-text-rotator/jquery.simple-text-rotator.min.js",

    //we cannot find an up to date CDN
    dirs.src + "/bower_components/waypoints/lib/jquery.waypoints.min.js"
]

var jsToBeMinified = [
    dirs.src + "/js/vendor/radio.shim.js",
    dirs.src + "/js/typescripts.js"
]

gulp.task(tasks.jsOneFileDev, () => {
    return gulp.src(
        jsAlreadyMin.concat(jsToBeMinified).concat([
            dirs.src + "/js/plugins.js" //useful only for development
        ])
    ).pipe(
        concat("main.js")
    ).pipe(
        gulp.dest(dirs.src + "/js")
    )
})

gulp.task(tasks.jsOneFileProd, () => {
    var alreadyMinifiedStream = gulp.src(jsAlreadyMin).pipe(
        concat("alreadyMinified.js")
    )

    var nowMinifiedStream = gulp.src(
        jsToBeMinified
    ).pipe(
        concat("toBeMinified.js")
    ).pipe(
        uglify({
            //mangle: false   //skip mangling names
        })
    )


    /*return streamqueue(
     alreadyMinifiedStream,
     nowMinifiedStream
     )*/

    //return eventStream.merge([alreadyMinifiedStream, nowMinifiedStream])  //event stream is unreliable
    eventStream.merge(
        alreadyMinifiedStream,
        nowMinifiedStream
    ).pipe(
        gulpOrder([
            "alreadyMinified.js",
            "toBeMinified.js",
        ])
    ).pipe(
        concat("main.js")
    ).pipe(
        gulp.dest(dirs.dist + "/js")
    )
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

gulp.task("default", function (done) {
    runSequence(
        tasks.compileTSdev,
        [tasks.cssOneFileDev, tasks.jsOneFileDev, tasks.indexToDevelopment],   //run in parallel
        done
    );
});

gulp.task("dist", function (done) {
    runSequence(
        tasks.cleanDist,   //clean first
        tasks.compileTSprod,

        tasks.cssOneFileProd,
        tasks.indexToProduction,
        tasks.copyallrest,
        tasks.jsOneFileProd,
        //[, , , ],   //run in parallel
        done
    );
});

//all run in parallel which is unwanted
//gulp.task("taskname", ["clean_dist", "compile_typescripts", "index_to_production", ""])

require("./extra_tasks.js")
