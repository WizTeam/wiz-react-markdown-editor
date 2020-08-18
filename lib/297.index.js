(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[297],{

/***/ "./node_modules/prismjs/components/prism-peoplecode.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-peoplecode.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.peoplecode = {
	'comment': RegExp([
		// C-style multiline comments
		/\/\*[\s\S]*?\*\//.source,
		// REM comments
		/\bREM[^;]*;/.source,
		// Nested <* *> comments
		/<\*(?:[^<*]|\*(?!>)|<(?!\*)|<\*(?:(?!\*>)[\s\S])*\*>)*\*>/.source,
		// /+ +/ comments
		/\/\+[\s\S]*?\+\//.source,
	].join("|")),
	'string': {
		pattern: /'(?:''|[^'\r\n])*'(?!')|"(?:""|[^"\r\n])*"(?!")/,
		greedy: true
	},
	'variable': /%\w+/,
	'function-definition': {
		pattern: /((?:^|[^\w-])(?:function|method)\s+)\w+/i,
		lookbehind: true,
		alias: 'function'
	},
	'class-name': {
		pattern: /((?:^|[^-\w])(?:as|catch|class|component|create|extends|global|implements|instance|local|of|property|returns)\s+)\w+(?::\w+)*/i,
		lookbehind: true,
		inside: {
			'punctuation': /:/
		}
	},
	'keyword': /\b(?:abstract|alias|as|catch|class|component|constant|create|declare|else|end-(?:class|evaluate|for|function|get|if|method|set|try|while)|evaluate|extends|for|function|get|global|implements|import|instance|if|library|local|method|null|of|out|peopleCode|private|program|property|protected|readonly|ref|repeat|returns?|set|step|then|throw|to|try|until|value|when(?:-other)?|while)\b/i,
	'operator-keyword': {
		pattern: /\b(?:and|not|or)\b/i,
		alias: 'operator'
	},
	'function': /[_a-z]\w*(?=\s*\()/i,

	'boolean': /\b(?:false|true)\b/i,
	'number': /\b\d+(?:\.\d+)?\b/,
	'operator': /<>|[<>]=?|!=|\*\*|[-+*/|=@]/,
	'punctuation': /[:.;,()[\]]/
};

Prism.languages.pcode = Prism.languages.peoplecode;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXBlb3BsZWNvZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBIiwiZmlsZSI6IjI5Ny5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy5wZW9wbGVjb2RlID0ge1xuXHQnY29tbWVudCc6IFJlZ0V4cChbXG5cdFx0Ly8gQy1zdHlsZSBtdWx0aWxpbmUgY29tbWVudHNcblx0XHQvXFwvXFwqW1xcc1xcU10qP1xcKlxcLy8uc291cmNlLFxuXHRcdC8vIFJFTSBjb21tZW50c1xuXHRcdC9cXGJSRU1bXjtdKjsvLnNvdXJjZSxcblx0XHQvLyBOZXN0ZWQgPCogKj4gY29tbWVudHNcblx0XHQvPFxcKig/OltePCpdfFxcKig/IT4pfDwoPyFcXCopfDxcXCooPzooPyFcXCo+KVtcXHNcXFNdKSpcXCo+KSpcXCo+Ly5zb3VyY2UsXG5cdFx0Ly8gLysgKy8gY29tbWVudHNcblx0XHQvXFwvXFwrW1xcc1xcU10qP1xcK1xcLy8uc291cmNlLFxuXHRdLmpvaW4oXCJ8XCIpKSxcblx0J3N0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvJyg/OicnfFteJ1xcclxcbl0pKicoPyEnKXxcIig/OlwiXCJ8W15cIlxcclxcbl0pKlwiKD8hXCIpLyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J3ZhcmlhYmxlJzogLyVcXHcrLyxcblx0J2Z1bmN0aW9uLWRlZmluaXRpb24nOiB7XG5cdFx0cGF0dGVybjogLygoPzpefFteXFx3LV0pKD86ZnVuY3Rpb258bWV0aG9kKVxccyspXFx3Ky9pLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0YWxpYXM6ICdmdW5jdGlvbidcblx0fSxcblx0J2NsYXNzLW5hbWUnOiB7XG5cdFx0cGF0dGVybjogLygoPzpefFteLVxcd10pKD86YXN8Y2F0Y2h8Y2xhc3N8Y29tcG9uZW50fGNyZWF0ZXxleHRlbmRzfGdsb2JhbHxpbXBsZW1lbnRzfGluc3RhbmNlfGxvY2FsfG9mfHByb3BlcnR5fHJldHVybnMpXFxzKylcXHcrKD86OlxcdyspKi9pLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQncHVuY3R1YXRpb24nOiAvOi9cblx0XHR9XG5cdH0sXG5cdCdrZXl3b3JkJzogL1xcYig/OmFic3RyYWN0fGFsaWFzfGFzfGNhdGNofGNsYXNzfGNvbXBvbmVudHxjb25zdGFudHxjcmVhdGV8ZGVjbGFyZXxlbHNlfGVuZC0oPzpjbGFzc3xldmFsdWF0ZXxmb3J8ZnVuY3Rpb258Z2V0fGlmfG1ldGhvZHxzZXR8dHJ5fHdoaWxlKXxldmFsdWF0ZXxleHRlbmRzfGZvcnxmdW5jdGlvbnxnZXR8Z2xvYmFsfGltcGxlbWVudHN8aW1wb3J0fGluc3RhbmNlfGlmfGxpYnJhcnl8bG9jYWx8bWV0aG9kfG51bGx8b2Z8b3V0fHBlb3BsZUNvZGV8cHJpdmF0ZXxwcm9ncmFtfHByb3BlcnR5fHByb3RlY3RlZHxyZWFkb25seXxyZWZ8cmVwZWF0fHJldHVybnM/fHNldHxzdGVwfHRoZW58dGhyb3d8dG98dHJ5fHVudGlsfHZhbHVlfHdoZW4oPzotb3RoZXIpP3x3aGlsZSlcXGIvaSxcblx0J29wZXJhdG9yLWtleXdvcmQnOiB7XG5cdFx0cGF0dGVybjogL1xcYig/OmFuZHxub3R8b3IpXFxiL2ksXG5cdFx0YWxpYXM6ICdvcGVyYXRvcidcblx0fSxcblx0J2Z1bmN0aW9uJzogL1tfYS16XVxcdyooPz1cXHMqXFwoKS9pLFxuXG5cdCdib29sZWFuJzogL1xcYig/OmZhbHNlfHRydWUpXFxiL2ksXG5cdCdudW1iZXInOiAvXFxiXFxkKyg/OlxcLlxcZCspP1xcYi8sXG5cdCdvcGVyYXRvcic6IC88PnxbPD5dPT98IT18XFwqXFwqfFstKyovfD1AXS8sXG5cdCdwdW5jdHVhdGlvbic6IC9bOi47LCgpW1xcXV0vXG59O1xuXG5QcmlzbS5sYW5ndWFnZXMucGNvZGUgPSBQcmlzbS5sYW5ndWFnZXMucGVvcGxlY29kZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=