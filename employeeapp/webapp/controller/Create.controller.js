sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent",
	'sap/m/MessageBox',
    'sap/m/MessagePopover'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, History, UIComponent, MessageBox, MessagePopover) {
        "use strict";

        return Controller.extend("sapips.training.employeeapp.controller.Detail", {
            _data : {
                "date" : new Date()
            },
            onInit: function (evt) {
                this.oRouter = this.getOwnerComponent().getRouter();
                var oDate = new JSONModel(this._data);
                this.getView().setModel(oDate);
            },
            onCancelAdd: function () {
                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();
                if (sPreviousHash  && sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    var oRouter = UIComponent.getRouterFor(this);
                    oRouter.navTo("RouteEmployeeList");
                }
            },
            onNavBack: function () {
                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();
                if (sPreviousHash  && sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    var oRouter = UIComponent.getRouterFor(this);
                    oRouter.navTo("RouteEmployeeList");
                }
            },
            onAddSkill: function () {
                // create dialog lazily
                if (!this.oMPDialog) {
                    this.oMPDialog = this.loadFragment({
                        name: "sap.m.sample.DialogWithMessagePopover.MPDialog"
                    });
                }
                this.oMPDialog.then(function (oDialog) {
                    this.oDialog = oDialog;
                    this.oDialog.open();
                    this._oMessageManager.registerObject(this.oView.byId("formContainer"), true);
    
                    MessageToast.show('Press "Save" to trigger validation.');
                    this.createMessagePopover();
                }.bind(this));
            },
        });
    });