sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/resource/ResourceModel"],
  function (UIComponent, ResourceModel) {
    "use strict";

    return UIComponent.extend("samples.components.sample.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        rootView: {
          viewName: "TestApp.views.App",
          type: "XML",
          //type: "JS",
          async: true,
          id: "app",
        },
        routing: {
          config: {
            routerClass: "sap.m.routing.Router",
            type: "View",
            viewType: "XML",
            path: "TestApp.views",
            controlId: "app",
            controlAggregation: "pages",
            transition: "slide",
            async: true,
            bypassed: {
              target: "notFound",
            },
          },
          routes: [
            {
              pattern: "",
              name: "Home",
              target: "Home",
            },
            {
              pattern: "Second",
              name: "Second",
              target: "Second",
            },
          ],
          targets: {
            Home: {
              id: "Home",
              name: "Home",
              level: 1,
            },
            Second: {
              id: "Second",
              name: "Second",
              level: 2,
              transition: "show",
            },
            notFound: {
              id: "notFound",
              name: "NotFound",
              transition: "show",
            },
          },
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

        // create the views based on the url/hash
        this.getRouter().initialize();
      },
    });
  }
);
