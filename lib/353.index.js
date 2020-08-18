(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[353],{

/***/ "./node_modules/prismjs/components/prism-robotframework.js":
/*!*****************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-robotframework.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var comment = {
		pattern: /(^[ \t]*| {2}|\t)#.*/m,
		lookbehind: true,
		greedy: true
	};

	var variable = {
		pattern: /((?:^|[^\\])(?:\\{2})*)[$@&%]\{(?:[^{}\r\n]|\{[^{}\r\n]*\})*\}/,
		lookbehind: true,
		inside: {
			'punctuation': /^[$@&%]\{|\}$/
		}
	};

	function createSection(name, inside) {
		var extendecInside = {};

		extendecInside['section-header'] = {
			pattern: /^ ?\*{3}.+?\*{3}/,
			alias: 'keyword'
		};

		// copy inside tokens
		for (var token in inside) {
			extendecInside[token] = inside[token];
		}

		extendecInside['tag'] = {
			pattern: /([\r\n](?:  |\t)[ \t]*)\[[-\w]+\]/,
			lookbehind: true,
			inside: {
				'punctuation': /\[|\]/
			}
		};
		extendecInside['variable'] = variable;
		extendecInside['comment'] = comment;

		return {
			pattern: RegExp(/^ ?\*{3}[ \t]*<name>[ \t]*\*{3}(?:.|[\r\n](?!\*{3}))*/.source.replace(/<name>/g, function () { return name; }), 'im'),
			alias: 'section',
			inside: extendecInside
		};
	}


	var docTag = {
		pattern: /(\[Documentation\](?:  |\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,
		lookbehind: true,
		alias: 'string'
	};

	var testNameLike = {
		pattern: /([\r\n] ?)(?!#)(?:\S(?:[ \t]\S)*)+/,
		lookbehind: true,
		alias: 'function',
		inside: {
			'variable': variable
		}
	};

	var testPropertyLike = {
		pattern: /([\r\n](?:  |\t)[ \t]*)(?!\[|\.{3}|#)(?:\S(?:[ \t]\S)*)+/,
		lookbehind: true,
		inside: {
			'variable': variable
		}
	};

	Prism.languages['robotframework'] = {
		'settings': createSection('Settings', {
			'documentation': {
				pattern: /([\r\n] ?Documentation(?:  |\t)[ \t]*)(?![ \t]|#)(?:.|(?:\r\n?|\n)[ \t]*\.{3})+/,
				lookbehind: true,
				alias: 'string'
			},
			'property': {
				pattern: /([\r\n] ?)(?!\.{3}|#)(?:\S(?:[ \t]\S)*)+/,
				lookbehind: true
			}
		}),
		'variables': createSection('Variables'),
		'test-cases': createSection('Test Cases', {
			'test-name': testNameLike,
			'documentation': docTag,
			'property': testPropertyLike
		}),
		'keywords': createSection('Keywords', {
			'keyword-name': testNameLike,
			'documentation': docTag,
			'property': testPropertyLike
		}),
		'tasks': createSection('Tasks', {
			'task-name': testNameLike,
			'documentation': docTag,
			'property': testPropertyLike
		}),
		'comment': comment
	};

	Prism.languages.robot = Prism.languages['robotframework'];

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXJvYm90ZnJhbWV3b3JrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0EsdUJBQXVCLEVBQUU7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLEVBQUUsV0FBVyxPQUFPLFFBQVEsSUFBSSxRQUFRLElBQUk7QUFDMUU7QUFDQTtBQUNBLDRCQUE0QixHQUFHO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixFQUFFLE1BQU0sRUFBRTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixFQUFFLHFCQUFxQixFQUFFLGlCQUFpQixFQUFFLDRDQUE0QyxhQUFhLEVBQUU7QUFDakk7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsbUZBQW1GLEVBQUU7QUFDckY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMsRUFBRTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlGQUF5RixFQUFFO0FBQzNGO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSw4QkFBOEIsRUFBRTtBQUNoQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQSxDQUFDIiwiZmlsZSI6IjM1My5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHR2YXIgY29tbWVudCA9IHtcblx0XHRwYXR0ZXJuOiAvKF5bIFxcdF0qfCB7Mn18XFx0KSMuKi9tLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH07XG5cblx0dmFyIHZhcmlhYmxlID0ge1xuXHRcdHBhdHRlcm46IC8oKD86XnxbXlxcXFxdKSg/OlxcXFx7Mn0pKilbJEAmJV1cXHsoPzpbXnt9XFxyXFxuXXxcXHtbXnt9XFxyXFxuXSpcXH0pKlxcfS8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdwdW5jdHVhdGlvbic6IC9eWyRAJiVdXFx7fFxcfSQvXG5cdFx0fVxuXHR9O1xuXG5cdGZ1bmN0aW9uIGNyZWF0ZVNlY3Rpb24obmFtZSwgaW5zaWRlKSB7XG5cdFx0dmFyIGV4dGVuZGVjSW5zaWRlID0ge307XG5cblx0XHRleHRlbmRlY0luc2lkZVsnc2VjdGlvbi1oZWFkZXInXSA9IHtcblx0XHRcdHBhdHRlcm46IC9eID9cXCp7M30uKz9cXCp7M30vLFxuXHRcdFx0YWxpYXM6ICdrZXl3b3JkJ1xuXHRcdH07XG5cblx0XHQvLyBjb3B5IGluc2lkZSB0b2tlbnNcblx0XHRmb3IgKHZhciB0b2tlbiBpbiBpbnNpZGUpIHtcblx0XHRcdGV4dGVuZGVjSW5zaWRlW3Rva2VuXSA9IGluc2lkZVt0b2tlbl07XG5cdFx0fVxuXG5cdFx0ZXh0ZW5kZWNJbnNpZGVbJ3RhZyddID0ge1xuXHRcdFx0cGF0dGVybjogLyhbXFxyXFxuXSg/OiAgfFxcdClbIFxcdF0qKVxcW1stXFx3XStcXF0vLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXFxbfFxcXS9cblx0XHRcdH1cblx0XHR9O1xuXHRcdGV4dGVuZGVjSW5zaWRlWyd2YXJpYWJsZSddID0gdmFyaWFibGU7XG5cdFx0ZXh0ZW5kZWNJbnNpZGVbJ2NvbW1lbnQnXSA9IGNvbW1lbnQ7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKC9eID9cXCp7M31bIFxcdF0qPG5hbWU+WyBcXHRdKlxcKnszfSg/Oi58W1xcclxcbl0oPyFcXCp7M30pKSovLnNvdXJjZS5yZXBsYWNlKC88bmFtZT4vZywgZnVuY3Rpb24gKCkgeyByZXR1cm4gbmFtZTsgfSksICdpbScpLFxuXHRcdFx0YWxpYXM6ICdzZWN0aW9uJyxcblx0XHRcdGluc2lkZTogZXh0ZW5kZWNJbnNpZGVcblx0XHR9O1xuXHR9XG5cblxuXHR2YXIgZG9jVGFnID0ge1xuXHRcdHBhdHRlcm46IC8oXFxbRG9jdW1lbnRhdGlvblxcXSg/OiAgfFxcdClbIFxcdF0qKSg/IVsgXFx0XXwjKSg/Oi58KD86XFxyXFxuP3xcXG4pWyBcXHRdKlxcLnszfSkrLyxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGFsaWFzOiAnc3RyaW5nJ1xuXHR9O1xuXG5cdHZhciB0ZXN0TmFtZUxpa2UgPSB7XG5cdFx0cGF0dGVybjogLyhbXFxyXFxuXSA/KSg/ISMpKD86XFxTKD86WyBcXHRdXFxTKSopKy8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRhbGlhczogJ2Z1bmN0aW9uJyxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCd2YXJpYWJsZSc6IHZhcmlhYmxlXG5cdFx0fVxuXHR9O1xuXG5cdHZhciB0ZXN0UHJvcGVydHlMaWtlID0ge1xuXHRcdHBhdHRlcm46IC8oW1xcclxcbl0oPzogIHxcXHQpWyBcXHRdKikoPyFcXFt8XFwuezN9fCMpKD86XFxTKD86WyBcXHRdXFxTKSopKy8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCd2YXJpYWJsZSc6IHZhcmlhYmxlXG5cdFx0fVxuXHR9O1xuXG5cdFByaXNtLmxhbmd1YWdlc1sncm9ib3RmcmFtZXdvcmsnXSA9IHtcblx0XHQnc2V0dGluZ3MnOiBjcmVhdGVTZWN0aW9uKCdTZXR0aW5ncycsIHtcblx0XHRcdCdkb2N1bWVudGF0aW9uJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvKFtcXHJcXG5dID9Eb2N1bWVudGF0aW9uKD86ICB8XFx0KVsgXFx0XSopKD8hWyBcXHRdfCMpKD86LnwoPzpcXHJcXG4/fFxcbilbIFxcdF0qXFwuezN9KSsvLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRhbGlhczogJ3N0cmluZydcblx0XHRcdH0sXG5cdFx0XHQncHJvcGVydHknOiB7XG5cdFx0XHRcdHBhdHRlcm46IC8oW1xcclxcbl0gPykoPyFcXC57M318IykoPzpcXFMoPzpbIFxcdF1cXFMpKikrLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0pLFxuXHRcdCd2YXJpYWJsZXMnOiBjcmVhdGVTZWN0aW9uKCdWYXJpYWJsZXMnKSxcblx0XHQndGVzdC1jYXNlcyc6IGNyZWF0ZVNlY3Rpb24oJ1Rlc3QgQ2FzZXMnLCB7XG5cdFx0XHQndGVzdC1uYW1lJzogdGVzdE5hbWVMaWtlLFxuXHRcdFx0J2RvY3VtZW50YXRpb24nOiBkb2NUYWcsXG5cdFx0XHQncHJvcGVydHknOiB0ZXN0UHJvcGVydHlMaWtlXG5cdFx0fSksXG5cdFx0J2tleXdvcmRzJzogY3JlYXRlU2VjdGlvbignS2V5d29yZHMnLCB7XG5cdFx0XHQna2V5d29yZC1uYW1lJzogdGVzdE5hbWVMaWtlLFxuXHRcdFx0J2RvY3VtZW50YXRpb24nOiBkb2NUYWcsXG5cdFx0XHQncHJvcGVydHknOiB0ZXN0UHJvcGVydHlMaWtlXG5cdFx0fSksXG5cdFx0J3Rhc2tzJzogY3JlYXRlU2VjdGlvbignVGFza3MnLCB7XG5cdFx0XHQndGFzay1uYW1lJzogdGVzdE5hbWVMaWtlLFxuXHRcdFx0J2RvY3VtZW50YXRpb24nOiBkb2NUYWcsXG5cdFx0XHQncHJvcGVydHknOiB0ZXN0UHJvcGVydHlMaWtlXG5cdFx0fSksXG5cdFx0J2NvbW1lbnQnOiBjb21tZW50XG5cdH07XG5cblx0UHJpc20ubGFuZ3VhZ2VzLnJvYm90ID0gUHJpc20ubGFuZ3VhZ2VzWydyb2JvdGZyYW1ld29yayddO1xuXG59KFByaXNtKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9