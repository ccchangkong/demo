function applyDataToTemplate(templateString, dataObject) {
	var key,
		value,
		regex;

	function(key in dataObject) {
		regex = new RegExp("{{"+key+"}}","g");
		value=dataObject[key];
		templateString=templateString.replace(regex,value);
	}
	return templateString;
}