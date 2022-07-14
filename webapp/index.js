sap.ui.define(
  ["sap/ui/core/ComponentContainer"],
  function (ComponentContainer) {
    "use strict";

    new ComponentContainer({
      name: "TestApp",
      settings: {
        id: "app",
      },
      async: true,
    }).placeAt("content");
  }
);
