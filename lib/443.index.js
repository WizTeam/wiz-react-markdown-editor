(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[443],{

/***/ "./node_modules/prismjs/components/prism-xml-doc.js":
/*!**********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-xml-doc.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	/**
	 * If the given language is present, it will insert the given doc comment grammar token into it.
	 *
	 * @param {string} lang
	 * @param {any} docComment
	 */
	function insertDocComment(lang, docComment) {
		if (Prism.languages[lang]) {
			Prism.languages.insertBefore(lang, 'comment', {
				'doc-comment': docComment
			});
		}
	}

	var tag = Prism.languages.markup.tag;

	var slashDocComment = {
		pattern: /\/\/\/.*/,
		greedy: true,
		alias: 'comment',
		inside: {
			'tag': tag
		}
	};
	var tickDocComment = {
		pattern: /'''.*/,
		greedy: true,
		alias: 'comment',
		inside: {
			'tag': tag
		}
	};

	insertDocComment('csharp', slashDocComment);
	insertDocComment('fsharp', slashDocComment);
	insertDocComment('vbnet', tickDocComment);

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXhtbC1kb2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksSUFBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLENBQUMiLCJmaWxlIjoiNDQzLmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChQcmlzbSkge1xuXG5cdC8qKlxuXHQgKiBJZiB0aGUgZ2l2ZW4gbGFuZ3VhZ2UgaXMgcHJlc2VudCwgaXQgd2lsbCBpbnNlcnQgdGhlIGdpdmVuIGRvYyBjb21tZW50IGdyYW1tYXIgdG9rZW4gaW50byBpdC5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmdcblx0ICogQHBhcmFtIHthbnl9IGRvY0NvbW1lbnRcblx0ICovXG5cdGZ1bmN0aW9uIGluc2VydERvY0NvbW1lbnQobGFuZywgZG9jQ29tbWVudCkge1xuXHRcdGlmIChQcmlzbS5sYW5ndWFnZXNbbGFuZ10pIHtcblx0XHRcdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUobGFuZywgJ2NvbW1lbnQnLCB7XG5cdFx0XHRcdCdkb2MtY29tbWVudCc6IGRvY0NvbW1lbnRcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHZhciB0YWcgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZztcblxuXHR2YXIgc2xhc2hEb2NDb21tZW50ID0ge1xuXHRcdHBhdHRlcm46IC9cXC9cXC9cXC8uKi8sXG5cdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdGFsaWFzOiAnY29tbWVudCcsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQndGFnJzogdGFnXG5cdFx0fVxuXHR9O1xuXHR2YXIgdGlja0RvY0NvbW1lbnQgPSB7XG5cdFx0cGF0dGVybjogLycnJy4qLyxcblx0XHRncmVlZHk6IHRydWUsXG5cdFx0YWxpYXM6ICdjb21tZW50Jyxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCd0YWcnOiB0YWdcblx0XHR9XG5cdH07XG5cblx0aW5zZXJ0RG9jQ29tbWVudCgnY3NoYXJwJywgc2xhc2hEb2NDb21tZW50KTtcblx0aW5zZXJ0RG9jQ29tbWVudCgnZnNoYXJwJywgc2xhc2hEb2NDb21tZW50KTtcblx0aW5zZXJ0RG9jQ29tbWVudCgndmJuZXQnLCB0aWNrRG9jQ29tbWVudCk7XG5cbn0oUHJpc20pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=