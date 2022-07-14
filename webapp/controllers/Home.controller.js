sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessageToast, ResourceModel) {
    "use strict";
    return Controller.extend("TestApp", {
      changeLanguaje: function () {
        let i18nModel = this.getView().getModel("i18n");
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

        this.getView().setModel(i18nModel, "i18n");
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
