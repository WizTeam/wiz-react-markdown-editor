(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[117],{

/***/ "./node_modules/prismjs/components/prism-etlua.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-etlua.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	Prism.languages.etlua = {
		'delimiter': {
			pattern: /^<%[-=]?|-?%>$/,
			alias: 'punctuation'
		},
		'language-lua': {
			pattern: /[\s\S]+/,
			inside: Prism.languages.lua
		}
	};

	Prism.hooks.add('before-tokenize', function (env) {
		var pattern = /<%[\s\S]+?%>/g;
		Prism.languages['markup-templating'].buildPlaceholders(env, 'etlua', pattern);
	});

	Prism.hooks.add('after-tokenize', function (env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'etlua');
	});

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWV0bHVhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRixDQUFDIiwiZmlsZSI6IjExNy5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHRQcmlzbS5sYW5ndWFnZXMuZXRsdWEgPSB7XG5cdFx0J2RlbGltaXRlcic6IHtcblx0XHRcdHBhdHRlcm46IC9ePCVbLT1dP3wtPyU+JC8sXG5cdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdH0sXG5cdFx0J2xhbmd1YWdlLWx1YSc6IHtcblx0XHRcdHBhdHRlcm46IC9bXFxzXFxTXSsvLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMubHVhXG5cdFx0fVxuXHR9O1xuXG5cdFByaXNtLmhvb2tzLmFkZCgnYmVmb3JlLXRva2VuaXplJywgZnVuY3Rpb24gKGVudikge1xuXHRcdHZhciBwYXR0ZXJuID0gLzwlW1xcc1xcU10rPyU+L2c7XG5cdFx0UHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddLmJ1aWxkUGxhY2Vob2xkZXJzKGVudiwgJ2V0bHVhJywgcGF0dGVybik7XG5cdH0pO1xuXG5cdFByaXNtLmhvb2tzLmFkZCgnYWZ0ZXItdG9rZW5pemUnLCBmdW5jdGlvbiAoZW52KSB7XG5cdFx0UHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddLnRva2VuaXplUGxhY2Vob2xkZXJzKGVudiwgJ2V0bHVhJyk7XG5cdH0pO1xuXG59KFByaXNtKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9