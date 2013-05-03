var data = require("sdk/self").data;
var prefix = "gClipboard-";
var pageMod = require("sdk/page-mod");
var clipboard = require("sdk/clipboard");
var simplePrefs = require('sdk/simple-prefs');
var getPrefJSON = function(prefs){
	return {
		showConfirm: (prefs.showConfirm === "Y"),
		whiteList: prefs.whiteList,
		authToken: prefs.authToken
	};
};
pageMod.PageMod({
	include: "*",
	contentScriptFile: data.url("content.js"),
	onAttach: function(worker){
		worker.port.on(prefix+"request", function(event_id){
			worker.port.emit(prefix+"response", event_id, clipboard.get());
		});
		worker.port.on(prefix+"set", function(event_id, content){
			clipboard.set(content, "text");
			worker.port.emit(prefix+"response", event_id, content);
		});
		simplePrefs.on("", function(){
			worker.port.emit(prefix+"update", getPrefJSON(simplePrefs.prefs));
		});
		worker.port.emit(prefix+"init", getPrefJSON(simplePrefs.prefs));
	}
});