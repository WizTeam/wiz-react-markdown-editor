(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[367],{

/***/ "./node_modules/prismjs/components/prism-scss.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-scss.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.scss = Prism.languages.extend('css', {
	'comment': {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
		lookbehind: true
	},
	'atrule': {
		pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
		inside: {
			'rule': /@[\w-]+/
			// See rest below
		}
	},
	// url, compassified
	'url': /(?:[-a-z]+-)?url(?=\()/i,
	// CSS selector regex is not appropriate for Sass
	// since there can be lot more things (var, @ directive, nesting..)
	// a selector must start at the end of a property or after a brace (end of other rules or nesting)
	// it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
	// the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
	// can "pass" as a selector- e.g: proper#{$erty})
	// this one was hard to do, so please be careful if you edit this one :)
	'selector': {
		// Initial look-ahead is used to prevent matching of blank selectors
		pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
		inside: {
			'parent': {
				pattern: /&/,
				alias: 'important'
			},
			'placeholder': /%[-\w]+/,
			'variable': /\$[-\w]+|#\{\$[-\w]+\}/
		}
	},
	'property': {
		pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
		inside: {
			'variable': /\$[-\w]+|#\{\$[-\w]+\}/
		}
	}
});

Prism.languages.insertBefore('scss', 'atrule', {
	'keyword': [
		/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
		{
			pattern: /( +)(?:from|through)(?= )/,
			lookbehind: true
		}
	]
});

Prism.languages.insertBefore('scss', 'important', {
	// var and interpolated vars
	'variable': /\$[-\w]+|#\{\$[-\w]+\}/
});

Prism.languages.insertBefore('scss', 'function', {
	'placeholder': {
		pattern: /%[-\w]+/,
		alias: 'selector'
	},
	'statement': {
		pattern: /\B!(?:default|optional)\b/i,
		alias: 'keyword'
	},
	'boolean': /\b(?:true|false)\b/,
	'null': {
		pattern: /\bnull\b/,
		alias: 'keyword'
	},
	'operator': {
		pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
		lookbehind: true
	}
});

Prism.languages.scss['atrule'].inside.rest = Prism.languages.scss;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXNjc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLEtBQUssR0FBRztBQUM1RSwyQ0FBMkMsTUFBTTtBQUNqRDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsYUFBYSxPQUFPLFVBQVUsVUFBVSxLQUFLLE9BQU8sS0FBSyxJQUFJO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsNEJBQTRCLFVBQVU7QUFDdEM7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxpQ0FBaUMsVUFBVTtBQUMzQztBQUNBLDRCQUE0QixVQUFVO0FBQ3RDO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVTtBQUNwQyxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJmaWxlIjoiMzY3LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiUHJpc20ubGFuZ3VhZ2VzLnNjc3MgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjc3MnLCB7XG5cdCdjb21tZW50Jzoge1xuXHRcdHBhdHRlcm46IC8oXnxbXlxcXFxdKSg/OlxcL1xcKltcXHNcXFNdKj9cXCpcXC98XFwvXFwvLiopLyxcblx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdH0sXG5cdCdhdHJ1bGUnOiB7XG5cdFx0cGF0dGVybjogL0BbXFx3LV0rKD86XFwoW14oKV0rXFwpfFteKF0pKj8oPz1cXHMrW3s7XSkvLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3J1bGUnOiAvQFtcXHctXSsvXG5cdFx0XHQvLyBTZWUgcmVzdCBiZWxvd1xuXHRcdH1cblx0fSxcblx0Ly8gdXJsLCBjb21wYXNzaWZpZWRcblx0J3VybCc6IC8oPzpbLWEtel0rLSk/dXJsKD89XFwoKS9pLFxuXHQvLyBDU1Mgc2VsZWN0b3IgcmVnZXggaXMgbm90IGFwcHJvcHJpYXRlIGZvciBTYXNzXG5cdC8vIHNpbmNlIHRoZXJlIGNhbiBiZSBsb3QgbW9yZSB0aGluZ3MgKHZhciwgQCBkaXJlY3RpdmUsIG5lc3RpbmcuLilcblx0Ly8gYSBzZWxlY3RvciBtdXN0IHN0YXJ0IGF0IHRoZSBlbmQgb2YgYSBwcm9wZXJ0eSBvciBhZnRlciBhIGJyYWNlIChlbmQgb2Ygb3RoZXIgcnVsZXMgb3IgbmVzdGluZylcblx0Ly8gaXQgY2FuIGNvbnRhaW4gc29tZSBjaGFyYWN0ZXJzIHRoYXQgYXJlbid0IHVzZWQgZm9yIGRlZmluaW5nIHJ1bGVzIG9yIGVuZCBvZiBzZWxlY3RvciwgJiAocGFyZW50IHNlbGVjdG9yKSwgb3IgaW50ZXJwb2xhdGVkIHZhcmlhYmxlXG5cdC8vIHRoZSBlbmQgb2YgYSBzZWxlY3RvciBpcyBmb3VuZCB3aGVuIHRoZXJlIGlzIG5vIHJ1bGVzIGluIGl0ICgge30gb3Ige1xcc30pIG9yIGlmIHRoZXJlIGlzIGEgcHJvcGVydHkgKGJlY2F1c2UgYW4gaW50ZXJwb2xhdGVkIHZhclxuXHQvLyBjYW4gXCJwYXNzXCIgYXMgYSBzZWxlY3Rvci0gZS5nOiBwcm9wZXIjeyRlcnR5fSlcblx0Ly8gdGhpcyBvbmUgd2FzIGhhcmQgdG8gZG8sIHNvIHBsZWFzZSBiZSBjYXJlZnVsIGlmIHlvdSBlZGl0IHRoaXMgb25lIDopXG5cdCdzZWxlY3Rvcic6IHtcblx0XHQvLyBJbml0aWFsIGxvb2stYWhlYWQgaXMgdXNlZCB0byBwcmV2ZW50IG1hdGNoaW5nIG9mIGJsYW5rIHNlbGVjdG9yc1xuXHRcdHBhdHRlcm46IC8oPz1cXFMpW15AO3t9KCldPyg/OlteQDt7fSgpXXwjXFx7XFwkWy1cXHddK1xcfSkrKD89XFxzKlxceyg/OlxcfXxcXHN8W159XStbOntdW159XSspKS9tLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3BhcmVudCc6IHtcblx0XHRcdFx0cGF0dGVybjogLyYvLFxuXHRcdFx0XHRhbGlhczogJ2ltcG9ydGFudCdcblx0XHRcdH0sXG5cdFx0XHQncGxhY2Vob2xkZXInOiAvJVstXFx3XSsvLFxuXHRcdFx0J3ZhcmlhYmxlJzogL1xcJFstXFx3XSt8I1xce1xcJFstXFx3XStcXH0vXG5cdFx0fVxuXHR9LFxuXHQncHJvcGVydHknOiB7XG5cdFx0cGF0dGVybjogLyg/OltcXHctXXxcXCRbLVxcd10rfCNcXHtcXCRbLVxcd10rXFx9KSsoPz1cXHMqOikvLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3ZhcmlhYmxlJzogL1xcJFstXFx3XSt8I1xce1xcJFstXFx3XStcXH0vXG5cdFx0fVxuXHR9XG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnc2NzcycsICdhdHJ1bGUnLCB7XG5cdCdrZXl3b3JkJzogW1xuXHRcdC9AKD86aWZ8ZWxzZSg/OiBpZik/fGZvcnxlYWNofHdoaWxlfGltcG9ydHxleHRlbmR8ZGVidWd8d2FybnxtaXhpbnxpbmNsdWRlfGZ1bmN0aW9ufHJldHVybnxjb250ZW50KS9pLFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oICspKD86ZnJvbXx0aHJvdWdoKSg/PSApLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9XG5cdF1cbn0pO1xuXG5QcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdzY3NzJywgJ2ltcG9ydGFudCcsIHtcblx0Ly8gdmFyIGFuZCBpbnRlcnBvbGF0ZWQgdmFyc1xuXHQndmFyaWFibGUnOiAvXFwkWy1cXHddK3wjXFx7XFwkWy1cXHddK1xcfS9cbn0pO1xuXG5QcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdzY3NzJywgJ2Z1bmN0aW9uJywge1xuXHQncGxhY2Vob2xkZXInOiB7XG5cdFx0cGF0dGVybjogLyVbLVxcd10rLyxcblx0XHRhbGlhczogJ3NlbGVjdG9yJ1xuXHR9LFxuXHQnc3RhdGVtZW50Jzoge1xuXHRcdHBhdHRlcm46IC9cXEIhKD86ZGVmYXVsdHxvcHRpb25hbClcXGIvaSxcblx0XHRhbGlhczogJ2tleXdvcmQnXG5cdH0sXG5cdCdib29sZWFuJzogL1xcYig/OnRydWV8ZmFsc2UpXFxiLyxcblx0J251bGwnOiB7XG5cdFx0cGF0dGVybjogL1xcYm51bGxcXGIvLFxuXHRcdGFsaWFzOiAna2V5d29yZCdcblx0fSxcblx0J29wZXJhdG9yJzoge1xuXHRcdHBhdHRlcm46IC8oXFxzKSg/OlstKypcXC8lXXxbPSFdPXw8PT98Pj0/fGFuZHxvcnxub3QpKD89XFxzKS8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZVxuXHR9XG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLnNjc3NbJ2F0cnVsZSddLmluc2lkZS5yZXN0ID0gUHJpc20ubGFuZ3VhZ2VzLnNjc3M7XG4iXSwic291cmNlUm9vdCI6IiJ9