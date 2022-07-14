sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/resource/ResourceModel"],
  function (UIComponent, ResourceModel) {
    "use strict";

    return UIComponent.extend("samples.components.sample.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        rootView: {
          viewName: "TestApp.views.Home",
          type: "XML",
          async: true,
          id: "app",
        },
      },

      init: function () {
        //Call the init function of the parent component
        UIComponent.prototype.init.apply(this, arguments);

        // Set the i18n model for the component
        let i18nModel = new ResourceModel({
          bundleName: "TestApp.i18n.i18n",
          supportedLocales: [""],
          fallbackLocale: "",
        });

        this.setModel(i18nModel, "i18n");
      },
    });
  }
);
