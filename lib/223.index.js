(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[223],{

/***/ "./node_modules/prismjs/components/prism-latex.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-latex.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {
	var funcPattern = /\\(?:[^a-z()[\]]|[a-z*]+)/i;
	var insideEqu = {
		'equation-command': {
			pattern: funcPattern,
			alias: 'regex'
		}
	};

	Prism.languages.latex = {
		'comment': /%.*/m,
		// the verbatim environment prints whitespace to the document
		'cdata': {
			pattern: /(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
			lookbehind: true
		},
		/*
		 * equations can be between $$ $$ or $ $ or \( \) or \[ \]
		 * (all are multiline)
		 */
		'equation': [
			{
				pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
				inside: insideEqu,
				alias: 'string'
			},
			{
				pattern: /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
				lookbehind: true,
				inside: insideEqu,
				alias: 'string'
			}
		],
		/*
		 * arguments which are keywords or references are highlighted
		 * as keywords
		 */
		'keyword': {
			pattern: /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
			lookbehind: true
		},
		'url': {
			pattern: /(\\url\{)[^}]+(?=\})/,
			lookbehind: true
		},
		/*
		 * section or chapter headlines are highlighted as bold so that
		 * they stand out more
		 */
		'headline': {
			pattern: /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,
			lookbehind: true,
			alias: 'class-name'
		},
		'function': {
			pattern: funcPattern,
			alias: 'selector'
		},
		'punctuation': /[[\]{}&]/
	};

	Prism.languages.tex = Prism.languages.latex;
	Prism.languages.context = Prism.languages.latex;
})(Prism);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWxhdGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOEJBQThCLG1CQUFtQixJQUFJO0FBQzVFO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLHdCQUF3Qix1REFBdUQsbUJBQW1CLElBQUk7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsSUFBSSxPQUFPO0FBQ2pHO0FBQ0EsR0FBRztBQUNIO0FBQ0EscUJBQXFCLElBQUksT0FBTztBQUNoQztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEpBQTBKLElBQUksT0FBTztBQUNySztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiMjIzLmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChQcmlzbSkge1xuXHR2YXIgZnVuY1BhdHRlcm4gPSAvXFxcXCg/OlteYS16KClbXFxdXXxbYS16Kl0rKS9pO1xuXHR2YXIgaW5zaWRlRXF1ID0ge1xuXHRcdCdlcXVhdGlvbi1jb21tYW5kJzoge1xuXHRcdFx0cGF0dGVybjogZnVuY1BhdHRlcm4sXG5cdFx0XHRhbGlhczogJ3JlZ2V4J1xuXHRcdH1cblx0fTtcblxuXHRQcmlzbS5sYW5ndWFnZXMubGF0ZXggPSB7XG5cdFx0J2NvbW1lbnQnOiAvJS4qL20sXG5cdFx0Ly8gdGhlIHZlcmJhdGltIGVudmlyb25tZW50IHByaW50cyB3aGl0ZXNwYWNlIHRvIHRoZSBkb2N1bWVudFxuXHRcdCdjZGF0YSc6IHtcblx0XHRcdHBhdHRlcm46IC8oXFxcXGJlZ2luXFx7KCg/OnZlcmJhdGltfGxzdGxpc3RpbmcpXFwqPylcXH0pW1xcc1xcU10qPyg/PVxcXFxlbmRcXHtcXDJcXH0pLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdC8qXG5cdFx0ICogZXF1YXRpb25zIGNhbiBiZSBiZXR3ZWVuICQkICQkIG9yICQgJCBvciBcXCggXFwpIG9yIFxcWyBcXF1cblx0XHQgKiAoYWxsIGFyZSBtdWx0aWxpbmUpXG5cdFx0ICovXG5cdFx0J2VxdWF0aW9uJzogW1xuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiAvXFwkXFwkKD86XFxcXFtcXHNcXFNdfFteXFxcXCRdKStcXCRcXCR8XFwkKD86XFxcXFtcXHNcXFNdfFteXFxcXCRdKStcXCR8XFxcXFxcKFtcXHNcXFNdKj9cXFxcXFwpfFxcXFxcXFtbXFxzXFxTXSo/XFxcXFxcXS8sXG5cdFx0XHRcdGluc2lkZTogaW5zaWRlRXF1LFxuXHRcdFx0XHRhbGlhczogJ3N0cmluZydcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC8oXFxcXGJlZ2luXFx7KCg/OmVxdWF0aW9ufG1hdGh8ZXFuYXJyYXl8YWxpZ258bXVsdGxpbmV8Z2F0aGVyKVxcKj8pXFx9KVtcXHNcXFNdKj8oPz1cXFxcZW5kXFx7XFwyXFx9KS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZTogaW5zaWRlRXF1LFxuXHRcdFx0XHRhbGlhczogJ3N0cmluZydcblx0XHRcdH1cblx0XHRdLFxuXHRcdC8qXG5cdFx0ICogYXJndW1lbnRzIHdoaWNoIGFyZSBrZXl3b3JkcyBvciByZWZlcmVuY2VzIGFyZSBoaWdobGlnaHRlZFxuXHRcdCAqIGFzIGtleXdvcmRzXG5cdFx0ICovXG5cdFx0J2tleXdvcmQnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKFxcXFwoPzpiZWdpbnxlbmR8cmVmfGNpdGV8bGFiZWx8dXNlcGFja2FnZXxkb2N1bWVudGNsYXNzKSg/OlxcW1teXFxdXStcXF0pP1xceylbXn1dKyg/PVxcfSkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0J3VybCc6IHtcblx0XHRcdHBhdHRlcm46IC8oXFxcXHVybFxceylbXn1dKyg/PVxcfSkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0Lypcblx0XHQgKiBzZWN0aW9uIG9yIGNoYXB0ZXIgaGVhZGxpbmVzIGFyZSBoaWdobGlnaHRlZCBhcyBib2xkIHNvIHRoYXRcblx0XHQgKiB0aGV5IHN0YW5kIG91dCBtb3JlXG5cdFx0ICovXG5cdFx0J2hlYWRsaW5lJzoge1xuXHRcdFx0cGF0dGVybjogLyhcXFxcKD86cGFydHxjaGFwdGVyfHNlY3Rpb258c3Vic2VjdGlvbnxmcmFtZXRpdGxlfHN1YnN1YnNlY3Rpb258cGFyYWdyYXBofHN1YnBhcmFncmFwaHxzdWJzdWJwYXJhZ3JhcGh8c3Vic3Vic3VicGFyYWdyYXBoKVxcKj8oPzpcXFtbXlxcXV0rXFxdKT9cXHspW159XSsoPz1cXH0oPzpcXFtbXlxcXV0rXFxdKT8pLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRhbGlhczogJ2NsYXNzLW5hbWUnXG5cdFx0fSxcblx0XHQnZnVuY3Rpb24nOiB7XG5cdFx0XHRwYXR0ZXJuOiBmdW5jUGF0dGVybixcblx0XHRcdGFsaWFzOiAnc2VsZWN0b3InXG5cdFx0fSxcblx0XHQncHVuY3R1YXRpb24nOiAvW1tcXF17fSZdL1xuXHR9O1xuXG5cdFByaXNtLmxhbmd1YWdlcy50ZXggPSBQcmlzbS5sYW5ndWFnZXMubGF0ZXg7XG5cdFByaXNtLmxhbmd1YWdlcy5jb250ZXh0ID0gUHJpc20ubGFuZ3VhZ2VzLmxhdGV4O1xufSkoUHJpc20pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==