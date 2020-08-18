(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[197],{

/***/ "./node_modules/prismjs/components/prism-jolie.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-jolie.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.jolie = Prism.languages.extend('clike', {
	'keyword': /\b(?:include|define|is_defined|undef|main|init|outputPort|inputPort|Location|Protocol|Interfaces|RequestResponse|OneWay|type|interface|extender|throws|cset|csets|forward|Aggregates|Redirects|embedded|courier|execution|sequential|concurrent|single|scope|install|throw|comp|cH|default|global|linkIn|linkOut|synchronized|this|new|for|if|else|while|in|Jolie|Java|Javascript|nullProcess|spawn|constants|with|provide|until|exit|foreach|instanceof|over|service)\b/,
	'builtin': /\b(?:undefined|string|int|void|long|Byte|bool|double|float|char|any)\b/,
	'number': /(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?l?/i,
	'operator': /-[-=>]?|\+[+=]?|<[<=]?|[>=*!]=?|&&|\|\||[:?\/%^]/,
	'symbol': /[|;@]/,
	'punctuation': /[,.]/,
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	}
});

delete Prism.languages.jolie['class-name'];

Prism.languages.insertBefore( 'jolie', 'keyword', {
	'function':
	{
		pattern: /((?:\b(?:outputPort|inputPort|in|service|courier)\b|@)\s*)\w+/,
		lookbehind: true
	},
	'aggregates': {
		pattern: /(\bAggregates\s*:\s*)(?:\w+(?:\s+with\s+\w+)?\s*,\s*)*\w+(?:\s+with\s+\w+)?/,
		lookbehind: true,
		inside: {
			'with-extension': {
				pattern: /\bwith\s+\w+/,
				inside: {
					'keyword' : /\bwith\b/
				}
			},
			'function': {
				pattern: /\w+/
			},
			'punctuation': {
				pattern: /,/
			}
		}
	},
	'redirects': {
		pattern: /(\bRedirects\s*:\s*)(?:\w+\s*=>\s*\w+\s*,\s*)*(?:\w+\s*=>\s*\w+)/,
		lookbehind: true,
		inside: {
			'punctuation': {
				pattern: /,/
			},
			'function': {
				pattern: /\w+/
			},
			'symbol': {
				pattern: /=>/
			}
		}
	}
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpvbGllLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIxOTcuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJQcmlzbS5sYW5ndWFnZXMuam9saWUgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcblx0J2tleXdvcmQnOiAvXFxiKD86aW5jbHVkZXxkZWZpbmV8aXNfZGVmaW5lZHx1bmRlZnxtYWlufGluaXR8b3V0cHV0UG9ydHxpbnB1dFBvcnR8TG9jYXRpb258UHJvdG9jb2x8SW50ZXJmYWNlc3xSZXF1ZXN0UmVzcG9uc2V8T25lV2F5fHR5cGV8aW50ZXJmYWNlfGV4dGVuZGVyfHRocm93c3xjc2V0fGNzZXRzfGZvcndhcmR8QWdncmVnYXRlc3xSZWRpcmVjdHN8ZW1iZWRkZWR8Y291cmllcnxleGVjdXRpb258c2VxdWVudGlhbHxjb25jdXJyZW50fHNpbmdsZXxzY29wZXxpbnN0YWxsfHRocm93fGNvbXB8Y0h8ZGVmYXVsdHxnbG9iYWx8bGlua0lufGxpbmtPdXR8c3luY2hyb25pemVkfHRoaXN8bmV3fGZvcnxpZnxlbHNlfHdoaWxlfGlufEpvbGllfEphdmF8SmF2YXNjcmlwdHxudWxsUHJvY2Vzc3xzcGF3bnxjb25zdGFudHN8d2l0aHxwcm92aWRlfHVudGlsfGV4aXR8Zm9yZWFjaHxpbnN0YW5jZW9mfG92ZXJ8c2VydmljZSlcXGIvLFxuXHQnYnVpbHRpbic6IC9cXGIoPzp1bmRlZmluZWR8c3RyaW5nfGludHx2b2lkfGxvbmd8Qnl0ZXxib29sfGRvdWJsZXxmbG9hdHxjaGFyfGFueSlcXGIvLFxuXHQnbnVtYmVyJzogLyg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OmVbKy1dP1xcZCspP2w/L2ksXG5cdCdvcGVyYXRvcic6IC8tWy09Pl0/fFxcK1srPV0/fDxbPD1dP3xbPj0qIV09P3wmJnxcXHxcXHx8Wzo/XFwvJV5dLyxcblx0J3N5bWJvbCc6IC9bfDtAXS8sXG5cdCdwdW5jdHVhdGlvbic6IC9bLC5dLyxcblx0J3N0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvKFtcIiddKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9XG59KTtcblxuZGVsZXRlIFByaXNtLmxhbmd1YWdlcy5qb2xpZVsnY2xhc3MtbmFtZSddO1xuXG5QcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCAnam9saWUnLCAna2V5d29yZCcsIHtcblx0J2Z1bmN0aW9uJzpcblx0e1xuXHRcdHBhdHRlcm46IC8oKD86XFxiKD86b3V0cHV0UG9ydHxpbnB1dFBvcnR8aW58c2VydmljZXxjb3VyaWVyKVxcYnxAKVxccyopXFx3Ky8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZVxuXHR9LFxuXHQnYWdncmVnYXRlcyc6IHtcblx0XHRwYXR0ZXJuOiAvKFxcYkFnZ3JlZ2F0ZXNcXHMqOlxccyopKD86XFx3Kyg/Olxccyt3aXRoXFxzK1xcdyspP1xccyosXFxzKikqXFx3Kyg/Olxccyt3aXRoXFxzK1xcdyspPy8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCd3aXRoLWV4dGVuc2lvbic6IHtcblx0XHRcdFx0cGF0dGVybjogL1xcYndpdGhcXHMrXFx3Ky8sXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdrZXl3b3JkJyA6IC9cXGJ3aXRoXFxiL1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0J2Z1bmN0aW9uJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXFx3Ky9cblx0XHRcdH0sXG5cdFx0XHQncHVuY3R1YXRpb24nOiB7XG5cdFx0XHRcdHBhdHRlcm46IC8sL1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0J3JlZGlyZWN0cyc6IHtcblx0XHRwYXR0ZXJuOiAvKFxcYlJlZGlyZWN0c1xccyo6XFxzKikoPzpcXHcrXFxzKj0+XFxzKlxcdytcXHMqLFxccyopKig/OlxcdytcXHMqPT5cXHMqXFx3KykvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQncHVuY3R1YXRpb24nOiB7XG5cdFx0XHRcdHBhdHRlcm46IC8sL1xuXHRcdFx0fSxcblx0XHRcdCdmdW5jdGlvbic6IHtcblx0XHRcdFx0cGF0dGVybjogL1xcdysvXG5cdFx0XHR9LFxuXHRcdFx0J3N5bWJvbCc6IHtcblx0XHRcdFx0cGF0dGVybjogLz0+L1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9