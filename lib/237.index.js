(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[237],{

/***/ "./node_modules/prismjs/components/prism-llvm.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-llvm.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(Prism) {
	Prism.languages.llvm = {
		'comment': /;.*/,
		'string': {
			pattern: /"[^"]*"/,
			greedy: true,
		},
		'boolean': /\b(?:true|false)\b/,
		'variable': /[%@!#](?:(?!\d)(?:[-$.\w]|\\[a-f\d]{2})+|\d+)/i,
		'label': /(?!\d)(?:[-$.\w]|\\[a-f\d]{2})+:/i,
		'type': {
			pattern: /\b(?:double|float|fp128|half|i[1-9]\d*|label|metadata|ppc_fp128|token|void|x86_fp80|x86_mmx)\b/,
			alias: 'class-name',
		},
		'keyword': /\b[a-z_][a-z_0-9]*\b/,
		'number': /[+-]?\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-Fa-f]+\b|\b0xK[\dA-Fa-f]{20}\b|\b0x[ML][\dA-Fa-f]{32}\b|\b0xH[\dA-Fa-f]{4}\b/,
		'punctuation': /[{}[\];(),.!*=<>]/,
	};
}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWxsdm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxtREFBbUQsRUFBRTtBQUNyRCx1Q0FBdUMsRUFBRTtBQUN6QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx1RkFBdUYsR0FBRyxzQkFBc0IsR0FBRyxtQkFBbUIsRUFBRTtBQUN4SSxxQkFBcUIsSUFBSTtBQUN6QjtBQUNBLENBQUMiLCJmaWxlIjoiMjM3LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKFByaXNtKSB7XG5cdFByaXNtLmxhbmd1YWdlcy5sbHZtID0ge1xuXHRcdCdjb21tZW50JzogLzsuKi8sXG5cdFx0J3N0cmluZyc6IHtcblx0XHRcdHBhdHRlcm46IC9cIlteXCJdKlwiLyxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHR9LFxuXHRcdCdib29sZWFuJzogL1xcYig/OnRydWV8ZmFsc2UpXFxiLyxcblx0XHQndmFyaWFibGUnOiAvWyVAISNdKD86KD8hXFxkKSg/OlstJC5cXHddfFxcXFxbYS1mXFxkXXsyfSkrfFxcZCspL2ksXG5cdFx0J2xhYmVsJzogLyg/IVxcZCkoPzpbLSQuXFx3XXxcXFxcW2EtZlxcZF17Mn0pKzovaSxcblx0XHQndHlwZSc6IHtcblx0XHRcdHBhdHRlcm46IC9cXGIoPzpkb3VibGV8ZmxvYXR8ZnAxMjh8aGFsZnxpWzEtOV1cXGQqfGxhYmVsfG1ldGFkYXRhfHBwY19mcDEyOHx0b2tlbnx2b2lkfHg4Nl9mcDgwfHg4Nl9tbXgpXFxiLyxcblx0XHRcdGFsaWFzOiAnY2xhc3MtbmFtZScsXG5cdFx0fSxcblx0XHQna2V5d29yZCc6IC9cXGJbYS16X11bYS16XzAtOV0qXFxiLyxcblx0XHQnbnVtYmVyJzogL1srLV0/XFxiXFxkKyg/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspP1xcYnxcXGIweFtcXGRBLUZhLWZdK1xcYnxcXGIweEtbXFxkQS1GYS1mXXsyMH1cXGJ8XFxiMHhbTUxdW1xcZEEtRmEtZl17MzJ9XFxifFxcYjB4SFtcXGRBLUZhLWZdezR9XFxiLyxcblx0XHQncHVuY3R1YXRpb24nOiAvW3t9W1xcXTsoKSwuISo9PD5dLyxcblx0fTtcbn0oUHJpc20pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=