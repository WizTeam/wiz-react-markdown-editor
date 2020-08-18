(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[105],{

/***/ "./node_modules/prismjs/components/prism-eiffel.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-eiffel.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.eiffel = {
	'comment': /--.*/,
	'string': [
		// Aligned-verbatim-strings
		{
			pattern: /"([^[]*)\[[\s\S]*?\]\1"/,
			greedy: true
		},
		// Non-aligned-verbatim-strings
		{
			pattern: /"([^{]*)\{[\s\S]*?\}\1"/,
			greedy: true
		},
		// Single-line string
		{
			pattern: /"(?:%\s*\n\s*%|%.|[^%"\r\n])*"/,
			greedy: true
		}
	],
	// normal char | special char | char code
	'char': /'(?:%.|[^%'\r\n])+'/,
	'keyword': /\b(?:across|agent|alias|all|and|attached|as|assign|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i,
	'boolean': /\b(?:True|False)\b/i,
	// Convention: class-names are always all upper-case characters
	'class-name': {
		'pattern': /\b[A-Z][\dA-Z_]*\b/,
		'alias': 'builtin'
	},
	'number': [
		// hexa | octal | bin
		/\b0[xcb][\da-f](?:_*[\da-f])*\b/i,
		// Decimal
		/(?:\b\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?e[+-]?)?\d(?:_*\d)*\b|\b\d(?:_*\d)*\b\.?/i
	],
	'punctuation': /:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/,
	'operator': /\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWVpZmZlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLEtBQUssVUFBVTtBQUNqQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxJQUFJO0FBQ3ZEO0FBQ0EiLCJmaWxlIjoiMTA1LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLmVpZmZlbCA9IHtcblx0J2NvbW1lbnQnOiAvLS0uKi8sXG5cdCdzdHJpbmcnOiBbXG5cdFx0Ly8gQWxpZ25lZC12ZXJiYXRpbS1zdHJpbmdzXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogL1wiKFteW10qKVxcW1tcXHNcXFNdKj9cXF1cXDFcIi8sXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdC8vIE5vbi1hbGlnbmVkLXZlcmJhdGltLXN0cmluZ3Ncblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvXCIoW157XSopXFx7W1xcc1xcU10qP1xcfVxcMVwiLyxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH0sXG5cdFx0Ly8gU2luZ2xlLWxpbmUgc3RyaW5nXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogL1wiKD86JVxccypcXG5cXHMqJXwlLnxbXiVcIlxcclxcbl0pKlwiLyxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH1cblx0XSxcblx0Ly8gbm9ybWFsIGNoYXIgfCBzcGVjaWFsIGNoYXIgfCBjaGFyIGNvZGVcblx0J2NoYXInOiAvJyg/OiUufFteJSdcXHJcXG5dKSsnLyxcblx0J2tleXdvcmQnOiAvXFxiKD86YWNyb3NzfGFnZW50fGFsaWFzfGFsbHxhbmR8YXR0YWNoZWR8YXN8YXNzaWdufGF0dHJpYnV0ZXxjaGVja3xjbGFzc3xjb252ZXJ0fGNyZWF0ZXxDdXJyZW50fGRlYnVnfGRlZmVycmVkfGRldGFjaGFibGV8ZG98ZWxzZXxlbHNlaWZ8ZW5kfGVuc3VyZXxleHBhbmRlZHxleHBvcnR8ZXh0ZXJuYWx8ZmVhdHVyZXxmcm9tfGZyb3plbnxpZnxpbXBsaWVzfGluaGVyaXR8aW5zcGVjdHxpbnZhcmlhbnR8bGlrZXxsb2NhbHxsb29wfG5vdHxub3RlfG9ic29sZXRlfG9sZHxvbmNlfG9yfFByZWN1cnNvcnxyZWRlZmluZXxyZW5hbWV8cmVxdWlyZXxyZXNjdWV8UmVzdWx0fHJldHJ5fHNlbGVjdHxzZXBhcmF0ZXxzb21lfHRoZW58dW5kZWZpbmV8dW50aWx8dmFyaWFudHxWb2lkfHdoZW58eG9yKVxcYi9pLFxuXHQnYm9vbGVhbic6IC9cXGIoPzpUcnVlfEZhbHNlKVxcYi9pLFxuXHQvLyBDb252ZW50aW9uOiBjbGFzcy1uYW1lcyBhcmUgYWx3YXlzIGFsbCB1cHBlci1jYXNlIGNoYXJhY3RlcnNcblx0J2NsYXNzLW5hbWUnOiB7XG5cdFx0J3BhdHRlcm4nOiAvXFxiW0EtWl1bXFxkQS1aX10qXFxiLyxcblx0XHQnYWxpYXMnOiAnYnVpbHRpbidcblx0fSxcblx0J251bWJlcic6IFtcblx0XHQvLyBoZXhhIHwgb2N0YWwgfCBiaW5cblx0XHQvXFxiMFt4Y2JdW1xcZGEtZl0oPzpfKltcXGRhLWZdKSpcXGIvaSxcblx0XHQvLyBEZWNpbWFsXG5cdFx0Lyg/OlxcYlxcZCg/Ol8qXFxkKSopP1xcLig/Oig/OlxcZCg/Ol8qXFxkKSopP2VbKy1dPyk/XFxkKD86XypcXGQpKlxcYnxcXGJcXGQoPzpfKlxcZCkqXFxiXFwuPy9pXG5cdF0sXG5cdCdwdW5jdHVhdGlvbic6IC86PXw8PHw+PnxcXChcXHx8XFx8XFwpfC0+fFxcLig/PVxcdyl8W3t9W1xcXTsoKSw6P10vLFxuXHQnb3BlcmF0b3InOiAvXFxcXFxcXFx8XFx8XFwuXFwuXFx8fFxcLlxcLnxcXC9bflxcLz1dP3xbPjxdPT98Wy0rKl49fl0vXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==