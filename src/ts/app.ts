/**
 * Created by pligor on 4/17/15.
 */

//for external module way but require requirejs library and methodology to work
//import flower = Flower; //this is not a real import, it is only an alias
//import flowers = Flowers;
//import Flower = require("./models/singleFlowerModel")

/// <reference path="../../declarations/marionette.d.ts" />
/// <reference path="./typescript.ts" />

/// <reference path="./routes/router.ts" />

/// <reference path="./layouts/HeaderLayout.ts" />
/// <reference path="./layouts/MainLayout.ts" />

/// <reference path="./models/MainModel.ts" />
/// <reference path="./itemviews/LogoItemView.ts" />

/// <reference path="./collectionviews/MenuCollectionView.ts" />

class MyMarionetteApp extends Marionette.Application {
    //flowerStaticDataModule:FlowerStaticDataModule = null;

    constructor(/*modules: any[]*/) {
        super()

        //this.someModule = someModule;
    }

    layoutView:Pligor.MainLayout = null

    mainModel:Pligor.MainModel = null

    //theRouter: Marionette.AppRouter
}

var App = new MyMarionetteApp(/*{
 channelName: 'pligorAppChannel' //can be configured like that, but channel name = 'global' is also fine
 }*/)

//all initializers called with App.start()
/**
 * deprecated
 */
/*App.addInitializer(function (options:any) {
 //...
 })*/

//these are not triggered, I do not know why
/*App.on("initialize:before", function (options:any) {
 options.anotherThing = true
 dis("initialization starting")
 })

 App.on("initialize:after", function (options:any) {
 dis("initialization finished")
 })

 App.on("initialize", function (options:any) {
 dis("initialization in general")
 })*/

App.on("start", (options: any) => {
    App.mainModel = new Pligor.MainModel()

    App.layoutView = new Pligor.MainLayout({model: App.mainModel})

    App.layoutView.attachMainLayoutToTheDOM()


    //TODO also render the regions:
    //App.layoutView.header.show(new Pligor.DummyItemView()); //Menu is a region #menu //http://marionettejs.com/docs/v2.4.1/marionette.region.html

    var myRouter = new Pligor.MyRouter() //constructor handles everything

// If the server has already rendered the entire page, and you don't want the initial route to trigger when starting History, pass silent: true
    var started = Backbone.history.start({
        pushState: false    //http://stackoverflow.com/questions/12081894/backbone-router-navigate-and-anchor-href
        //to trigger actions by clicking if push state is set to true
        //false means we are using the old hash methods

        //root: "/my/root/path"
    });

    console.log("if this is false then you need to set routes before the constructor is being called: " + started)


    /*var waypoints = $("section#jumbotron").waypoint({
        handler: function(direction) {  //direction is either "up" or "down" (and it means the way the user is scrolling)
            //console.log(direction);

            if(direction === "up") {
                //console.log("we have a hit baby");
                myRouter.navigate("", {trigger: true});
            } else if(direction === "down") {
                //nop for the time being
            } else {
                throw "unexpected direction";
            }
        }
    })*/
})

App.start({
    //pass the options here
})

//call this as many times as you like. If you specify the same name the last call wins
/*App.addRegions({
 mainRegion: "#allFlowers"
 })*/
