(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[439],{

/***/ "./node_modules/prismjs/components/prism-wiki.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-wiki.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.wiki = Prism.languages.extend('markup', {
	'block-comment': {
		pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
		lookbehind: true,
		alias: 'comment'
	},
	'heading': {
		pattern: /^(=+).+?\1/m,
		inside: {
			'punctuation': /^=+|=+$/,
			'important': /.+/
		}
	},
	'emphasis': {
		// TODO Multi-line
		pattern: /('{2,5}).+?\1/,
		inside: {
			'bold-italic': {
				pattern: /(''''').+?(?=\1)/,
				lookbehind: true,
				alias: ['bold', 'italic']
			},
			'bold': {
				pattern: /(''')[^'](?:.*?[^'])?(?=\1)/,
				lookbehind: true
			},
			'italic': {
				pattern: /('')[^'](?:.*?[^'])?(?=\1)/,
				lookbehind: true
			},
			'punctuation': /^''+|''+$/
		}
	},
	'hr': {
		pattern: /^-{4,}/m,
		alias: 'punctuation'
	},
	'url': [
		/ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:RFC|PMID) +\d+/i,
		/\[\[.+?\]\]|\[.+?\]/
	],
	'variable': [
		/__[A-Z]+__/,
		// FIXME Nested structures should be handled
		// {{formatnum:{{#expr:{{{3}}}}}}}
		/\{{3}.+?\}{3}/,
		/\{\{.+?\}\}/
	],
	'symbol': [
		/^#redirect/im,
		/~{3,5}/
	],
	// Handle table attrs:
	// {|
	// ! style="text-align:left;"| Item
	// |}
	'table-tag': {
		pattern: /((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,
		lookbehind: true,
		inside: {
			'table-bar': {
				pattern: /\|$/,
				alias: 'punctuation'
			},
			rest: Prism.languages.markup['tag'].inside
		}
	},
	'punctuation': /^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m
});

Prism.languages.insertBefore('wiki', 'tag', {
	// Prevent highlighting inside <nowiki>, <source> and <pre> tags
	'nowiki': {
		pattern: /<(nowiki|pre|source)\b[\s\S]*?>[\s\S]*?<\/\1>/i,
		inside: {
			'tag': {
				pattern: /<(?:nowiki|pre|source)\b[\s\S]*?>|<\/(?:nowiki|pre|source)>/i,
				inside: Prism.languages.markup['tag'].inside
			}
		}
	}
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXdpa2kuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLGVBQWUsSUFBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLGVBQWUsR0FBRztBQUNsQjtBQUNBLEVBQUU7QUFDRjtBQUNBLHFDQUFxQyxFQUFFO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLFlBQVksU0FBUztBQUM1QixNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQ2hCLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDZDtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsdUJBQXVCLE9BQU8sVUFBVTtBQUN4QyxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjQzOS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy53aWtpID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnbWFya3VwJywge1xuXHQnYmxvY2stY29tbWVudCc6IHtcblx0XHRwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/XFwqXFwvLyxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGFsaWFzOiAnY29tbWVudCdcblx0fSxcblx0J2hlYWRpbmcnOiB7XG5cdFx0cGF0dGVybjogL14oPSspLis/XFwxL20sXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQncHVuY3R1YXRpb24nOiAvXj0rfD0rJC8sXG5cdFx0XHQnaW1wb3J0YW50JzogLy4rL1xuXHRcdH1cblx0fSxcblx0J2VtcGhhc2lzJzoge1xuXHRcdC8vIFRPRE8gTXVsdGktbGluZVxuXHRcdHBhdHRlcm46IC8oJ3syLDV9KS4rP1xcMS8sXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQnYm9sZC1pdGFsaWMnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC8oJycnJycpLis/KD89XFwxKS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGFsaWFzOiBbJ2JvbGQnLCAnaXRhbGljJ11cblx0XHRcdH0sXG5cdFx0XHQnYm9sZCc6IHtcblx0XHRcdFx0cGF0dGVybjogLygnJycpW14nXSg/Oi4qP1teJ10pPyg/PVxcMSkvLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0J2l0YWxpYyc6IHtcblx0XHRcdFx0cGF0dGVybjogLygnJylbXiddKD86Lio/W14nXSk/KD89XFwxKS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHQncHVuY3R1YXRpb24nOiAvXicnK3wnJyskL1xuXHRcdH1cblx0fSxcblx0J2hyJzoge1xuXHRcdHBhdHRlcm46IC9eLXs0LH0vbSxcblx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHR9LFxuXHQndXJsJzogW1xuXHRcdC9JU0JOICsoPzo5N1s4OV1bIC1dPyk/KD86XFxkWyAtXT8pezl9W1xcZHhdXFxifCg/OlJGQ3xQTUlEKSArXFxkKy9pLFxuXHRcdC9cXFtcXFsuKz9cXF1cXF18XFxbLis/XFxdL1xuXHRdLFxuXHQndmFyaWFibGUnOiBbXG5cdFx0L19fW0EtWl0rX18vLFxuXHRcdC8vIEZJWE1FIE5lc3RlZCBzdHJ1Y3R1cmVzIHNob3VsZCBiZSBoYW5kbGVkXG5cdFx0Ly8ge3tmb3JtYXRudW06e3sjZXhwcjp7e3szfX19fX19fVxuXHRcdC9cXHt7M30uKz9cXH17M30vLFxuXHRcdC9cXHtcXHsuKz9cXH1cXH0vXG5cdF0sXG5cdCdzeW1ib2wnOiBbXG5cdFx0L14jcmVkaXJlY3QvaW0sXG5cdFx0L357Myw1fS9cblx0XSxcblx0Ly8gSGFuZGxlIHRhYmxlIGF0dHJzOlxuXHQvLyB7fFxuXHQvLyAhIHN0eWxlPVwidGV4dC1hbGlnbjpsZWZ0O1wifCBJdGVtXG5cdC8vIHx9XG5cdCd0YWJsZS10YWcnOiB7XG5cdFx0cGF0dGVybjogLygoPzpefFt8IV0pW3whXSlbXnxcXHJcXG5dK1xcfCg/IVxcfCkvbSxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3RhYmxlLWJhcic6IHtcblx0XHRcdFx0cGF0dGVybjogL1xcfCQvLFxuXHRcdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdFx0fSxcblx0XHRcdHJlc3Q6IFByaXNtLmxhbmd1YWdlcy5tYXJrdXBbJ3RhZyddLmluc2lkZVxuXHRcdH1cblx0fSxcblx0J3B1bmN0dWF0aW9uJzogL14oPzpcXHtcXHx8XFx8XFx9fFxcfC18WyojOjshfF0pfFxcfFxcfHwhIS9tXG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnd2lraScsICd0YWcnLCB7XG5cdC8vIFByZXZlbnQgaGlnaGxpZ2h0aW5nIGluc2lkZSA8bm93aWtpPiwgPHNvdXJjZT4gYW5kIDxwcmU+IHRhZ3Ncblx0J25vd2lraSc6IHtcblx0XHRwYXR0ZXJuOiAvPChub3dpa2l8cHJlfHNvdXJjZSlcXGJbXFxzXFxTXSo/PltcXHNcXFNdKj88XFwvXFwxPi9pLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3RhZyc6IHtcblx0XHRcdFx0cGF0dGVybjogLzwoPzpub3dpa2l8cHJlfHNvdXJjZSlcXGJbXFxzXFxTXSo/Pnw8XFwvKD86bm93aWtpfHByZXxzb3VyY2UpPi9pLFxuXHRcdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5tYXJrdXBbJ3RhZyddLmluc2lkZVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9