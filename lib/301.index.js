(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[301],{

/***/ "./node_modules/prismjs/components/prism-php-extras.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-php-extras.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.insertBefore('php', 'variable', {
	'this': /\$this\b/,
	'global': /\$(?:_(?:SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE)|GLOBALS|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)\b/,
	'scope': {
		pattern: /\b[\w\\]+::/,
		inside: {
			keyword: /static|self|parent/,
			punctuation: /::|\\/
		}
	}
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXBocC1leHRyYXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJmaWxlIjoiMzAxLmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgncGhwJywgJ3ZhcmlhYmxlJywge1xuXHQndGhpcyc6IC9cXCR0aGlzXFxiLyxcblx0J2dsb2JhbCc6IC9cXCQoPzpfKD86U0VSVkVSfEdFVHxQT1NUfEZJTEVTfFJFUVVFU1R8U0VTU0lPTnxFTlZ8Q09PS0lFKXxHTE9CQUxTfEhUVFBfUkFXX1BPU1RfREFUQXxhcmdjfGFyZ3Z8cGhwX2Vycm9ybXNnfGh0dHBfcmVzcG9uc2VfaGVhZGVyKVxcYi8sXG5cdCdzY29wZSc6IHtcblx0XHRwYXR0ZXJuOiAvXFxiW1xcd1xcXFxdKzo6Lyxcblx0XHRpbnNpZGU6IHtcblx0XHRcdGtleXdvcmQ6IC9zdGF0aWN8c2VsZnxwYXJlbnQvLFxuXHRcdFx0cHVuY3R1YXRpb246IC86OnxcXFxcL1xuXHRcdH1cblx0fVxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==