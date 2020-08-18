(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/prismjs/components/prism-aspnet.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-aspnet.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.aspnet = Prism.languages.extend('markup', {
	'page-directive': {
		pattern: /<%\s*@.*%>/i,
		alias: 'tag',
		inside: {
			'page-directive': {
				pattern: /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,
				alias: 'tag'
			},
			rest: Prism.languages.markup.tag.inside
		}
	},
	'directive': {
		pattern: /<%.*%>/i,
		alias: 'tag',
		inside: {
			'directive': {
				pattern: /<%\s*?[$=%#:]{0,2}|%>/i,
				alias: 'tag'
			},
			rest: Prism.languages.csharp
		}
	}
});
// Regexp copied from prism-markup, with a negative look-ahead added
Prism.languages.aspnet.tag.pattern = /<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i;

// match directives of attribute value foo="<% Bar %>"
Prism.languages.insertBefore('inside', 'punctuation', {
	'directive': Prism.languages.aspnet['directive']
}, Prism.languages.aspnet.tag.inside["attr-value"]);

Prism.languages.insertBefore('aspnet', 'comment', {
	'asp-comment': {
		pattern: /<%--[\s\S]*?--%>/,
		alias: ['asp', 'comment']
	}
});

// script runat="server" contains csharp, not javascript
Prism.languages.insertBefore('aspnet', Prism.languages.javascript ? 'script' : 'tag', {
	'asp-script': {
		pattern: /(<script(?=.*runat=['"]?server['"]?)[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
		lookbehind: true,
		alias: ['asp', 'script'],
		inside: Prism.languages.csharp || {}
	}
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWFzcG5ldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixJQUFJO0FBQ2hDO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiMzEuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJQcmlzbS5sYW5ndWFnZXMuYXNwbmV0ID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnbWFya3VwJywge1xuXHQncGFnZS1kaXJlY3RpdmUnOiB7XG5cdFx0cGF0dGVybjogLzwlXFxzKkAuKiU+L2ksXG5cdFx0YWxpYXM6ICd0YWcnLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3BhZ2UtZGlyZWN0aXZlJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvPCVcXHMqQFxccyooPzpBc3NlbWJseXxDb250cm9sfEltcGxlbWVudHN8SW1wb3J0fE1hc3Rlcig/OlR5cGUpP3xPdXRwdXRDYWNoZXxQYWdlfFByZXZpb3VzUGFnZVR5cGV8UmVmZXJlbmNlfFJlZ2lzdGVyKT98JT4vaSxcblx0XHRcdFx0YWxpYXM6ICd0YWcnXG5cdFx0XHR9LFxuXHRcdFx0cmVzdDogUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cC50YWcuaW5zaWRlXG5cdFx0fVxuXHR9LFxuXHQnZGlyZWN0aXZlJzoge1xuXHRcdHBhdHRlcm46IC88JS4qJT4vaSxcblx0XHRhbGlhczogJ3RhZycsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQnZGlyZWN0aXZlJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvPCVcXHMqP1skPSUjOl17MCwyfXwlPi9pLFxuXHRcdFx0XHRhbGlhczogJ3RhZydcblx0XHRcdH0sXG5cdFx0XHRyZXN0OiBQcmlzbS5sYW5ndWFnZXMuY3NoYXJwXG5cdFx0fVxuXHR9XG59KTtcbi8vIFJlZ2V4cCBjb3BpZWQgZnJvbSBwcmlzbS1tYXJrdXAsIHdpdGggYSBuZWdhdGl2ZSBsb29rLWFoZWFkIGFkZGVkXG5QcmlzbS5sYW5ndWFnZXMuYXNwbmV0LnRhZy5wYXR0ZXJuID0gLzwoPyElKVxcLz9bXlxccz5cXC9dKyg/OlxccytbXlxccz5cXC89XSsoPzo9KD86KFwifCcpKD86XFxcXFtcXHNcXFNdfCg/IVxcMSlbXlxcXFxdKSpcXDF8W15cXHMnXCI+PV0rKSk/KSpcXHMqXFwvPz4vaTtcblxuLy8gbWF0Y2ggZGlyZWN0aXZlcyBvZiBhdHRyaWJ1dGUgdmFsdWUgZm9vPVwiPCUgQmFyICU+XCJcblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2luc2lkZScsICdwdW5jdHVhdGlvbicsIHtcblx0J2RpcmVjdGl2ZSc6IFByaXNtLmxhbmd1YWdlcy5hc3BuZXRbJ2RpcmVjdGl2ZSddXG59LCBQcmlzbS5sYW5ndWFnZXMuYXNwbmV0LnRhZy5pbnNpZGVbXCJhdHRyLXZhbHVlXCJdKTtcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnYXNwbmV0JywgJ2NvbW1lbnQnLCB7XG5cdCdhc3AtY29tbWVudCc6IHtcblx0XHRwYXR0ZXJuOiAvPCUtLVtcXHNcXFNdKj8tLSU+Lyxcblx0XHRhbGlhczogWydhc3AnLCAnY29tbWVudCddXG5cdH1cbn0pO1xuXG4vLyBzY3JpcHQgcnVuYXQ9XCJzZXJ2ZXJcIiBjb250YWlucyBjc2hhcnAsIG5vdCBqYXZhc2NyaXB0XG5QcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdhc3BuZXQnLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCA/ICdzY3JpcHQnIDogJ3RhZycsIHtcblx0J2FzcC1zY3JpcHQnOiB7XG5cdFx0cGF0dGVybjogLyg8c2NyaXB0KD89LipydW5hdD1bJ1wiXT9zZXJ2ZXJbJ1wiXT8pW1xcc1xcU10qPz4pW1xcc1xcU10qPyg/PTxcXC9zY3JpcHQ+KS9pLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0YWxpYXM6IFsnYXNwJywgJ3NjcmlwdCddLFxuXHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmNzaGFycCB8fCB7fVxuXHR9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=