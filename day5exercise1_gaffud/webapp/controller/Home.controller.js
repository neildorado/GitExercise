sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("zbtp.day5exercise1gaffud.controller.Home", {
            onInit: function () {
                
            },

             onPressSendBtn: function() {
                 var oView = this.getView();
			     var sName = oView.byId("NameInput").getValue();
                 var sStreet = oView.byId("StreetInput").getValue();
                 var sAge = oView.byId("AgeInput").getValue();
                 var sTech = oView.byId("TechInput").getSelectedKey();

                 var oSample = {
                    sNamePt : sName,
                    sStreetPt : sStreet
                 }                    
                 this.getRouter().navTo("Detail", oSample);              
                },
            
            // onPressSendBtn: function() {
            //     this.getRouter().navTo("Detail");
            // },

            getRouter: function() {
                return sap.ui.core.UIComponent.getRouterFor(this);;
            }

        });
    });
