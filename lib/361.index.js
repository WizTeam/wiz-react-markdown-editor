(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[361],{

/***/ "./node_modules/prismjs/components/prism-sass.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-sass.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(Prism) {
	Prism.languages.sass = Prism.languages.extend('css', {
		// Sass comments don't need to be closed, only indented
		'comment': {
			pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
			lookbehind: true
		}
	});

	Prism.languages.insertBefore('sass', 'atrule', {
		// We want to consume the whole line
		'atrule-line': {
			// Includes support for = and + shortcuts
			pattern: /^(?:[ \t]*)[@+=].+/m,
			inside: {
				'atrule': /(?:@[\w-]+|[+=])/m
			}
		}
	});
	delete Prism.languages.sass.atrule;


	var variable = /\$[-\w]+|#\{\$[-\w]+\}/;
	var operator = [
		/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
		{
			pattern: /(\s+)-(?=\s)/,
			lookbehind: true
		}
	];

	Prism.languages.insertBefore('sass', 'property', {
		// We want to consume the whole line
		'variable-line': {
			pattern: /^[ \t]*\$.+/m,
			inside: {
				'punctuation': /:/,
				'variable': variable,
				'operator': operator
			}
		},
		// We want to consume the whole line
		'property-line': {
			pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
			inside: {
				'property': [
					/[^:\s]+(?=\s*:)/,
					{
						pattern: /(:)[^:\s]+/,
						lookbehind: true
					}
				],
				'punctuation': /:/,
				'variable': variable,
				'operator': operator,
				'important': Prism.languages.sass.important
			}
		}
	});
	delete Prism.languages.sass.property;
	delete Prism.languages.sass.important;

	// Now that whole lines for other patterns are consumed,
	// what's left should be selectors
	Prism.languages.insertBefore('sass', 'punctuation', {
		'selector': {
			pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
			lookbehind: true
		}
	});

}(Prism));

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXNhc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7O0FBR0EsNkJBQTZCLFVBQVU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUYsQ0FBQyxTIiwiZmlsZSI6IjM2MS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihQcmlzbSkge1xuXHRQcmlzbS5sYW5ndWFnZXMuc2FzcyA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NzcycsIHtcblx0XHQvLyBTYXNzIGNvbW1lbnRzIGRvbid0IG5lZWQgdG8gYmUgY2xvc2VkLCBvbmx5IGluZGVudGVkXG5cdFx0J2NvbW1lbnQnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXihbIFxcdF0qKVxcL1tcXC8qXS4qKD86KD86XFxyP1xcbnxcXHIpXFwxWyBcXHRdKy4rKSovbSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9XG5cdH0pO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3Nhc3MnLCAnYXRydWxlJywge1xuXHRcdC8vIFdlIHdhbnQgdG8gY29uc3VtZSB0aGUgd2hvbGUgbGluZVxuXHRcdCdhdHJ1bGUtbGluZSc6IHtcblx0XHRcdC8vIEluY2x1ZGVzIHN1cHBvcnQgZm9yID0gYW5kICsgc2hvcnRjdXRzXG5cdFx0XHRwYXR0ZXJuOiAvXig/OlsgXFx0XSopW0ArPV0uKy9tLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdhdHJ1bGUnOiAvKD86QFtcXHctXSt8Wys9XSkvbVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cdGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMuc2Fzcy5hdHJ1bGU7XG5cblxuXHR2YXIgdmFyaWFibGUgPSAvXFwkWy1cXHddK3wjXFx7XFwkWy1cXHddK1xcfS87XG5cdHZhciBvcGVyYXRvciA9IFtcblx0XHQvWysqXFwvJV18Wz0hXT18PD0/fD49P3xcXGIoPzphbmR8b3J8bm90KVxcYi8sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhcXHMrKS0oPz1cXHMpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9XG5cdF07XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnc2FzcycsICdwcm9wZXJ0eScsIHtcblx0XHQvLyBXZSB3YW50IHRvIGNvbnN1bWUgdGhlIHdob2xlIGxpbmVcblx0XHQndmFyaWFibGUtbGluZSc6IHtcblx0XHRcdHBhdHRlcm46IC9eWyBcXHRdKlxcJC4rL20sXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzogLzovLFxuXHRcdFx0XHQndmFyaWFibGUnOiB2YXJpYWJsZSxcblx0XHRcdFx0J29wZXJhdG9yJzogb3BlcmF0b3Jcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vIFdlIHdhbnQgdG8gY29uc3VtZSB0aGUgd2hvbGUgbGluZVxuXHRcdCdwcm9wZXJ0eS1saW5lJzoge1xuXHRcdFx0cGF0dGVybjogL15bIFxcdF0qKD86W146XFxzXSsgKjouKnw6W146XFxzXSsuKikvbSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQncHJvcGVydHknOiBbXG5cdFx0XHRcdFx0L1teOlxcc10rKD89XFxzKjopLyxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvKDopW146XFxzXSsvLFxuXHRcdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XSxcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzogLzovLFxuXHRcdFx0XHQndmFyaWFibGUnOiB2YXJpYWJsZSxcblx0XHRcdFx0J29wZXJhdG9yJzogb3BlcmF0b3IsXG5cdFx0XHRcdCdpbXBvcnRhbnQnOiBQcmlzbS5sYW5ndWFnZXMuc2Fzcy5pbXBvcnRhbnRcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXHRkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLnNhc3MucHJvcGVydHk7XG5cdGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMuc2Fzcy5pbXBvcnRhbnQ7XG5cblx0Ly8gTm93IHRoYXQgd2hvbGUgbGluZXMgZm9yIG90aGVyIHBhdHRlcm5zIGFyZSBjb25zdW1lZCxcblx0Ly8gd2hhdCdzIGxlZnQgc2hvdWxkIGJlIHNlbGVjdG9yc1xuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdzYXNzJywgJ3B1bmN0dWF0aW9uJywge1xuXHRcdCdzZWxlY3Rvcic6IHtcblx0XHRcdHBhdHRlcm46IC8oWyBcXHRdKilcXFMoPzosP1teLFxcclxcbl0rKSooPzosKD86XFxyP1xcbnxcXHIpXFwxWyBcXHRdK1xcUyg/Oiw/W14sXFxyXFxuXSspKikqLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9XG5cdH0pO1xuXG59KFByaXNtKSk7Il0sInNvdXJjZVJvb3QiOiIifQ==