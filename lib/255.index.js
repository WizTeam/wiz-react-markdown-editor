(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[255],{

/***/ "./node_modules/prismjs/components/prism-mizar.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-mizar.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.mizar = {
	'comment': /::.+/,
	'keyword': /@proof\b|\b(?:according|aggregate|all|and|antonym|are|as|associativity|assume|asymmetry|attr|be|begin|being|by|canceled|case|cases|clusters?|coherence|commutativity|compatibility|connectedness|consider|consistency|constructors|contradiction|correctness|def|deffunc|define|definitions?|defpred|do|does|equals|end|environ|ex|exactly|existence|for|from|func|given|hence|hereby|holds|idempotence|identity|iff?|implies|involutiveness|irreflexivity|is|it|let|means|mode|non|not|notations?|now|of|or|otherwise|over|per|pred|prefix|projectivity|proof|provided|qua|reconsider|redefine|reduce|reducibility|reflexivity|registrations?|requirements|reserve|sch|schemes?|section|selector|set|sethood|st|struct|such|suppose|symmetry|synonym|take|that|the|then|theorems?|thesis|thus|to|transitivity|uniqueness|vocabular(?:y|ies)|when|where|with|wrt)\b/,
	'parameter': {
		pattern: /\$(?:10|\d)/,
		alias: 'variable'
	},
	'variable': /\w+(?=:)/,
	'number': /(?:\b|-)\d+\b/,
	'operator': /\.\.\.|->|&|\.?=/,
	'punctuation': /\(#|#\)|[,:;\[\](){}]/
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW1pemFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsUUFBUTtBQUNyQyxFIiwiZmlsZSI6IjI1NS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy5taXphciA9IHtcblx0J2NvbW1lbnQnOiAvOjouKy8sXG5cdCdrZXl3b3JkJzogL0Bwcm9vZlxcYnxcXGIoPzphY2NvcmRpbmd8YWdncmVnYXRlfGFsbHxhbmR8YW50b255bXxhcmV8YXN8YXNzb2NpYXRpdml0eXxhc3N1bWV8YXN5bW1ldHJ5fGF0dHJ8YmV8YmVnaW58YmVpbmd8Ynl8Y2FuY2VsZWR8Y2FzZXxjYXNlc3xjbHVzdGVycz98Y29oZXJlbmNlfGNvbW11dGF0aXZpdHl8Y29tcGF0aWJpbGl0eXxjb25uZWN0ZWRuZXNzfGNvbnNpZGVyfGNvbnNpc3RlbmN5fGNvbnN0cnVjdG9yc3xjb250cmFkaWN0aW9ufGNvcnJlY3RuZXNzfGRlZnxkZWZmdW5jfGRlZmluZXxkZWZpbml0aW9ucz98ZGVmcHJlZHxkb3xkb2VzfGVxdWFsc3xlbmR8ZW52aXJvbnxleHxleGFjdGx5fGV4aXN0ZW5jZXxmb3J8ZnJvbXxmdW5jfGdpdmVufGhlbmNlfGhlcmVieXxob2xkc3xpZGVtcG90ZW5jZXxpZGVudGl0eXxpZmY/fGltcGxpZXN8aW52b2x1dGl2ZW5lc3N8aXJyZWZsZXhpdml0eXxpc3xpdHxsZXR8bWVhbnN8bW9kZXxub258bm90fG5vdGF0aW9ucz98bm93fG9mfG9yfG90aGVyd2lzZXxvdmVyfHBlcnxwcmVkfHByZWZpeHxwcm9qZWN0aXZpdHl8cHJvb2Z8cHJvdmlkZWR8cXVhfHJlY29uc2lkZXJ8cmVkZWZpbmV8cmVkdWNlfHJlZHVjaWJpbGl0eXxyZWZsZXhpdml0eXxyZWdpc3RyYXRpb25zP3xyZXF1aXJlbWVudHN8cmVzZXJ2ZXxzY2h8c2NoZW1lcz98c2VjdGlvbnxzZWxlY3RvcnxzZXR8c2V0aG9vZHxzdHxzdHJ1Y3R8c3VjaHxzdXBwb3NlfHN5bW1ldHJ5fHN5bm9ueW18dGFrZXx0aGF0fHRoZXx0aGVufHRoZW9yZW1zP3x0aGVzaXN8dGh1c3x0b3x0cmFuc2l0aXZpdHl8dW5pcXVlbmVzc3x2b2NhYnVsYXIoPzp5fGllcyl8d2hlbnx3aGVyZXx3aXRofHdydClcXGIvLFxuXHQncGFyYW1ldGVyJzoge1xuXHRcdHBhdHRlcm46IC9cXCQoPzoxMHxcXGQpLyxcblx0XHRhbGlhczogJ3ZhcmlhYmxlJ1xuXHR9LFxuXHQndmFyaWFibGUnOiAvXFx3Kyg/PTopLyxcblx0J251bWJlcic6IC8oPzpcXGJ8LSlcXGQrXFxiLyxcblx0J29wZXJhdG9yJzogL1xcLlxcLlxcLnwtPnwmfFxcLj89Lyxcblx0J3B1bmN0dWF0aW9uJzogL1xcKCN8I1xcKXxbLDo7XFxbXFxdKCl7fV0vXG59OyJdLCJzb3VyY2VSb290IjoiIn0=