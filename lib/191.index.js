(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[191],{

/***/ "./node_modules/prismjs/components/prism-javadoclike.js":
/*!**************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-javadoclike.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var javaDocLike = Prism.languages.javadoclike = {
		'parameter': {
			pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,
			lookbehind: true
		},
		'keyword': {
			// keywords are the first word in a line preceded be an `@` or surrounded by curly braces.
			// @word, {@word}
			pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
			lookbehind: true
		},
		'punctuation': /[{}]/
	};


	/**
	 * Adds doc comment support to the given language and calls a given callback on each doc comment pattern.
	 *
	 * @param {string} lang the language add doc comment support to.
	 * @param {(pattern: {inside: {rest: undefined}}) => void} callback the function called with each doc comment pattern as argument.
	 */
	function docCommentSupport(lang, callback) {
		var tokenName = 'doc-comment';

		var grammar = Prism.languages[lang];
		if (!grammar) {
			return;
		}
		var token = grammar[tokenName];

		if (!token) {
			// add doc comment: /** */
			var definition = {};
			definition[tokenName] = {
				pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
				lookbehind: true,
				alias: 'comment'
			};

			grammar = Prism.languages.insertBefore(lang, 'comment', definition);
			token = grammar[tokenName];
		}

		if (token instanceof RegExp) { // convert regex to object
			token = grammar[tokenName] = { pattern: token };
		}

		if (Array.isArray(token)) {
			for (var i = 0, l = token.length; i < l; i++) {
				if (token[i] instanceof RegExp) {
					token[i] = { pattern: token[i] };
				}
				callback(token[i]);
			}
		} else {
			callback(token);
		}
	}

	/**
	 * Adds doc-comment support to the given languages for the given documentation language.
	 *
	 * @param {string[]|string} languages
	 * @param {Object} docLanguage
	 */
	function addSupport(languages, docLanguage) {
		if (typeof languages === 'string') {
			languages = [languages];
		}

		languages.forEach(function (lang) {
			docCommentSupport(lang, function (pattern) {
				if (!pattern.inside) {
					pattern.inside = {};
				}
				pattern.inside.rest = docLanguage;
			});
		});
	}

	Object.defineProperty(javaDocLike, 'addSupport', { value: addSupport });

	javaDocLike.addSupport(['java', 'javascript', 'php'], javaDocLike);

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFkb2NsaWtlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsRUFBRTtBQUMxQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYztBQUNkLHdCQUF3QixFQUFFLGlCQUFpQjtBQUMzQztBQUNBLEdBQUc7QUFDSCxxQkFBcUI7QUFDckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLFdBQVcsU0FBUyxpQkFBaUIsVUFBVTtBQUMzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7QUFDaEMsaUNBQWlDO0FBQ2pDOztBQUVBO0FBQ0Esb0NBQW9DLE9BQU87QUFDM0M7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdCQUFnQjtBQUM1QixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNIOztBQUVBLG1EQUFtRCxvQkFBb0I7O0FBRXZFOztBQUVBLENBQUMiLCJmaWxlIjoiMTkxLmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChQcmlzbSkge1xuXG5cdHZhciBqYXZhRG9jTGlrZSA9IFByaXNtLmxhbmd1YWdlcy5qYXZhZG9jbGlrZSA9IHtcblx0XHQncGFyYW1ldGVyJzoge1xuXHRcdFx0cGF0dGVybjogLyheXFxzKig/OlxcL3szfXxcXCp8XFwvXFwqXFwqKVxccypAKD86cGFyYW18YXJnfGFyZ3VtZW50cylcXHMrKVxcdysvbSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdCdrZXl3b3JkJzoge1xuXHRcdFx0Ly8ga2V5d29yZHMgYXJlIHRoZSBmaXJzdCB3b3JkIGluIGEgbGluZSBwcmVjZWRlZCBiZSBhbiBgQGAgb3Igc3Vycm91bmRlZCBieSBjdXJseSBicmFjZXMuXG5cdFx0XHQvLyBAd29yZCwge0B3b3JkfVxuXHRcdFx0cGF0dGVybjogLyheXFxzKig/OlxcL3szfXxcXCp8XFwvXFwqXFwqKVxccyp8XFx7KUBbYS16XVthLXpBLVotXStcXGIvbSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdCdwdW5jdHVhdGlvbic6IC9be31dL1xuXHR9O1xuXG5cblx0LyoqXG5cdCAqIEFkZHMgZG9jIGNvbW1lbnQgc3VwcG9ydCB0byB0aGUgZ2l2ZW4gbGFuZ3VhZ2UgYW5kIGNhbGxzIGEgZ2l2ZW4gY2FsbGJhY2sgb24gZWFjaCBkb2MgY29tbWVudCBwYXR0ZXJuLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZyB0aGUgbGFuZ3VhZ2UgYWRkIGRvYyBjb21tZW50IHN1cHBvcnQgdG8uXG5cdCAqIEBwYXJhbSB7KHBhdHRlcm46IHtpbnNpZGU6IHtyZXN0OiB1bmRlZmluZWR9fSkgPT4gdm9pZH0gY2FsbGJhY2sgdGhlIGZ1bmN0aW9uIGNhbGxlZCB3aXRoIGVhY2ggZG9jIGNvbW1lbnQgcGF0dGVybiBhcyBhcmd1bWVudC5cblx0ICovXG5cdGZ1bmN0aW9uIGRvY0NvbW1lbnRTdXBwb3J0KGxhbmcsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIHRva2VuTmFtZSA9ICdkb2MtY29tbWVudCc7XG5cblx0XHR2YXIgZ3JhbW1hciA9IFByaXNtLmxhbmd1YWdlc1tsYW5nXTtcblx0XHRpZiAoIWdyYW1tYXIpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFyIHRva2VuID0gZ3JhbW1hclt0b2tlbk5hbWVdO1xuXG5cdFx0aWYgKCF0b2tlbikge1xuXHRcdFx0Ly8gYWRkIGRvYyBjb21tZW50OiAvKiogKi9cblx0XHRcdHZhciBkZWZpbml0aW9uID0ge307XG5cdFx0XHRkZWZpbml0aW9uW3Rva2VuTmFtZV0gPSB7XG5cdFx0XHRcdHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKlxcKlteL11bXFxzXFxTXSo/KD86XFwqXFwvfCQpLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0YWxpYXM6ICdjb21tZW50J1xuXHRcdFx0fTtcblxuXHRcdFx0Z3JhbW1hciA9IFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUobGFuZywgJ2NvbW1lbnQnLCBkZWZpbml0aW9uKTtcblx0XHRcdHRva2VuID0gZ3JhbW1hclt0b2tlbk5hbWVdO1xuXHRcdH1cblxuXHRcdGlmICh0b2tlbiBpbnN0YW5jZW9mIFJlZ0V4cCkgeyAvLyBjb252ZXJ0IHJlZ2V4IHRvIG9iamVjdFxuXHRcdFx0dG9rZW4gPSBncmFtbWFyW3Rva2VuTmFtZV0gPSB7IHBhdHRlcm46IHRva2VuIH07XG5cdFx0fVxuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodG9rZW4pKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMCwgbCA9IHRva2VuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdFx0XHRpZiAodG9rZW5baV0gaW5zdGFuY2VvZiBSZWdFeHApIHtcblx0XHRcdFx0XHR0b2tlbltpXSA9IHsgcGF0dGVybjogdG9rZW5baV0gfTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYWxsYmFjayh0b2tlbltpXSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNhbGxiYWNrKHRva2VuKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQWRkcyBkb2MtY29tbWVudCBzdXBwb3J0IHRvIHRoZSBnaXZlbiBsYW5ndWFnZXMgZm9yIHRoZSBnaXZlbiBkb2N1bWVudGF0aW9uIGxhbmd1YWdlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ1tdfHN0cmluZ30gbGFuZ3VhZ2VzXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkb2NMYW5ndWFnZVxuXHQgKi9cblx0ZnVuY3Rpb24gYWRkU3VwcG9ydChsYW5ndWFnZXMsIGRvY0xhbmd1YWdlKSB7XG5cdFx0aWYgKHR5cGVvZiBsYW5ndWFnZXMgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRsYW5ndWFnZXMgPSBbbGFuZ3VhZ2VzXTtcblx0XHR9XG5cblx0XHRsYW5ndWFnZXMuZm9yRWFjaChmdW5jdGlvbiAobGFuZykge1xuXHRcdFx0ZG9jQ29tbWVudFN1cHBvcnQobGFuZywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcblx0XHRcdFx0aWYgKCFwYXR0ZXJuLmluc2lkZSkge1xuXHRcdFx0XHRcdHBhdHRlcm4uaW5zaWRlID0ge307XG5cdFx0XHRcdH1cblx0XHRcdFx0cGF0dGVybi5pbnNpZGUucmVzdCA9IGRvY0xhbmd1YWdlO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoamF2YURvY0xpa2UsICdhZGRTdXBwb3J0JywgeyB2YWx1ZTogYWRkU3VwcG9ydCB9KTtcblxuXHRqYXZhRG9jTGlrZS5hZGRTdXBwb3J0KFsnamF2YScsICdqYXZhc2NyaXB0JywgJ3BocCddLCBqYXZhRG9jTGlrZSk7XG5cbn0oUHJpc20pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=