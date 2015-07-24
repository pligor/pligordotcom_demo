/**
 * Created by pligor on 4/17/15.
 */

/// <reference path="../../../declarations/backbone.d.ts" />
/////// <reference path="../pvcalculations/PVcalc.ts" />

module Pligor {
    export class OikiakaCalculationsModel extends Backbone.Model {

        constructor(attributes?:any, options?:any) {
            super(attributes, options);

            //this.urlRoot = "http://localhost:3000/logos"; //this.url will be http://localhost:3000/logos/<the model id>
        }

        defaults():any {
            //return super.defaults();
            return {
                totalEnergy: 10000,
                clientProfit: 47247,
                kgCO2: 6629,
                profitableYears: 20.7,
                aposvesiYears: 4.3,
                weeksForInstallation: 5,
                installationCost: 9750
            }
        }

        initialize(attributes:any, options:any):void {
            super.initialize(attributes, options);

            //console.log("A model instance named " + this.get("name") + "has been created and it costs " + this.get("price"))

            /*this.on("change:price", function () {    //:price makes it specific to a certain attribute
             console.log(
             "The price for the " + this.get("name") + " model just changed to $" + this.get("price") + " dollars"
             )
             })*/

            //TODO now the problem here is that the render might be called twice, that is why we need to seperate item views
            this.on("change:totalEnergy", () => {
                var newEnergy = this.get("totalEnergy")

                //var calc: PVcalculations.PVcalcOutput = new PVcalculations.PVcalcG1(newEnergy)

                this.set({
                    weeksForInstallation: "ΚΡΥΦΟ ΣΤΟ DEMO",    //calc.getWeeksForInstallation(),
                    kgCO2: "ΚΡΥΦΟ ΣΤΟ DEMO",   //calc.getkgCO2(),
                    installationCost: "ΚΡΥΦΟ ΣΤΟ DEMO",    //calc.getInstallationCost(),
                    aposvesiYears: "ΚΡΥΦΟ ΣΤΟ DEMO",   //calc.getAposvesiYears(),
                    profitableYears: "ΚΡΥΦΟ ΣΤΟ DEMO", //calc.getProfitableYears(),
                    clientProfit: "ΚΡΥΦΟ ΣΤΟ DEMO"     //calc.getClientProfit()
                })
            })
        }
    }

    /*export interface SingleFlowerInitAttributes {
     name: string
     price: number
     color?: string
     img?: string
     link: string
     }*/
}
