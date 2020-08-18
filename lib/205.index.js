(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[205],{

/***/ "./node_modules/prismjs/components/prism-jsdoc.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-jsdoc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var javascript = Prism.languages.javascript;

	var type = /{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})+}/.source;
	var parameterPrefix = '(@(?:param|arg|argument|property)\\s+(?:' + type + '\\s+)?)';

	Prism.languages.jsdoc = Prism.languages.extend('javadoclike', {
		'parameter': {
			// @param {string} foo - foo bar
			pattern: RegExp(parameterPrefix + /[$\w\xA0-\uFFFF.]+(?=\s|$)/.source),
			lookbehind: true,
			inside: {
				'punctuation': /\./
			}
		}
	});

	Prism.languages.insertBefore('jsdoc', 'keyword', {
		'optional-parameter': {
			// @param {string} [baz.foo="bar"] foo bar
			pattern: RegExp(parameterPrefix + /\[[$\w\xA0-\uFFFF.]+(?:=[^[\]]+)?\](?=\s|$)/.source),
			lookbehind: true,
			inside: {
				'parameter': {
					pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
					lookbehind: true,
					inside: {
						'punctuation': /\./
					}
				},
				'code': {
					pattern: /(=)[\s\S]*(?=\]$)/,
					lookbehind: true,
					inside: javascript,
					alias: 'language-javascript'
				},
				'punctuation': /[=[\]]/
			}
		},
		'class-name': [
			{
				pattern: RegExp(/(@(?:augments|extends|class|interface|memberof!?|template|this|typedef)\s+(?:<TYPE>\s+)?)[A-Z]\w*(?:\.[A-Z]\w*)*/.source.replace(/<TYPE>/g, function () { return type; })),
				lookbehind: true,
				inside: {
					'punctuation': /\./
				}
			},
			{
				pattern: RegExp('(@[a-z]+\\s+)' + type),
				lookbehind: true,
				inside: {
					'string': javascript.string,
					'number': javascript.number,
					'boolean': javascript.boolean,
					'keyword': Prism.languages.typescript.keyword,
					'operator': /=>|\.\.\.|[&|?:*]/,
					'punctuation': /[.,;=<>{}()[\]]/
				}
			}
		],
		'example': {
			pattern: /(@example\s+)[^@]+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
			lookbehind: true,
			inside: {
				'code': {
					pattern: /^(\s*(?:\*\s*)?).+$/m,
					lookbehind: true,
					inside: javascript,
					alias: 'language-javascript'
				}
			}
		}
	});

	Prism.languages.javadoclike.addSupport('javascript', Prism.languages.jsdoc);

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzZG9jLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBLGNBQWMsT0FBTyxHQUFHLE9BQU8sR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHO0FBQy9DOztBQUVBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDhLQUE4SyxhQUFhLEVBQUU7QUFDN0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLEtBQUs7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQSxDQUFDIiwiZmlsZSI6IjIwNS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHR2YXIgamF2YXNjcmlwdCA9IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0O1xuXG5cdHZhciB0eXBlID0gL3soPzpbXnt9XXx7KD86W157fV18e1tee31dKn0pKn0pK30vLnNvdXJjZTtcblx0dmFyIHBhcmFtZXRlclByZWZpeCA9ICcoQCg/OnBhcmFtfGFyZ3xhcmd1bWVudHxwcm9wZXJ0eSlcXFxccysoPzonICsgdHlwZSArICdcXFxccyspPyknO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5qc2RvYyA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2phdmFkb2NsaWtlJywge1xuXHRcdCdwYXJhbWV0ZXInOiB7XG5cdFx0XHQvLyBAcGFyYW0ge3N0cmluZ30gZm9vIC0gZm9vIGJhclxuXHRcdFx0cGF0dGVybjogUmVnRXhwKHBhcmFtZXRlclByZWZpeCArIC9bJFxcd1xceEEwLVxcdUZGRkYuXSsoPz1cXHN8JCkvLnNvdXJjZSksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXC4vXG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdqc2RvYycsICdrZXl3b3JkJywge1xuXHRcdCdvcHRpb25hbC1wYXJhbWV0ZXInOiB7XG5cdFx0XHQvLyBAcGFyYW0ge3N0cmluZ30gW2Jhei5mb289XCJiYXJcIl0gZm9vIGJhclxuXHRcdFx0cGF0dGVybjogUmVnRXhwKHBhcmFtZXRlclByZWZpeCArIC9cXFtbJFxcd1xceEEwLVxcdUZGRkYuXSsoPzo9W15bXFxdXSspP1xcXSg/PVxcc3wkKS8uc291cmNlKSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3BhcmFtZXRlcic6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvKF5cXFspWyRcXHdcXHhBMC1cXHVGRkZGXFwuXSsvLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXFwuL1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0J2NvZGUnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogLyg9KVtcXHNcXFNdKig/PVxcXSQpLyxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRcdGluc2lkZTogamF2YXNjcmlwdCxcblx0XHRcdFx0XHRhbGlhczogJ2xhbmd1YWdlLWphdmFzY3JpcHQnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9bPVtcXF1dL1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2NsYXNzLW5hbWUnOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IFJlZ0V4cCgvKEAoPzphdWdtZW50c3xleHRlbmRzfGNsYXNzfGludGVyZmFjZXxtZW1iZXJvZiE/fHRlbXBsYXRlfHRoaXN8dHlwZWRlZilcXHMrKD86PFRZUEU+XFxzKyk/KVtBLVpdXFx3Kig/OlxcLltBLVpdXFx3KikqLy5zb3VyY2UucmVwbGFjZSgvPFRZUEU+L2csIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHR5cGU7IH0pKSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL1xcLi9cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogUmVnRXhwKCcoQFthLXpdK1xcXFxzKyknICsgdHlwZSksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdzdHJpbmcnOiBqYXZhc2NyaXB0LnN0cmluZyxcblx0XHRcdFx0XHQnbnVtYmVyJzogamF2YXNjcmlwdC5udW1iZXIsXG5cdFx0XHRcdFx0J2Jvb2xlYW4nOiBqYXZhc2NyaXB0LmJvb2xlYW4sXG5cdFx0XHRcdFx0J2tleXdvcmQnOiBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdC5rZXl3b3JkLFxuXHRcdFx0XHRcdCdvcGVyYXRvcic6IC89PnxcXC5cXC5cXC58WyZ8PzoqXS8sXG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL1suLDs9PD57fSgpW1xcXV0vXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdLFxuXHRcdCdleGFtcGxlJzoge1xuXHRcdFx0cGF0dGVybjogLyhAZXhhbXBsZVxccyspW15AXSs/KD89XFxzKig/OlxcKlxccyopPyg/OkBcXHd8XFwqXFwvKSkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnY29kZSc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvXihcXHMqKD86XFwqXFxzKik/KS4rJC9tLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdFx0aW5zaWRlOiBqYXZhc2NyaXB0LFxuXHRcdFx0XHRcdGFsaWFzOiAnbGFuZ3VhZ2UtamF2YXNjcmlwdCdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmphdmFkb2NsaWtlLmFkZFN1cHBvcnQoJ2phdmFzY3JpcHQnLCBQcmlzbS5sYW5ndWFnZXMuanNkb2MpO1xuXG59KFByaXNtKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9