var SettingsSchema = require('../models/settings');

var InfoData = {
	NumeFirma: "ABC",
	AdresaURL: "ABC",
	NumeWebsite: "ABC",
	AdresaEmailContact: "ABC",
	AdresaTelefonContact: "ABC",
};

var engineSettingsData = {
	NumeBazaDeDate: "PieseAutoWebsite",
	jqueryjs: true,
	AutomaticAWB: true,
	settingsRefreshMS: 1000,
	port: 80,
	language: "ro"
};

var DesignData = {
	CSS: "ABC",
	Background: "ABC",
	layout: "ABC",
};

var TranslationData = {
	ro: {},
	en: {}
};
CheckForUpdates();
function CheckForUpdates(){
	SettingsSchema.findOne({}, function (err, results) {
		console.log("Found config table");
		if (err) return next(err);
		if(!results){
			var options = new SettingsSchema();
			options.save(function(options){
				if (err) return next(err);
				console.log("Generating new config");
			}); 
		} else {
			console.log("Found update in config table.. loading data");
			InfoData = results.Info;
			engineSettingsData = results.engineSettings;
			DesignData = results.Design;
			TranslationData = results.Translation;
			console.dir("<- Applied new data update ->");
		}
	});
}
exports.Info = InfoData;
exports.engineSettings = engineSettingsData;
exports.Design = DesignData;
exports.Translation = TranslationData;