/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */

!function(e,n){"function"==typeof define&&define.amd?define(["ScrollMagic","TweenMax","TimelineMax"],n):"object"==typeof exports?(require("gsap"),n(require("scrollmagic"),TweenMax,TimelineMax)):n(e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic,e.TweenMax||e.TweenLite,e.TimelineMax||e.TimelineLite)}(this,function(e,n,r){"use strict";e.Scene.addOption("tweenChanges",!1,function(e){return!!e}),e.Scene.extend(function(){var e,t=this;t.on("progress.plugin_gsap",function(){i()}),t.on("destroy.plugin_gsap",function(e){t.removeTween(e.reset)});var i=function(){if(e){var n=t.progress(),r=t.state();e.repeat&&-1===e.repeat()?"DURING"===r&&e.paused()?e.play():"DURING"===r||e.paused()||e.pause():n!=e.progress()&&(0===t.duration()?n>0?e.play():e.reverse():t.tweenChanges()&&e.tweenTo?e.tweenTo(n*e.duration()):e.progress(n).pause())}};t.setTween=function(o,a,s){var u;arguments.length>1&&(arguments.length<3&&(s=a,a=1),o=n.to(o,a,s));try{u=r?new r({smoothChildTiming:!0}).add(o):o,u.pause()}catch(p){return t}return e&&t.removeTween(),e=u,o.repeat&&-1===o.repeat()&&(e.repeat(-1),e.yoyo(o.yoyo())),i(),t},t.removeTween=function(n){return e&&(n&&e.progress(0).pause(),e.kill(),e=void 0),t}})});
/*! simple text locator */
!function(e){var t={animation:"dissolve",separator:",",speed:2e3};e.fx.step.textShadowBlur=function(t){e(t.elem).prop("textShadowBlur",t.now).css({textShadow:"0 0 "+Math.floor(t.now)+"px black"})};e.fn.textrotator=function(n){var r=e.extend({},t,n);return this.each(function(){var t=e(this);var n=[];e.each(t.text().split(r.separator),function(e,t){n.push(t)});t.text(n[0]);var i=function(){switch(r.animation){case"dissolve":t.animate({textShadowBlur:20,opacity:0},500,function(){s=e.inArray(t.text(),n);if(s+1==n.length)s=-1;t.text(n[s+1]).animate({textShadowBlur:0,opacity:1},500)});break;case"flip":if(t.find(".back").length>0){t.html(t.find(".back").html())}var i=t.text();var s=e.inArray(i,n);if(s+1==n.length)s=-1;t.html("");e("<span class='front'>"+i+"</span>").appendTo(t);e("<span class='back'>"+n[s+1]+"</span>").appendTo(t);t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip").show().css({"-webkit-transform":" rotateY(-180deg)","-moz-transform":" rotateY(-180deg)","-o-transform":" rotateY(-180deg)",transform:" rotateY(-180deg)"});break;case"flipUp":if(t.find(".back").length>0){t.html(t.find(".back").html())}var i=t.text();var s=e.inArray(i,n);if(s+1==n.length)s=-1;t.html("");e("<span class='front'>"+i+"</span>").appendTo(t);e("<span class='back'>"+n[s+1]+"</span>").appendTo(t);t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip up").show().css({"-webkit-transform":" rotateX(-180deg)","-moz-transform":" rotateX(-180deg)","-o-transform":" rotateX(-180deg)",transform:" rotateX(-180deg)"});break;case"flipCube":if(t.find(".back").length>0){t.html(t.find(".back").html())}var i=t.text();var s=e.inArray(i,n);if(s+1==n.length)s=-1;t.html("");e("<span class='front'>"+i+"</span>").appendTo(t);e("<span class='back'>"+n[s+1]+"</span>").appendTo(t);t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube").show().css({"-webkit-transform":" rotateY(180deg)","-moz-transform":" rotateY(180deg)","-o-transform":" rotateY(180deg)",transform:" rotateY(180deg)"});break;case"flipCubeUp":if(t.find(".back").length>0){t.html(t.find(".back").html())}var i=t.text();var s=e.inArray(i,n);if(s+1==n.length)s=-1;t.html("");e("<span class='front'>"+i+"</span>").appendTo(t);e("<span class='back'>"+n[s+1]+"</span>").appendTo(t);t.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip cube up").show().css({"-webkit-transform":" rotateX(180deg)","-moz-transform":" rotateX(180deg)","-o-transform":" rotateX(180deg)",transform:" rotateX(180deg)"});break;case"spin":if(t.find(".rotating").length>0){t.html(t.find(".rotating").html())}s=e.inArray(t.text(),n);if(s+1==n.length)s=-1;t.wrapInner("<span class='rotating spin' />").find(".rotating").hide().text(n[s+1]).show().css({"-webkit-transform":" rotate(0) scale(1)","-moz-transform":"rotate(0) scale(1)","-o-transform":"rotate(0) scale(1)",transform:"rotate(0) scale(1)"});break;case"fade":t.fadeOut(r.speed,function(){s=e.inArray(t.text(),n);if(s+1==n.length)s=-1;t.text(n[s+1]).fadeIn(r.speed)});break}};setInterval(i,r.speed)})}}(window.jQuery)

/*!
Waypoints - 3.1.1
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var n in t){var r=t[n];for(var s in this.waypoints[n]){var a,l,h,p,u,c=this.waypoints[n][s],d=c.options.offset,f=c.triggerPoint,w=0,y=null==f;c.element!==c.element.window&&(w=c.adapter.offset()[r.offsetProp]),"function"==typeof d?d=d.apply(c):"string"==typeof d&&(d=parseFloat(d),c.options.offset.indexOf("%")>-1&&(d=Math.ceil(r.contextDimension*d/100))),a=r.contextScroll-r.contextOffset,c.triggerPoint=w+a-d,l=f<r.oldScroll,h=c.triggerPoint>=r.oldScroll,p=l&&h,u=!l&&!h,!y&&p?(c.queueTrigger(r.backward),o[c.group.id]=c.group):!y&&u?(c.queueTrigger(r.forward),o[c.group.id]=c.group):y&&r.oldScroll>=c.triggerPoint&&(c.queueTrigger(r.forward),o[c.group.id]=c.group)}}for(var g in o)o[g].flushTriggers();return this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['backbone.marionette', 'backbone.radio', '../../bower_components/underscore/underscore'], function(Marionette, Radio, _) {
      return factory(Marionette, Radio, _);
    });
  }
  else if (typeof exports !== 'undefined') {
    var Marionette = require('backbone.marionette');
    var Radio = require('backbone.radio');
    var _ = require('underscore');
    module.exports = factory(Marionette, Radio, _);
  }
  else {
    factory(root.Backbone.Marionette, root.Backbone.Radio, root._);
  }
}(this, function(Marionette, Radio, _) {
  'use strict';

  Marionette.Application.prototype._initChannel = function () {
    this.channelName = _.result(this, 'channelName') || 'global';
    this.channel = _.result(this, 'channel') || Radio.channel(this.channelName);
  }
}));

/**
 * Created by pligor on 4/19/15.
 */
/**
 *
 * @param derivedCtor this must be a class
 * @param baseCtors WATCH OUT what you pass as a parameter here, we accept only classes
 */
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
function assert(booleanExpression, str) {
    if (booleanExpression) {
    }
    else {
        var prefix = "assertion failed";
        throw (str === undefined ? prefix : (prefix + ": " + str));
    }
}
/**
 * Created by pligor on 5/20/15.
 */
var Pligor;
(function (Pligor) {
    var RadioEvent = (function () {
        function RadioEvent() {
        }
        return RadioEvent;
    })();
    function RadioEvents() {
        return {
            routerChannel: {
                getName: function () {
                    return "routerChannel";
                },
                majorSectionWaypoint_crossed_50percent_viewport: "majorSectionWaypoint_crossed_50percent_viewport",
                fekPopupShow: "fekPopupShow"
            }
        };
    }
    Pligor.RadioEvents = RadioEvents;
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 4/17/15.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="../../../declarations/backbone.d.ts" />
/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/jquery.scrollTo.d.ts" />
/// <reference path="../../../declarations/backbone.radio.d.ts" />
/// <reference path="../radio/RadioEvents.ts" />
var Pligor;
(function (Pligor) {
    //TODO use marionette router instead
    var MyRouter = (function (_super) {
        __extends(MyRouter, _super);
        function MyRouter(options) {
            var _this = this;
            //if you put super on top of this.routes definition then it is not going to work
            //or maybe you could try setting routes as a function/method
            this.routes = {
                "": "welcoming",
                // and you don't want the initial route to trigger when starting History, pass silent: true.
                "how_it_works": "how_it_worksAction",
                "calculations": "calculationsAction",
                "portfolio": "portfolioAction",
                "testimonials": "testimonialsAction",
                "contact": "contactAction",
                "fekpopup": "fekpopupAction"
            };
            _super.call(this, options);
            var curChannel = Pligor.RadioEvents().routerChannel;
            Backbone.Radio.channel(curChannel.getName()).on(curChannel.majorSectionWaypoint_crossed_50percent_viewport, function () {
                //console.log("something amazing happened")
                _this.navigate(MyRouter.dummyRoute, { trigger: false, replace: true });
            });
        }
        MyRouter.prototype.fekpopupAction = function () {
            //have the announcement layout render its child region
            var curChannel = Pligor.RadioEvents().routerChannel;
            Backbone.Radio.channel(curChannel.getName()).command(curChannel.fekPopupShow);
        };
        /**
         * no data are passed inside
         */
        MyRouter.prototype.welcoming = function () {
            //console.log("welcoming route")
        };
        //TODO make the msec parametric according to the offset of each element from the top of the screen
        //this works well if the menu is at the top of the scroll always
        //if the menu is fixed then it must be more dynamic where it is calculated each time
        MyRouter.prototype.how_it_worksAction = function () {
            //$("#copy").html("Heilroom Roses are great Mother's Day flowers")
            //var jqueryObj: any = $('#how_it_works2');
            //jqueryObj.smoothScroll();
            //TODO include already found typed definitions
            $.scrollTo("#how_it_works_section", 250, {
                onAfter: function () {
                    //console.log("it has been completed")
                    //this.navigate("#calculations")
                    /*, {trigger: true, replace: true}*/
                }
            });
            //console.log("you are executing the custom hash action already")
            //console.log(jqueryObj);
        };
        MyRouter.prototype.calculationsAction = function () {
            $.scrollTo("#calculations_section", 500);
        };
        MyRouter.prototype.portfolioAction = function () {
            $.scrollTo("#portfolio_section", 750);
        };
        MyRouter.prototype.testimonialsAction = function () {
            $.scrollTo("#testimonials_section", 1000);
        };
        MyRouter.prototype.contactAction = function () {
            $.scrollTo("#contact_section", 1250);
        };
        MyRouter.dummyRoute = "#/";
        return MyRouter;
    })(Backbone.Router);
    Pligor.MyRouter = MyRouter;
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 4/17/15.
 */
/// <reference path="../../../declarations/backbone.d.ts" />
//import backbone = require("backbone") //we are NOT using external modules for now to avoid require.js
//declare var $: any; //in order for the file to compile successfully unless you include the declaration of jquery
/*provideLogoDataStatically() {
    //App.layoutView.getRegion("headerRegion")  //for dynamic situations
    //var headerLayout:Pligor.HeaderLayout = App.layoutView.headerRegion.currentView    //we are already in here
    var headerLayout:Pligor.HeaderLayout = this.headerRegion.currentView;
    var logoItemView:Pligor.LogoItemView = headerLayout.logoRegion.currentView
    var curModel = logoItemView.model;
    /!*curModel.fetch({
     success: function (model, response, options) {
     console.log("log data fetched ok")
     }
     })*!/
    curModel.set({
        logoImage: "img/pligoropoulos_logo.png",
        logoTitle: "pligoropoulos",
        logoSubtitle: "ενεργειακες λυσεις"
    })
}*/
var Pligor;
(function (Pligor) {
    var LogoModel = (function (_super) {
        __extends(LogoModel, _super);
        function LogoModel(attributes, options) {
            _super.call(this, attributes, options);
            this.urlRoot = "http://localhost:3000/logos"; //this.url will be http://localhost:3000/logos/<the model id>
        }
        LogoModel.prototype.defaults = function () {
            //return super.defaults();
            return {
                logoImage: "img/pligoropoulos_logo.png",
                logoTitle: "pligoropoulos",
                logoSubtitle: "ενεργειακες λυσεις"
            };
        };
        LogoModel.prototype.initialize = function (attributes, options) {
            _super.prototype.initialize.call(this, attributes, options);
            //console.log("A model instance named " + this.get("name") + "has been created and it costs " + this.get("price"))
            /*this.on("change:price", function () {    //:price makes it specific to a certain attribute
             console.log(
             "The price for the " + this.get("name") + " model just changed to $" + this.get("price") + " dollars"
             )
             })*/
        };
        return LogoModel;
    })(Backbone.Model);
    Pligor.LogoModel = LogoModel;
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 4/17/15.
 */
/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/underscore.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../models/LogoModel.ts" />
var Pligor;
(function (Pligor) {
    //ViewOptions
    var LogoItemView = (function (_super) {
        __extends(LogoItemView, _super);
        //if you have it as attributes they are not working
        /*this.tagName = "tr"
         this.className = "noname"
         this.id = "malakas"*/
        //you need to set them as functions instead
        /*
         tagName() {
         return "li"
         }
         */
        //TODO check if there is an excessive unnecessary div and get rid of it
        function LogoItemView(options) {
            _super.call(this, options);
            //constructor(options?:Backbone.ViewOptions<T>) { //we just choose to have it non optional for this class
            //constructor(options:Backbone.ViewOptions<T>) {
            //or even better we choose to pass the options directly in here
            this.template = "#logotemplate"; //http://marionettejs.com/docs/v2.4.1/marionette.itemview.html
            //this.template = _.template($("#flowerElement").html())   //1) grab template
            /*this.model.on("change", () => {
                this.render()               //maybe we should remove this in the future, logo is not going to change
            }) //"change:price" if price is certain attribute*/
        }
        return LogoItemView;
    })(Marionette.ItemView);
    Pligor.LogoItemView = LogoItemView;
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 4/17/15.
 */
/// <reference path="../../../declarations/backbone.d.ts" />
//import backbone = require("backbone") //we are NOT using external modules for now to avoid require.js
//declare var $: any; //in order for the file to compile successfully unless you include the declaration of jquery
var Pligor;
(function (Pligor) {
    var MenuItemModel = (function (_super) {
        __extends(MenuItemModel, _super);
        function MenuItemModel(attributes, options) {
            _super.call(this, attributes, options);
            this.urlRoot = "http://localhost:3000/logos"; //this.url will be http://localhost:3000/logos/<the model id>
        }
        MenuItemModel.prototype.defaults = function () {
            //return super.defaults();
            return {
                menuItemTitle: "menu item title",
                menuItemSubtitle: "menu item subtitle",
                menuItemTarget: "#"
            };
        };
        MenuItemModel.prototype.initialize = function (attributes, options) {
            _super.prototype.initialize.call(this, attributes, options);
            //console.log("A model instance named " + this.get("name") + "has been created and it costs " + this.get("price"))
            /*this.on("change:price", function () {    //:price makes it specific to a certain attribute
             console.log(
             "The price for the " + this.get("name") + " model just changed to $" + this.get("price") + " dollars"
             )
             })*/
        };
        return MenuItemModel;
    })(Backbone.Model);
    Pligor.MenuItemModel = MenuItemModel;
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 4/17/15.
 */
/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/underscore.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../models/MenuItemModel.ts" />
var Pligor;
(function (Pligor) {
    var MenuItemView = (function (_super) {
        __extends(MenuItemView, _super);
        function MenuItemView(options) {
            _super.call(this, options);
            this.template = "#menuitem_template"; //http://marionettejs.com/docs/v2.4.1/marionette.itemview.html
            //this.template = _.template($("#flowerElement").html())   //1) grab template
            /*this.model.on("change", () => {
             this.render()
             })*/
        }
        //if you have it as an attribute is not working
        MenuItemView.prototype.tagName = function () {
            return "li";
        };
        return MenuItemView;
    })(Marionette.ItemView);
    Pligor.MenuItemView = MenuItemView;
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 5/4/15.
 */
/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../models/MenuItemModel.ts" />
/// <reference path="../itemviews/MenuItemView.ts" />
var Pligor;
(function (Pligor) {
    var MenuCollectionView = (function (_super) {
        __extends(MenuCollectionView, _super);
        function MenuCollectionView(options) {
            _super.call(this, options);
            this.childView = Pligor.MenuItemView;
        }
        //if you have it as an attribute is not working
        MenuCollectionView.prototype.tagName = function () {
            return "ul";
        };
        MenuCollectionView.prototype.className = function () {
            return "mainmenu";
        };
        return MenuCollectionView;
    })(Marionette.CollectionView);
    Pligor.MenuCollectionView = MenuCollectionView;
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 4/17/15.
 */
/// <reference path="../../../declarations/backbone.d.ts" />
/// <reference path="../models/MenuItemModel.ts" />
//merging modules by using same name
var Pligor;
(function (Pligor) {
    var MenuItemCollection = (function (_super) {
        __extends(MenuItemCollection, _super);
        //I make the models as required (bootstrapping suggested by backbone) but I will leave them as they are
        function MenuItemCollection(models, options) {
            _super.call(this, models, options);
            this.model = Pligor.MenuItemModel;
            this.url = "http://localhost:3000/menuitems";
        }
        return MenuItemCollection;
    })(Backbone.Collection);
    Pligor.MenuItemCollection = MenuItemCollection;
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 4/20/15.
 */
/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../models/LogoModel.ts" />
/// <reference path="../itemviews/LogoItemView.ts" />
/// <reference path="../collectionviews/MenuCollectionView.ts" />
/// <reference path="../collections/MenuItemCollection.ts" />
var Pligor;
(function (Pligor) {
    /**
     * We cover everything in this file from here:
     * http://marionettejs.com/docs/v2.4.1/marionette.layoutview.html#specifying-regions-as-a-function
     */
    var HeaderLayout = (function (_super) {
        __extends(HeaderLayout, _super);
        function HeaderLayout(options) {
            _super.call(this, options);
            this.curLogoId = 1;
            this.template = "#headertemplate";
            //Avoid Re-Rendering The Entire LayoutView
            /*Instead, if you are binding the
             layoutView's template to a model and need to update portions of the layoutView,
             you should listen to the model's "change" events and only update the
             necessary DOM elements.
             WHICH MEANS WE SHOULD DO jQUERY*/
            /*this.model.on("change:breadcrumb", (curModel:Pligor.MainModel) => {
                this.$el.find(".breadcrumb_class").html(curModel.get("breadcrumb"))
            })*/
            this.model = new Backbone.Model(); //dummy model, not useful anywhere right now, we do not have data in the layout
        }
        //destroyImmediate = false // This option removes the layoutView from the DOM before destroying the children
        // preventing repaints as each option is removed. However, it makes it difficult to do close animations
        // for a child view (false by default)
        /*typedRegions(options) {
            var regs = new MyRegionsCollection

            regs.regions.push({header: "#header"})
        }*/
        /**
         * Any region can be removed, whether it was defined in the regions attribute of the region definition, or added later.
         * @param options
         * @returns {{header: string, mainRegion: string, footer: string}}
         */
        HeaderLayout.prototype.regions = function (options) {
            return {
                /*  //sample of how you can have a custom region class for each region!
                menu: {
                 selector: "#menu",
                 regionClass: CustomRegionClassReference
                 }*/
                logoRegion: "div.logo_wrapper",
                //(not exactly the same though because body > header is not working)
                menuRegion: "div.mainmenu_wrapper"
            };
        };
        //in order to change the model of the main layout due to a child event (any depth child) then we need to propagate
        HeaderLayout.prototype.childEvents = function () {
            return {};
        };
        HeaderLayout.prototype.events = function () {
            //return super.events();
            return {};
        };
        /**
         * As a rule of thumb, most of the time you'll want to render any nested views in the onBeforeRender callback.
         */
        HeaderLayout.prototype.onBeforeRender = function () {
            //super.onBeforeRender();
            //this.showChildView('footer', new FooterView());   //footer is the region name
        };
        HeaderLayout.prototype.onRender = function () {
            //super.onRender();
            //console.log("we are getting rendered");
            this.logoRegion.show(new Pligor.LogoItemView({ model: new Pligor.LogoModel({ id: this.curLogoId }) }));
            this.menuRegion.show(new Pligor.MenuCollectionView({ collection: new Pligor.MenuItemCollection([
                {
                    "id": 1,
                    "menuItemTitle": "ενεργειακος συμψηφισμος (net metering)",
                    "menuItemSubtitle": "τι είναι και πως λειτουργεί",
                    "menuItemTarget": "how_it_works"
                },
                {
                    "id": 2,
                    "menuItemTitle": "υπολογισε κερδος &amp; κοστος",
                    "menuItemSubtitle": "δες γιατί συμφέρει",
                    "menuItemTarget": "calculations"
                },
                {
                    "id": 3,
                    "menuItemTitle": "εργα / portfolio",
                    "menuItemSubtitle": "από το 1982",
                    "menuItemTarget": "portfolio"
                },
                {
                    "id": 4,
                    "menuItemTitle": "τι λενε οι πελατες",
                    "menuItemSubtitle": "γνώρισε τους",
                    "menuItemTarget": "testimonials"
                },
                {
                    "id": 5,
                    "menuItemTitle": "επικοινωνια",
                    "menuItemSubtitle": "τηλεφωνο / email",
                    "menuItemTarget": "contact"
                }
            ].map(function (obj, index, arr) { return new Pligor.MenuItemModel(obj); })) }));
        };
        return HeaderLayout;
    })(Marionette.LayoutView);
    Pligor.HeaderLayout = HeaderLayout;
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 4/20/15.
 */
/// <reference path="../../../declarations/backbone.d.ts" />
var Pligor;
(function (Pligor) {
    var MainModel = (function (_super) {
        __extends(MainModel, _super);
        function MainModel() {
            _super.apply(this, arguments);
        }
        MainModel.prototype.defaults = function () {
            //return super.defaults();  //compile error
            return {};
        };
        MainModel.prototype.initialize = function (attributes, options) {
            _super.prototype.initialize.call(this, attributes, options);
            //console.log("A model instance named " + this.get("name") + "has been created and it costs " + this.get("price"))
        };
        return MainModel;
    })(Backbone.Model);
    Pligor.MainModel = MainModel;
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 5/24/15.
 */
/// <reference path="../typescript.ts" />
var Size2D = (function () {
    //private originalWidth: number
    //private originalHeight: number
    function Size2D(width, height /*,
         private originalWidth?: number, private originalHeight?: number*/) {
        //this.originalWidth = width
        //this.originalHeight = height
        this.width = width;
        this.height = height;
        this.width = Math.round(width);
        this.height = Math.round(height);
        this.width = this.width < 1 ? 1 : this.width;
        this.height = this.height < 1 ? 1 : this.height;
    }
    Size2D.prototype.toString = function () {
        return this.width + ", " + this.height;
    };
    Size2D.prototype.isFilling = function (that) {
        return this.width >= that.width && this.height >= that.height;
    };
    Size2D.prototype.fillWithTolerance = function (targetSize, tolerance) {
        if (this.isFilling(targetSize)) {
            var widthDistance = this.width - targetSize.width;
            var heightDistance = this.height - targetSize.height;
            var minDistance = Math.min(widthDistance, heightDistance);
            if (minDistance >= tolerance) {
                return this.fill(targetSize);
            }
            else {
                return this;
            }
        }
        else {
            var filled = this.fill(targetSize);
            var widthDistance = filled.width - targetSize.width;
            var heightDistance = filled.height - targetSize.height;
            if (widthDistance <= heightDistance) {
                return filled.increaseWidthKeepingRatio(tolerance);
            }
            else {
                return filled.increaseHeightKeepingRatio(tolerance);
            }
        }
    };
    Size2D.prototype.increaseWidthKeepingRatio = function (offset) {
        assert(offset >= 0);
        var newWidth = this.width + offset;
        var newHeight = newWidth / this.getWidthToHeightRatio();
        return new Size2D(newWidth, newHeight);
    };
    Size2D.prototype.increaseHeightKeepingRatio = function (offset) {
        assert(offset >= 0);
        var newHeight = this.height + offset;
        var newWidth = newHeight * this.getWidthToHeightRatio();
        return new Size2D(newWidth, newHeight);
    };
    Size2D.prototype.increaseSmallerSizeKeepingRatio = function (offset) {
        return this.width <= this.height ? this.increaseWidthKeepingRatio(offset) : this.increaseHeightKeepingRatio(offset);
    };
    /**
     * Maintains Aspect ratio
     */
    Size2D.prototype.fill = function (targetSize) {
        var widthRatio = this.width / targetSize.width;
        var heightRatio = this.height / targetSize.height;
        var minRatio = Math.min(widthRatio, heightRatio);
        return new Size2D(this.width / minRatio, this.height / minRatio);
        /*, this.originalWidth, this.originalHeight*/
    };
    Size2D.prototype.getWidthToHeightRatio = function () {
        return this.width / this.height;
    };
    Size2D.prototype.offsetWidth = function (offset) {
        return new Size2D(this.width + offset, this.height);
    };
    Size2D.prototype.offsetHeight = function (offset) {
        return new Size2D(this.width, this.height + offset);
    };
    Size2D.prototype.increaseWidth = function (offset) {
        assert(offset >= 0);
        return this.offsetWidth(offset);
    };
    Size2D.prototype.increaseHeight = function (offset) {
        assert(offset >= 0);
        return this.offsetHeight(offset);
    };
    Size2D.prototype.reduceWidth = function (offset) {
        assert(offset >= 0);
        return this.offsetWidth(-offset);
    };
    Size2D.prototype.reduceHeight = function (offset) {
        assert(offset >= 0);
        return this.offsetHeight(-offset);
    };
    Size2D.prototype.isEqual = function (that) {
        return this.width == that.width && this.height == that.height;
    };
    return Size2D;
})();
var TestSize2D = (function () {
    function TestSize2D() {
    }
    TestSize2D.prototype.testFillWithTolerance = function () {
        var curSize = new Size2D(1920, 1080);
        var tolerance = 200;
        var largerHeight = new Size2D(1800, 3500);
        assert(largerHeight.height + tolerance == curSize.fillWithTolerance(largerHeight, tolerance).height);
        var largerWidth = new Size2D(2000, 500);
        //assert( largerHeight.height + 200 == curSize.fillWithTolerance(largerHeight, 200).height )
        assert(largerWidth.width + tolerance == curSize.fillWithTolerance(largerWidth, tolerance).width);
        var notSmallEnough = new Size2D(1800, 500);
        assert(curSize.fillWithTolerance(notSmallEnough, tolerance).isEqual(curSize));
        var smallEnough = new Size2D(1500, 500);
        assert(curSize.fillWithTolerance(smallEnough, tolerance).width == smallEnough.width); //1500 x kati sto swsto ratio
        //.isEqual(curSize)
        console.log("test fill with tolerance is ok");
    };
    TestSize2D.prototype.testFill = function () {
        var curSize = new Size2D(1920, 1080);
        var smallerWidth = curSize.reduceWidth(1920 / 2);
        assert(curSize.fill(smallerWidth).isEqual(curSize), "if same height but larger must already fill the target");
        var smallerHeight = curSize.reduceHeight(1080 / 2);
        assert(curSize.fill(smallerHeight).isEqual(curSize), "if same width but larger must already fill the target");
        var smallerHeightAndWidth = curSize.reduceWidth(1920 / 2).reduceHeight(1080 / 2);
        assert(curSize.fill(smallerHeightAndWidth).isEqual(smallerHeightAndWidth), "same ratio must be reduced proportionally");
        var smallerWidthAndEvenSmallerHeight = curSize.reduceWidth(1920 / 2).reduceHeight(1080 * 2 / 3);
        assert(smallerWidthAndEvenSmallerHeight.width == curSize.fill(smallerWidthAndEvenSmallerHeight).width);
        assert(smallerWidthAndEvenSmallerHeight.height < curSize.fill(smallerWidthAndEvenSmallerHeight).height);
        var smallerHeightAndEvenSmallerWidth = curSize.reduceWidth(1920 * 4 / 5).reduceHeight(1080 / 5);
        assert(smallerHeightAndEvenSmallerWidth.height == curSize.fill(smallerHeightAndEvenSmallerWidth).height);
        assert(smallerHeightAndEvenSmallerWidth.width < curSize.fill(smallerHeightAndEvenSmallerWidth).width);
        var largerHeight = curSize.increaseHeight(200);
        assert(curSize.fill(largerHeight).height === largerHeight.height);
        assert(curSize.fill(largerHeight).width > largerHeight.width);
        var largerWidth = curSize.increaseWidth(200);
        assert(curSize.fill(largerWidth).width === largerWidth.width);
        assert(curSize.fill(largerWidth).height > largerWidth.height);
        var largerWidthAndHeight = curSize.increaseHeight(200).increaseWidth(200);
        assert(curSize.fill(largerWidthAndHeight).height === largerWidthAndHeight.height);
        assert(curSize.fill(largerWidthAndHeight).width > largerWidthAndHeight.width);
        //etc.
        console.log("test fill ok");
    };
    return TestSize2D;
})();
//new TestSize2D().testFill()
/**
 * Created by pligor on 5/14/15.
 */
/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
var ViewTraits;
(function (ViewTraits) {
    /**
     * include this in target classes: getUI: (arg) => JQuery;
     */
    var BindingUiElements = (function (_super) {
        __extends(BindingUiElements, _super);
        function BindingUiElements() {
            _super.apply(this, arguments);
        }
        BindingUiElements.prototype.getUI = function (arg) {
            return this.ui[arg];
        };
        /**
         * remember that this will REPLACE the initialize of the classes that is being applied upon
         * @param options
         */
        BindingUiElements.prototype.initialize = function (options) {
            _super.prototype.initialize.call(this, options);
            this.bindUIElements();
            this.onInitialize(options);
        };
        return BindingUiElements;
    })(Marionette.View);
    ViewTraits.BindingUiElements = BindingUiElements;
})(ViewTraits || (ViewTraits = {}));
/**
 * Created by pligor on 4/17/15.
 */
/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/underscore.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../../../declarations/videojs.d.ts" />
/// <reference path="../lib/Size2D.ts" />
/// <reference path="../traits/ViewTraits.ts" />
/// <reference path="../typescript.ts" />
var Pligor;
(function (Pligor) {
    var JumbotronBackgroundItemView = (function (_super) {
        __extends(JumbotronBackgroundItemView, _super);
        function JumbotronBackgroundItemView(options) {
            _super.call(this, options);
            this.curSize = new Size2D(1920, 1080); //TODO use a model to keep current size state
            this.template = "script#jumbotron_background_template"; //http://marionettejs.com/docs/v2.4.1/marionette.itemview.html
            this.player = null;
            /*this.model.on("change", () => {
             this.render()               //maybe we should remove this in the future, logo is not going to change
             }) //"change:price" if price is certain attribute*/
        }
        //if you have it as attributes they are not working
        /*this.tagName = "tr"
         this.className = "noname"
         this.id = "malakas"*/
        //you need to set them as functions instead
        /*
         tagName() {
         return "li"
         }
         */
        JumbotronBackgroundItemView.prototype.tagName = function () {
            //return super.tagName();
            return "div";
        };
        JumbotronBackgroundItemView.prototype.className = function () {
            //return super.className();
            return "jumbotron_background_container";
        };
        JumbotronBackgroundItemView.prototype.onInitialize = function (options) {
        };
        JumbotronBackgroundItemView.prototype.ui = function () {
            //return super.ui();
            return {
                //button: ".control_button",
                video: "#" + JumbotronBackgroundItemView.videoId
            };
        };
        /*onShow():void {
         //super.onShow();

         console.log("ok shown ??")
         var start = Date.now()

         $("#" + this.videoId).ready(() => {
         console.log("video is loaded in " + (Date.now() - start))
         })
         }*/
        JumbotronBackgroundItemView.prototype.onRender = function () {
            //super.onRender();
            var _this = this;
            var reBindElems = function () {
                _this.unbindUIElements();
                _this.bindUIElements();
            };
            var getVideo = function () {
                return _this.getUI("video");
            };
            var fillCurSize = function (wrapperSize) {
                _this.curSize = _this.curSize.fill(wrapperSize);
                return _this.curSize;
            };
            getVideo().ready(function () {
                _this.player = videojs(JumbotronBackgroundItemView.videoId, {}, function () {
                    //console.log("Good to go!");
                    reBindElems();
                    var video = getVideo();
                    var outerParent = video.parent().parent();
                    //console.log(outerParent)
                    var outerParentSize = new Size2D(outerParent.width(), outerParent.height());
                    //console.log(outerParentSize)
                    var newSize = fillCurSize(outerParentSize); //curSize = curSize.fill(wrapperSize)
                    //console.log(newSize)
                    this.width(newSize.width); //video.width(curSize.width)
                    this.height(newSize.height); //video.height(curSize.height)
                    //this.play(); // if you don't trust autoplay for some reason
                });
                $(window).resize(function () {
                    var wrapper = _this.getUI("video").parent().parent();
                    var wrapperSize = new Size2D(wrapper.width(), wrapper.height());
                    var oldSize = _this.curSize;
                    _this.curSize = _this.curSize.fillWithTolerance(wrapperSize, JumbotronBackgroundItemView.tolerancePixels);
                    //console.log(this)
                    if (oldSize.isEqual(_this.curSize)) {
                    }
                    else {
                        _this.player.width(_this.curSize.width);
                        _this.player.height(_this.curSize.height);
                    }
                    //console.log(newSize.isEqual(curSize))
                    //console.log(newSize.toString() + "\n" + curSize.toString())
                });
            });
        };
        //it is not defined inside declaration because you could make it more dynamic if you wanted
        //template:(...params:any[]) => string; //old backbone stuff
        JumbotronBackgroundItemView.prototype.events = function () {
            //return super.events();    //this is undefined, lets skip it
            return {
                //mouseclick: "addBgColor",
                "click .control_button": "onControlButton"
            };
        };
        JumbotronBackgroundItemView.prototype.onControlButton = function (event) {
            if (this.player === null) {
            }
            else {
                $(event.target).toggleClass("icon-pause-outline");
                if (this.player.paused()) {
                    this.player.play();
                }
                else {
                    this.player.pause();
                }
            }
        };
        //constructor(options?:Backbone.ViewOptions<T>) { //we just choose to have it non optional for this class
        //constructor(options:Backbone.ViewOptions<T>) {
        //or even better we choose to pass the options directly in here
        JumbotronBackgroundItemView.tolerancePixels = 200;
        JumbotronBackgroundItemView.videoId = "jumbotron_background_video";
        return JumbotronBackgroundItemView;
    })(Marionette.ItemView);
    Pligor.JumbotronBackgroundItemView = JumbotronBackgroundItemView;
    applyMixins(JumbotronBackgroundItemView, [ViewTraits.BindingUiElements]);
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 4/17/15.
 */
/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/underscore.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../itemviews/JumbotronBackgroundItemView.ts" />
/// <reference path="../traits/ViewTraits.ts" />
/// <reference path="../typescript.ts" />
var Pligor;
(function (Pligor) {
    //ViewOptions
    var JumbotronLayout = (function (_super) {
        __extends(JumbotronLayout, _super);
        function JumbotronLayout(options) {
            _super.call(this, options);
            this.template = "script#jumbotron_template";
            //NO INTERACTION HAVE BEEN CREATED FOR THE MODEL YET, SO THIS IS UNNECESSARY
            /*this.model.on("change", () => {
             this.render()               //maybe we should remove this in the future, logo is not going to change
             })*/
        }
        //if you have it as attributes they are not working
        /*this.tagName = "tr"
         this.className = "noname"
         this.id = "malakas"*/
        //you need to set them as functions instead
        /*
         tagName() {
         return "li"
         }
         */
        JumbotronLayout.prototype.tagName = function () {
            return "div";
        };
        JumbotronLayout.prototype.className = function () {
            return "jumbotron";
        };
        /**
         * Any region can be removed, whether it was defined in the regions attribute of the region definition, or added later.
         * @param options
         * @returns {{header: string, mainRegion: string, footer: string}}
         */
        JumbotronLayout.prototype.regions = function (options) {
            return {
                /*  //sample of how you can have a custom region class for each region!
                 menu: {
                 selector: "#menu",
                 regionClass: CustomRegionClassReference
                 }*/
                backgroundRegion: "div.jumbotron_background" //#header is unnecessary since it works like a jquery selector
            };
        };
        JumbotronLayout.prototype.ui = function () {
            //return super.ui();
            return {
                rotatingWord: ".what_we_do_title .rotate"
            };
        };
        JumbotronLayout.prototype.onInitialize = function (options) {
        };
        JumbotronLayout.prototype.onRender = function () {
            //super.onRender();
            this.backgroundRegion.show(new Pligor.JumbotronBackgroundItemView()); //empty/no model for the time being
            var rotatingWord = this.getUI("rotatingWord");
            rotatingWord.textrotator({
                animation: "dissolve",
                separator: ",",
                speed: 3000 // How many milliseconds until the next word show.
            });
        };
        //it is not defined inside declaration because you could make it more dynamic if you wanted
        //template:(...params:any[]) => string; //old backbone stuff
        JumbotronLayout.prototype.events = function () {
            //return super.events();    //this is undefined, lets skip it
            return {};
        };
        return JumbotronLayout;
    })(Marionette.LayoutView);
    Pligor.JumbotronLayout = JumbotronLayout;
    applyMixins(JumbotronLayout, [ViewTraits.BindingUiElements]);
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 4/17/15.
 */
/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/underscore.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
var Pligor;
(function (Pligor) {
    var FekPopupItemView = (function (_super) {
        __extends(FekPopupItemView, _super);
        function FekPopupItemView(options) {
            _super.call(this, options);
            this.template = "script#fek_popup_template"; //http://marionettejs.com/docs/v2.4.1/marionette.itemview.html
            //this.template = _.template($("#flowerElement").html())   //1) grab template
            //NO INTERACTION HAVE BEEN CREATED FOR THE MODEL YET, SO THIS IS UNNECESSARY
            /*this.model.on("change", () => {
             this.render()               //maybe we should remove this in the future, logo is not going to change
             })*/
        }
        //if you have it as attributes they are not working
        /*this.tagName = "tr"
         this.className = "noname"
         this.id = "malakas"*/
        //you need to set them as functions instead
        FekPopupItemView.prototype.tagName = function () {
            return "div";
        };
        FekPopupItemView.prototype.className = function () {
            return "popup";
        };
        //it is not defined inside declaration because you could make it more dynamic if you wanted
        //template:(...params:any[]) => string; //old backbone stuff
        FekPopupItemView.prototype.events = function () {
            //return super.events();    //this is undefined, lets skip it
            return {
                //mouseover: "addBgColor",
                "click": "drinkPoisonPill"
            };
        };
        FekPopupItemView.prototype.drinkPoisonPill = function () {
            this.triggerMethod("poisonpill");
        };
        return FekPopupItemView;
    })(Marionette.ItemView);
    Pligor.FekPopupItemView = FekPopupItemView;
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 4/20/15.
 */
/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../radio/RadioEvents.ts" />
/// <reference path="../../../declarations/backbone.radio.d.ts" />
/// <reference path="../itemviews/FekPopupItemView.ts" />
var Pligor;
(function (Pligor) {
    /**
     * We cover everything in this file from here:
     * http://marionettejs.com/docs/v2.4.1/marionette.layoutview.html#specifying-regions-as-a-function
     */
    var AnnouncementLayout = (function (_super) {
        __extends(AnnouncementLayout, _super);
        function AnnouncementLayout(options) {
            _super.call(this, options);
            this.template = "script#announcement_template";
            //Avoid Re-Rendering The Entire LayoutView
            /*Instead, if you are binding the
             layoutView's template to a model and need to update portions of the layoutView,
             you should listen to the model's "change" events and only update the
             necessary DOM elements.
             WHICH MEANS WE SHOULD DO jQUERY*/
            /*this.model.on("change:breadcrumb", (curModel:Pligor.MainModel) => {
                this.$el.find(".breadcrumb_class").html(curModel.get("breadcrumb"))
            })*/
            this.model = new Backbone.Model(); //dummy model, not useful anywhere right now, we do not have data in the layout
        }
        //destroyImmediate = false // This option removes the layoutView from the DOM before destroying the children
        // preventing repaints as each option is removed. However, it makes it difficult to do close animations
        // for a child view (false by default)
        /*typedRegions(options) {
            var regs = new MyRegionsCollection

            regs.regions.push({header: "#header"})
        }*/
        AnnouncementLayout.prototype.tagName = function () {
            return "div";
        };
        AnnouncementLayout.prototype.className = function () {
            return "announcement";
        };
        /**
         * Any region can be removed, whether it was defined in the regions attribute of the region definition, or added later.
         * @param options
         * @returns {{header: string, mainRegion: string, footer: string}}
         */
        AnnouncementLayout.prototype.regions = function (options) {
            return {
                /*  //sample of how you can have a custom region class for each region!
                menu: {
                 selector: "#menu",
                 regionClass: CustomRegionClassReference
                 }*/
                popupRegion: "div.popup_wrapper" //#header is unnecessary since it works like a jquery selector
            };
        };
        //in order to change the model of the main layout due to a child event (any depth child) then we need to propagate
        AnnouncementLayout.prototype.childEvents = function () {
            return {};
        };
        AnnouncementLayout.prototype.initialize = function (options) {
            var _this = this;
            _super.prototype.initialize.call(this, options);
            var curChannel = Pligor.RadioEvents().routerChannel;
            Backbone.Radio.channel(curChannel.getName()).comply(curChannel.fekPopupShow, function () {
                //console.log("we are complying")
                //no scroll according to this: http://stackoverflow.com/questions/9280258/prevent-body-scrolling-but-allow-overlay-scrolling
                $("body").css("overflow", "hidden");
                _this.popupRegion.show(new Pligor.FekPopupItemView());
                _this.listenTo(_this.popupRegion.currentView, "poisonpill", function () {
                    _this.stopListening(_this.popupRegion.currentView);
                    _this.popupRegion.empty();
                    $("body").css("overflow", "auto");
                    window.history.back();
                });
            });
        };
        AnnouncementLayout.prototype.events = function () {
            var _this = this;
            //return super.events();
            return {
                "click .ok_button": function () {
                    _this.triggerMethod("poisonpill");
                    //console.log("to koumpi patithike!")
                }
            };
        };
        /**
         * As a rule of thumb, most of the time you'll want to render any nested views in the onBeforeRender callback.
         */
        AnnouncementLayout.prototype.onBeforeRender = function () {
            //super.onBeforeRender();
            //this.showChildView('footer', new FooterView());   //footer is the region name
        };
        AnnouncementLayout.prototype.onRender = function () {
            //super.onRender();
            //console.log("we are getting rendered");
        };
        return AnnouncementLayout;
    })(Marionette.LayoutView);
    Pligor.AnnouncementLayout = AnnouncementLayout;
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 4/17/15.
 */
/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/underscore.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
var Pligor;
(function (Pligor) {
    var HowItWorksStep1of3Layout = (function (_super) {
        __extends(HowItWorksStep1of3Layout, _super);
        function HowItWorksStep1of3Layout(options) {
            _super.call(this, options);
            this.template = "script#how_it_works_step1of3_template"; //http://marionettejs.com/docs/v2.4.1/marionette.itemview.html
            //NO INTERACTION HAVE BEEN CREATED FOR THE MODEL YET, SO THIS IS UNNECESSARY
            /*this.model.on("change", () => {
             this.render()               //maybe we should remove this in the future, logo is not going to change
             })*/
        }
        //if you have it as attributes they are not working
        /*this.tagName = "tr"
         this.className = "noname"
         this.id = "malakas"*/
        //you need to set them as functions instead
        HowItWorksStep1of3Layout.prototype.tagName = function () {
            return "div";
        };
        HowItWorksStep1of3Layout.prototype.className = function () {
            return "step1of3";
        };
        /**
         * Any region can be removed, whether it was defined in the regions attribute of the region definition, or added later.
         * @param options
         */
        HowItWorksStep1of3Layout.prototype.regions = function (options) {
            return {};
        };
        return HowItWorksStep1of3Layout;
    })(Marionette.LayoutView);
    Pligor.HowItWorksStep1of3Layout = HowItWorksStep1of3Layout;
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 4/17/15.
 */
/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/underscore.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../../../declarations/greensock.d.ts" />
/// <reference path="../../../declarations/modernizr.d.ts" />
var Pligor;
(function (Pligor) {
    var HowItWorksStep2of3Layout = (function (_super) {
        __extends(HowItWorksStep2of3Layout, _super);
        function HowItWorksStep2of3Layout(options) {
            _super.call(this, options);
            this.template = "script#how_it_works_step2of3_template"; //http://marionettejs.com/docs/v2.4.1/marionette.itemview.html
            //step1region: Marionette.Region //to have it statically typed
            this.controller = new ScrollMagic.Controller(); //default settings
            this.triggerHook = 0.95; //1 is identical to onEnter
            this.durationForEachStep_px = 300;
            this.rowHeight_px = 250;
            this.numColums = 3;
            //NO INTERACTION HAVE BEEN CREATED FOR THE MODEL YET, SO THIS IS UNNECESSARY
            /*this.model.on("change", () => {
             this.render()               //maybe we should remove this in the future, logo is not going to change
             })*/
        }
        //if you have it as attributes they are not working
        /*this.tagName = "tr"
         this.className = "noname"
         this.id = "malakas"*/
        //you need to set them as functions instead
        HowItWorksStep2of3Layout.prototype.tagName = function () {
            return "div";
        };
        HowItWorksStep2of3Layout.prototype.className = function () {
            return "step2of3";
        };
        /**
         * Any region can be removed, whether it was defined in the regions attribute of the region definition, or added later.
         * @param options
         */
        HowItWorksStep2of3Layout.prototype.regions = function (options) {
            return {};
        };
        HowItWorksStep2of3Layout.prototype.onRender = function () {
            //super.onRender();
            var firstPeriodEnergyBars = this.$el.find(".firstPeriodEnergyBars");
            var secondPeriodEnergyBars = this.$el.find(".secondPeriodEnergyBars");
            var thirdPeriodEnergyBars = this.$el.find(".thirdPeriodEnergyBars");
            if (Modernizr.touch) {
                [firstPeriodEnergyBars, secondPeriodEnergyBars, thirdPeriodEnergyBars].forEach(function (elem, ind, arr) {
                    elem.css({
                        height: "100%"
                    });
                });
            }
            else {
                var triggerElem = this.$el.find("div.trigger_period")[0];
                var targetElem = this.$el.find("div.periods_row")[0];
                var totalDuration_px = this.durationForEachStep_px * this.numColums;
                //calculated the row of the scene with inspection and pinned it to the bottom of the screen
                new ScrollMagic.Scene({
                    triggerHook: this.triggerHook,
                    triggerElement: triggerElem,
                    duration: totalDuration_px,
                    offset: this.rowHeight_px //start the scene after scrolling for that many pixels
                }).setPin(targetElem).addTo(this.controller);
                var seconds_indifferent = Number.MAX_VALUE; //it is based on pixels
                var curOffset = 0;
                //have the
                new ScrollMagic.Scene({
                    offset: this.rowHeight_px + curOffset,
                    triggerHook: this.triggerHook,
                    triggerElement: triggerElem,
                    duration: this.durationForEachStep_px
                }).setTween(TweenMax.to(firstPeriodEnergyBars[0], seconds_indifferent, {
                    css: { height: "100%" }
                })).addTo(this.controller);
                curOffset += this.durationForEachStep_px;
                new ScrollMagic.Scene({
                    offset: this.rowHeight_px + curOffset,
                    triggerHook: this.triggerHook,
                    triggerElement: triggerElem,
                    duration: this.durationForEachStep_px
                }).setTween(TweenMax.to(secondPeriodEnergyBars[0], seconds_indifferent, {
                    css: { height: "100%" }
                })).addTo(this.controller);
                curOffset += this.durationForEachStep_px;
                new ScrollMagic.Scene({
                    offset: this.rowHeight_px + curOffset,
                    triggerHook: this.triggerHook,
                    triggerElement: triggerElem,
                    duration: this.durationForEachStep_px
                }).setTween(TweenMax.to(thirdPeriodEnergyBars[0], seconds_indifferent, {
                    css: { height: "100%" }
                })).addTo(this.controller);
            }
        };
        return HowItWorksStep2of3Layout;
    })(Marionette.LayoutView);
    Pligor.HowItWorksStep2of3Layout = HowItWorksStep2of3Layout;
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 4/17/15.
 */
/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/underscore.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
var Pligor;
(function (Pligor) {
    var HowItWorksStep3of3Layout = (function (_super) {
        __extends(HowItWorksStep3of3Layout, _super);
        function HowItWorksStep3of3Layout(options) {
            _super.call(this, options);
            this.template = "script#how_it_works_step3of3_template"; //http://marionettejs.com/docs/v2.4.1/marionette.itemview.html
            //NO INTERACTION HAVE BEEN CREATED FOR THE MODEL YET, SO THIS IS UNNECESSARY
            /*this.model.on("change", () => {
             this.render()               //maybe we should remove this in the future, logo is not going to change
             })*/
        }
        //if you have it as attributes they are not working
        /*this.tagName = "tr"
         this.className = "noname"
         this.id = "malakas"*/
        //you need to set them as functions instead
        HowItWorksStep3of3Layout.prototype.tagName = function () {
            return "div";
        };
        HowItWorksStep3of3Layout.prototype.className = function () {
            return "step3of3";
        };
        /**
         * Any region can be removed, whether it was defined in the regions attribute of the region definition, or added later.
         * @param options
         */
        HowItWorksStep3of3Layout.prototype.regions = function (options) {
            return {};
        };
        return HowItWorksStep3of3Layout;
    })(Marionette.LayoutView);
    Pligor.HowItWorksStep3of3Layout = HowItWorksStep3of3Layout;
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 4/17/15.
 */
/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/underscore.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="./HowItWorksStep1of3Layout.ts" />
/// <reference path="./HowItWorksStep2of3Layout.ts" />
/// <reference path="./HowItWorksStep3of3Layout.ts" />
var Pligor;
(function (Pligor) {
    var HowItWorksLayout = (function (_super) {
        __extends(HowItWorksLayout, _super);
        function HowItWorksLayout(options) {
            _super.call(this, options);
            this.template = "script#how_it_works_template"; //http://marionettejs.com/docs/v2.4.1/marionette.itemview.html
            //this.template = _.template($("#flowerElement").html())   //1) grab template
            //NO INTERACTION HAVE BEEN CREATED FOR THE MODEL YET, SO THIS IS UNNECESSARY
            /*this.model.on("change", () => {
             this.render()               //maybe we should remove this in the future, logo is not going to change
             })*/
        }
        //if you have it as attributes they are not working
        /*this.tagName = "tr"
         this.className = "noname"
         this.id = "malakas"*/
        //you need to set them as functions instead
        HowItWorksLayout.prototype.tagName = function () {
            return "div";
        };
        HowItWorksLayout.prototype.className = function () {
            return "how_it_works";
        };
        /**
         * Any region can be removed, whether it was defined in the regions attribute of the region definition, or added later.
         * @param options
         */
        HowItWorksLayout.prototype.regions = function (options) {
            return {
                /*  //sample of how you can have a custom region class for each region!
                 menu: {
                 selector: "#menu",
                 regionClass: CustomRegionClassReference
                 }*/
                step1region: "article#how_it_works_step1of3",
                //(not exactly the same though because body > header is not working)
                step2region: "article#how_it_works_step2of3",
                step3region: "article#how_it_works_step3of3"
            };
        };
        HowItWorksLayout.prototype.onRender = function () {
            //super.onRender();
            this.step1region.show(new Pligor.HowItWorksStep1of3Layout()); //without any model for the time being
            this.step2region.show(new Pligor.HowItWorksStep2of3Layout()); //without any model for the time being
            this.step3region.show(new Pligor.HowItWorksStep3of3Layout()); //without any model for the time being
        };
        return HowItWorksLayout;
    })(Marionette.LayoutView);
    Pligor.HowItWorksLayout = HowItWorksLayout;
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 4/17/15.
 */
/// <reference path="../../../declarations/backbone.d.ts" />
/////// <reference path="../pvcalculations/PVcalc.ts" />
var Pligor;
(function (Pligor) {
    var OikiakaCalculationsModel = (function (_super) {
        __extends(OikiakaCalculationsModel, _super);
        function OikiakaCalculationsModel(attributes, options) {
            _super.call(this, attributes, options);
            //this.urlRoot = "http://localhost:3000/logos"; //this.url will be http://localhost:3000/logos/<the model id>
        }
        OikiakaCalculationsModel.prototype.defaults = function () {
            //return super.defaults();
            return {
                totalEnergy: 10000,
                clientProfit: 47247,
                kgCO2: 6629,
                profitableYears: 20.7,
                aposvesiYears: 4.3,
                weeksForInstallation: 5,
                installationCost: 9750
            };
        };
        OikiakaCalculationsModel.prototype.initialize = function (attributes, options) {
            var _this = this;
            _super.prototype.initialize.call(this, attributes, options);
            //console.log("A model instance named " + this.get("name") + "has been created and it costs " + this.get("price"))
            /*this.on("change:price", function () {    //:price makes it specific to a certain attribute
             console.log(
             "The price for the " + this.get("name") + " model just changed to $" + this.get("price") + " dollars"
             )
             })*/
            //TODO now the problem here is that the render might be called twice, that is why we need to seperate item views
            this.on("change:totalEnergy", function () {
                var newEnergy = _this.get("totalEnergy");
                //var calc: PVcalculations.PVcalcOutput = new PVcalculations.PVcalcG1(newEnergy)
                _this.set({
                    weeksForInstallation: "ΚΡΥΦΟ ΣΤΟ DEMO",
                    kgCO2: "ΚΡΥΦΟ ΣΤΟ DEMO",
                    installationCost: "ΚΡΥΦΟ ΣΤΟ DEMO",
                    aposvesiYears: "ΚΡΥΦΟ ΣΤΟ DEMO",
                    profitableYears: "ΚΡΥΦΟ ΣΤΟ DEMO",
                    clientProfit: "ΚΡΥΦΟ ΣΤΟ DEMO" //calc.getClientProfit()
                });
            });
        };
        return OikiakaCalculationsModel;
    })(Backbone.Model);
    Pligor.OikiakaCalculationsModel = OikiakaCalculationsModel;
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 4/17/15.
 */
/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/underscore.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../traits/ViewTraits.ts" />
/// <reference path="../typescript.ts" />
/// <reference path="../models/OikiakaCalculationsModel.ts" />
var Pligor;
(function (Pligor) {
    //TODO make that a layout and break into smaller component to render more easily, for example decouple the initial value of input range from model
    var OikiakaCalculationsItemView = (function (_super) {
        __extends(OikiakaCalculationsItemView, _super);
        function OikiakaCalculationsItemView(options) {
            var _this = this;
            _super.call(this, options);
            this.template = "script#oikiaka_calc_form_template"; //http://marionettejs.com/docs/v2.4.1/marionette.itemview.html
            //this.template = _.template($("#flowerElement").html())   //1) grab template
            //NO INTERACTION HAVE BEEN CREATED FOR THE MODEL YET, SO THIS IS UNNECESSARY
            this.model.on("change", function () {
                _this.render(); //maybe we should remove this in the future, logo is not going to change
            });
        }
        //if you have it as attributes they are not working
        /*this.tagName = "tr"
         this.className = "noname"
         this.id = "malakas"*/
        //you need to set them as functions instead
        OikiakaCalculationsItemView.prototype.tagName = function () {
            return "div";
        };
        OikiakaCalculationsItemView.prototype.className = function () {
            return "form_table_wrapper";
        };
        OikiakaCalculationsItemView.prototype.ui = function () {
            //return super.ui();
            return {};
        };
        OikiakaCalculationsItemView.prototype.onInitialize = function (options) {
        };
        OikiakaCalculationsItemView.prototype.serializeData = function () {
            var obj = _super.prototype.serializeData.call(this);
            obj.totalEnergy = Math.round(obj.totalEnergy).toFixed(0);
            obj.clientProfit = Math.round(obj.clientProfit).toFixed(0);
            obj.kgCO2 = Math.round(obj.kgCO2).toFixed(0);
            obj.profitableYears = OikiakaCalculationsItemView.formatYears(obj.profitableYears);
            obj.aposvesiYears = OikiakaCalculationsItemView.formatYears(obj.aposvesiYears);
            return obj;
        };
        OikiakaCalculationsItemView.prototype.onRender = function () {
            //super.onRender();
            //this.getUI("currentYear").text(new Date().getFullYear())
        };
        //it is not defined inside declaration because you could make it more dynamic if you wanted
        //template:(...params:any[]) => string; //old backbone stuff
        OikiakaCalculationsItemView.prototype.events = function () {
            var _this = this;
            //return super.events();    //this is undefined, lets skip it
            return {
                //mouseover: "addBgColor",
                "change input[type=range]": function (event) {
                    //console.log()
                    //console.log("the new value is: " + )
                    var newTotalEnergy = $(event.target).val();
                    _this.model.set("totalEnergy", newTotalEnergy);
                }
            };
        };
        OikiakaCalculationsItemView.formatYears = function (yearsDecimal) {
            var decimalPlacesForYears = 1; //if you change this, change also the logic because now it snaps
            var leftPart = Math.round(yearsDecimal);
            var rightPart = yearsDecimal - leftPart;
            var power = Math.pow(10, decimalPlacesForYears);
            var decimalPart = Math.round(rightPart * power) / power;
            var years = leftPart + decimalPart;
            //return (Math.floor(years * 2)/2).toFixed(decimalPlacesForYears)
            return years.toFixed(decimalPlacesForYears);
        };
        return OikiakaCalculationsItemView;
    })(Marionette.ItemView);
    Pligor.OikiakaCalculationsItemView = OikiakaCalculationsItemView;
    applyMixins(OikiakaCalculationsItemView, [ViewTraits.BindingUiElements]);
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 4/17/15.
 */
/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/underscore.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../itemviews/OikiakaCalculationsItemView.ts" />
var Pligor;
(function (Pligor) {
    var CalculationsLayout = (function (_super) {
        __extends(CalculationsLayout, _super);
        function CalculationsLayout(options) {
            _super.call(this, options);
            this.template = "script#calculations_template"; //http://marionettejs.com/docs/v2.4.1/marionette.itemview.html
            //this.template = _.template($("#flowerElement").html())   //1) grab template
            //NO INTERACTION HAVE BEEN CREATED FOR THE MODEL YET, SO THIS IS UNNECESSARY
            /*this.model.on("change", () => {
             this.render()               //maybe we should remove this in the future, logo is not going to change
             })*/
        }
        //if you have it as attributes they are not working
        /*this.tagName = "tr"
         this.className = "noname"
         this.id = "malakas"*/
        //you need to set them as functions instead
        CalculationsLayout.prototype.tagName = function () {
            return "div";
        };
        CalculationsLayout.prototype.className = function () {
            return "calculations";
        };
        /**
         * Any region can be removed, whether it was defined in the regions attribute of the region definition, or added later.
         * @param options
         * @returns {{header: string, mainRegion: string, footer: string}}
         */
        CalculationsLayout.prototype.regions = function (options) {
            return {
                /*  //sample of how you can have a custom region class for each region!
                 menu: {
                 selector: "#menu",
                 regionClass: CustomRegionClassReference
                 }*/
                oikiakaCalcRegion: "div.oikiakaCalcRegion" //#header is unnecessary since it works like a jquery selector
            };
        };
        CalculationsLayout.prototype.onRender = function () {
            //super.onRender();
            this.oikiakaCalcRegion.show(new Pligor.OikiakaCalculationsItemView({ model: new Pligor.OikiakaCalculationsModel() }));
        };
        return CalculationsLayout;
    })(Marionette.LayoutView);
    Pligor.CalculationsLayout = CalculationsLayout;
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 4/17/15.
 */
/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/underscore.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../traits/ViewTraits.ts" />
/// <reference path="../typescript.ts" />
var Pligor;
(function (Pligor) {
    var PortfolioItemView = (function (_super) {
        __extends(PortfolioItemView, _super);
        function PortfolioItemView(options) {
            _super.call(this, options);
            this.overlayButtonMinimizeClass = "overlay_button_minimized";
            this.mapIsEnabledClass = "portfoliomap_enabled";
            this.isOverlayButtonInitiallyMinimized = false; //not minimized
            this.template = "script#portfolio_template"; //http://marionettejs.com/docs/v2.4.1/marionette.itemview.html
            //this.template = _.template($("#flowerElement").html())   //1) grab template
            //NO INTERACTION HAVE BEEN CREATED FOR THE MODEL YET, SO THIS IS UNNECESSARY
            /*this.model.on("change", () => {
             this.render()               //maybe we should remove this in the future, logo is not going to change
             })*/
        }
        PortfolioItemView.prototype.getOverlayButtonText = function (minimize) {
            return "Κάνε κλικ εδώ για να " + (minimize ? "απ" : "") + "ενεργοποιήσεις το χάρτη";
        };
        //if you have it as attributes they are not working
        /*this.tagName = "tr"
         this.className = "noname"
         this.id = "malakas"*/
        //you need to set them as functions instead
        PortfolioItemView.prototype.tagName = function () {
            return "div";
        };
        PortfolioItemView.prototype.className = function () {
            return "portfolio";
        };
        PortfolioItemView.prototype.ui = function () {
            //return super.ui();
            return {
                overlayButton: ".overlay_button",
                map: ".portfoliomap"
            };
        };
        PortfolioItemView.prototype.onInitialize = function (options) {
        };
        PortfolioItemView.prototype.onRender = function () {
            //super.onRender();
            this.getUI("overlayButton").find("p").text(this.getOverlayButtonText(this.isOverlayButtonInitiallyMinimized));
        };
        /*initialize(options:Backbone.ViewOptions<Backbone.Model>):void {
            super.initialize(options);

            console.log("in class")
        }*/
        //it is not defined inside declaration because you could make it more dynamic if you wanted
        //template:(...params:any[]) => string; //old backbone stuff
        PortfolioItemView.prototype.events = function () {
            //return super.events();    //this is undefined, lets skip it
            return {
                "click .overlay_button": "overlayButtonClicked"
            };
        };
        PortfolioItemView.prototype.overlayButtonClicked = function (event) {
            var overlayButton = this.getUI("overlayButton");
            overlayButton.toggleClass(this.overlayButtonMinimizeClass);
            //console.log("we have been clicked")
            overlayButton.find("p").text(this.getOverlayButtonText(overlayButton.hasClass(this.overlayButtonMinimizeClass)));
            ////////////////
            this.getUI("map").toggleClass(this.mapIsEnabledClass);
        };
        return PortfolioItemView;
    })(Marionette.ItemView);
    Pligor.PortfolioItemView = PortfolioItemView;
    applyMixins(PortfolioItemView, [ViewTraits.BindingUiElements]);
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 4/17/15.
 */
/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/underscore.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
var Pligor;
(function (Pligor) {
    var TestimonialsItemView = (function (_super) {
        __extends(TestimonialsItemView, _super);
        function TestimonialsItemView(options) {
            _super.call(this, options);
            this.template = "script#testimonials_template"; //http://marionettejs.com/docs/v2.4.1/marionette.itemview.html
            //this.template = _.template($("#flowerElement").html())   //1) grab template
            //NO INTERACTION HAVE BEEN CREATED FOR THE MODEL YET, SO THIS IS UNNECESSARY
            /*this.model.on("change", () => {
             this.render()               //maybe we should remove this in the future, logo is not going to change
             })*/
        }
        //if you have it as attributes they are not working
        /*this.tagName = "tr"
         this.className = "noname"
         this.id = "malakas"*/
        //you need to set them as functions instead
        TestimonialsItemView.prototype.tagName = function () {
            return "div";
        };
        TestimonialsItemView.prototype.className = function () {
            return "testimonials";
        };
        return TestimonialsItemView;
    })(Marionette.ItemView);
    Pligor.TestimonialsItemView = TestimonialsItemView;
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 4/17/15.
 */
/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/underscore.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../traits/ViewTraits.ts" />
/// <reference path="../typescript.ts" />
var Pligor;
(function (Pligor) {
    var ContactItemView = (function (_super) {
        __extends(ContactItemView, _super);
        function ContactItemView(options) {
            _super.call(this, options);
            this.template = "script#contact_template"; //http://marionettejs.com/docs/v2.4.1/marionette.itemview.html
            //this.template = _.template($("#flowerElement").html())   //1) grab template
            //NO INTERACTION HAVE BEEN CREATED FOR THE MODEL YET, SO THIS IS UNNECESSARY
            /*this.model.on("change", () => {
             this.render()               //maybe we should remove this in the future, logo is not going to change
             })*/
        }
        //if you have it as attributes they are not working
        /*this.tagName = "tr"
         this.className = "noname"
         this.id = "malakas"*/
        //you need to set them as functions instead
        ContactItemView.prototype.tagName = function () {
            return "div";
        };
        ContactItemView.prototype.className = function () {
            return "contact";
        };
        ContactItemView.prototype.ui = function () {
            //return super.ui();
            return {
                currentYear: ".current_year"
            };
        };
        ContactItemView.prototype.onInitialize = function (options) {
        };
        ContactItemView.prototype.onRender = function () {
            //super.onRender();
            this.getUI("currentYear").text(new Date().getFullYear());
        };
        return ContactItemView;
    })(Marionette.ItemView);
    Pligor.ContactItemView = ContactItemView;
    applyMixins(ContactItemView, [ViewTraits.BindingUiElements]);
})(Pligor || (Pligor = {}));
/**
 * Created by pligor on 4/20/15.
 */
/// <reference path="../../../declarations/backbone.radio.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../../../declarations/waypoints.d.ts" />
/// <reference path="../models/MainModel.ts" />
/// <reference path="../layouts/HeaderLayout.ts" />
/// <reference path="JumbotronLayout.ts" />
/// <reference path="../layouts/AnnouncementLayout.ts" />
/// <reference path="HowItWorksLayout.ts" />
/// <reference path="CalculationsLayout.ts" />
/// <reference path="../itemviews/PortfolioItemView.ts" />
/// <reference path="../itemviews/TestimonialsItemView.ts" />
/// <reference path="../itemviews/ContactItemView.ts" />
/// <reference path="../radio/RadioEvents.ts" />
var Pligor;
(function (Pligor) {
    /*interface MyRegion {
        regionName: string
        regionSelector: string
    }

    interface MyRegionJS {
        [index: string]: string
    }

    class MyRegionsCollection {
        regions:MyRegion[];

        addRegion(jsObj:MyRegionJS) {

        }

        getJsObj() {
            var jsObj:any;

            this.regions.forEach((curRegion, index/!*, array*!/) => {
                jsObj[curRegion.regionName] = curRegion.regionSelector
            })

            return jsObj
        }
    }*/
    /**
     * We cover everything in this file from here:
     * http://marionettejs.com/docs/v2.4.1/marionette.layoutview.html#specifying-regions-as-a-function
     */
    var MainLayout = (function (_super) {
        __extends(MainLayout, _super);
        function MainLayout(options) {
            _super.call(this, options);
            this.template = "#maintemplate";
            this.jumbotronRegionMinimumHeight = 450; //px    //TODO integrate with gulp to make this passed in less
            //TODO maybe this.template and this.regions are missing from declaration?
            //Avoid Re-Rendering The Entire LayoutView
            /*Instead, if you are binding the
             layoutView's template to a model and need to update portions of the layoutView,
             you should listen to the model's "change" events and only update the
             necessary DOM elements.
             WHICH MEANS WE SHOULD DO jQUERY*/
            /*this.model.on("change:breadcrumb", (curModel:Pligor.MainModel) => {
                this.$el.find(".breadcrumb_class").html(curModel.get("breadcrumb"))
            })*/
            this.fillViewPortHeightWithJumbotron();
            this.makeSectionsResetRoute();
        }
        //destroyImmediate = false // This option removes the layoutView from the DOM before destroying the children
        // preventing repaints as each option is removed. However, it makes it difficult to do close animations
        // for a child view (false by default)
        MainLayout.prototype.attachMainLayoutToTheDOM = function () {
            //you could place this inside onRender instead
            $("body").prepend(this.render().el);
        };
        /*typedRegions(options) {
            var regs = new MyRegionsCollection

            regs.regions.push({header: "#header"})
        }*/
        /**
         * Any region can be removed, whether it was defined in the regions attribute of the region definition, or added later.
         * @param options
         */
        MainLayout.prototype.regions = function (options) {
            return {
                /*  //sample of how you can have a custom region class for each region!
                menu: {
                 selector: "#menu",
                 regionClass: CustomRegionClassReference
                 }*/
                headerRegion: "section#header",
                //(not exactly the same though because body > header is not working)
                jumbotronRegion: "section#jumbotron",
                announcementRegion: "section#announcement_section",
                howItWorksRegion: "section#how_it_works_section",
                calculationsRegion: "section#calculations_section",
                portfolioRegion: "section#portfolio_section",
                testimonialsRegion: "section#testimonials_section",
                contactRegion: "section#contact_section"
            };
        };
        //in order to change the model of the main layout due to a child event (any depth child) then we need to propagate
        MainLayout.prototype.childEvents = function () {
            return {};
        };
        MainLayout.prototype.initialize = function (options) {
            _super.prototype.initialize.call(this, options);
        };
        MainLayout.prototype.events = function () {
            //return super.events();
            return {};
        };
        /**
         * As a rule of thumb, most of the time you'll want to render any nested views in the onBeforeRender callback.
         */
        MainLayout.prototype.onBeforeRender = function () {
            //super.onBeforeRender();
        };
        MainLayout.prototype.onRender = function () {
            //super.onRender();
            var _this = this;
            //rendering the children
            //this.showChildView('footer', new FooterView());   //footer is the region name
            this.headerRegion.show(new Pligor.HeaderLayout()); //this.provideMenuDataStatically();
            this.jumbotronRegion.show(new Pligor.JumbotronLayout()); //empty/no model for the time being
            this.announcementRegion.show(new Pligor.AnnouncementLayout());
            this.listenTo(this.announcementRegion.currentView, "poisonpill", function () {
                _this.announcementRegion.empty(); //remove the region contents
            });
            this.howItWorksRegion.show(new Pligor.HowItWorksLayout()); //empty/no model for the time being
            this.calculationsRegion.show(new Pligor.CalculationsLayout()); //empty/no model for the time being
            this.portfolioRegion.show(new Pligor.PortfolioItemView()); //empty/no model for the time being
            this.testimonialsRegion.show(new Pligor.TestimonialsItemView()); //empty/no model for the time being
            this.contactRegion.show(new Pligor.ContactItemView()); //empty/no model for the time being
        };
        MainLayout.prototype.provideMenuDataStatically = function () {
            //App.layoutView.getRegion("headerRegion")  //for dynamic situations
            //var headerLayout:Pligor.HeaderLayout = App.layoutView.headerRegion.currentView    //we are already in here
            var headerLayout = this.headerRegion.currentView;
            var menuCollectionView = headerLayout.menuRegion.currentView;
            //if you fetch a collection, the view is re-rendered automatically, no manually setup is necessary in marionette ;)
            /*menuCollectionView.collection.fetch({
             success: function (collection, response, options) {
             console.log(collection.length)
             }
             })*/
            menuCollectionView.collection.add([
                {
                    "id": 1,
                    "menuItemTitle": "ενεργειακος συμψηφισμος (net metering)",
                    "menuItemSubtitle": "τι είναι και πως λειτουργεί",
                    "menuItemTarget": "how_it_works"
                },
                {
                    "id": 2,
                    "menuItemTitle": "υπολογισε κερδος &amp; κοστος",
                    "menuItemSubtitle": "δες γιατί συμφέρει",
                    "menuItemTarget": "calculations"
                },
                {
                    "id": 3,
                    "menuItemTitle": "εργα / portfolio",
                    "menuItemSubtitle": "από το 1982",
                    "menuItemTarget": "portfolio"
                },
                {
                    "id": 4,
                    "menuItemTitle": "τι λενε οι πελατες",
                    "menuItemSubtitle": "γνώρισε τους",
                    "menuItemTarget": "testimonials"
                },
                {
                    "id": 5,
                    "menuItemTitle": "επικοινωνια",
                    "menuItemSubtitle": "τηλεφωνο / email",
                    "menuItemTarget": "contact"
                }
            ]);
        };
        MainLayout.prototype.makeSectionsResetRoute = function () {
            $(document).ready(function () {
                $("section.majorsection").waypoint({
                    handler: function (direction) {
                        //console.log(direction);
                        if (direction === "up") {
                            //console.log("we have a hit crazy baby");
                            var curChannel = Pligor.RadioEvents().routerChannel;
                            Backbone.Radio.channel(curChannel.getName()).trigger(curChannel.majorSectionWaypoint_crossed_50percent_viewport);
                        }
                        else if (direction === "down") {
                        }
                        else {
                            throw "unexpected direction";
                        }
                    },
                    offset: "50%" //when the line of the top of the view is at the middle of the viewport
                });
            });
        };
        MainLayout.prototype.fillViewPortHeightWithJumbotron = function () {
            var _this = this;
            $(document).ready(function () {
                var headerHeight = _this.headerRegion.$el.outerHeight();
                var newHeight = $(window).height() - headerHeight;
                _this.jumbotronRegion.$el.children().first().height(Math.max(_this.jumbotronRegionMinimumHeight, newHeight));
            });
        };
        return MainLayout;
    })(Marionette.LayoutView);
    Pligor.MainLayout = MainLayout;
})(Pligor || (Pligor = {}));
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
var MyMarionetteApp = (function (_super) {
    __extends(MyMarionetteApp, _super);
    //flowerStaticDataModule:FlowerStaticDataModule = null;
    function MyMarionetteApp() {
        _super.call(this);
        this.layoutView = null;
        this.mainModel = null;
        //this.someModule = someModule;
    }
    return MyMarionetteApp;
})(Marionette.Application);
var App = new MyMarionetteApp();
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
App.on("start", function (options) {
    App.mainModel = new Pligor.MainModel();
    App.layoutView = new Pligor.MainLayout({ model: App.mainModel });
    App.layoutView.attachMainLayoutToTheDOM();
    //TODO also render the regions:
    //App.layoutView.header.show(new Pligor.DummyItemView()); //Menu is a region #menu //http://marionettejs.com/docs/v2.4.1/marionette.region.html
    var myRouter = new Pligor.MyRouter(); //constructor handles everything
    // If the server has already rendered the entire page, and you don't want the initial route to trigger when starting History, pass silent: true
    var started = Backbone.history.start({
        pushState: false //http://stackoverflow.com/questions/12081894/backbone-router-navigate-and-anchor-href
    });
    console.log("if this is false then you need to set routes before the constructor is being called: " + started);
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
});
App.start({});
//call this as many times as you like. If you specify the same name the last call wins
/*App.addRegions({
 mainRegion: "#allFlowers"
 })*/
/**
 * Created by pligor on 5/28/15.
 */
Array.prototype.getClosestTo = function (num) {
    return this.reduce(function (prev, curr) {
        return (Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev);
    });
};
Array.prototype.distinct = function () {
    /*return this.reduce(function(p, c) {
     if (p.indexOf(c) < 0) p.push(c);
     return p;
     }, []);*/
    return this.filter(function (elem, index, arr) {
        return arr.indexOf(elem) == index;
    });
};
Array.prototype.unique = Array.prototype.distinct;
Array.prototype.sum = function () {
    return this.reduce(function (n1, n2) {
        return n1 + n2;
    }, 0);
};
/**
 * Created by pligor on 5/28/15.
 */
//conflicts with other libraries for unknown reason (we already tested changing the name)
/*interface Object {
    objValueArray(): any[];
}*/
//Object.prototype.objValueArray
var MyTS;
(function (MyTS) {
    function getValues(obj) {
        //var obj = this
        var keys = Object.getOwnPropertyNames(obj);
        var values = [];
        for (var i = 0; i < keys.length; i++) {
            values.push(obj[keys[i]]);
        }
        return values;
    }
    MyTS.getValues = getValues;
})(MyTS || (MyTS = {}));

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
