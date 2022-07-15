sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";
  return Controller.extend("TestApp", {
    onInit: function () {
      alert("Loaded Second Page");
    },
  });
});
