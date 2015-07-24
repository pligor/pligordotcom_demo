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

module Pligor {

    export class JumbotronBackgroundItemView extends Marionette.ItemView<Backbone.Model> implements ViewTraits.BindingUiElements<Backbone.Model> {
        //constructor(options?:Backbone.ViewOptions<T>) { //we just choose to have it non optional for this class
        //constructor(options:Backbone.ViewOptions<T>) {
        //or even better we choose to pass the options directly in here

        private static tolerancePixels = 200

        private curSize = new Size2D(1920, 1080) //TODO use a model to keep current size state

        template = "script#jumbotron_background_template" //http://marionettejs.com/docs/v2.4.1/marionette.itemview.html

        private player: VideoJSPlayer = null

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

        tagName():string {
            //return super.tagName();
            return "div"
        }

        className():string {
            //return super.className();
            return "jumbotron_background_container"
        }

        constructor(options?:Backbone.ViewOptions<Backbone.Model>) {
            super(options)

            /*this.model.on("change", () => {
             this.render()               //maybe we should remove this in the future, logo is not going to change
             }) //"change:price" if price is certain attribute*/
        }

        onInitialize(options:Backbone.ViewOptions<Backbone.Model>) {

        }

        getUI:(arg:string) => JQuery;

        private static videoId = "jumbotron_background_video"

        ui() {
            //return super.ui();
            return {
                //button: ".control_button",
                video: "#" + JumbotronBackgroundItemView.videoId
            }
        }

        /*onShow():void {
         //super.onShow();

         console.log("ok shown ??")
         var start = Date.now()

         $("#" + this.videoId).ready(() => {
         console.log("video is loaded in " + (Date.now() - start))
         })
         }*/

        onRender():void {
            //super.onRender();

            var reBindElems = () => {
                this.unbindUIElements()

                this.bindUIElements()
            }

            var getVideo = () => {
                return this.getUI("video")
            }

            var fillCurSize = (wrapperSize:Size2D) => {
                this.curSize = this.curSize.fill(wrapperSize)
                return this.curSize
            }

            getVideo().ready(() => {

                this.player = videojs(JumbotronBackgroundItemView.videoId, {
                    //options
                }, function () {
                    //console.log("Good to go!");

                    reBindElems()

                    var video = getVideo()

                    var outerParent = video.parent().parent()

                    //console.log(outerParent)

                    var outerParentSize = new Size2D(outerParent.width(), outerParent.height())

                    //console.log(outerParentSize)

                    var newSize = fillCurSize(outerParentSize) //curSize = curSize.fill(wrapperSize)

                    //console.log(newSize)

                    this.width(newSize.width)   //video.width(curSize.width)

                    this.height(newSize.height) //video.height(curSize.height)

                    //this.play(); // if you don't trust autoplay for some reason
                })

                $(window).resize(() => {
                    var wrapper = this.getUI("video").parent().parent()

                    var wrapperSize = new Size2D(wrapper.width(), wrapper.height())

                    var oldSize = this.curSize

                    this.curSize = this.curSize.fillWithTolerance(wrapperSize, JumbotronBackgroundItemView.tolerancePixels)

                    //console.log(this)

                    if (oldSize.isEqual(this.curSize)) {
                        //nop
                    } else {
                        this.player.width(this.curSize.width)

                        this.player.height(this.curSize.height)
                    }

                    //console.log(newSize.isEqual(curSize))
                    //console.log(newSize.toString() + "\n" + curSize.toString())
                })
            })
        }

//it is not defined inside declaration because you could make it more dynamic if you wanted
        //template:(...params:any[]) => string; //old backbone stuff

        events():any {
            //return super.events();    //this is undefined, lets skip it
            return {
                //mouseclick: "addBgColor",
                "click .control_button": "onControlButton"
            }
        }

        onControlButton(event: Event) {
            if(this.player === null) {
                //nop
            } else {
                $(event.target).toggleClass("icon-pause-outline")

                if(this.player.paused()) {
                    this.player.play()
                } else {
                    this.player.pause()
                }
            }
        }

        /*addBgColor() {
         this.$el.css("background", "#94E4F1")
         }*/

        /*removeBgColor() {
         this.$el.css("background", "transparent")
         }*/


        //this.template = _.template($("#flowerElement").html())   //1) grab template
        //defining render in marionette is optional
        //render():Marionette.ItemView<LogoModel> {
        //return super.render();
        //This is for decorating before rendering
        /*var jsonDeepCopy = JSON.parse(JSON.stringify(
         this.model.toJSON()
         ))
         jsonDeepCopy.price = jsonDeepCopy.price.toFixed(2)*/
        //in marionette this is handled automatically by default:
        //var flowerTemplate = this.template(jsonDeepCopy) //2) fill template in memory with data
        //in marionette this is handled automatically by default:
        //this.$el.html(flowerTemplate)   //3) load template in the element that we have defined (here is an <article>)
        //return this
        //}
    }
    applyMixins(JumbotronBackgroundItemView, [ViewTraits.BindingUiElements])
}
