(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[415],{

/***/ "./node_modules/prismjs/components/prism-twig.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-twig.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.twig = {
	'comment': /\{#[\s\S]*?#\}/,
	'tag': {
		pattern: /\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}/,
		inside: {
			'ld': {
				pattern: /^(?:\{\{-?|\{%-?\s*\w+)/,
				inside: {
					'punctuation': /^(?:\{\{|\{%)-?/,
					'keyword': /\w+/
				}
			},
			'rd': {
				pattern: /-?(?:%\}|\}\})$/,
				inside: {
					'punctuation': /.+/
				}
			},
			'string': {
				pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
				inside: {
					'punctuation': /^['"]|['"]$/
				}
			},
			'keyword': /\b(?:even|if|odd)\b/,
			'boolean': /\b(?:true|false|null)\b/,
			'number': /\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,
			'operator': [
				{
					pattern: /(\s)(?:and|b-and|b-xor|b-or|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,
					lookbehind: true
				},
				/[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/
			],
			'property': /\b[a-zA-Z_]\w*\b/,
			'punctuation': /[()\[\]{}:.,]/
		}
	},

	// The rest can be parsed as HTML
	'other': {
		// We want non-blank matches
		pattern: /\S(?:[\s\S]*\S)?/,
		inside: Prism.languages.markup
	}
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXR3aWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxlQUFlLFlBQVk7QUFDM0I7QUFDQSxjQUFjLEVBQUUsVUFBVSxFQUFFLEdBQUcsWUFBWTtBQUMzQztBQUNBO0FBQ0Esb0JBQW9CLEVBQUUsS0FBSztBQUMzQjtBQUNBLDJCQUEyQixFQUFFLEdBQUc7QUFDaEM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLHNCQUFzQixHQUFHLEVBQUU7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI0MTUuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJQcmlzbS5sYW5ndWFnZXMudHdpZyA9IHtcblx0J2NvbW1lbnQnOiAvXFx7I1tcXHNcXFNdKj8jXFx9Lyxcblx0J3RhZyc6IHtcblx0XHRwYXR0ZXJuOiAvXFx7XFx7W1xcc1xcU10qP1xcfVxcfXxcXHslW1xcc1xcU10qPyVcXH0vLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J2xkJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXig/Olxce1xcey0/fFxceyUtP1xccypcXHcrKS8sXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9eKD86XFx7XFx7fFxceyUpLT8vLFxuXHRcdFx0XHRcdCdrZXl3b3JkJzogL1xcdysvXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQncmQnOiB7XG5cdFx0XHRcdHBhdHRlcm46IC8tPyg/OiVcXH18XFx9XFx9KSQvLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvLisvXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQnc3RyaW5nJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvKFwifCcpKD86XFxcXC58KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9eWydcIl18WydcIl0kL1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0J2tleXdvcmQnOiAvXFxiKD86ZXZlbnxpZnxvZGQpXFxiLyxcblx0XHRcdCdib29sZWFuJzogL1xcYig/OnRydWV8ZmFsc2V8bnVsbClcXGIvLFxuXHRcdFx0J251bWJlcic6IC9cXGIweFtcXGRBLUZhLWZdK3woPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzpbRWVdWy0rXT9cXGQrKT8vLFxuXHRcdFx0J29wZXJhdG9yJzogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cGF0dGVybjogLyhcXHMpKD86YW5kfGItYW5kfGIteG9yfGItb3J8ZW5kcyB3aXRofGlufGlzfG1hdGNoZXN8bm90fG9yfHNhbWUgYXN8c3RhcnRzIHdpdGgpKD89XFxzKS8sXG5cdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQvWz08Pl09P3whPXxcXCpcXCo/fFxcL1xcLz98XFw/Oj98Wy0rfiV8XS9cblx0XHRcdF0sXG5cdFx0XHQncHJvcGVydHknOiAvXFxiW2EtekEtWl9dXFx3KlxcYi8sXG5cdFx0XHQncHVuY3R1YXRpb24nOiAvWygpXFxbXFxde306LixdL1xuXHRcdH1cblx0fSxcblxuXHQvLyBUaGUgcmVzdCBjYW4gYmUgcGFyc2VkIGFzIEhUTUxcblx0J290aGVyJzoge1xuXHRcdC8vIFdlIHdhbnQgbm9uLWJsYW5rIG1hdGNoZXNcblx0XHRwYXR0ZXJuOiAvXFxTKD86W1xcc1xcU10qXFxTKT8vLFxuXHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFxuXHR9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==