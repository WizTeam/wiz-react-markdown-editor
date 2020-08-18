(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[111],{

/***/ "./node_modules/prismjs/components/prism-elm.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-elm.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.elm = {
	comment: /--.*|{-[\s\S]*?-}/,
	char: {
		pattern: /'(?:[^\\'\r\n]|\\(?:[abfnrtv\\']|\d+|x[0-9a-fA-F]+))'/,
		greedy: true
	},
	string: [
		{
			// Multiline strings are wrapped in triple ". Quotes may appear unescaped.
			pattern: /"""[\s\S]*?"""/,
			greedy: true
		},
		{
			pattern: /"(?:[^\\"\r\n]|\\(?:[abfnrtv\\"]|\d+|x[0-9a-fA-F]+))*"/,
			greedy: true
		}
	],
	import_statement: {
		// The imported or hidden names are not included in this import
		// statement. This is because we want to highlight those exactly like
		// we do for the names in the program.
		pattern: /^\s*import\s+[A-Z]\w*(?:\.[A-Z]\w*)*(?:\s+as\s+(?:[A-Z]\w*)(?:\.[A-Z]\w*)*)?(?:\s+exposing\s+)?/m,
		inside: {
			keyword: /\b(?:import|as|exposing)\b/
		}
	},
	keyword: /\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\b/,
	// These are builtin variables only. Constructors are highlighted later as a constant.
	builtin: /\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\b/,
	// decimal integers and floating point numbers | hexadecimal integers
	number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/i,
	// Most of this is needed because of the meaning of a single '.'.
	// If it stands alone freely, it is the function composition.
	// It may also be a separator between a module name and an identifier => no
	// operator. If it comes together with other special characters it is an
	// operator too.
	// Valid operator characters in 0.18: +-/*=.$<>:&|^?%#@~!
	// Ref: https://groups.google.com/forum/#!msg/elm-dev/0AHSnDdkSkQ/E0SVU70JEQAJ
	operator: /\s\.\s|[+\-/*=.$<>:&|^?%#@~!]{2,}|[+\-/*=$<>:&|^?%#@~!]/,
	// In Elm, nearly everything is a variable, do not highlight these.
	hvariable: /\b(?:[A-Z]\w*\.)*[a-z]\w*\b/,
	constant: /\b(?:[A-Z]\w*\.)*[A-Z]\w*\b/,
	punctuation: /[{}[\]|(),.:]/
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWVsbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGlCQUFpQixXQUFXO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxHQUFHO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQiIsImZpbGUiOiIxMTEuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJQcmlzbS5sYW5ndWFnZXMuZWxtID0ge1xuXHRjb21tZW50OiAvLS0uKnx7LVtcXHNcXFNdKj8tfS8sXG5cdGNoYXI6IHtcblx0XHRwYXR0ZXJuOiAvJyg/OlteXFxcXCdcXHJcXG5dfFxcXFwoPzpbYWJmbnJ0dlxcXFwnXXxcXGQrfHhbMC05YS1mQS1GXSspKScvLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHRzdHJpbmc6IFtcblx0XHR7XG5cdFx0XHQvLyBNdWx0aWxpbmUgc3RyaW5ncyBhcmUgd3JhcHBlZCBpbiB0cmlwbGUgXCIuIFF1b3RlcyBtYXkgYXBwZWFyIHVuZXNjYXBlZC5cblx0XHRcdHBhdHRlcm46IC9cIlwiXCJbXFxzXFxTXSo/XCJcIlwiLyxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogL1wiKD86W15cXFxcXCJcXHJcXG5dfFxcXFwoPzpbYWJmbnJ0dlxcXFxcIl18XFxkK3x4WzAtOWEtZkEtRl0rKSkqXCIvLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fVxuXHRdLFxuXHRpbXBvcnRfc3RhdGVtZW50OiB7XG5cdFx0Ly8gVGhlIGltcG9ydGVkIG9yIGhpZGRlbiBuYW1lcyBhcmUgbm90IGluY2x1ZGVkIGluIHRoaXMgaW1wb3J0XG5cdFx0Ly8gc3RhdGVtZW50LiBUaGlzIGlzIGJlY2F1c2Ugd2Ugd2FudCB0byBoaWdobGlnaHQgdGhvc2UgZXhhY3RseSBsaWtlXG5cdFx0Ly8gd2UgZG8gZm9yIHRoZSBuYW1lcyBpbiB0aGUgcHJvZ3JhbS5cblx0XHRwYXR0ZXJuOiAvXlxccyppbXBvcnRcXHMrW0EtWl1cXHcqKD86XFwuW0EtWl1cXHcqKSooPzpcXHMrYXNcXHMrKD86W0EtWl1cXHcqKSg/OlxcLltBLVpdXFx3KikqKT8oPzpcXHMrZXhwb3NpbmdcXHMrKT8vbSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdGtleXdvcmQ6IC9cXGIoPzppbXBvcnR8YXN8ZXhwb3NpbmcpXFxiL1xuXHRcdH1cblx0fSxcblx0a2V5d29yZDogL1xcYig/OmFsaWFzfGFzfGNhc2V8ZWxzZXxleHBvc2luZ3xpZnxpbnxpbmZpeGx8aW5maXhyfGxldHxtb2R1bGV8b2Z8dGhlbnx0eXBlKVxcYi8sXG5cdC8vIFRoZXNlIGFyZSBidWlsdGluIHZhcmlhYmxlcyBvbmx5LiBDb25zdHJ1Y3RvcnMgYXJlIGhpZ2hsaWdodGVkIGxhdGVyIGFzIGEgY29uc3RhbnQuXG5cdGJ1aWx0aW46IC9cXGIoPzphYnN8YWNvc3xhbHdheXN8YXNpbnxhdGFufGF0YW4yfGNlaWxpbmd8Y2xhbXB8Y29tcGFyZXxjb3N8Y3Vycnl8ZGVncmVlc3xlfGZsaXB8Zmxvb3J8ZnJvbVBvbGFyfGlkZW50aXR5fGlzSW5maW5pdGV8aXNOYU58bG9nQmFzZXxtYXh8bWlufG5lZ2F0ZXxuZXZlcnxub3R8cGl8cmFkaWFuc3xyZW18cm91bmR8c2lufHNxcnR8dGFufHRvRmxvYXR8dG9Qb2xhcnx0b1N0cmluZ3x0cnVuY2F0ZXx0dXJuc3x1bmN1cnJ5fHhvcilcXGIvLFxuXHQvLyBkZWNpbWFsIGludGVnZXJzIGFuZCBmbG9hdGluZyBwb2ludCBudW1iZXJzIHwgaGV4YWRlY2ltYWwgaW50ZWdlcnNcblx0bnVtYmVyOiAvXFxiKD86XFxkKyg/OlxcLlxcZCspPyg/OmVbKy1dP1xcZCspP3wweFswLTlhLWZdKylcXGIvaSxcblx0Ly8gTW9zdCBvZiB0aGlzIGlzIG5lZWRlZCBiZWNhdXNlIG9mIHRoZSBtZWFuaW5nIG9mIGEgc2luZ2xlICcuJy5cblx0Ly8gSWYgaXQgc3RhbmRzIGFsb25lIGZyZWVseSwgaXQgaXMgdGhlIGZ1bmN0aW9uIGNvbXBvc2l0aW9uLlxuXHQvLyBJdCBtYXkgYWxzbyBiZSBhIHNlcGFyYXRvciBiZXR3ZWVuIGEgbW9kdWxlIG5hbWUgYW5kIGFuIGlkZW50aWZpZXIgPT4gbm9cblx0Ly8gb3BlcmF0b3IuIElmIGl0IGNvbWVzIHRvZ2V0aGVyIHdpdGggb3RoZXIgc3BlY2lhbCBjaGFyYWN0ZXJzIGl0IGlzIGFuXG5cdC8vIG9wZXJhdG9yIHRvby5cblx0Ly8gVmFsaWQgb3BlcmF0b3IgY2hhcmFjdGVycyBpbiAwLjE4OiArLS8qPS4kPD46JnxePyUjQH4hXG5cdC8vIFJlZjogaHR0cHM6Ly9ncm91cHMuZ29vZ2xlLmNvbS9mb3J1bS8jIW1zZy9lbG0tZGV2LzBBSFNuRGRrU2tRL0UwU1ZVNzBKRVFBSlxuXHRvcGVyYXRvcjogL1xcc1xcLlxcc3xbK1xcLS8qPS4kPD46JnxePyUjQH4hXXsyLH18WytcXC0vKj0kPD46JnxePyUjQH4hXS8sXG5cdC8vIEluIEVsbSwgbmVhcmx5IGV2ZXJ5dGhpbmcgaXMgYSB2YXJpYWJsZSwgZG8gbm90IGhpZ2hsaWdodCB0aGVzZS5cblx0aHZhcmlhYmxlOiAvXFxiKD86W0EtWl1cXHcqXFwuKSpbYS16XVxcdypcXGIvLFxuXHRjb25zdGFudDogL1xcYig/OltBLVpdXFx3KlxcLikqW0EtWl1cXHcqXFxiLyxcblx0cHVuY3R1YXRpb246IC9be31bXFxdfCgpLC46XS9cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9