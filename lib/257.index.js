(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[257],{

/***/ "./node_modules/prismjs/components/prism-monkey.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-monkey.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.monkey = {
	'string': /"[^"\r\n]*"/,
	'comment': [
		{
			pattern: /^#Rem\s+[\s\S]*?^#End/im,
			greedy: true
		},
		{
			pattern: /'.+/,
			greedy: true
		}
	],
	'preprocessor': {
		pattern: /(^[ \t]*)#.+/m,
		lookbehind: true,
		alias: 'comment'
	},
	'function': /\w+(?=\()/,
	'type-char': {
		pattern: /(\w)[?%#$]/,
		lookbehind: true,
		alias: 'variable'
	},
	'number': {
		pattern: /((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+(?:(?!\.\.)\.\d*)?|\$[\da-f]+)/i,
		lookbehind: true
	},
	'keyword': /\b(?:Void|Strict|Public|Private|Property|Bool|Int|Float|String|Array|Object|Continue|Exit|Import|Extern|New|Self|Super|Try|Catch|Eachin|True|False|Extends|Abstract|Final|Select|Case|Default|Const|Local|Global|Field|Method|Function|Class|End|If|Then|Else|ElseIf|EndIf|While|Wend|Repeat|Until|Forever|For|To|Step|Next|Return|Module|Interface|Implements|Inline|Throw|Null)\b/i,
	'operator': /\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,
	'punctuation': /[.,:;()\[\]]/
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW1vbmtleS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsRSIsImZpbGUiOiIyNTcuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJQcmlzbS5sYW5ndWFnZXMubW9ua2V5ID0ge1xuXHQnc3RyaW5nJzogL1wiW15cIlxcclxcbl0qXCIvLFxuXHQnY29tbWVudCc6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvXiNSZW1cXHMrW1xcc1xcU10qP14jRW5kL2ltLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvJy4rLyxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH1cblx0XSxcblx0J3ByZXByb2Nlc3Nvcic6IHtcblx0XHRwYXR0ZXJuOiAvKF5bIFxcdF0qKSMuKy9tLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0YWxpYXM6ICdjb21tZW50J1xuXHR9LFxuXHQnZnVuY3Rpb24nOiAvXFx3Kyg/PVxcKCkvLFxuXHQndHlwZS1jaGFyJzoge1xuXHRcdHBhdHRlcm46IC8oXFx3KVs/JSMkXS8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRhbGlhczogJ3ZhcmlhYmxlJ1xuXHR9LFxuXHQnbnVtYmVyJzoge1xuXHRcdHBhdHRlcm46IC8oKD86XFwuXFwuKT8pKD86KD86XFxifFxcQi1cXC4/fFxcQlxcLilcXGQrKD86KD8hXFwuXFwuKVxcLlxcZCopP3xcXCRbXFxkYS1mXSspL2ksXG5cdFx0bG9va2JlaGluZDogdHJ1ZVxuXHR9LFxuXHQna2V5d29yZCc6IC9cXGIoPzpWb2lkfFN0cmljdHxQdWJsaWN8UHJpdmF0ZXxQcm9wZXJ0eXxCb29sfEludHxGbG9hdHxTdHJpbmd8QXJyYXl8T2JqZWN0fENvbnRpbnVlfEV4aXR8SW1wb3J0fEV4dGVybnxOZXd8U2VsZnxTdXBlcnxUcnl8Q2F0Y2h8RWFjaGlufFRydWV8RmFsc2V8RXh0ZW5kc3xBYnN0cmFjdHxGaW5hbHxTZWxlY3R8Q2FzZXxEZWZhdWx0fENvbnN0fExvY2FsfEdsb2JhbHxGaWVsZHxNZXRob2R8RnVuY3Rpb258Q2xhc3N8RW5kfElmfFRoZW58RWxzZXxFbHNlSWZ8RW5kSWZ8V2hpbGV8V2VuZHxSZXBlYXR8VW50aWx8Rm9yZXZlcnxGb3J8VG98U3RlcHxOZXh0fFJldHVybnxNb2R1bGV8SW50ZXJmYWNlfEltcGxlbWVudHN8SW5saW5lfFRocm93fE51bGwpXFxiL2ksXG5cdCdvcGVyYXRvcic6IC9cXC5cXC58PFs9Pl0/fD49P3w6Pz18KD86WytcXC0qXFwvJn58XXxcXGIoPzpNb2R8U2hsfFNocilcXGIpPT98XFxiKD86QW5kfE5vdHxPcilcXGIvaSxcblx0J3B1bmN0dWF0aW9uJzogL1suLDo7KClcXFtcXF1dL1xufTsiXSwic291cmNlUm9vdCI6IiJ9