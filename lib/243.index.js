(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[243],{

/***/ "./node_modules/prismjs/components/prism-makefile.js":
/*!***********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-makefile.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.makefile = {
	'comment': {
		pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
		lookbehind: true
	},
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},

	// Built-in target names
	'builtin': /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,

	// Targets
	'symbol': {
		pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
		inside: {
			'variable': /\$+(?:[^(){}:#=\s]+|(?=[({]))/
		}
	},
	'variable': /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,

	'keyword': [
		// Directives
		/-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
		// Functions
		{
			pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
			lookbehind: true
		}
	],
	'operator': /(?:::|[?:+!])?=|[|@]/,
	'punctuation': /[:;(){}]/
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW1ha2VmaWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixjQUFjO0FBQzFDO0FBQ0EsRUFBRTtBQUNGLDBCQUEwQixnQ0FBZ0M7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUk7QUFDeEIsRSIsImZpbGUiOiIyNDMuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJQcmlzbS5sYW5ndWFnZXMubWFrZWZpbGUgPSB7XG5cdCdjb21tZW50Jzoge1xuXHRcdHBhdHRlcm46IC8oXnxbXlxcXFxdKSMoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXxbXlxcXFxcXHJcXG5dKSovLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0fSxcblx0J3N0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvKFtcIiddKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXG5cdC8vIEJ1aWx0LWluIHRhcmdldCBuYW1lc1xuXHQnYnVpbHRpbic6IC9cXC5bQS1aXVteOiM9XFxzXSsoPz1cXHMqOig/IT0pKS8sXG5cblx0Ly8gVGFyZ2V0c1xuXHQnc3ltYm9sJzoge1xuXHRcdHBhdHRlcm46IC9eW146PVxcclxcbl0rKD89XFxzKjooPyE9KSkvbSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCd2YXJpYWJsZSc6IC9cXCQrKD86W14oKXt9OiM9XFxzXSt8KD89Wyh7XSkpL1xuXHRcdH1cblx0fSxcblx0J3ZhcmlhYmxlJzogL1xcJCsoPzpbXigpe306Iz1cXHNdK3xcXChbQColPF4rP11bREZdXFwpfCg/PVsoe10pKS8sXG5cblx0J2tleXdvcmQnOiBbXG5cdFx0Ly8gRGlyZWN0aXZlc1xuXHRcdC8taW5jbHVkZVxcYnxcXGIoPzpkZWZpbmV8ZWxzZXxlbmRlZnxlbmRpZnxleHBvcnR8aWZuP2RlZnxpZm4/ZXF8aW5jbHVkZXxvdmVycmlkZXxwcml2YXRlfHNpbmNsdWRlfHVuZGVmaW5lfHVuZXhwb3J0fHZwYXRoKVxcYi8sXG5cdFx0Ly8gRnVuY3Rpb25zXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhcXCgpKD86YWRkc3VmZml4fGFic3BhdGh8YW5kfGJhc2VuYW1lfGNhbGx8ZGlyfGVycm9yfGV2YWx8ZmlsZXxmaWx0ZXIoPzotb3V0KT98ZmluZHN0cmluZ3xmaXJzdHdvcmR8Zmxhdm9yfGZvcmVhY2h8Z3VpbGV8aWZ8aW5mb3xqb2lufGxhc3R3b3JkfGxvYWR8bm90ZGlyfG9yfG9yaWdpbnxwYXRzdWJzdHxyZWFscGF0aHxzaGVsbHxzb3J0fHN0cmlwfHN1YnN0fHN1ZmZpeHx2YWx1ZXx3YXJuaW5nfHdpbGRjYXJkfHdvcmQoPzpzfGxpc3QpPykoPz1bIFxcdF0pLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9XG5cdF0sXG5cdCdvcGVyYXRvcic6IC8oPzo6OnxbPzorIV0pPz18W3xAXS8sXG5cdCdwdW5jdHVhdGlvbic6IC9bOjsoKXt9XS9cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==