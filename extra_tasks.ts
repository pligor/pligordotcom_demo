/**
 * Created by pligor on 6/21/15.
 */

///<reference path="./declarations/node.d.ts"/>

var gulp = require("gulp")
//var plugins = require('gulp-load-plugins')(); // Load all gulp plugins
// automatically and attach
// them to the `plugins` object

var eventStream = require('event-stream') //no orderding
var gulpOrder = require("gulp-order")
var concat = require("gulp-concat") //https://www.npmjs.com/package/gulp-concat
var tap = require('gulp-tap')   //https://www.npmjs.com/package/gulp-tap
var ts = require('gulp-typescript') //https://www.npmjs.com/package/gulp-typescript

var pkg = require('./package.json')
var dirs = pkg['h5bp-configs'].directories //h5bp means html5 boiler plate

/*//var stream1 = gulp.src("hello.txt")
 var stream1 = gulp.src("").pipe(tap((file) => {
 file.contents = new Buffer("some string here")
 }))

 var stream2 = gulp.src("world.txt")

 return eventStream.merge(stream1, stream2).pipe(
 gulpOrder([
 "world.txt",
 "hello.txt"
 ])
 ).pipe(
 concat("all.txt")
 ).pipe(
 gulp.dest("./")
 )*/

gulp.task("compilePVcalculationsTSmodule", () => {

    var tsResult = gulp.src([
        dirs.src + "/ts/myts/array.ts",
        dirs.src + "/ts/myts/object.ts",
        dirs.src + "/ts/pvcalculations/**/*.ts",
    ]).pipe(
        ts({
            removeComments: false,
            noImplicitAny: true,    //Warn on expressions and declarations with an implied 'any' type.
            out: "pvcalcs.js"
        })
    )

    return tsResult.js.pipe(gulp.dest("./"));
})
