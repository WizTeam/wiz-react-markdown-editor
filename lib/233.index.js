(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[233],{

/***/ "./node_modules/prismjs/components/prism-lisp.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-lisp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {
	// Functions to construct regular expressions
	// simple form
	// e.g. (interactive ... or (interactive)
	function simple_form(name) {
		return RegExp('(\\()' + name + '(?=[\\s\\)])');
	}
	// booleans and numbers
	function primitive(pattern) {
		return RegExp('([\\s([])' + pattern + '(?=[\\s)])');
	}

	// Patterns in regular expressions

	// Symbol name. See https://www.gnu.org/software/emacs/manual/html_node/elisp/Symbol-Type.html
	// & and : are excluded as they are usually used for special purposes
	var symbol = '[-+*/_~!@$%^=<>{}\\w]+';
	// symbol starting with & used in function arguments
	var marker = '&' + symbol;
	// Open parenthesis for look-behind
	var par = '(\\()';
	var endpar = '(?=\\))';
	// End the pattern with look-ahead space
	var space = '(?=\\s)';

	var language = {
		// Three or four semicolons are considered a heading.
		// See https://www.gnu.org/software/emacs/manual/html_node/elisp/Comment-Tips.html
		heading: {
			pattern: /;;;.*/,
			alias: ['comment', 'title']
		},
		comment: /;.*/,
		string: {
			pattern: /"(?:[^"\\]|\\.)*"/,
			greedy: true,
			inside: {
				argument: /[-A-Z]+(?=[.,\s])/,
				symbol: RegExp('`' + symbol + "'")
			}
		},
		'quoted-symbol': {
			pattern: RegExp("#?'" + symbol),
			alias: ['variable', 'symbol']
		},
		'lisp-property': {
			pattern: RegExp(':' + symbol),
			alias: 'property'
		},
		splice: {
			pattern: RegExp(',@?' + symbol),
			alias: ['symbol', 'variable']
		},
		keyword: [
			{
				pattern: RegExp(
					par +
						'(?:(?:lexical-)?let\\*?|(?:cl-)?letf|if|when|while|unless|cons|cl-loop|and|or|not|cond|setq|error|message|null|require|provide|use-package)' +
						space
				),
				lookbehind: true
			},
			{
				pattern: RegExp(
					par + '(?:for|do|collect|return|finally|append|concat|in|by)' + space
				),
				lookbehind: true
			},
		],
		declare: {
			pattern: simple_form('declare'),
			lookbehind: true,
			alias: 'keyword'
		},
		interactive: {
			pattern: simple_form('interactive'),
			lookbehind: true,
			alias: 'keyword'
		},
		boolean: {
			pattern: primitive('(?:t|nil)'),
			lookbehind: true
		},
		number: {
			pattern: primitive('[-+]?\\d+(?:\\.\\d*)?'),
			lookbehind: true
		},
		defvar: {
			pattern: RegExp(par + 'def(?:var|const|custom|group)\\s+' + symbol),
			lookbehind: true,
			inside: {
				keyword: /^def[a-z]+/,
				variable: RegExp(symbol)
			}
		},
		defun: {
			pattern: RegExp(
				par +
					'(?:cl-)?(?:defun\\*?|defmacro)\\s+' +
					symbol +
					'\\s+\\([\\s\\S]*?\\)'
			),
			lookbehind: true,
			inside: {
				keyword: /^(?:cl-)?def\S+/,
				// See below, this property needs to be defined later so that it can
				// reference the language object.
				arguments: null,
				function: {
					pattern: RegExp('(^\\s)' + symbol),
					lookbehind: true
				},
				punctuation: /[()]/
			}
		},
		lambda: {
			pattern: RegExp(par + 'lambda\\s+\\((?:&?' + symbol + '\\s*)*\\)'),
			lookbehind: true,
			inside: {
				keyword: /^lambda/,
				// See below, this property needs to be defined later so that it can
				// reference the language object.
				arguments: null,
				punctuation: /[()]/
			}
		},
		car: {
			pattern: RegExp(par + symbol),
			lookbehind: true
		},
		punctuation: [
			// open paren, brackets, and close paren
			/(?:['`,]?\(|[)\[\]])/,
			// cons
			{
				pattern: /(\s)\.(?=\s)/,
				lookbehind: true
			},
		]
	};

	var arg = {
		'lisp-marker': RegExp(marker),
		rest: {
			argument: {
				pattern: RegExp(symbol),
				alias: 'variable'
			},
			varform: {
				pattern: RegExp(par + symbol + '\\s+\\S[\\s\\S]*' + endpar),
				lookbehind: true,
				inside: {
					string: language.string,
					boolean: language.boolean,
					number: language.number,
					symbol: language.symbol,
					punctuation: /[()]/
				}
			}
		}
	};

	var forms = '\\S+(?:\\s+\\S+)*';

	var arglist = {
		pattern: RegExp(par + '[\\s\\S]*' + endpar),
		lookbehind: true,
		inside: {
			'rest-vars': {
				pattern: RegExp('&(?:rest|body)\\s+' + forms),
				inside: arg
			},
			'other-marker-vars': {
				pattern: RegExp('&(?:optional|aux)\\s+' + forms),
				inside: arg
			},
			keys: {
				pattern: RegExp('&key\\s+' + forms + '(?:\\s+&allow-other-keys)?'),
				inside: arg
			},
			argument: {
				pattern: RegExp(symbol),
				alias: 'variable'
			},
			punctuation: /[()]/
		}
	};

	language['lambda'].inside.arguments = arglist;
	language['defun'].inside.arguments = Prism.util.clone(arglist);
	language['defun'].inside.arguments.inside.sublist = arglist;

	Prism.languages.lisp = language;
	Prism.languages.elisp = language;
	Prism.languages.emacs = language;
	Prism.languages['emacs-lisp'] = language;
}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWxpc3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsR0FBRztBQUNILGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjIzMy5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoUHJpc20pIHtcblx0Ly8gRnVuY3Rpb25zIHRvIGNvbnN0cnVjdCByZWd1bGFyIGV4cHJlc3Npb25zXG5cdC8vIHNpbXBsZSBmb3JtXG5cdC8vIGUuZy4gKGludGVyYWN0aXZlIC4uLiBvciAoaW50ZXJhY3RpdmUpXG5cdGZ1bmN0aW9uIHNpbXBsZV9mb3JtKG5hbWUpIHtcblx0XHRyZXR1cm4gUmVnRXhwKCcoXFxcXCgpJyArIG5hbWUgKyAnKD89W1xcXFxzXFxcXCldKScpO1xuXHR9XG5cdC8vIGJvb2xlYW5zIGFuZCBudW1iZXJzXG5cdGZ1bmN0aW9uIHByaW1pdGl2ZShwYXR0ZXJuKSB7XG5cdFx0cmV0dXJuIFJlZ0V4cCgnKFtcXFxccyhbXSknICsgcGF0dGVybiArICcoPz1bXFxcXHMpXSknKTtcblx0fVxuXG5cdC8vIFBhdHRlcm5zIGluIHJlZ3VsYXIgZXhwcmVzc2lvbnNcblxuXHQvLyBTeW1ib2wgbmFtZS4gU2VlIGh0dHBzOi8vd3d3LmdudS5vcmcvc29mdHdhcmUvZW1hY3MvbWFudWFsL2h0bWxfbm9kZS9lbGlzcC9TeW1ib2wtVHlwZS5odG1sXG5cdC8vICYgYW5kIDogYXJlIGV4Y2x1ZGVkIGFzIHRoZXkgYXJlIHVzdWFsbHkgdXNlZCBmb3Igc3BlY2lhbCBwdXJwb3Nlc1xuXHR2YXIgc3ltYm9sID0gJ1stKyovX34hQCQlXj08Pnt9XFxcXHddKyc7XG5cdC8vIHN5bWJvbCBzdGFydGluZyB3aXRoICYgdXNlZCBpbiBmdW5jdGlvbiBhcmd1bWVudHNcblx0dmFyIG1hcmtlciA9ICcmJyArIHN5bWJvbDtcblx0Ly8gT3BlbiBwYXJlbnRoZXNpcyBmb3IgbG9vay1iZWhpbmRcblx0dmFyIHBhciA9ICcoXFxcXCgpJztcblx0dmFyIGVuZHBhciA9ICcoPz1cXFxcKSknO1xuXHQvLyBFbmQgdGhlIHBhdHRlcm4gd2l0aCBsb29rLWFoZWFkIHNwYWNlXG5cdHZhciBzcGFjZSA9ICcoPz1cXFxccyknO1xuXG5cdHZhciBsYW5ndWFnZSA9IHtcblx0XHQvLyBUaHJlZSBvciBmb3VyIHNlbWljb2xvbnMgYXJlIGNvbnNpZGVyZWQgYSBoZWFkaW5nLlxuXHRcdC8vIFNlZSBodHRwczovL3d3dy5nbnUub3JnL3NvZnR3YXJlL2VtYWNzL21hbnVhbC9odG1sX25vZGUvZWxpc3AvQ29tbWVudC1UaXBzLmh0bWxcblx0XHRoZWFkaW5nOiB7XG5cdFx0XHRwYXR0ZXJuOiAvOzs7LiovLFxuXHRcdFx0YWxpYXM6IFsnY29tbWVudCcsICd0aXRsZSddXG5cdFx0fSxcblx0XHRjb21tZW50OiAvOy4qLyxcblx0XHRzdHJpbmc6IHtcblx0XHRcdHBhdHRlcm46IC9cIig/OlteXCJcXFxcXXxcXFxcLikqXCIvLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdGFyZ3VtZW50OiAvWy1BLVpdKyg/PVsuLFxcc10pLyxcblx0XHRcdFx0c3ltYm9sOiBSZWdFeHAoJ2AnICsgc3ltYm9sICsgXCInXCIpXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQncXVvdGVkLXN5bWJvbCc6IHtcblx0XHRcdHBhdHRlcm46IFJlZ0V4cChcIiM/J1wiICsgc3ltYm9sKSxcblx0XHRcdGFsaWFzOiBbJ3ZhcmlhYmxlJywgJ3N5bWJvbCddXG5cdFx0fSxcblx0XHQnbGlzcC1wcm9wZXJ0eSc6IHtcblx0XHRcdHBhdHRlcm46IFJlZ0V4cCgnOicgKyBzeW1ib2wpLFxuXHRcdFx0YWxpYXM6ICdwcm9wZXJ0eSdcblx0XHR9LFxuXHRcdHNwbGljZToge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKCcsQD8nICsgc3ltYm9sKSxcblx0XHRcdGFsaWFzOiBbJ3N5bWJvbCcsICd2YXJpYWJsZSddXG5cdFx0fSxcblx0XHRrZXl3b3JkOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IFJlZ0V4cChcblx0XHRcdFx0XHRwYXIgK1xuXHRcdFx0XHRcdFx0Jyg/Oig/OmxleGljYWwtKT9sZXRcXFxcKj98KD86Y2wtKT9sZXRmfGlmfHdoZW58d2hpbGV8dW5sZXNzfGNvbnN8Y2wtbG9vcHxhbmR8b3J8bm90fGNvbmR8c2V0cXxlcnJvcnxtZXNzYWdlfG51bGx8cmVxdWlyZXxwcm92aWRlfHVzZS1wYWNrYWdlKScgK1xuXHRcdFx0XHRcdFx0c3BhY2Vcblx0XHRcdFx0KSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogUmVnRXhwKFxuXHRcdFx0XHRcdHBhciArICcoPzpmb3J8ZG98Y29sbGVjdHxyZXR1cm58ZmluYWxseXxhcHBlbmR8Y29uY2F0fGlufGJ5KScgKyBzcGFjZVxuXHRcdFx0XHQpLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9LFxuXHRcdF0sXG5cdFx0ZGVjbGFyZToge1xuXHRcdFx0cGF0dGVybjogc2ltcGxlX2Zvcm0oJ2RlY2xhcmUnKSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRhbGlhczogJ2tleXdvcmQnXG5cdFx0fSxcblx0XHRpbnRlcmFjdGl2ZToge1xuXHRcdFx0cGF0dGVybjogc2ltcGxlX2Zvcm0oJ2ludGVyYWN0aXZlJyksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdrZXl3b3JkJ1xuXHRcdH0sXG5cdFx0Ym9vbGVhbjoge1xuXHRcdFx0cGF0dGVybjogcHJpbWl0aXZlKCcoPzp0fG5pbCknKSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdG51bWJlcjoge1xuXHRcdFx0cGF0dGVybjogcHJpbWl0aXZlKCdbLStdP1xcXFxkKyg/OlxcXFwuXFxcXGQqKT8nKSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdGRlZnZhcjoge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKHBhciArICdkZWYoPzp2YXJ8Y29uc3R8Y3VzdG9tfGdyb3VwKVxcXFxzKycgKyBzeW1ib2wpLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRrZXl3b3JkOiAvXmRlZlthLXpdKy8sXG5cdFx0XHRcdHZhcmlhYmxlOiBSZWdFeHAoc3ltYm9sKVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGVmdW46IHtcblx0XHRcdHBhdHRlcm46IFJlZ0V4cChcblx0XHRcdFx0cGFyICtcblx0XHRcdFx0XHQnKD86Y2wtKT8oPzpkZWZ1blxcXFwqP3xkZWZtYWNybylcXFxccysnICtcblx0XHRcdFx0XHRzeW1ib2wgK1xuXHRcdFx0XHRcdCdcXFxccytcXFxcKFtcXFxcc1xcXFxTXSo/XFxcXCknXG5cdFx0XHQpLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRrZXl3b3JkOiAvXig/OmNsLSk/ZGVmXFxTKy8sXG5cdFx0XHRcdC8vIFNlZSBiZWxvdywgdGhpcyBwcm9wZXJ0eSBuZWVkcyB0byBiZSBkZWZpbmVkIGxhdGVyIHNvIHRoYXQgaXQgY2FuXG5cdFx0XHRcdC8vIHJlZmVyZW5jZSB0aGUgbGFuZ3VhZ2Ugb2JqZWN0LlxuXHRcdFx0XHRhcmd1bWVudHM6IG51bGwsXG5cdFx0XHRcdGZ1bmN0aW9uOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogUmVnRXhwKCcoXlxcXFxzKScgKyBzeW1ib2wpLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdFx0fSxcblx0XHRcdFx0cHVuY3R1YXRpb246IC9bKCldL1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bGFtYmRhOiB7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAocGFyICsgJ2xhbWJkYVxcXFxzK1xcXFwoKD86Jj8nICsgc3ltYm9sICsgJ1xcXFxzKikqXFxcXCknKSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0a2V5d29yZDogL15sYW1iZGEvLFxuXHRcdFx0XHQvLyBTZWUgYmVsb3csIHRoaXMgcHJvcGVydHkgbmVlZHMgdG8gYmUgZGVmaW5lZCBsYXRlciBzbyB0aGF0IGl0IGNhblxuXHRcdFx0XHQvLyByZWZlcmVuY2UgdGhlIGxhbmd1YWdlIG9iamVjdC5cblx0XHRcdFx0YXJndW1lbnRzOiBudWxsLFxuXHRcdFx0XHRwdW5jdHVhdGlvbjogL1soKV0vXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjYXI6IHtcblx0XHRcdHBhdHRlcm46IFJlZ0V4cChwYXIgKyBzeW1ib2wpLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0cHVuY3R1YXRpb246IFtcblx0XHRcdC8vIG9wZW4gcGFyZW4sIGJyYWNrZXRzLCBhbmQgY2xvc2UgcGFyZW5cblx0XHRcdC8oPzpbJ2AsXT9cXCh8WylcXFtcXF1dKS8sXG5cdFx0XHQvLyBjb25zXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC8oXFxzKVxcLig/PVxccykvLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9LFxuXHRcdF1cblx0fTtcblxuXHR2YXIgYXJnID0ge1xuXHRcdCdsaXNwLW1hcmtlcic6IFJlZ0V4cChtYXJrZXIpLFxuXHRcdHJlc3Q6IHtcblx0XHRcdGFyZ3VtZW50OiB7XG5cdFx0XHRcdHBhdHRlcm46IFJlZ0V4cChzeW1ib2wpLFxuXHRcdFx0XHRhbGlhczogJ3ZhcmlhYmxlJ1xuXHRcdFx0fSxcblx0XHRcdHZhcmZvcm06IHtcblx0XHRcdFx0cGF0dGVybjogUmVnRXhwKHBhciArIHN5bWJvbCArICdcXFxccytcXFxcU1tcXFxcc1xcXFxTXSonICsgZW5kcGFyKSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0c3RyaW5nOiBsYW5ndWFnZS5zdHJpbmcsXG5cdFx0XHRcdFx0Ym9vbGVhbjogbGFuZ3VhZ2UuYm9vbGVhbixcblx0XHRcdFx0XHRudW1iZXI6IGxhbmd1YWdlLm51bWJlcixcblx0XHRcdFx0XHRzeW1ib2w6IGxhbmd1YWdlLnN5bWJvbCxcblx0XHRcdFx0XHRwdW5jdHVhdGlvbjogL1soKV0vXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0dmFyIGZvcm1zID0gJ1xcXFxTKyg/OlxcXFxzK1xcXFxTKykqJztcblxuXHR2YXIgYXJnbGlzdCA9IHtcblx0XHRwYXR0ZXJuOiBSZWdFeHAocGFyICsgJ1tcXFxcc1xcXFxTXSonICsgZW5kcGFyKSxcblx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J3Jlc3QtdmFycyc6IHtcblx0XHRcdFx0cGF0dGVybjogUmVnRXhwKCcmKD86cmVzdHxib2R5KVxcXFxzKycgKyBmb3JtcyksXG5cdFx0XHRcdGluc2lkZTogYXJnXG5cdFx0XHR9LFxuXHRcdFx0J290aGVyLW1hcmtlci12YXJzJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiBSZWdFeHAoJyYoPzpvcHRpb25hbHxhdXgpXFxcXHMrJyArIGZvcm1zKSxcblx0XHRcdFx0aW5zaWRlOiBhcmdcblx0XHRcdH0sXG5cdFx0XHRrZXlzOiB7XG5cdFx0XHRcdHBhdHRlcm46IFJlZ0V4cCgnJmtleVxcXFxzKycgKyBmb3JtcyArICcoPzpcXFxccysmYWxsb3ctb3RoZXIta2V5cyk/JyksXG5cdFx0XHRcdGluc2lkZTogYXJnXG5cdFx0XHR9LFxuXHRcdFx0YXJndW1lbnQ6IHtcblx0XHRcdFx0cGF0dGVybjogUmVnRXhwKHN5bWJvbCksXG5cdFx0XHRcdGFsaWFzOiAndmFyaWFibGUnXG5cdFx0XHR9LFxuXHRcdFx0cHVuY3R1YXRpb246IC9bKCldL1xuXHRcdH1cblx0fTtcblxuXHRsYW5ndWFnZVsnbGFtYmRhJ10uaW5zaWRlLmFyZ3VtZW50cyA9IGFyZ2xpc3Q7XG5cdGxhbmd1YWdlWydkZWZ1biddLmluc2lkZS5hcmd1bWVudHMgPSBQcmlzbS51dGlsLmNsb25lKGFyZ2xpc3QpO1xuXHRsYW5ndWFnZVsnZGVmdW4nXS5pbnNpZGUuYXJndW1lbnRzLmluc2lkZS5zdWJsaXN0ID0gYXJnbGlzdDtcblxuXHRQcmlzbS5sYW5ndWFnZXMubGlzcCA9IGxhbmd1YWdlO1xuXHRQcmlzbS5sYW5ndWFnZXMuZWxpc3AgPSBsYW5ndWFnZTtcblx0UHJpc20ubGFuZ3VhZ2VzLmVtYWNzID0gbGFuZ3VhZ2U7XG5cdFByaXNtLmxhbmd1YWdlc1snZW1hY3MtbGlzcCddID0gbGFuZ3VhZ2U7XG59KFByaXNtKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9