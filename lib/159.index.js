(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[159],{

/***/ "./node_modules/prismjs/components/prism-haxe.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-haxe.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.haxe = Prism.languages.extend('clike', {
	// Strings can be multi-line
	'string': {
		pattern: /(["'])(?:(?!\1)[^\\]|\\[\s\S])*\1/,
		greedy: true,
		inside: {
			'interpolation': {
				pattern: /(^|[^\\])\$(?:\w+|\{[^}]+\})/,
				lookbehind: true,
				inside: {
					'interpolation': {
						pattern: /^\$\w*/,
						alias: 'variable'
					}
					// See rest below
				}
			}
		}
	},
	// The final look-ahead prevents highlighting of keywords if expressions such as "haxe.macro.Expr"
	'keyword': /\bthis\b|\b(?:abstract|as|break|case|cast|catch|class|continue|default|do|dynamic|else|enum|extends|extern|from|for|function|if|implements|import|in|inline|interface|macro|new|null|override|public|private|return|static|super|switch|throw|to|try|typedef|using|var|while)(?!\.)\b/,
	'operator': /\.{3}|\+\+?|-[->]?|[=!]=?|&&?|\|\|?|<[<=]?|>[>=]?|[*\/%~^]/
});
Prism.languages.insertBefore('haxe', 'class-name', {
	'regex': {
		pattern: /~\/(?:[^\/\\\r\n]|\\.)+\/[igmsu]*/,
		greedy: true
	}
});
Prism.languages.insertBefore('haxe', 'keyword', {
	'preprocessor': {
		pattern: /#\w+/,
		alias: 'builtin'
	},
	'metadata': {
		pattern: /@:?\w+/,
		alias: 'symbol'
	},
	'reification': {
		pattern: /\$(?:\w+|(?=\{))/,
		alias: 'variable'
	}
});
Prism.languages.haxe['string'].inside['interpolation'].inside.rest = Prism.languages.haxe;
delete Prism.languages.haxe['class-name'];

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWhheGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsR0FBRyxJQUFJO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxpQkFBaUIsRUFBRTtBQUNuQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDBDIiwiZmlsZSI6IjE1OS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy5oYXhlID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG5cdC8vIFN0cmluZ3MgY2FuIGJlIG11bHRpLWxpbmVcblx0J3N0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvKFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFxbXFxzXFxTXSkqXFwxLyxcblx0XHRncmVlZHk6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQnaW50ZXJwb2xhdGlvbic6IHtcblx0XHRcdFx0cGF0dGVybjogLyhefFteXFxcXF0pXFwkKD86XFx3K3xcXHtbXn1dK1xcfSkvLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnaW50ZXJwb2xhdGlvbic6IHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IC9eXFwkXFx3Ki8sXG5cdFx0XHRcdFx0XHRhbGlhczogJ3ZhcmlhYmxlJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBTZWUgcmVzdCBiZWxvd1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHQvLyBUaGUgZmluYWwgbG9vay1haGVhZCBwcmV2ZW50cyBoaWdobGlnaHRpbmcgb2Yga2V5d29yZHMgaWYgZXhwcmVzc2lvbnMgc3VjaCBhcyBcImhheGUubWFjcm8uRXhwclwiXG5cdCdrZXl3b3JkJzogL1xcYnRoaXNcXGJ8XFxiKD86YWJzdHJhY3R8YXN8YnJlYWt8Y2FzZXxjYXN0fGNhdGNofGNsYXNzfGNvbnRpbnVlfGRlZmF1bHR8ZG98ZHluYW1pY3xlbHNlfGVudW18ZXh0ZW5kc3xleHRlcm58ZnJvbXxmb3J8ZnVuY3Rpb258aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW58aW5saW5lfGludGVyZmFjZXxtYWNyb3xuZXd8bnVsbHxvdmVycmlkZXxwdWJsaWN8cHJpdmF0ZXxyZXR1cm58c3RhdGljfHN1cGVyfHN3aXRjaHx0aHJvd3x0b3x0cnl8dHlwZWRlZnx1c2luZ3x2YXJ8d2hpbGUpKD8hXFwuKVxcYi8sXG5cdCdvcGVyYXRvcic6IC9cXC57M318XFwrXFwrP3wtWy0+XT98Wz0hXT0/fCYmP3xcXHxcXHw/fDxbPD1dP3w+Wz49XT98WypcXC8lfl5dL1xufSk7XG5QcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdoYXhlJywgJ2NsYXNzLW5hbWUnLCB7XG5cdCdyZWdleCc6IHtcblx0XHRwYXR0ZXJuOiAvflxcLyg/OlteXFwvXFxcXFxcclxcbl18XFxcXC4pK1xcL1tpZ21zdV0qLyxcblx0XHRncmVlZHk6IHRydWVcblx0fVxufSk7XG5QcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdoYXhlJywgJ2tleXdvcmQnLCB7XG5cdCdwcmVwcm9jZXNzb3InOiB7XG5cdFx0cGF0dGVybjogLyNcXHcrLyxcblx0XHRhbGlhczogJ2J1aWx0aW4nXG5cdH0sXG5cdCdtZXRhZGF0YSc6IHtcblx0XHRwYXR0ZXJuOiAvQDo/XFx3Ky8sXG5cdFx0YWxpYXM6ICdzeW1ib2wnXG5cdH0sXG5cdCdyZWlmaWNhdGlvbic6IHtcblx0XHRwYXR0ZXJuOiAvXFwkKD86XFx3K3woPz1cXHspKS8sXG5cdFx0YWxpYXM6ICd2YXJpYWJsZSdcblx0fVxufSk7XG5QcmlzbS5sYW5ndWFnZXMuaGF4ZVsnc3RyaW5nJ10uaW5zaWRlWydpbnRlcnBvbGF0aW9uJ10uaW5zaWRlLnJlc3QgPSBQcmlzbS5sYW5ndWFnZXMuaGF4ZTtcbmRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMuaGF4ZVsnY2xhc3MtbmFtZSddOyJdLCJzb3VyY2VSb290IjoiIn0=