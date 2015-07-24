/**
 * Created by pligor on 5/4/15.
 */

/// <reference path="../../../declarations/marionette.d.ts" />
/// <reference path="../models/MenuItemModel.ts" />
/// <reference path="../itemviews/MenuItemView.ts" />

module Pligor {
    export class MenuCollectionView extends Marionette.CollectionView<MenuItemModel> {
        //if you have it as an attribute is not working
        tagName() {
            return "ul"
        }

        className():string {
            return "mainmenu"
        }

        constructor(options?:Marionette.CollectionViewOptions<MenuItemModel>) {
            super(options)

            this.childView = MenuItemView
        }
    }
}
