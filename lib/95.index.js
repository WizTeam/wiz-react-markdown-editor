(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[95],{

/***/ "./node_modules/prismjs/components/prism-django.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-django.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Django/Jinja2 syntax definition for Prism.js <http://prismjs.com> syntax highlighter.
// Mostly it works OK but can paint code incorrectly on complex html/template tag combinations.

(function (Prism) {

	Prism.languages.django = {
		'comment': /^{#[\s\S]*?#}$/,
		'tag': {
			pattern: /(^{%[+-]?\s*)\w+/,
			lookbehind: true,
			alias: 'keyword'
		},
		'delimiter': {
			pattern: /^{[{%][+-]?|[+-]?[}%]}$/,
			alias: 'punctuation'
		},
		'string': {
			pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
			greedy: true
		},
		'filter': {
			pattern: /(\|)\w+/,
			lookbehind: true,
			alias: 'function'
		},
		'test': {
			pattern: /(\bis\s+(?:not\s+)?)(?!not\b)\w+/,
			lookbehind: true,
			alias: 'function'
		},
		'function': /\b[a-z_]\w+(?=\s*\()/i,
		'keyword': /\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,
		'operator': /[-+*/%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
		'number': /\b\d+(?:\.\d+)?\b/,
		'boolean': /[Tt]rue|[Ff]alse|[Nn]one/,
		'variable': /\b\w+?\b/,
		'punctuation': /[{}[\](),.:;]/
	};


	var pattern = /{{[\s\S]*?}}|{%[\s\S]*?%}|{#[\s\S]*?#}/g;
	var markupTemplating = Prism.languages['markup-templating'];

	Prism.hooks.add('before-tokenize', function (env) {
		markupTemplating.buildPlaceholders(env, 'django', pattern);
	});
	Prism.hooks.add('after-tokenize', function (env) {
		markupTemplating.tokenizePlaceholders(env, 'django');
	});

	// Add an Jinja2 alias
	Prism.languages.jinja2 = Prism.languages.django;
	Prism.hooks.add('before-tokenize', function (env) {
		markupTemplating.buildPlaceholders(env, 'jinja2', pattern);
	});
	Prism.hooks.add('after-tokenize', function (env) {
		markupTemplating.tokenizePlaceholders(env, 'jinja2');
	});

})(Prism);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWRqYW5nby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGVBQWUsRUFBRSxlQUFlLEdBQUc7QUFDbkM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCOzs7QUFHQSxrQkFBa0IsVUFBVSxFQUFFLFdBQVcsRUFBRSxXQUFXO0FBQ3REOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7O0FBRUYsQ0FBQyIsImZpbGUiOiI5NS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERqYW5nby9KaW5qYTIgc3ludGF4IGRlZmluaXRpb24gZm9yIFByaXNtLmpzIDxodHRwOi8vcHJpc21qcy5jb20+IHN5bnRheCBoaWdobGlnaHRlci5cbi8vIE1vc3RseSBpdCB3b3JrcyBPSyBidXQgY2FuIHBhaW50IGNvZGUgaW5jb3JyZWN0bHkgb24gY29tcGxleCBodG1sL3RlbXBsYXRlIHRhZyBjb21iaW5hdGlvbnMuXG5cbihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHRQcmlzbS5sYW5ndWFnZXMuZGphbmdvID0ge1xuXHRcdCdjb21tZW50JzogL157I1tcXHNcXFNdKj8jfSQvLFxuXHRcdCd0YWcnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF57JVsrLV0/XFxzKilcXHcrLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRhbGlhczogJ2tleXdvcmQnXG5cdFx0fSxcblx0XHQnZGVsaW1pdGVyJzoge1xuXHRcdFx0cGF0dGVybjogL157W3slXVsrLV0/fFsrLV0/W30lXX0kLyxcblx0XHRcdGFsaWFzOiAncHVuY3R1YXRpb24nXG5cdFx0fSxcblx0XHQnc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogLyhcInwnKSg/OlxcXFwufCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fSxcblx0XHQnZmlsdGVyJzoge1xuXHRcdFx0cGF0dGVybjogLyhcXHwpXFx3Ky8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdmdW5jdGlvbidcblx0XHR9LFxuXHRcdCd0ZXN0Jzoge1xuXHRcdFx0cGF0dGVybjogLyhcXGJpc1xccysoPzpub3RcXHMrKT8pKD8hbm90XFxiKVxcdysvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGFsaWFzOiAnZnVuY3Rpb24nXG5cdFx0fSxcblx0XHQnZnVuY3Rpb24nOiAvXFxiW2Etel9dXFx3Kyg/PVxccypcXCgpL2ksXG5cdFx0J2tleXdvcmQnOiAvXFxiKD86YW5kfGFzfGJ5fGVsc2V8Zm9yfGlmfGltcG9ydHxpbnxpc3xsb29wfG5vdHxvcnxyZWN1cnNpdmV8d2l0aHx3aXRob3V0KVxcYi8sXG5cdFx0J29wZXJhdG9yJzogL1stKyovJT1dPT98IT18XFwqXFwqPz0/fFxcL1xcLz89P3w8Wzw9Pl0/fD5bPT5dP3xbJnxefl0vLFxuXHRcdCdudW1iZXInOiAvXFxiXFxkKyg/OlxcLlxcZCspP1xcYi8sXG5cdFx0J2Jvb2xlYW4nOiAvW1R0XXJ1ZXxbRmZdYWxzZXxbTm5db25lLyxcblx0XHQndmFyaWFibGUnOiAvXFxiXFx3Kz9cXGIvLFxuXHRcdCdwdW5jdHVhdGlvbic6IC9be31bXFxdKCksLjo7XS9cblx0fTtcblxuXG5cdHZhciBwYXR0ZXJuID0gL3t7W1xcc1xcU10qP319fHslW1xcc1xcU10qPyV9fHsjW1xcc1xcU10qPyN9L2c7XG5cdHZhciBtYXJrdXBUZW1wbGF0aW5nID0gUHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddO1xuXG5cdFByaXNtLmhvb2tzLmFkZCgnYmVmb3JlLXRva2VuaXplJywgZnVuY3Rpb24gKGVudikge1xuXHRcdG1hcmt1cFRlbXBsYXRpbmcuYnVpbGRQbGFjZWhvbGRlcnMoZW52LCAnZGphbmdvJywgcGF0dGVybik7XG5cdH0pO1xuXHRQcmlzbS5ob29rcy5hZGQoJ2FmdGVyLXRva2VuaXplJywgZnVuY3Rpb24gKGVudikge1xuXHRcdG1hcmt1cFRlbXBsYXRpbmcudG9rZW5pemVQbGFjZWhvbGRlcnMoZW52LCAnZGphbmdvJyk7XG5cdH0pO1xuXG5cdC8vIEFkZCBhbiBKaW5qYTIgYWxpYXNcblx0UHJpc20ubGFuZ3VhZ2VzLmppbmphMiA9IFByaXNtLmxhbmd1YWdlcy5kamFuZ287XG5cdFByaXNtLmhvb2tzLmFkZCgnYmVmb3JlLXRva2VuaXplJywgZnVuY3Rpb24gKGVudikge1xuXHRcdG1hcmt1cFRlbXBsYXRpbmcuYnVpbGRQbGFjZWhvbGRlcnMoZW52LCAnamluamEyJywgcGF0dGVybik7XG5cdH0pO1xuXHRQcmlzbS5ob29rcy5hZGQoJ2FmdGVyLXRva2VuaXplJywgZnVuY3Rpb24gKGVudikge1xuXHRcdG1hcmt1cFRlbXBsYXRpbmcudG9rZW5pemVQbGFjZWhvbGRlcnMoZW52LCAnamluamEyJyk7XG5cdH0pO1xuXG59KShQcmlzbSk7XG4iXSwic291cmNlUm9vdCI6IiJ9