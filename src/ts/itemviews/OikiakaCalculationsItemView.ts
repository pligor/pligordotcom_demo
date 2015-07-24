/**
 * Created by pligor on 4/17/15.
 */

/// <reference path="../../../declarations/jquery.d.ts" />
/// <reference path="../../../declarations/underscore.d.ts" />
/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../traits/ViewTraits.ts" />
/// <reference path="../typescript.ts" />
/// <reference path="../models/OikiakaCalculationsModel.ts" />

module Pligor {
    //TODO make that a layout and break into smaller component to render more easily, for example decouple the initial value of input range from model
    export class OikiakaCalculationsItemView extends Marionette.ItemView<OikiakaCalculationsModel> implements ViewTraits.BindingUiElements<OikiakaCalculationsModel> {

        template = "script#oikiaka_calc_form_template" //http://marionettejs.com/docs/v2.4.1/marionette.itemview.html

        //if you have it as attributes they are not working
        /*this.tagName = "tr"
         this.className = "noname"
         this.id = "malakas"*/
        //you need to set them as functions instead
        tagName() {
            return "div"
        }

        className() {
            return "form_table_wrapper"
        }

        ui() {
            //return super.ui();
            return {
                //currentYear: ".current_year"
            }
        }

        getUI:(arg:string) => JQuery;

        constructor(options?:Backbone.ViewOptions<OikiakaCalculationsModel>) {
            super(options)

            //this.template = _.template($("#flowerElement").html())   //1) grab template

            //NO INTERACTION HAVE BEEN CREATED FOR THE MODEL YET, SO THIS IS UNNECESSARY
            this.model.on("change", () => {
                this.render()               //maybe we should remove this in the future, logo is not going to change
            })
        }

        onInitialize(options:Backbone.ViewOptions<OikiakaCalculationsModel>) {

        }

        serializeData():any {
            var obj = super.serializeData();

            obj.totalEnergy = Math.round(obj.totalEnergy).toFixed(0)

            obj.clientProfit = Math.round(obj.clientProfit).toFixed(0)

            obj.kgCO2 = Math.round(obj.kgCO2).toFixed(0)

            obj.profitableYears = OikiakaCalculationsItemView.formatYears(obj.profitableYears)

            obj.aposvesiYears = OikiakaCalculationsItemView.formatYears(obj.aposvesiYears)

            return obj
        }

        onRender():void {
            //super.onRender();
            //this.getUI("currentYear").text(new Date().getFullYear())
        }

//it is not defined inside declaration because you could make it more dynamic if you wanted
        //template:(...params:any[]) => string; //old backbone stuff

        events():any {
            //return super.events();    //this is undefined, lets skip it
            return {
                //mouseover: "addBgColor",
                "change input[type=range]": (event:Event) => {
                    //console.log()

                    //console.log("the new value is: " + )

                    var newTotalEnergy = $(event.target).val()

                    this.model.set("totalEnergy", newTotalEnergy)
                }
            }
        }

        static formatYears(yearsDecimal:number):string {
            var decimalPlacesForYears = 1   //if you change this, change also the logic because now it snaps

            var leftPart = Math.round(yearsDecimal)

            var rightPart = yearsDecimal - leftPart

            var power = Math.pow(10, decimalPlacesForYears)

            var decimalPart = Math.round(rightPart * power) / power

            var years = leftPart + decimalPart

            //return (Math.floor(years * 2)/2).toFixed(decimalPlacesForYears)
            return years.toFixed(decimalPlacesForYears)
        }

        /*addBgColor() {
         this.$el.css("background", "#94E4F1")
         }*/

        //defining render in marionette is optional
        /*render():Marionette.ItemView<OikiakaCalculationsModel> {
            //super.render();

            //This is for decorating before rendering
            var jsonDeepCopy = JSON.parse(JSON.stringify(
                this.model.toJSON()
            ))
            //jsonDeepCopy.price = jsonDeepCopy.price.toFixed(2)

            //in marionette this is handled automatically by default:

            var template = this.template(jsonDeepCopy) //2) fill template in memory with data
            //in marionette this is handled automatically by default:
            this.$el.html(template)   //3) load template in the element that we have defined (here is an <article>)
            return this
        }*/
    }
    applyMixins(OikiakaCalculationsItemView, [ViewTraits.BindingUiElements])
}
