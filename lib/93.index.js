(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93],{

/***/ "./node_modules/prismjs/components/prism-diff.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-diff.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	Prism.languages.diff = {
		'coord': [
			// Match all kinds of coord lines (prefixed by "+++", "---" or "***").
			/^(?:\*{3}|-{3}|\+{3}).*$/m,
			// Match "@@ ... @@" coord lines in unified diff.
			/^@@.*@@$/m,
			// Match coord lines in normal diff (starts with a number).
			/^\d+.*$/m
		]

		// deleted, inserted, unchanged, diff
	};

	/**
	 * A map from the name of a block to its line prefix.
	 *
	 * @type {Object<string, string>}
	 */
	var PREFIXES = {
		'deleted-sign': '-',
		'deleted-arrow': '<',
		'inserted-sign': '+',
		'inserted-arrow': '>',
		'unchanged': ' ',
		'diff': '!',
	};

	// add a token for each prefix
	Object.keys(PREFIXES).forEach(function (name) {
		var prefix = PREFIXES[name];

		var alias = [];
		if (!/^\w+$/.test(name)) { // "deleted-sign" -> "deleted"
			alias.push(/\w+/.exec(name)[0]);
		}
		if (name === "diff") {
			alias.push("bold");
		}

		Prism.languages.diff[name] = {
			pattern: RegExp('^(?:[' + prefix + '].*(?:\r\n?|\n|(?![\\s\\S])))+', 'm'),
			alias: alias,
			inside: {
				'line': {
					pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
					lookbehind: true
				},
				'prefix': {
					pattern: /[\s\S]/,
					alias: /\w+/.exec(name)[0]
				}
			}
		};
		
	});

	// make prefixes available to Diff plugin
	Object.defineProperty(Prism.languages.diff, 'PREFIXES', {
		value: PREFIXES
	});

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWRpZmYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRixDQUFDIiwiZmlsZSI6IjkzLmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChQcmlzbSkge1xuXG5cdFByaXNtLmxhbmd1YWdlcy5kaWZmID0ge1xuXHRcdCdjb29yZCc6IFtcblx0XHRcdC8vIE1hdGNoIGFsbCBraW5kcyBvZiBjb29yZCBsaW5lcyAocHJlZml4ZWQgYnkgXCIrKytcIiwgXCItLS1cIiBvciBcIioqKlwiKS5cblx0XHRcdC9eKD86XFwqezN9fC17M318XFwrezN9KS4qJC9tLFxuXHRcdFx0Ly8gTWF0Y2ggXCJAQCAuLi4gQEBcIiBjb29yZCBsaW5lcyBpbiB1bmlmaWVkIGRpZmYuXG5cdFx0XHQvXkBALipAQCQvbSxcblx0XHRcdC8vIE1hdGNoIGNvb3JkIGxpbmVzIGluIG5vcm1hbCBkaWZmIChzdGFydHMgd2l0aCBhIG51bWJlcikuXG5cdFx0XHQvXlxcZCsuKiQvbVxuXHRcdF1cblxuXHRcdC8vIGRlbGV0ZWQsIGluc2VydGVkLCB1bmNoYW5nZWQsIGRpZmZcblx0fTtcblxuXHQvKipcblx0ICogQSBtYXAgZnJvbSB0aGUgbmFtZSBvZiBhIGJsb2NrIHRvIGl0cyBsaW5lIHByZWZpeC5cblx0ICpcblx0ICogQHR5cGUge09iamVjdDxzdHJpbmcsIHN0cmluZz59XG5cdCAqL1xuXHR2YXIgUFJFRklYRVMgPSB7XG5cdFx0J2RlbGV0ZWQtc2lnbic6ICctJyxcblx0XHQnZGVsZXRlZC1hcnJvdyc6ICc8Jyxcblx0XHQnaW5zZXJ0ZWQtc2lnbic6ICcrJyxcblx0XHQnaW5zZXJ0ZWQtYXJyb3cnOiAnPicsXG5cdFx0J3VuY2hhbmdlZCc6ICcgJyxcblx0XHQnZGlmZic6ICchJyxcblx0fTtcblxuXHQvLyBhZGQgYSB0b2tlbiBmb3IgZWFjaCBwcmVmaXhcblx0T2JqZWN0LmtleXMoUFJFRklYRVMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcblx0XHR2YXIgcHJlZml4ID0gUFJFRklYRVNbbmFtZV07XG5cblx0XHR2YXIgYWxpYXMgPSBbXTtcblx0XHRpZiAoIS9eXFx3KyQvLnRlc3QobmFtZSkpIHsgLy8gXCJkZWxldGVkLXNpZ25cIiAtPiBcImRlbGV0ZWRcIlxuXHRcdFx0YWxpYXMucHVzaCgvXFx3Ky8uZXhlYyhuYW1lKVswXSk7XG5cdFx0fVxuXHRcdGlmIChuYW1lID09PSBcImRpZmZcIikge1xuXHRcdFx0YWxpYXMucHVzaChcImJvbGRcIik7XG5cdFx0fVxuXG5cdFx0UHJpc20ubGFuZ3VhZ2VzLmRpZmZbbmFtZV0gPSB7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoJ14oPzpbJyArIHByZWZpeCArICddLiooPzpcXHJcXG4/fFxcbnwoPyFbXFxcXHNcXFxcU10pKSkrJywgJ20nKSxcblx0XHRcdGFsaWFzOiBhbGlhcyxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnbGluZSc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvKC4pKD89W1xcc1xcU10pLiooPzpcXHJcXG4/fFxcbik/Lyxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdwcmVmaXgnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogL1tcXHNcXFNdLyxcblx0XHRcdFx0XHRhbGlhczogL1xcdysvLmV4ZWMobmFtZSlbMF1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0XG5cdH0pO1xuXG5cdC8vIG1ha2UgcHJlZml4ZXMgYXZhaWxhYmxlIHRvIERpZmYgcGx1Z2luXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQcmlzbS5sYW5ndWFnZXMuZGlmZiwgJ1BSRUZJWEVTJywge1xuXHRcdHZhbHVlOiBQUkVGSVhFU1xuXHR9KTtcblxufShQcmlzbSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==