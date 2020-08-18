(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[113],{

/***/ "./node_modules/prismjs/components/prism-erb.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-erb.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	Prism.languages.erb = Prism.languages.extend('ruby', {});
	Prism.languages.insertBefore('erb', 'comment', {
		'delimiter': {
			pattern: /^<%=?|%>$/,
			alias: 'punctuation'
		}
	});

	Prism.hooks.add('before-tokenize', function(env) {
		var erbPattern = /<%=?(?:[^\r\n]|[\r\n](?!=begin)|[\r\n]=begin\s[\s\S]*?^=end)+?%>/gm;
		Prism.languages['markup-templating'].buildPlaceholders(env, 'erb', erbPattern);
	});

	Prism.hooks.add('after-tokenize', function(env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'erb');
	});

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWVyYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRixDQUFDIiwiZmlsZSI6IjExMy5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHRQcmlzbS5sYW5ndWFnZXMuZXJiID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgncnVieScsIHt9KTtcblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnZXJiJywgJ2NvbW1lbnQnLCB7XG5cdFx0J2RlbGltaXRlcic6IHtcblx0XHRcdHBhdHRlcm46IC9ePCU9P3wlPiQvLFxuXHRcdFx0YWxpYXM6ICdwdW5jdHVhdGlvbidcblx0XHR9XG5cdH0pO1xuXG5cdFByaXNtLmhvb2tzLmFkZCgnYmVmb3JlLXRva2VuaXplJywgZnVuY3Rpb24oZW52KSB7XG5cdFx0dmFyIGVyYlBhdHRlcm4gPSAvPCU9Pyg/OlteXFxyXFxuXXxbXFxyXFxuXSg/IT1iZWdpbil8W1xcclxcbl09YmVnaW5cXHNbXFxzXFxTXSo/Xj1lbmQpKz8lPi9nbTtcblx0XHRQcmlzbS5sYW5ndWFnZXNbJ21hcmt1cC10ZW1wbGF0aW5nJ10uYnVpbGRQbGFjZWhvbGRlcnMoZW52LCAnZXJiJywgZXJiUGF0dGVybik7XG5cdH0pO1xuXG5cdFByaXNtLmhvb2tzLmFkZCgnYWZ0ZXItdG9rZW5pemUnLCBmdW5jdGlvbihlbnYpIHtcblx0XHRQcmlzbS5sYW5ndWFnZXNbJ21hcmt1cC10ZW1wbGF0aW5nJ10udG9rZW5pemVQbGFjZWhvbGRlcnMoZW52LCAnZXJiJyk7XG5cdH0pO1xuXG59KFByaXNtKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9