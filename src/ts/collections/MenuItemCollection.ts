/**
 * Created by pligor on 4/17/15.
 */

/// <reference path="../../../declarations/backbone.d.ts" />
/// <reference path="../models/MenuItemModel.ts" />

//merging modules by using same name
module Pligor {
    export class MenuItemCollection extends Backbone.Collection<MenuItemModel> {
        //I make the models as required (bootstrapping suggested by backbone) but I will leave them as they are
        constructor(models: MenuItemModel[], options?: any) {
            super(models, options)

            this.model = MenuItemModel

            this.url = "http://localhost:3000/menuitems"
        }
    }
}
