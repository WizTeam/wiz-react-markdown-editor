(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/prismjs/components/prism-agda.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-agda.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	Prism.languages.agda = {
		'comment': /\{-[\s\S]*?(?:-\}|$)|--.*/,
		'string': {
			pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
			greedy: true,
		},
		'punctuation': /[(){}⦃⦄.;@]/,
		'class-name': {
			pattern: /((?:data|record) +)\S+/,
			lookbehind: true,
		},
		'function': {
			pattern: /(^[ \t]*)[^:\r\n]+?(?=:)/m,
			lookbehind: true,
		},
		'operator': {
			pattern: /(^\s*|\s)(?:[=|:∀→λ\\?_]|->)(?=\s)/,
			lookbehind: true,
		},
		'keyword': /\b(?:Set|abstract|constructor|data|eta-equality|field|forall|forall|hiding|import|in|inductive|infix|infixl|infixr|instance|let|macro|module|mutual|no-eta-equality|open|overlap|pattern|postulate|primitive|private|public|quote|quoteContext|quoteGoal|quoteTerm|record|renaming|rewrite|syntax|tactic|unquote|unquoteDecl|unquoteDef|using|variable|where|with)\b/,
	};
}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWFnZGEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQSxnQkFBZ0IsZUFBZTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsdUJBQXVCLElBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiOS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHRQcmlzbS5sYW5ndWFnZXMuYWdkYSA9IHtcblx0XHQnY29tbWVudCc6IC9cXHstW1xcc1xcU10qPyg/Oi1cXH18JCl8LS0uKi8sXG5cdFx0J3N0cmluZyc6IHtcblx0XHRcdHBhdHRlcm46IC9cIig/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfFteXFxcXFxcclxcblwiXSkqXCIvLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdH0sXG5cdFx0J3B1bmN0dWF0aW9uJzogL1soKXt94qaD4qaELjtAXS8sXG5cdFx0J2NsYXNzLW5hbWUnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKCg/OmRhdGF8cmVjb3JkKSArKVxcUysvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHR9LFxuXHRcdCdmdW5jdGlvbic6IHtcblx0XHRcdHBhdHRlcm46IC8oXlsgXFx0XSopW146XFxyXFxuXSs/KD89OikvbSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0fSxcblx0XHQnb3BlcmF0b3InOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF5cXHMqfFxccykoPzpbPXw64oiA4oaSzrtcXFxcP19dfC0+KSg/PVxccykvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHR9LFxuXHRcdCdrZXl3b3JkJzogL1xcYig/OlNldHxhYnN0cmFjdHxjb25zdHJ1Y3RvcnxkYXRhfGV0YS1lcXVhbGl0eXxmaWVsZHxmb3JhbGx8Zm9yYWxsfGhpZGluZ3xpbXBvcnR8aW58aW5kdWN0aXZlfGluZml4fGluZml4bHxpbmZpeHJ8aW5zdGFuY2V8bGV0fG1hY3JvfG1vZHVsZXxtdXR1YWx8bm8tZXRhLWVxdWFsaXR5fG9wZW58b3ZlcmxhcHxwYXR0ZXJufHBvc3R1bGF0ZXxwcmltaXRpdmV8cHJpdmF0ZXxwdWJsaWN8cXVvdGV8cXVvdGVDb250ZXh0fHF1b3RlR29hbHxxdW90ZVRlcm18cmVjb3JkfHJlbmFtaW5nfHJld3JpdGV8c3ludGF4fHRhY3RpY3x1bnF1b3RlfHVucXVvdGVEZWNsfHVucXVvdGVEZWZ8dXNpbmd8dmFyaWFibGV8d2hlcmV8d2l0aClcXGIvLFxuXHR9O1xufShQcmlzbSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==