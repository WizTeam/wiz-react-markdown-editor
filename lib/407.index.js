(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[407],{

/***/ "./node_modules/prismjs/components/prism-toml.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-toml.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var key = /(?:[\w-]+|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*")/.source;

	/**
	 * @param {string} pattern
	 */
	function insertKey(pattern) {
		return pattern.replace(/__/g, function () { return key; });
	}

	Prism.languages.toml = {
		'comment': {
			pattern: /#.*/,
			greedy: true
		},
		'table': {
			pattern: RegExp(insertKey(/(^\s*\[\s*(?:\[\s*)?)__(?:\s*\.\s*__)*(?=\s*\])/.source), 'm'),
			lookbehind: true,
			greedy: true,
			alias: 'class-name'
		},
		'key': {
			pattern: RegExp(insertKey(/(^\s*|[{,]\s*)__(?:\s*\.\s*__)*(?=\s*=)/.source), 'm'),
			lookbehind: true,
			greedy: true,
			alias: 'property'
		},
		'string': {
			pattern: /"""(?:\\[\s\S]|[^\\])*?"""|'''[\s\S]*?'''|'[^'\n\r]*'|"(?:\\.|[^\\"\r\n])*"/,
			greedy: true
		},
		'date': [
			{
				// Offset Date-Time, Local Date-Time, Local Date
				pattern: /\b\d{4}-\d{2}-\d{2}(?:[T\s]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?)?\b/i,
				alias: 'number'
			},
			{
				// Local Time
				pattern: /\b\d{2}:\d{2}:\d{2}(?:\.\d+)?\b/,
				alias: 'number'
			}
		],
		'number': /(?:\b0(?:x[\da-zA-Z]+(?:_[\da-zA-Z]+)*|o[0-7]+(?:_[0-7]+)*|b[10]+(?:_[10]+)*))\b|[-+]?\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b|[-+]?\b(?:inf|nan)\b/,
		'boolean': /\b(?:true|false)\b/,
		'punctuation': /[.,=[\]{}]/
	};
}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXRvbWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBLDZDQUE2QyxZQUFZLEVBQUU7QUFDM0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsSUFBSSxFQUFFO0FBQ3hGO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSxDQUFDIiwiZmlsZSI6IjQwNy5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHR2YXIga2V5ID0gLyg/OltcXHctXSt8J1teJ1xcblxccl0qJ3xcIig/OlxcXFwufFteXFxcXFwiXFxyXFxuXSkqXCIpLy5zb3VyY2U7XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuXG5cdCAqL1xuXHRmdW5jdGlvbiBpbnNlcnRLZXkocGF0dGVybikge1xuXHRcdHJldHVybiBwYXR0ZXJuLnJlcGxhY2UoL19fL2csIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGtleTsgfSk7XG5cdH1cblxuXHRQcmlzbS5sYW5ndWFnZXMudG9tbCA9IHtcblx0XHQnY29tbWVudCc6IHtcblx0XHRcdHBhdHRlcm46IC8jLiovLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fSxcblx0XHQndGFibGUnOiB7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoaW5zZXJ0S2V5KC8oXlxccypcXFtcXHMqKD86XFxbXFxzKik/KV9fKD86XFxzKlxcLlxccypfXykqKD89XFxzKlxcXSkvLnNvdXJjZSksICdtJyksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdjbGFzcy1uYW1lJ1xuXHRcdH0sXG5cdFx0J2tleSc6IHtcblx0XHRcdHBhdHRlcm46IFJlZ0V4cChpbnNlcnRLZXkoLyheXFxzKnxbeyxdXFxzKilfXyg/OlxccypcXC5cXHMqX18pKig/PVxccyo9KS8uc291cmNlKSwgJ20nKSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRhbGlhczogJ3Byb3BlcnR5J1xuXHRcdH0sXG5cdFx0J3N0cmluZyc6IHtcblx0XHRcdHBhdHRlcm46IC9cIlwiXCIoPzpcXFxcW1xcc1xcU118W15cXFxcXSkqP1wiXCJcInwnJydbXFxzXFxTXSo/JycnfCdbXidcXG5cXHJdKid8XCIoPzpcXFxcLnxbXlxcXFxcIlxcclxcbl0pKlwiLyxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH0sXG5cdFx0J2RhdGUnOiBbXG5cdFx0XHR7XG5cdFx0XHRcdC8vIE9mZnNldCBEYXRlLVRpbWUsIExvY2FsIERhdGUtVGltZSwgTG9jYWwgRGF0ZVxuXHRcdFx0XHRwYXR0ZXJuOiAvXFxiXFxkezR9LVxcZHsyfS1cXGR7Mn0oPzpbVFxcc11cXGR7Mn06XFxkezJ9OlxcZHsyfSg/OlxcLlxcZCspPyg/Olp8WystXVxcZHsyfTpcXGR7Mn0pPyk/XFxiL2ksXG5cdFx0XHRcdGFsaWFzOiAnbnVtYmVyJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gTG9jYWwgVGltZVxuXHRcdFx0XHRwYXR0ZXJuOiAvXFxiXFxkezJ9OlxcZHsyfTpcXGR7Mn0oPzpcXC5cXGQrKT9cXGIvLFxuXHRcdFx0XHRhbGlhczogJ251bWJlcidcblx0XHRcdH1cblx0XHRdLFxuXHRcdCdudW1iZXInOiAvKD86XFxiMCg/OnhbXFxkYS16QS1aXSsoPzpfW1xcZGEtekEtWl0rKSp8b1swLTddKyg/Ol9bMC03XSspKnxiWzEwXSsoPzpfWzEwXSspKikpXFxifFstK10/XFxiXFxkKyg/Ol9cXGQrKSooPzpcXC5cXGQrKD86X1xcZCspKik/KD86W2VFXVsrLV0/XFxkKyg/Ol9cXGQrKSopP1xcYnxbLStdP1xcYig/OmluZnxuYW4pXFxiLyxcblx0XHQnYm9vbGVhbic6IC9cXGIoPzp0cnVlfGZhbHNlKVxcYi8sXG5cdFx0J3B1bmN0dWF0aW9uJzogL1suLD1bXFxde31dL1xuXHR9O1xufShQcmlzbSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==