(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/prismjs/components/prism-autoit.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-autoit.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.autoit = {
	"comment": [
		/;.*/,
		{
			// The multi-line comments delimiters can actually be commented out with ";"
			pattern: /(^\s*)#(?:comments-start|cs)[\s\S]*?^\s*#(?:comments-end|ce)/m,
			lookbehind: true
		}
	],
	"url": {
		pattern: /(^\s*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,
		lookbehind: true
	},
	"string": {
		pattern: /(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,
		greedy: true,
		inside: {
			"variable": /([%$@])\w+\1/
		}
	},
	"directive": {
		pattern: /(^\s*)#\w+/m,
		lookbehind: true,
		alias: 'keyword'
	},
	"function": /\b\w+(?=\()/,
	// Variables and macros
	"variable": /[$@]\w+/,
	"keyword": /\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,
	"number": /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
	"boolean": /\b(?:True|False)\b/i,
	"operator": /<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Or|Not)\b/i,
	"punctuation": /[\[\]().,:]/
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWF1dG9pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiIzNS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy5hdXRvaXQgPSB7XG5cdFwiY29tbWVudFwiOiBbXG5cdFx0LzsuKi8sXG5cdFx0e1xuXHRcdFx0Ly8gVGhlIG11bHRpLWxpbmUgY29tbWVudHMgZGVsaW1pdGVycyBjYW4gYWN0dWFsbHkgYmUgY29tbWVudGVkIG91dCB3aXRoIFwiO1wiXG5cdFx0XHRwYXR0ZXJuOiAvKF5cXHMqKSMoPzpjb21tZW50cy1zdGFydHxjcylbXFxzXFxTXSo/XlxccyojKD86Y29tbWVudHMtZW5kfGNlKS9tLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH1cblx0XSxcblx0XCJ1cmxcIjoge1xuXHRcdHBhdHRlcm46IC8oXlxccyojaW5jbHVkZVxccyspKD86PFteXFxyXFxuPl0rPnxcIlteXFxyXFxuXCJdK1wiKS9tLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0fSxcblx0XCJzdHJpbmdcIjoge1xuXHRcdHBhdHRlcm46IC8oW1wiJ10pKD86XFwxXFwxfCg/IVxcMSlbXlxcclxcbl0pKlxcMS8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0XCJ2YXJpYWJsZVwiOiAvKFslJEBdKVxcdytcXDEvXG5cdFx0fVxuXHR9LFxuXHRcImRpcmVjdGl2ZVwiOiB7XG5cdFx0cGF0dGVybjogLyheXFxzKikjXFx3Ky9tLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0YWxpYXM6ICdrZXl3b3JkJ1xuXHR9LFxuXHRcImZ1bmN0aW9uXCI6IC9cXGJcXHcrKD89XFwoKS8sXG5cdC8vIFZhcmlhYmxlcyBhbmQgbWFjcm9zXG5cdFwidmFyaWFibGVcIjogL1skQF1cXHcrLyxcblx0XCJrZXl3b3JkXCI6IC9cXGIoPzpDYXNlfENvbnN0fENvbnRpbnVlKD86Q2FzZXxMb29wKXxEZWZhdWx0fERpbXxEb3xFbHNlKD86SWYpP3xFbmQoPzpGdW5jfElmfFNlbGVjdHxTd2l0Y2h8V2l0aCl8RW51bXxFeGl0KD86TG9vcCk/fEZvcnxGdW5jfEdsb2JhbHxJZnxJbnxMb2NhbHxOZXh0fE51bGx8UmVEaW18U2VsZWN0fFN0YXRpY3xTdGVwfFN3aXRjaHxUaGVufFRvfFVudGlsfFZvbGF0aWxlfFdFbmR8V2hpbGV8V2l0aClcXGIvaSxcblx0XCJudW1iZXJcIjogL1xcYig/OjB4W1xcZGEtZl0rfFxcZCsoPzpcXC5cXGQrKT8oPzplWystXT9cXGQrKT8pXFxiL2ksXG5cdFwiYm9vbGVhblwiOiAvXFxiKD86VHJ1ZXxGYWxzZSlcXGIvaSxcblx0XCJvcGVyYXRvclwiOiAvPFs9Pl0/fFstKypcXC89Jj5dPT98Wz9eXXxcXGIoPzpBbmR8T3J8Tm90KVxcYi9pLFxuXHRcInB1bmN0dWF0aW9uXCI6IC9bXFxbXFxdKCkuLDpdL1xufTsiXSwic291cmNlUm9vdCI6IiJ9