(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[107],{

/***/ "./node_modules/prismjs/components/prism-ejs.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-ejs.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	Prism.languages.ejs = {
		'delimiter': {
			pattern: /^<%[-_=]?|[-_]?%>$/,
			alias: 'punctuation'
		},
		'comment': /^#[\s\S]*/,
		'language-javascript': {
			pattern: /[\s\S]+/,
			inside: Prism.languages.javascript
		}
	};

	Prism.hooks.add('before-tokenize', function(env) {
		var ejsPattern = /<%(?!%)[\s\S]+?%>/g;
		Prism.languages['markup-templating'].buildPlaceholders(env, 'ejs', ejsPattern);
	});

	Prism.hooks.add('after-tokenize', function(env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'ejs');
	});

	Prism.languages.eta = Prism.languages.ejs;

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWVqcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQSxDQUFDIiwiZmlsZSI6IjEwNy5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHRQcmlzbS5sYW5ndWFnZXMuZWpzID0ge1xuXHRcdCdkZWxpbWl0ZXInOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXjwlWy1fPV0/fFstX10/JT4kLyxcblx0XHRcdGFsaWFzOiAncHVuY3R1YXRpb24nXG5cdFx0fSxcblx0XHQnY29tbWVudCc6IC9eI1tcXHNcXFNdKi8sXG5cdFx0J2xhbmd1YWdlLWphdmFzY3JpcHQnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvW1xcc1xcU10rLyxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHR9XG5cdH07XG5cblx0UHJpc20uaG9va3MuYWRkKCdiZWZvcmUtdG9rZW5pemUnLCBmdW5jdGlvbihlbnYpIHtcblx0XHR2YXIgZWpzUGF0dGVybiA9IC88JSg/ISUpW1xcc1xcU10rPyU+L2c7XG5cdFx0UHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddLmJ1aWxkUGxhY2Vob2xkZXJzKGVudiwgJ2VqcycsIGVqc1BhdHRlcm4pO1xuXHR9KTtcblxuXHRQcmlzbS5ob29rcy5hZGQoJ2FmdGVyLXRva2VuaXplJywgZnVuY3Rpb24oZW52KSB7XG5cdFx0UHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddLnRva2VuaXplUGxhY2Vob2xkZXJzKGVudiwgJ2VqcycpO1xuXHR9KTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuZXRhID0gUHJpc20ubGFuZ3VhZ2VzLmVqcztcblxufShQcmlzbSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==