sap.ui.define([
	"./utilities"
], function() {
	"use strict";

	// class providing static utility methods to retrieve entity default values.

	return {
		getDefaultValuesForPage4: function() {
			return {
				"ID": "id-" + Date.now().toString(),
				"ORIGEN": "",
				"REMITENTE": "",
				"WORKFLOW": "",
				"PASO": "",
				"REFERENCIA": "",
				"FECHA_RADICACION": "",
				"FECHA_ENTRADA": "",
				"TIEMPO": ""
			};
		}
	};
});
