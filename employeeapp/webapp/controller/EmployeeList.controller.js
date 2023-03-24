sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Filter, FilterOperator) {
        "use strict";

        return Controller.extend("sapips.training.employeeapp.controller.EmployeeList", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
            },
            onSearch: function (oEvent) {
                var oTableSearchState = [],
                    sQuery = oEvent.getParameter("query");
                if (sQuery && sQuery.length > 0) {
                    oTableSearchState = [new Filter("EmployeeID", FilterOperator.Contains, sQuery),];
                }
                this.getView().byId("idEmployee").getBinding("items").filter(oTableSearchState, "Application");
            },
            onListItemPress: function (oEvent) {
                var oPath = oEvent.getSource().getBindingContext().getPath();
                var EmployeeID = oPath.split("/").slice(-1).pop();
                this.oRouter.navTo("Detail", {EmployeeID: EmployeeID});
            },
            onCreateEmployee: function (oEvent) {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Create");
            }
        });
    });
