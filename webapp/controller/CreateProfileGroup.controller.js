sap.ui.define([
    "./BaseController",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/m/library"
], function (BaseController, JSONModel, formatter, mobileLibrary) {
    "use strict";

    return BaseController.extend("cis.useronboardingrvp.controller.CreateProfileGroup", {
        formatter: formatter,

        /* =========================================================== */
        /* lifecycle methods                                           */
        /* =========================================================== */

        onInit: function () {
            // Model used to manipulate control states. The chosen values make sure,
            // detail page is busy indication immediately so there is no break in
            // between the busy indication for loading the view's meta data
            var oViewModel = new JSONModel({
                busy : false,
                delay : 0,
                lineItemListTitle : this.getResourceBundle().getText("detailLineItemTableHeading")
            });

            this.getRouter().getRoute("createProfileGroup").attachPatternMatched(this._onObjectMatched, this);

            this.setModel(oViewModel, "createProfileGroupView");

        },

        _onObjectMatched: function(){
            this.getModel("appView").setProperty("/layout", "OneColumn");
        }
    });
});
