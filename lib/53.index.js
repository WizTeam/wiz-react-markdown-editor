(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/prismjs/components/prism-bro.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-bro.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.bro = {

	'comment': {
		pattern: /(^|[^\\$])#.*/,
		lookbehind: true,
			inside: {
				'italic':  /\b(?:TODO|FIXME|XXX)\b/
		}
	},

	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},

	'boolean': /\b[TF]\b/,

	'function': {
		pattern: /(?:function|hook|event) \w+(?:::\w+)?/,
		inside: {
			keyword: /^(?:function|hook|event)/
		}
	},

	'variable':	{
		pattern: /(?:global|local) \w+/i,
		inside: {
			keyword: /(?:global|local)/
		}
	},

	'builtin': /(?:@(?:load(?:-(?:sigs|plugin))?|unload|prefixes|ifn?def|else|(?:end)?if|DIR|FILENAME))|(?:&?(?:redef|priority|log|optional|default|add_func|delete_func|expire_func|read_expire|write_expire|create_expire|synchronized|persistent|rotate_interval|rotate_size|encrypt|raw_output|mergeable|group|error_handler|type_column))/,

	'constant': {
		pattern: /const \w+/i,
		inside: {
			keyword: /const/
		}
	},

	'keyword': /\b(?:break|next|continue|alarm|using|of|add|delete|export|print|return|schedule|when|timeout|addr|any|bool|count|double|enum|file|int|interval|pattern|opaque|port|record|set|string|subnet|table|time|vector|for|if|else|in|module|function)\b/,

	'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&|\|\|?|\?|\*|\/|~|\^|%/,

	'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,

	'punctuation': /[{}[\];(),.:]/
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWJyby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7O0FBRUEsb0JBQW9CLElBQUk7QUFDeEIiLCJmaWxlIjoiNTMuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJQcmlzbS5sYW5ndWFnZXMuYnJvID0ge1xuXG5cdCdjb21tZW50Jzoge1xuXHRcdHBhdHRlcm46IC8oXnxbXlxcXFwkXSkjLiovLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2l0YWxpYyc6ICAvXFxiKD86VE9ET3xGSVhNRXxYWFgpXFxiL1xuXHRcdH1cblx0fSxcblxuXHQnc3RyaW5nJzoge1xuXHRcdHBhdHRlcm46IC8oW1wiJ10pKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cblx0J2Jvb2xlYW4nOiAvXFxiW1RGXVxcYi8sXG5cblx0J2Z1bmN0aW9uJzoge1xuXHRcdHBhdHRlcm46IC8oPzpmdW5jdGlvbnxob29rfGV2ZW50KSBcXHcrKD86OjpcXHcrKT8vLFxuXHRcdGluc2lkZToge1xuXHRcdFx0a2V5d29yZDogL14oPzpmdW5jdGlvbnxob29rfGV2ZW50KS9cblx0XHR9XG5cdH0sXG5cblx0J3ZhcmlhYmxlJzpcdHtcblx0XHRwYXR0ZXJuOiAvKD86Z2xvYmFsfGxvY2FsKSBcXHcrL2ksXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHRrZXl3b3JkOiAvKD86Z2xvYmFsfGxvY2FsKS9cblx0XHR9XG5cdH0sXG5cblx0J2J1aWx0aW4nOiAvKD86QCg/OmxvYWQoPzotKD86c2lnc3xwbHVnaW4pKT98dW5sb2FkfHByZWZpeGVzfGlmbj9kZWZ8ZWxzZXwoPzplbmQpP2lmfERJUnxGSUxFTkFNRSkpfCg/OiY/KD86cmVkZWZ8cHJpb3JpdHl8bG9nfG9wdGlvbmFsfGRlZmF1bHR8YWRkX2Z1bmN8ZGVsZXRlX2Z1bmN8ZXhwaXJlX2Z1bmN8cmVhZF9leHBpcmV8d3JpdGVfZXhwaXJlfGNyZWF0ZV9leHBpcmV8c3luY2hyb25pemVkfHBlcnNpc3RlbnR8cm90YXRlX2ludGVydmFsfHJvdGF0ZV9zaXplfGVuY3J5cHR8cmF3X291dHB1dHxtZXJnZWFibGV8Z3JvdXB8ZXJyb3JfaGFuZGxlcnx0eXBlX2NvbHVtbikpLyxcblxuXHQnY29uc3RhbnQnOiB7XG5cdFx0cGF0dGVybjogL2NvbnN0IFxcdysvaSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdGtleXdvcmQ6IC9jb25zdC9cblx0XHR9XG5cdH0sXG5cblx0J2tleXdvcmQnOiAvXFxiKD86YnJlYWt8bmV4dHxjb250aW51ZXxhbGFybXx1c2luZ3xvZnxhZGR8ZGVsZXRlfGV4cG9ydHxwcmludHxyZXR1cm58c2NoZWR1bGV8d2hlbnx0aW1lb3V0fGFkZHJ8YW55fGJvb2x8Y291bnR8ZG91YmxlfGVudW18ZmlsZXxpbnR8aW50ZXJ2YWx8cGF0dGVybnxvcGFxdWV8cG9ydHxyZWNvcmR8c2V0fHN0cmluZ3xzdWJuZXR8dGFibGV8dGltZXx2ZWN0b3J8Zm9yfGlmfGVsc2V8aW58bW9kdWxlfGZ1bmN0aW9uKVxcYi8sXG5cblx0J29wZXJhdG9yJzogLy0tP3xcXCtcXCs/fCE9Pz0/fDw9P3w+PT98PT0/PT98JiZ8XFx8XFx8P3xcXD98XFwqfFxcL3x+fFxcXnwlLyxcblxuXHQnbnVtYmVyJzogL1xcYjB4W1xcZGEtZl0rXFxifCg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OmVbKy1dP1xcZCspPy9pLFxuXG5cdCdwdW5jdHVhdGlvbic6IC9be31bXFxdOygpLC46XS9cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9