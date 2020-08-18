(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[425],{

/***/ "./node_modules/prismjs/components/prism-velocity.js":
/*!***********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-velocity.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {
	Prism.languages.velocity = Prism.languages.extend('markup', {});

	var velocity = {
		'variable': {
			pattern: /(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+])*|{[^}]+})/i,
			lookbehind: true,
			inside: {} // See below
		},
		'string': {
			pattern: /"[^"]*"|'[^']*'/,
			greedy: true
		},
		'number': /\b\d+\b/,
		'boolean': /\b(?:true|false)\b/,
		'operator': /[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/,
		'punctuation': /[(){}[\]:,.]/
	};

	velocity.variable.inside = {
		'string': velocity['string'],
		'function': {
			pattern: /([^\w-])[a-z][\w-]*(?=\()/,
			lookbehind: true
		},
		'number': velocity['number'],
		'boolean': velocity['boolean'],
		'punctuation': velocity['punctuation']
	};

	Prism.languages.insertBefore('velocity', 'comment', {
		'unparsed': {
			pattern: /(^|[^\\])#\[\[[\s\S]*?]]#/,
			lookbehind: true,
			greedy: true,
			inside: {
				'punctuation': /^#\[\[|]]#$/
			}
		},
		'velocity-comment': [
			{
				pattern: /(^|[^\\])#\*[\s\S]*?\*#/,
				lookbehind: true,
				greedy: true,
				alias: 'comment'
			},
			{
				pattern: /(^|[^\\])##.*/,
				lookbehind: true,
				greedy: true,
				alias: 'comment'
			}
		],
		'directive': {
			pattern: /(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|{[a-z][\w-]*})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i,
			lookbehind: true,
			inside: {
				'keyword': {
					pattern: /^#@?(?:[a-z][\w-]*|{[a-z][\w-]*})|\bin\b/,
					inside: {
						'punctuation': /[{}]/
					}
				},
				rest: velocity
			}
		},
		'variable': velocity['variable']
	});

	Prism.languages.velocity['tag'].inside['attr-value'].inside.rest = Prism.languages.velocity;

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXZlbG9jaXR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsK0RBQStEOztBQUUvRDtBQUNBO0FBQ0EsMkdBQTJHLEdBQUcsR0FBRztBQUNqSDtBQUNBLGFBQWE7QUFDYixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsWUFBWTtBQUM5RDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsWUFBWTtBQUMvQztBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQSxDQUFDIiwiZmlsZSI6IjQyNS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoUHJpc20pIHtcblx0UHJpc20ubGFuZ3VhZ2VzLnZlbG9jaXR5ID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnbWFya3VwJywge30pO1xuXG5cdHZhciB2ZWxvY2l0eSA9IHtcblx0XHQndmFyaWFibGUnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W15cXFxcXSg/OlxcXFxcXFxcKSopXFwkIT8oPzpbYS16XVtcXHctXSooPzpcXChbXildKlxcKSk/KD86XFwuW2Etel1bXFx3LV0qKD86XFwoW14pXSpcXCkpP3xcXFtbXlxcXV0rXSkqfHtbXn1dK30pL2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7fSAvLyBTZWUgYmVsb3dcblx0XHR9LFxuXHRcdCdzdHJpbmcnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXCJbXlwiXSpcInwnW14nXSonLyxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH0sXG5cdFx0J251bWJlcic6IC9cXGJcXGQrXFxiLyxcblx0XHQnYm9vbGVhbic6IC9cXGIoPzp0cnVlfGZhbHNlKVxcYi8sXG5cdFx0J29wZXJhdG9yJzogL1s9ITw+XT0/fFsrKi8lLV18JiZ8XFx8XFx8fFxcLlxcLnxcXGIoPzplcXxnW2V0XXxsW2V0XXxuKD86ZXxvdCkpXFxiLyxcblx0XHQncHVuY3R1YXRpb24nOiAvWygpe31bXFxdOiwuXS9cblx0fTtcblxuXHR2ZWxvY2l0eS52YXJpYWJsZS5pbnNpZGUgPSB7XG5cdFx0J3N0cmluZyc6IHZlbG9jaXR5WydzdHJpbmcnXSxcblx0XHQnZnVuY3Rpb24nOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKFteXFx3LV0pW2Etel1bXFx3LV0qKD89XFwoKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHQnbnVtYmVyJzogdmVsb2NpdHlbJ251bWJlciddLFxuXHRcdCdib29sZWFuJzogdmVsb2NpdHlbJ2Jvb2xlYW4nXSxcblx0XHQncHVuY3R1YXRpb24nOiB2ZWxvY2l0eVsncHVuY3R1YXRpb24nXVxuXHR9O1xuXG5cdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3ZlbG9jaXR5JywgJ2NvbW1lbnQnLCB7XG5cdFx0J3VucGFyc2VkJzoge1xuXHRcdFx0cGF0dGVybjogLyhefFteXFxcXF0pI1xcW1xcW1tcXHNcXFNdKj9dXSMvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXiNcXFtcXFt8XV0jJC9cblx0XHRcdH1cblx0XHR9LFxuXHRcdCd2ZWxvY2l0eS1jb21tZW50JzogW1xuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvKF58W15cXFxcXSkjXFwqW1xcc1xcU10qP1xcKiMvLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGFsaWFzOiAnY29tbWVudCdcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC8oXnxbXlxcXFxdKSMjLiovLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGFsaWFzOiAnY29tbWVudCdcblx0XHRcdH1cblx0XHRdLFxuXHRcdCdkaXJlY3RpdmUnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W15cXFxcXSg/OlxcXFxcXFxcKSopI0A/KD86W2Etel1bXFx3LV0qfHtbYS16XVtcXHctXSp9KSg/OlxccypcXCgoPzpbXigpXXxcXChbXigpXSpcXCkpKlxcKSk/L2ksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdrZXl3b3JkJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9eI0A/KD86W2Etel1bXFx3LV0qfHtbYS16XVtcXHctXSp9KXxcXGJpblxcYi8sXG5cdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvW3t9XS9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHJlc3Q6IHZlbG9jaXR5XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQndmFyaWFibGUnOiB2ZWxvY2l0eVsndmFyaWFibGUnXVxuXHR9KTtcblxuXHRQcmlzbS5sYW5ndWFnZXMudmVsb2NpdHlbJ3RhZyddLmluc2lkZVsnYXR0ci12YWx1ZSddLmluc2lkZS5yZXN0ID0gUHJpc20ubGFuZ3VhZ2VzLnZlbG9jaXR5O1xuXG59KFByaXNtKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9