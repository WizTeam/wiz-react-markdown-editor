(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[321],{

/***/ "./node_modules/prismjs/components/prism-pug.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-pug.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(Prism) {
	// TODO:
	// - Add CSS highlighting inside <style> tags
	// - Add support for multi-line code blocks
	// - Add support for interpolation #{} and !{}
	// - Add support for tag interpolation #[]
	// - Add explicit support for plain text using |
	// - Add support for markup embedded in plain text

	Prism.languages.pug = {

		// Multiline stuff should appear before the rest

		// This handles both single-line and multi-line comments
		'comment': {
			pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ]+.+)*/m,
			lookbehind: true
		},

		// All the tag-related part is in lookbehind
		// so that it can be highlighted by the "tag" pattern
		'multiline-script': {
			pattern: /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
			lookbehind: true,
			inside: Prism.languages.javascript
		},

		// See at the end of the file for known filters
		'filter': {
			pattern: /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
			lookbehind: true,
			inside: {
				'filter-name': {
					pattern: /^:[\w-]+/,
					alias: 'variable'
				}
			}
		},

		'multiline-plain-text': {
			pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
			lookbehind: true
		},
		'markup': {
			pattern: /(^[\t ]*)<.+/m,
			lookbehind: true,
			inside: Prism.languages.markup
		},
		'doctype': {
			pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
			lookbehind: true
		},

		// This handle all conditional and loop keywords
		'flow-control': {
			pattern: /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
			lookbehind: true,
			inside: {
				'each': {
					pattern: /^each .+? in\b/,
					inside: {
						'keyword': /\b(?:each|in)\b/,
						'punctuation': /,/
					}
				},
				'branch': {
					pattern: /^(?:if|unless|else|case|when|default|while)\b/,
					alias: 'keyword'
				},
				rest: Prism.languages.javascript
			}
		},
		'keyword': {
			pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,
			lookbehind: true
		},
		'mixin': [
			// Declaration
			{
				pattern: /(^[\t ]*)mixin .+/m,
				lookbehind: true,
				inside: {
					'keyword': /^mixin/,
					'function': /\w+(?=\s*\(|\s*$)/,
					'punctuation': /[(),.]/
				}
			},
			// Usage
			{
				pattern: /(^[\t ]*)\+.+/m,
				lookbehind: true,
				inside: {
					'name': {
						pattern: /^\+\w+/,
						alias: 'function'
					},
					rest: Prism.languages.javascript
				}
			}
		],
		'script': {
			pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,
			lookbehind: true,
			inside: Prism.languages.javascript
		},

		'plain-text': {
			pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m,
			lookbehind: true
		},
		'tag': {
			pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
			lookbehind: true,
			inside: {
				'attributes': [
					{
						pattern: /&[^(]+\([^)]+\)/,
						inside: Prism.languages.javascript
					},
					{
						pattern: /\([^)]+\)/,
						inside: {
							'attr-value': {
								pattern: /(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,
								lookbehind: true,
								inside: Prism.languages.javascript
							},
							'attr-name': /[\w-]+(?=\s*!?=|\s*[,)])/,
							'punctuation': /[!=(),]+/
						}
					}
				],
				'punctuation': /:/,
				'attr-id': /#[\w\-]+/,
				'attr-class': /\.[\w\-]+/
			}
		},
		'code': [
			{
				pattern: /(^[\t ]*(?:-|!?=)).+/m,
				lookbehind: true,
				inside: Prism.languages.javascript
			}
		],
		'punctuation': /[.\-!=|]+/
	};

	var filter_pattern = /(^([\t ]*)):{{filter_name}}(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/.source;

	// Non exhaustive list of available filters and associated languages
	var filters = [
		{filter:'atpl',language:'twig'},
		{filter:'coffee',language:'coffeescript'},
		'ejs',
		'handlebars',
		'less',
		'livescript',
		'markdown',
		{filter:'sass',language:'scss'},
		'stylus'
	];
	var all_filters = {};
	for (var i = 0, l = filters.length; i < l; i++) {
		var filter = filters[i];
		filter = typeof filter === 'string' ? {filter: filter, language: filter} : filter;
		if (Prism.languages[filter.language]) {
			all_filters['filter-' + filter.filter] = {
				pattern: RegExp(filter_pattern.replace('{{filter_name}}', function () { return filter.filter; }), 'm'),
				lookbehind: true,
				inside: {
					'filter-name': {
						pattern: /^:[\w-]+/,
						alias: 'variable'
					},
					rest: Prism.languages[filter.language]
				}
			}
		}
	}

	Prism.languages.insertBefore('pug', 'filter', all_filters);

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXB1Zy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsR0FBRyxJQUFJO0FBQ3BDO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUMsYUFBYTs7QUFFbEQ7QUFDQTtBQUNBLEdBQUcsOEJBQThCO0FBQ2pDLEdBQUcsd0NBQXdDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLDhCQUE4QjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsT0FBTztBQUMzQztBQUNBLHlDQUF5QyxpQ0FBaUM7QUFDMUU7QUFDQTtBQUNBLDhDQUE4QyxhQUFhLGdCQUFnQixzQkFBc0IsRUFBRTtBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQyIsImZpbGUiOiIzMjEuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oUHJpc20pIHtcblx0Ly8gVE9ETzpcblx0Ly8gLSBBZGQgQ1NTIGhpZ2hsaWdodGluZyBpbnNpZGUgPHN0eWxlPiB0YWdzXG5cdC8vIC0gQWRkIHN1cHBvcnQgZm9yIG11bHRpLWxpbmUgY29kZSBibG9ja3Ncblx0Ly8gLSBBZGQgc3VwcG9ydCBmb3IgaW50ZXJwb2xhdGlvbiAje30gYW5kICF7fVxuXHQvLyAtIEFkZCBzdXBwb3J0IGZvciB0YWcgaW50ZXJwb2xhdGlvbiAjW11cblx0Ly8gLSBBZGQgZXhwbGljaXQgc3VwcG9ydCBmb3IgcGxhaW4gdGV4dCB1c2luZyB8XG5cdC8vIC0gQWRkIHN1cHBvcnQgZm9yIG1hcmt1cCBlbWJlZGRlZCBpbiBwbGFpbiB0ZXh0XG5cblx0UHJpc20ubGFuZ3VhZ2VzLnB1ZyA9IHtcblxuXHRcdC8vIE11bHRpbGluZSBzdHVmZiBzaG91bGQgYXBwZWFyIGJlZm9yZSB0aGUgcmVzdFxuXG5cdFx0Ly8gVGhpcyBoYW5kbGVzIGJvdGggc2luZ2xlLWxpbmUgYW5kIG11bHRpLWxpbmUgY29tbWVudHNcblx0XHQnY29tbWVudCc6IHtcblx0XHRcdHBhdHRlcm46IC8oXihbXFx0IF0qKSlcXC9cXC8uKig/Oig/Olxccj9cXG58XFxyKVxcMltcXHQgXSsuKykqL20sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblxuXHRcdC8vIEFsbCB0aGUgdGFnLXJlbGF0ZWQgcGFydCBpcyBpbiBsb29rYmVoaW5kXG5cdFx0Ly8gc28gdGhhdCBpdCBjYW4gYmUgaGlnaGxpZ2h0ZWQgYnkgdGhlIFwidGFnXCIgcGF0dGVyblxuXHRcdCdtdWx0aWxpbmUtc2NyaXB0Jzoge1xuXHRcdFx0cGF0dGVybjogLyheKFtcXHQgXSopc2NyaXB0XFxiLipcXC5bXFx0IF0qKSg/Oig/Olxccj9cXG58XFxyKD8hXFxuKSkoPzpcXDJbXFx0IF0rLit8XFxzKj8oPz1cXHI/XFxufFxccikpKSsvbSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0fSxcblxuXHRcdC8vIFNlZSBhdCB0aGUgZW5kIG9mIHRoZSBmaWxlIGZvciBrbm93biBmaWx0ZXJzXG5cdFx0J2ZpbHRlcic6IHtcblx0XHRcdHBhdHRlcm46IC8oXihbXFx0IF0qKSk6LisoPzooPzpcXHI/XFxufFxccig/IVxcbikpKD86XFwyW1xcdCBdKy4rfFxccyo/KD89XFxyP1xcbnxcXHIpKSkrL20sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdmaWx0ZXItbmFtZSc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvXjpbXFx3LV0rLyxcblx0XHRcdFx0XHRhbGlhczogJ3ZhcmlhYmxlJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdCdtdWx0aWxpbmUtcGxhaW4tdGV4dCc6IHtcblx0XHRcdHBhdHRlcm46IC8oXihbXFx0IF0qKVtcXHdcXC0jLl0rXFwuW1xcdCBdKikoPzooPzpcXHI/XFxufFxccig/IVxcbikpKD86XFwyW1xcdCBdKy4rfFxccyo/KD89XFxyP1xcbnxcXHIpKSkrL20sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHQnbWFya3VwJzoge1xuXHRcdFx0cGF0dGVybjogLyheW1xcdCBdKik8LisvbSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5tYXJrdXBcblx0XHR9LFxuXHRcdCdkb2N0eXBlJzoge1xuXHRcdFx0cGF0dGVybjogLygoPzpefFxcbilbXFx0IF0qKWRvY3R5cGUoPzogLispPy8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblxuXHRcdC8vIFRoaXMgaGFuZGxlIGFsbCBjb25kaXRpb25hbCBhbmQgbG9vcCBrZXl3b3Jkc1xuXHRcdCdmbG93LWNvbnRyb2wnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF5bXFx0IF0qKSg/OmlmfHVubGVzc3xlbHNlfGNhc2V8d2hlbnxkZWZhdWx0fGVhY2h8d2hpbGUpXFxiKD86IC4rKT8vbSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2VhY2gnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogL15lYWNoIC4rPyBpblxcYi8sXG5cdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHQna2V5d29yZCc6IC9cXGIoPzplYWNofGluKVxcYi8sXG5cdFx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvLC9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdicmFuY2gnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogL14oPzppZnx1bmxlc3N8ZWxzZXxjYXNlfHdoZW58ZGVmYXVsdHx3aGlsZSlcXGIvLFxuXHRcdFx0XHRcdGFsaWFzOiAna2V5d29yZCdcblx0XHRcdFx0fSxcblx0XHRcdFx0cmVzdDogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHRcdH1cblx0XHR9LFxuXHRcdCdrZXl3b3JkJzoge1xuXHRcdFx0cGF0dGVybjogLyheW1xcdCBdKikoPzpibG9ja3xleHRlbmRzfGluY2x1ZGV8YXBwZW5kfHByZXBlbmQpXFxiLisvbSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdCdtaXhpbic6IFtcblx0XHRcdC8vIERlY2xhcmF0aW9uXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC8oXltcXHQgXSopbWl4aW4gLisvbSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J2tleXdvcmQnOiAvXm1peGluLyxcblx0XHRcdFx0XHQnZnVuY3Rpb24nOiAvXFx3Kyg/PVxccypcXCh8XFxzKiQpLyxcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvWygpLC5dL1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Ly8gVXNhZ2Vcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogLyheW1xcdCBdKilcXCsuKy9tLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnbmFtZSc6IHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IC9eXFwrXFx3Ky8sXG5cdFx0XHRcdFx0XHRhbGlhczogJ2Z1bmN0aW9uJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0cmVzdDogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0J3NjcmlwdCc6IHtcblx0XHRcdHBhdHRlcm46IC8oXltcXHQgXSpzY3JpcHQoPzooPzomW14oXSspP1xcKFteKV0rXFwpKSpbXFx0IF0rKS4rL20sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cblx0XHQncGxhaW4tdGV4dCc6IHtcblx0XHRcdHBhdHRlcm46IC8oXltcXHQgXSooPyEtKVtcXHdcXC0jLl0qW1xcd1xcLV0oPzooPzomW14oXSspP1xcKFteKV0rXFwpKSpcXC8/W1xcdCBdKykuKy9tLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0J3RhZyc6IHtcblx0XHRcdHBhdHRlcm46IC8oXltcXHQgXSopKD8hLSlbXFx3XFwtIy5dKltcXHdcXC1dKD86KD86JlteKF0rKT9cXChbXildK1xcKSkqXFwvPzo/L20sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdhdHRyaWJ1dGVzJzogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IC8mW14oXStcXChbXildK1xcKS8sXG5cdFx0XHRcdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXFwoW14pXStcXCkvLFxuXHRcdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHRcdCdhdHRyLXZhbHVlJzoge1xuXHRcdFx0XHRcdFx0XHRcdHBhdHRlcm46IC8oPVxccyopKD86XFx7W159XSpcXH18W14sKVxcclxcbl0rKS8sXG5cdFx0XHRcdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCdhdHRyLW5hbWUnOiAvW1xcdy1dKyg/PVxccyohPz18XFxzKlssKV0pLyxcblx0XHRcdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL1shPSgpLF0rL1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XSxcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzogLzovLFxuXHRcdFx0XHQnYXR0ci1pZCc6IC8jW1xcd1xcLV0rLyxcblx0XHRcdFx0J2F0dHItY2xhc3MnOiAvXFwuW1xcd1xcLV0rL1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2NvZGUnOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC8oXltcXHQgXSooPzotfCE/PSkpLisvbSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0J3B1bmN0dWF0aW9uJzogL1suXFwtIT18XSsvXG5cdH07XG5cblx0dmFyIGZpbHRlcl9wYXR0ZXJuID0gLyheKFtcXHQgXSopKTp7e2ZpbHRlcl9uYW1lfX0oPzooPzpcXHI/XFxufFxccig/IVxcbikpKD86XFwyW1xcdCBdKy4rfFxccyo/KD89XFxyP1xcbnxcXHIpKSkrLy5zb3VyY2U7XG5cblx0Ly8gTm9uIGV4aGF1c3RpdmUgbGlzdCBvZiBhdmFpbGFibGUgZmlsdGVycyBhbmQgYXNzb2NpYXRlZCBsYW5ndWFnZXNcblx0dmFyIGZpbHRlcnMgPSBbXG5cdFx0e2ZpbHRlcjonYXRwbCcsbGFuZ3VhZ2U6J3R3aWcnfSxcblx0XHR7ZmlsdGVyOidjb2ZmZWUnLGxhbmd1YWdlOidjb2ZmZWVzY3JpcHQnfSxcblx0XHQnZWpzJyxcblx0XHQnaGFuZGxlYmFycycsXG5cdFx0J2xlc3MnLFxuXHRcdCdsaXZlc2NyaXB0Jyxcblx0XHQnbWFya2Rvd24nLFxuXHRcdHtmaWx0ZXI6J3Nhc3MnLGxhbmd1YWdlOidzY3NzJ30sXG5cdFx0J3N0eWx1cydcblx0XTtcblx0dmFyIGFsbF9maWx0ZXJzID0ge307XG5cdGZvciAodmFyIGkgPSAwLCBsID0gZmlsdGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHR2YXIgZmlsdGVyID0gZmlsdGVyc1tpXTtcblx0XHRmaWx0ZXIgPSB0eXBlb2YgZmlsdGVyID09PSAnc3RyaW5nJyA/IHtmaWx0ZXI6IGZpbHRlciwgbGFuZ3VhZ2U6IGZpbHRlcn0gOiBmaWx0ZXI7XG5cdFx0aWYgKFByaXNtLmxhbmd1YWdlc1tmaWx0ZXIubGFuZ3VhZ2VdKSB7XG5cdFx0XHRhbGxfZmlsdGVyc1snZmlsdGVyLScgKyBmaWx0ZXIuZmlsdGVyXSA9IHtcblx0XHRcdFx0cGF0dGVybjogUmVnRXhwKGZpbHRlcl9wYXR0ZXJuLnJlcGxhY2UoJ3t7ZmlsdGVyX25hbWV9fScsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZpbHRlci5maWx0ZXI7IH0pLCAnbScpLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnZmlsdGVyLW5hbWUnOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXjpbXFx3LV0rLyxcblx0XHRcdFx0XHRcdGFsaWFzOiAndmFyaWFibGUnXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRyZXN0OiBQcmlzbS5sYW5ndWFnZXNbZmlsdGVyLmxhbmd1YWdlXVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgncHVnJywgJ2ZpbHRlcicsIGFsbF9maWx0ZXJzKTtcblxufShQcmlzbSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==