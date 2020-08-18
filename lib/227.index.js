(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[227],{

/***/ "./node_modules/prismjs/components/prism-less.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-less.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* FIXME :
 :extend() is not handled specifically : its highlighting is buggy.
 Mixin usage must be inside a ruleset to be highlighted.
 At-rules (e.g. import) containing interpolations are buggy.
 Detached rulesets are highlighted as at-rules.
 A comment before a mixin usage prevents the latter to be properly highlighted.
 */

Prism.languages.less = Prism.languages.extend('css', {
	'comment': [
		/\/\*[\s\S]*?\*\//,
		{
			pattern: /(^|[^\\])\/\/.*/,
			lookbehind: true
		}
	],
	'atrule': {
		pattern: /@[\w-]+?(?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};])*?(?=\s*\{)/,
		inside: {
			'punctuation': /[:()]/
		}
	},
	// selectors and mixins are considered the same
	'selector': {
		pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@])*?(?=\s*\{)/,
		inside: {
			// mixin parameters
			'variable': /@+[\w-]+/
		}
	},

	'property': /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
	'operator': /[+\-*\/]/
});

Prism.languages.insertBefore('less', 'property', {
	'variable': [
		// Variable declaration (the colon must be consumed!)
		{
			pattern: /@[\w-]+\s*:/,
			inside: {
				"punctuation": /:/
			}
		},

		// Variable usage
		/@@?[\w-]+/
	],
	'mixin-usage': {
		pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
		lookbehind: true,
		alias: 'function'
	}
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWxlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFVBQVUsZ0JBQWdCLFlBQVk7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUSxNQUFNLFdBQVcsUUFBUSxZQUFZLFVBQVUsZ0JBQWdCLGFBQWE7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw4QkFBOEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIyMjcuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGSVhNRSA6XG4gOmV4dGVuZCgpIGlzIG5vdCBoYW5kbGVkIHNwZWNpZmljYWxseSA6IGl0cyBoaWdobGlnaHRpbmcgaXMgYnVnZ3kuXG4gTWl4aW4gdXNhZ2UgbXVzdCBiZSBpbnNpZGUgYSBydWxlc2V0IHRvIGJlIGhpZ2hsaWdodGVkLlxuIEF0LXJ1bGVzIChlLmcuIGltcG9ydCkgY29udGFpbmluZyBpbnRlcnBvbGF0aW9ucyBhcmUgYnVnZ3kuXG4gRGV0YWNoZWQgcnVsZXNldHMgYXJlIGhpZ2hsaWdodGVkIGFzIGF0LXJ1bGVzLlxuIEEgY29tbWVudCBiZWZvcmUgYSBtaXhpbiB1c2FnZSBwcmV2ZW50cyB0aGUgbGF0dGVyIHRvIGJlIHByb3Blcmx5IGhpZ2hsaWdodGVkLlxuICovXG5cblByaXNtLmxhbmd1YWdlcy5sZXNzID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY3NzJywge1xuXHQnY29tbWVudCc6IFtcblx0XHQvXFwvXFwqW1xcc1xcU10qP1xcKlxcLy8sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwvLiovLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH1cblx0XSxcblx0J2F0cnVsZSc6IHtcblx0XHRwYXR0ZXJuOiAvQFtcXHctXSs/KD86XFwoKD86W14oKXt9XXxcXChbXigpe31dKlxcKSkqXFwpfFteKCl7fTtdKSo/KD89XFxzKlxceykvLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3B1bmN0dWF0aW9uJzogL1s6KCldL1xuXHRcdH1cblx0fSxcblx0Ly8gc2VsZWN0b3JzIGFuZCBtaXhpbnMgYXJlIGNvbnNpZGVyZWQgdGhlIHNhbWVcblx0J3NlbGVjdG9yJzoge1xuXHRcdHBhdHRlcm46IC8oPzpAXFx7W1xcdy1dK1xcfXxbXnt9O1xcc0BdKSg/OkBcXHtbXFx3LV0rXFx9fFxcKCg/OlteKCl7fV18XFwoW14oKXt9XSpcXCkpKlxcKXxbXigpe307QF0pKj8oPz1cXHMqXFx7KS8sXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQvLyBtaXhpbiBwYXJhbWV0ZXJzXG5cdFx0XHQndmFyaWFibGUnOiAvQCtbXFx3LV0rL1xuXHRcdH1cblx0fSxcblxuXHQncHJvcGVydHknOiAvKD86QFxce1tcXHctXStcXH18W1xcdy1dKSsoPzpcXCtfPyk/KD89XFxzKjopL2ksXG5cdCdvcGVyYXRvcic6IC9bK1xcLSpcXC9dL1xufSk7XG5cblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2xlc3MnLCAncHJvcGVydHknLCB7XG5cdCd2YXJpYWJsZSc6IFtcblx0XHQvLyBWYXJpYWJsZSBkZWNsYXJhdGlvbiAodGhlIGNvbG9uIG11c3QgYmUgY29uc3VtZWQhKVxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC9AW1xcdy1dK1xccyo6Lyxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcInB1bmN0dWF0aW9uXCI6IC86L1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBWYXJpYWJsZSB1c2FnZVxuXHRcdC9AQD9bXFx3LV0rL1xuXHRdLFxuXHQnbWl4aW4tdXNhZ2UnOiB7XG5cdFx0cGF0dGVybjogLyhbeztdXFxzKilbLiNdKD8hXFxkKVtcXHctXSsuKj8oPz1bKDtdKS8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRhbGlhczogJ2Z1bmN0aW9uJ1xuXHR9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=