(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[213],{

/***/ "./node_modules/prismjs/components/prism-jsstacktrace.js":
/*!***************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-jsstacktrace.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.jsstacktrace = {
	'error-message': {
		pattern: /^\S.*/m,
		alias: 'string'
	},
	
	'stack-frame': {
		pattern: /^[ \t]+at[ \t]+.*/m,
		inside: {
			'not-my-code': {
				pattern: /[ \t]+at[ \t]+(?:node\.js|\<unknown\>|.*(?:node_modules|\(\<anonymous\>\)|\(\<unknown\>|\<anonymous\>$|\(internal\/|\(node\.js)).*/m,
				alias: 'comment'
			},
			
			'filename': {
				pattern: /(\bat\s+|\()(?:[a-zA-Z]:)?[^():]+(?=:)/,
				lookbehind: true,
				alias: 'url'
			},
			
			'function': {
				pattern: /(at\s+(?:new\s+)?)[_$a-zA-Z\xA0-\uFFFF<][.$\w\xA0-\uFFFF<>]*/,
				lookbehind: true,
				inside: {
					'punctuation': /\./
				}
			},
			
			'punctuation': /[()]/,
			
			'keyword': /\b(?:at|new)\b/,
			
			'alias': {
				pattern: /\[(?:as\s+)?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\]/,
				alias: 'variable'
			},
			
			'line-number': {
				pattern: /:[0-9]+(?::[0-9]+)?\b/,
				alias: 'number',
				inside: {
					'punctuation': /:/
				}
			},
			
		}
	}
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzc3RhY2t0cmFjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBIiwiZmlsZSI6IjIxMy5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlByaXNtLmxhbmd1YWdlcy5qc3N0YWNrdHJhY2UgPSB7XG5cdCdlcnJvci1tZXNzYWdlJzoge1xuXHRcdHBhdHRlcm46IC9eXFxTLiovbSxcblx0XHRhbGlhczogJ3N0cmluZydcblx0fSxcblx0XG5cdCdzdGFjay1mcmFtZSc6IHtcblx0XHRwYXR0ZXJuOiAvXlsgXFx0XSthdFsgXFx0XSsuKi9tLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J25vdC1teS1jb2RlJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvWyBcXHRdK2F0WyBcXHRdKyg/Om5vZGVcXC5qc3xcXDx1bmtub3duXFw+fC4qKD86bm9kZV9tb2R1bGVzfFxcKFxcPGFub255bW91c1xcPlxcKXxcXChcXDx1bmtub3duXFw+fFxcPGFub255bW91c1xcPiR8XFwoaW50ZXJuYWxcXC98XFwobm9kZVxcLmpzKSkuKi9tLFxuXHRcdFx0XHRhbGlhczogJ2NvbW1lbnQnXG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHQnZmlsZW5hbWUnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC8oXFxiYXRcXHMrfFxcKCkoPzpbYS16QS1aXTopP1teKCk6XSsoPz06KS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGFsaWFzOiAndXJsJ1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0J2Z1bmN0aW9uJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvKGF0XFxzKyg/Om5ld1xccyspPylbXyRhLXpBLVpcXHhBMC1cXHVGRkZGPF1bLiRcXHdcXHhBMC1cXHVGRkZGPD5dKi8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXC4vXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdCdwdW5jdHVhdGlvbic6IC9bKCldLyxcblx0XHRcdFxuXHRcdFx0J2tleXdvcmQnOiAvXFxiKD86YXR8bmV3KVxcYi8sXG5cdFx0XHRcblx0XHRcdCdhbGlhcyc6IHtcblx0XHRcdFx0cGF0dGVybjogL1xcWyg/OmFzXFxzKyk/W18kYS16QS1aXFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKlxcXS8sXG5cdFx0XHRcdGFsaWFzOiAndmFyaWFibGUnXG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHQnbGluZS1udW1iZXInOiB7XG5cdFx0XHRcdHBhdHRlcm46IC86WzAtOV0rKD86OlswLTldKyk/XFxiLyxcblx0XHRcdFx0YWxpYXM6ICdudW1iZXInLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvOi9cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdH1cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==