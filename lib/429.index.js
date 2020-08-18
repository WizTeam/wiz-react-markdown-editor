(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[429],{

/***/ "./node_modules/prismjs/components/prism-vhdl.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-vhdl.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.vhdl = {
	'comment': /--.+/,
	// support for all logic vectors
	'vhdl-vectors': {
		'pattern': /\b[oxb]"[\da-f_]+"|"[01uxzwlh-]+"/i,
		'alias': 'number'
	},
	// support for operator overloading included
	'quoted-function': {
		pattern: /"\S+?"(?=\()/,
		alias: 'function'
	},
	'string': /"(?:[^\\"\r\n]|\\(?:\r\n|[\s\S]))*"/,
	'constant': /\b(?:use|library)\b/i,
	// support for predefined attributes included
	'keyword': /\b(?:'active|'ascending|'base|'delayed|'driving|'driving_value|'event|'high|'image|'instance_name|'last_active|'last_event|'last_value|'left|'leftof|'length|'low|'path_name|'pos|'pred|'quiet|'range|'reverse_range|'right|'rightof|'simple_name|'stable|'succ|'transaction|'val|'value|access|after|alias|all|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|null|of|on|open|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with)\b/i,
	'boolean': /\b(?:true|false)\b/i,
	'function': /\w+(?=\()/,
	// decimal, based, physical, and exponential numbers supported
	'number': /'[01uxzwlh-]'|\b(?:\d+#[\da-f_.]+#|\d[\d_.]*)(?:e[-+]?\d+)?/i,
	'operator': /[<>]=?|:=|[-+*/&=]|\b(?:abs|not|mod|rem|sll|srl|sla|sra|rol|ror|and|or|nand|xnor|xor|nor)\b/i,
	'punctuation': /[{}[\];(),.:]/
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXZoZGwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixJQUFJO0FBQ3hCIiwiZmlsZSI6IjQyOS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy52aGRsID0ge1xuXHQnY29tbWVudCc6IC8tLS4rLyxcblx0Ly8gc3VwcG9ydCBmb3IgYWxsIGxvZ2ljIHZlY3RvcnNcblx0J3ZoZGwtdmVjdG9ycyc6IHtcblx0XHQncGF0dGVybic6IC9cXGJbb3hiXVwiW1xcZGEtZl9dK1wifFwiWzAxdXh6d2xoLV0rXCIvaSxcblx0XHQnYWxpYXMnOiAnbnVtYmVyJ1xuXHR9LFxuXHQvLyBzdXBwb3J0IGZvciBvcGVyYXRvciBvdmVybG9hZGluZyBpbmNsdWRlZFxuXHQncXVvdGVkLWZ1bmN0aW9uJzoge1xuXHRcdHBhdHRlcm46IC9cIlxcUys/XCIoPz1cXCgpLyxcblx0XHRhbGlhczogJ2Z1bmN0aW9uJ1xuXHR9LFxuXHQnc3RyaW5nJzogL1wiKD86W15cXFxcXCJcXHJcXG5dfFxcXFwoPzpcXHJcXG58W1xcc1xcU10pKSpcIi8sXG5cdCdjb25zdGFudCc6IC9cXGIoPzp1c2V8bGlicmFyeSlcXGIvaSxcblx0Ly8gc3VwcG9ydCBmb3IgcHJlZGVmaW5lZCBhdHRyaWJ1dGVzIGluY2x1ZGVkXG5cdCdrZXl3b3JkJzogL1xcYig/OidhY3RpdmV8J2FzY2VuZGluZ3wnYmFzZXwnZGVsYXllZHwnZHJpdmluZ3wnZHJpdmluZ192YWx1ZXwnZXZlbnR8J2hpZ2h8J2ltYWdlfCdpbnN0YW5jZV9uYW1lfCdsYXN0X2FjdGl2ZXwnbGFzdF9ldmVudHwnbGFzdF92YWx1ZXwnbGVmdHwnbGVmdG9mfCdsZW5ndGh8J2xvd3wncGF0aF9uYW1lfCdwb3N8J3ByZWR8J3F1aWV0fCdyYW5nZXwncmV2ZXJzZV9yYW5nZXwncmlnaHR8J3JpZ2h0b2Z8J3NpbXBsZV9uYW1lfCdzdGFibGV8J3N1Y2N8J3RyYW5zYWN0aW9ufCd2YWx8J3ZhbHVlfGFjY2Vzc3xhZnRlcnxhbGlhc3xhbGx8YXJjaGl0ZWN0dXJlfGFycmF5fGFzc2VydHxhdHRyaWJ1dGV8YmVnaW58YmxvY2t8Ym9keXxidWZmZXJ8YnVzfGNhc2V8Y29tcG9uZW50fGNvbmZpZ3VyYXRpb258Y29uc3RhbnR8ZGlzY29ubmVjdHxkb3dudG98ZWxzZXxlbHNpZnxlbmR8ZW50aXR5fGV4aXR8ZmlsZXxmb3J8ZnVuY3Rpb258Z2VuZXJhdGV8Z2VuZXJpY3xncm91cHxndWFyZGVkfGlmfGltcHVyZXxpbnxpbmVydGlhbHxpbm91dHxpc3xsYWJlbHxsaWJyYXJ5fGxpbmthZ2V8bGl0ZXJhbHxsb29wfG1hcHxuZXd8bmV4dHxudWxsfG9mfG9ufG9wZW58b3RoZXJzfG91dHxwYWNrYWdlfHBvcnR8cG9zdHBvbmVkfHByb2NlZHVyZXxwcm9jZXNzfHB1cmV8cmFuZ2V8cmVjb3JkfHJlZ2lzdGVyfHJlamVjdHxyZXBvcnR8cmV0dXJufHNlbGVjdHxzZXZlcml0eXxzaGFyZWR8c2lnbmFsfHN1YnR5cGV8dGhlbnx0b3x0cmFuc3BvcnR8dHlwZXx1bmFmZmVjdGVkfHVuaXRzfHVudGlsfHVzZXx2YXJpYWJsZXx3YWl0fHdoZW58d2hpbGV8d2l0aClcXGIvaSxcblx0J2Jvb2xlYW4nOiAvXFxiKD86dHJ1ZXxmYWxzZSlcXGIvaSxcblx0J2Z1bmN0aW9uJzogL1xcdysoPz1cXCgpLyxcblx0Ly8gZGVjaW1hbCwgYmFzZWQsIHBoeXNpY2FsLCBhbmQgZXhwb25lbnRpYWwgbnVtYmVycyBzdXBwb3J0ZWRcblx0J251bWJlcic6IC8nWzAxdXh6d2xoLV0nfFxcYig/OlxcZCsjW1xcZGEtZl8uXSsjfFxcZFtcXGRfLl0qKSg/OmVbLStdP1xcZCspPy9pLFxuXHQnb3BlcmF0b3InOiAvWzw+XT0/fDo9fFstKyovJj1dfFxcYig/OmFic3xub3R8bW9kfHJlbXxzbGx8c3JsfHNsYXxzcmF8cm9sfHJvcnxhbmR8b3J8bmFuZHx4bm9yfHhvcnxub3IpXFxiL2ksXG5cdCdwdW5jdHVhdGlvbic6IC9be31bXFxdOygpLC46XS9cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9