sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessageToast, ResourceModel) {
    "use strict";
    return Controller.extend("TestApp", {
      nextPage: function () {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("Second");
      },
      changeLanguaje: function () {
        // let i18nModel = this.getModel("i18n");
        let i18nModel = this.getView().getModel("i18n"); //Para vista XML
        if (
          i18nModel.getResourceBundle().getText("alterLenguaje") === "Spanish"
        ) {
          i18nModel.destroy();
          i18nModel = new ResourceModel({
            bundleName: "TestApp.i18n.i18n_ES",
            supportedLocales: [""],
            fallbackLocale: "",
          });
        } else {
          i18nModel.destroy();
          i18nModel = new ResourceModel({
            bundleName: "TestApp.i18n.i18n_EN",
            supportedLocales: [""],
            fallbackLocale: "",
          });
        }

        // this.setModel(i18nModel, "i18n");
        this.getView().setModel(i18nModel, "i18n"); //Para vista XML

        MessageToast.show(
          i18nModel.getResourceBundle().getText("alterLenguajeChange"),
          {
            duration: 1500,
          }
        );
      },
    });
  }
);
