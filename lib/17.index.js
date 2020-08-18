(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/prismjs/components/prism-apl.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-apl.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.apl = {
	'comment': /(?:⍝|#[! ]).*$/m,
	'string': {
		pattern: /'(?:[^'\r\n]|'')*'/,
		greedy: true
	},
	'number': /¯?(?:\d*\.?\b\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:\d*\.?\d+(?:e[+¯]?\d+)?|¯|∞))?/i,
	'statement': /:[A-Z][a-z][A-Za-z]*\b/,
	'system-function': {
		pattern: /⎕[A-Z]+/i,
		alias: 'function'
	},
	'constant': /[⍬⌾#⎕⍞]/,
	'function': /[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,
	'monadic-operator': {
		pattern: /[\\\/⌿⍀¨⍨⌶&∥]/,
		alias: 'operator'
	},
	'dyadic-operator': {
		pattern: /[.⍣⍠⍤∘⌸@⌺⍥]/,
		alias: 'operator'
	},
	'assignment': {
		pattern: /←/,
		alias: 'keyword'
	},
	'punctuation': /[\[;\]()◇⋄]/,
	'dfn': {
		pattern: /[{}⍺⍵⍶⍹∇⍫:]/,
		alias: 'builtin'
	}
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWFwbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLHFCQUFxQjtBQUNyQjtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EiLCJmaWxlIjoiMTcuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJQcmlzbS5sYW5ndWFnZXMuYXBsID0ge1xuXHQnY29tbWVudCc6IC8oPzrijZ18I1shIF0pLiokL20sXG5cdCdzdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogLycoPzpbXidcXHJcXG5dfCcnKSonLyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J251bWJlcic6IC/Crz8oPzpcXGQqXFwuP1xcYlxcZCsoPzplWyvCr10/XFxkKyk/fMKvfOKInikoPzpqwq8/KD86XFxkKlxcLj9cXGQrKD86ZVsrwq9dP1xcZCspP3zCr3ziiJ4pKT8vaSxcblx0J3N0YXRlbWVudCc6IC86W0EtWl1bYS16XVtBLVphLXpdKlxcYi8sXG5cdCdzeXN0ZW0tZnVuY3Rpb24nOiB7XG5cdFx0cGF0dGVybjogL+KOlVtBLVpdKy9pLFxuXHRcdGFsaWFzOiAnZnVuY3Rpb24nXG5cdH0sXG5cdCdjb25zdGFudCc6IC9b4o2s4oy+I+KOleKNnl0vLFxuXHQnZnVuY3Rpb24nOiAvWy0rw5fDt+KMiOKMiuKIo3zijbPijbg/KuKNn+KXiyHijLk84omkPT7iiaXiiaDiiaHiiaLiiIrijbfiiKriiKl+4oio4oin4o2x4o2y4o20LOKNquKMveKKluKNieKGkeKGk+KKguKKg+KKhuKKh+KMt+KNi+KNkuKKpOKKpeKNleKNjuKKo+KKouKNgeKNguKJiOKNr+KGl8Kk4oaSXS8sXG5cdCdtb25hZGljLW9wZXJhdG9yJzoge1xuXHRcdHBhdHRlcm46IC9bXFxcXFxcL+KMv+KNgMKo4o2o4oy2JuKIpV0vLFxuXHRcdGFsaWFzOiAnb3BlcmF0b3InXG5cdH0sXG5cdCdkeWFkaWMtb3BlcmF0b3InOiB7XG5cdFx0cGF0dGVybjogL1su4o2j4o2g4o2k4oiY4oy4QOKMuuKNpV0vLFxuXHRcdGFsaWFzOiAnb3BlcmF0b3InXG5cdH0sXG5cdCdhc3NpZ25tZW50Jzoge1xuXHRcdHBhdHRlcm46IC/ihpAvLFxuXHRcdGFsaWFzOiAna2V5d29yZCdcblx0fSxcblx0J3B1bmN0dWF0aW9uJzogL1tcXFs7XFxdKCnil4fii4RdLyxcblx0J2Rmbic6IHtcblx0XHRwYXR0ZXJuOiAvW3t94o264o214o224o254oiH4o2rOl0vLFxuXHRcdGFsaWFzOiAnYnVpbHRpbidcblx0fVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=