(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[239],{

/***/ "./node_modules/prismjs/components/prism-lolcode.js":
/*!**********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-lolcode.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.lolcode = {
	'comment': [
		/\bOBTW\s+[\s\S]*?\s+TLDR\b/,
		/\bBTW.+/
	],
	'string': {
		pattern: /"(?::.|[^":])*"/,
		inside: {
			'variable': /:\{[^}]+\}/,
			'symbol': [
				/:\([a-f\d]+\)/i,
				/:\[[^\]]+\]/,
				/:[)>o":]/
			]
		},
		greedy: true
	},
	'number': /(?:\B-)?(?:\b\d+\.?\d*|\B\.\d+)/,
	'symbol': {
		pattern: /(^|\s)(?:A )?(?:YARN|NUMBR|NUMBAR|TROOF|BUKKIT|NOOB)(?=\s|,|$)/,
		lookbehind: true,
		inside: {
			'keyword': /A(?=\s)/
		}
	},
	'label': {
		pattern: /((?:^|\s)(?:IM IN YR|IM OUTTA YR) )[a-zA-Z]\w*/,
		lookbehind: true,
		alias: 'string'
	},
	'function': {
		pattern: /((?:^|\s)(?:I IZ|HOW IZ I|IZ) )[a-zA-Z]\w*/,
		lookbehind: true
	},
	'keyword': [
		{
			pattern: /(^|\s)(?:O HAI IM|KTHX|HAI|KTHXBYE|I HAS A|ITZ(?: A)?|R|AN|MKAY|SMOOSH|MAEK|IS NOW(?: A)?|VISIBLE|GIMMEH|O RLY\?|YA RLY|NO WAI|OIC|MEBBE|WTF\?|OMG|OMGWTF|GTFO|IM IN YR|IM OUTTA YR|FOUND YR|YR|TIL|WILE|UPPIN|NERFIN|I IZ|HOW IZ I|IF U SAY SO|SRS|HAS A|LIEK(?: A)?|IZ)(?=\s|,|$)/,
			lookbehind: true
		},
		/'Z(?=\s|,|$)/
	],
	'boolean': {
		pattern: /(^|\s)(?:WIN|FAIL)(?=\s|,|$)/,
		lookbehind: true
	},
	'variable': {
		pattern: /(^|\s)IT(?=\s|,|$)/,
		lookbehind: true
	},
	'operator': {
		pattern: /(^|\s)(?:NOT|BOTH SAEM|DIFFRINT|(?:SUM|DIFF|PRODUKT|QUOSHUNT|MOD|BIGGR|SMALLR|BOTH|EITHER|WON|ALL|ANY) OF)(?=\s|,|$)/,
		lookbehind: true
	},
	'punctuation': /\.{3}|…|,|!/
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWxvbGNvZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixHQUFHLElBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLG9CQUFvQixFQUFFO0FBQ3RCIiwiZmlsZSI6IjIzOS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy5sb2xjb2RlID0ge1xuXHQnY29tbWVudCc6IFtcblx0XHQvXFxiT0JUV1xccytbXFxzXFxTXSo/XFxzK1RMRFJcXGIvLFxuXHRcdC9cXGJCVFcuKy9cblx0XSxcblx0J3N0cmluZyc6IHtcblx0XHRwYXR0ZXJuOiAvXCIoPzo6LnxbXlwiOl0pKlwiLyxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCd2YXJpYWJsZSc6IC86XFx7W159XStcXH0vLFxuXHRcdFx0J3N5bWJvbCc6IFtcblx0XHRcdFx0LzpcXChbYS1mXFxkXStcXCkvaSxcblx0XHRcdFx0LzpcXFtbXlxcXV0rXFxdLyxcblx0XHRcdFx0LzpbKT5vXCI6XS9cblx0XHRcdF1cblx0XHR9LFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQnbnVtYmVyJzogLyg/OlxcQi0pPyg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKS8sXG5cdCdzeW1ib2wnOiB7XG5cdFx0cGF0dGVybjogLyhefFxccykoPzpBICk/KD86WUFSTnxOVU1CUnxOVU1CQVJ8VFJPT0Z8QlVLS0lUfE5PT0IpKD89XFxzfCx8JCkvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQna2V5d29yZCc6IC9BKD89XFxzKS9cblx0XHR9XG5cdH0sXG5cdCdsYWJlbCc6IHtcblx0XHRwYXR0ZXJuOiAvKCg/Ol58XFxzKSg/OklNIElOIFlSfElNIE9VVFRBIFlSKSApW2EtekEtWl1cXHcqLyxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGFsaWFzOiAnc3RyaW5nJ1xuXHR9LFxuXHQnZnVuY3Rpb24nOiB7XG5cdFx0cGF0dGVybjogLygoPzpefFxccykoPzpJIElafEhPVyBJWiBJfElaKSApW2EtekEtWl1cXHcqLyxcblx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdH0sXG5cdCdrZXl3b3JkJzogW1xuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxcXHMpKD86TyBIQUkgSU18S1RIWHxIQUl8S1RIWEJZRXxJIEhBUyBBfElUWig/OiBBKT98UnxBTnxNS0FZfFNNT09TSHxNQUVLfElTIE5PVyg/OiBBKT98VklTSUJMRXxHSU1NRUh8TyBSTFlcXD98WUEgUkxZfE5PIFdBSXxPSUN8TUVCQkV8V1RGXFw/fE9NR3xPTUdXVEZ8R1RGT3xJTSBJTiBZUnxJTSBPVVRUQSBZUnxGT1VORCBZUnxZUnxUSUx8V0lMRXxVUFBJTnxORVJGSU58SSBJWnxIT1cgSVogSXxJRiBVIFNBWSBTT3xTUlN8SEFTIEF8TElFSyg/OiBBKT98SVopKD89XFxzfCx8JCkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0LydaKD89XFxzfCx8JCkvXG5cdF0sXG5cdCdib29sZWFuJzoge1xuXHRcdHBhdHRlcm46IC8oXnxcXHMpKD86V0lOfEZBSUwpKD89XFxzfCx8JCkvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0fSxcblx0J3ZhcmlhYmxlJzoge1xuXHRcdHBhdHRlcm46IC8oXnxcXHMpSVQoPz1cXHN8LHwkKS8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZVxuXHR9LFxuXHQnb3BlcmF0b3InOiB7XG5cdFx0cGF0dGVybjogLyhefFxccykoPzpOT1R8Qk9USCBTQUVNfERJRkZSSU5UfCg/OlNVTXxESUZGfFBST0RVS1R8UVVPU0hVTlR8TU9EfEJJR0dSfFNNQUxMUnxCT1RIfEVJVEhFUnxXT058QUxMfEFOWSkgT0YpKD89XFxzfCx8JCkvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0fSxcblx0J3B1bmN0dWF0aW9uJzogL1xcLnszfXzigKZ8LHwhL1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=