sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, formatter) {
        "use strict";

        return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {

            formatter: formatter,

            onInit: function () {
                //Get View
                var oView = this.getView();

                //Get i18n Model from Component
                var oI18n = this.getOwnerComponent().getModel("i18n");
                //Bind i18n to View
                oView.setModel(oI18n, "i18n");

                //Instantiate JSONModel
                var oAddressModel = new JSONModel();

                //Define Data
                var oAddress = {
                    "EID": "neil.d.dorado",
                    "enabled": true,
                    "Address": {
                        "Street": "Mabini St.",
                        "City": "Cavite City",
                        "Zip": "4106",
                        "Country": "Philippines"
                    },
                    "SalesAmount": 100,
                    "Currency": "USD"
                }

                //Set the Data to Model
                oAddressModel.setData(oAddress);

                //Bind the Model to View
                oView.setModel(oAddressModel);

            }
        });
    });
