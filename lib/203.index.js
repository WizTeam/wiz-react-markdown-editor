(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[203],{

/***/ "./node_modules/prismjs/components/prism-js-templates.js":
/*!***************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-js-templates.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var templateString = Prism.languages.javascript['template-string'];

	// see the pattern in prism-javascript.js
	var templateLiteralPattern = templateString.pattern.source;
	var interpolationObject = templateString.inside['interpolation'];
	var interpolationPunctuationObject = interpolationObject.inside['interpolation-punctuation'];
	var interpolationPattern = interpolationObject.pattern.source;


	/**
	 * Creates a new pattern to match a template string with a special tag.
	 *
	 * This will return `undefined` if there is no grammar with the given language id.
	 *
	 * @param {string} language The language id of the embedded language. E.g. `markdown`.
	 * @param {string} tag The regex pattern to match the tag.
	 * @returns {object | undefined}
	 * @example
	 * createTemplate('css', /\bcss/.source);
	 */
	function createTemplate(language, tag) {
		if (!Prism.languages[language]) {
			return undefined;
		}

		return {
			pattern: RegExp('((?:' + tag + ')\\s*)' + templateLiteralPattern),
			lookbehind: true,
			greedy: true,
			inside: {
				'template-punctuation': {
					pattern: /^`|`$/,
					alias: 'string'
				},
				'embedded-code': {
					pattern: /[\s\S]+/,
					alias: language
				}
			}
		};
	}


	Prism.languages.javascript['template-string'] = [
		// styled-jsx:
		//   css`a { color: #25F; }`
		// styled-components:
		//   styled.h1`color: red;`
		createTemplate('css', /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),

		// html`<p></p>`
		// div.innerHTML = `<p></p>`
		createTemplate('html', /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),

		// svg`<path fill="#fff" d="M55.37 ..."/>`
		createTemplate('svg', /\bsvg/.source),

		// md`# h1`, markdown`## h2`
		createTemplate('markdown', /\b(?:md|markdown)/.source),

		// gql`...`, graphql`...`, graphql.experimental`...`
		createTemplate('graphql', /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),

		// vanilla template string
		templateString
	].filter(Boolean);


	/**
	 * Returns a specific placeholder literal for the given language.
	 *
	 * @param {number} counter
	 * @param {string} language
	 * @returns {string}
	 */
	function getPlaceholder(counter, language) {
		return '___' + language.toUpperCase() + '_' + counter + '___';
	}

	/**
	 * Returns the tokens of `Prism.tokenize` but also runs the `before-tokenize` and `after-tokenize` hooks.
	 *
	 * @param {string} code
	 * @param {any} grammar
	 * @param {string} language
	 * @returns {(string|Token)[]}
	 */
	function tokenizeWithHooks(code, grammar, language) {
		var env = {
			code: code,
			grammar: grammar,
			language: language
		};
		Prism.hooks.run('before-tokenize', env);
		env.tokens = Prism.tokenize(env.code, env.grammar);
		Prism.hooks.run('after-tokenize', env);
		return env.tokens;
	}

	/**
	 * Returns the token of the given JavaScript interpolation expression.
	 *
	 * @param {string} expression The code of the expression. E.g. `"${42}"`
	 * @returns {Token}
	 */
	function tokenizeInterpolationExpression(expression) {
		var tempGrammar = {};
		tempGrammar['interpolation-punctuation'] = interpolationPunctuationObject;

		/** @type {Array} */
		var tokens = Prism.tokenize(expression, tempGrammar);
		if (tokens.length === 3) {
			/**
			 * The token array will look like this
			 * [
			 *     ["interpolation-punctuation", "${"]
			 *     "..." // JavaScript expression of the interpolation
			 *     ["interpolation-punctuation", "}"]
			 * ]
			 */

			var args = [1, 1];
			args.push.apply(args, tokenizeWithHooks(tokens[1], Prism.languages.javascript, 'javascript'));

			tokens.splice.apply(tokens, args);
		}

		return new Prism.Token('interpolation', tokens, interpolationObject.alias, expression);
	}

	/**
	 * Tokenizes the given code with support for JavaScript interpolation expressions mixed in.
	 *
	 * This function has 3 phases:
	 *
	 * 1. Replace all JavaScript interpolation expression with a placeholder.
	 *    The placeholder will have the syntax of a identify of the target language.
	 * 2. Tokenize the code with placeholders.
	 * 3. Tokenize the interpolation expressions and re-insert them into the tokenize code.
	 *    The insertion only works if a placeholder hasn't been "ripped apart" meaning that the placeholder has been
	 *    tokenized as two tokens by the grammar of the embedded language.
	 *
	 * @param {string} code
	 * @param {object} grammar
	 * @param {string} language
	 * @returns {Token}
	 */
	function tokenizeEmbedded(code, grammar, language) {
		// 1. First filter out all interpolations

		// because they might be escaped, we need a lookbehind, so we use Prism
		/** @type {(Token|string)[]} */
		var _tokens = Prism.tokenize(code, {
			'interpolation': {
				pattern: RegExp(interpolationPattern),
				lookbehind: true
			}
		});

		// replace all interpolations with a placeholder which is not in the code already
		var placeholderCounter = 0;
		/** @type {Object<string, string>} */
		var placeholderMap = {};
		var embeddedCode = _tokens.map(function (token) {
			if (typeof token === 'string') {
				return token;
			} else {
				var interpolationExpression = token.content;

				var placeholder;
				while (code.indexOf(placeholder = getPlaceholder(placeholderCounter++, language)) !== -1) { }
				placeholderMap[placeholder] = interpolationExpression;
				return placeholder;
			}
		}).join('');


		// 2. Tokenize the embedded code

		var embeddedTokens = tokenizeWithHooks(embeddedCode, grammar, language);


		// 3. Re-insert the interpolation

		var placeholders = Object.keys(placeholderMap);
		placeholderCounter = 0;

		/**
		 *
		 * @param {(Token|string)[]} tokens
		 * @returns {void}
		 */
		function walkTokens(tokens) {
			for (var i = 0; i < tokens.length; i++) {
				if (placeholderCounter >= placeholders.length) {
					return;
				}

				var token = tokens[i];

				if (typeof token === 'string' || typeof token.content === 'string') {
					var placeholder = placeholders[placeholderCounter];
					var s = typeof token === 'string' ? token : /** @type {string} */ (token.content);

					var index = s.indexOf(placeholder);
					if (index !== -1) {
						++placeholderCounter;

						var before = s.substring(0, index);
						var middle = tokenizeInterpolationExpression(placeholderMap[placeholder]);
						var after = s.substring(index + placeholder.length);

						var replacement = [];
						if (before) {
							replacement.push(before);
						}
						replacement.push(middle);
						if (after) {
							var afterTokens = [after];
							walkTokens(afterTokens);
							replacement.push.apply(replacement, afterTokens);
						}

						if (typeof token === 'string') {
							tokens.splice.apply(tokens, [i, 1].concat(replacement));
							i += replacement.length - 1;
						} else {
							token.content = replacement;
						}
					}
				} else {
					var content = token.content;
					if (Array.isArray(content)) {
						walkTokens(content);
					} else {
						walkTokens([content]);
					}
				}
			}
		}
		walkTokens(embeddedTokens);

		return new Prism.Token(language, embeddedTokens, 'language-' + language, code);
	}

	/**
	 * The languages for which JS templating will handle tagged template literals.
	 *
	 * JS templating isn't active for only JavaScript but also related languages like TypeScript, JSX, and TSX.
	 */
	var supportedLanguages = {
		'javascript': true,
		'js': true,
		'typescript': true,
		'ts': true,
		'jsx': true,
		'tsx': true,
	};
	Prism.hooks.add('after-tokenize', function (env) {
		if (!(env.language in supportedLanguages)) {
			return;
		}

		/**
		 * Finds and tokenizes all template strings with an embedded languages.
		 *
		 * @param {(Token | string)[]} tokens
		 * @returns {void}
		 */
		function findTemplateStrings(tokens) {
			for (var i = 0, l = tokens.length; i < l; i++) {
				var token = tokens[i];

				if (typeof token === 'string') {
					continue;
				}

				var content = token.content;
				if (!Array.isArray(content)) {
					if (typeof content !== 'string') {
						findTemplateStrings([content]);
					}
					continue;
				}

				if (token.type === 'template-string') {
					/**
					 * A JavaScript template-string token will look like this:
					 *
					 * ["template-string", [
					 *     ["template-punctuation", "`"],
					 *     (
					 *         An array of "string" and "interpolation" tokens. This is the simple string case.
					 *         or
					 *         ["embedded-code", "..."] This is the token containing the embedded code.
					 *                                  It also has an alias which is the language of the embedded code.
					 *     ),
					 *     ["template-punctuation", "`"]
					 * ]]
					 */

					var embedded = content[1];
					if (content.length === 3 && typeof embedded !== 'string' && embedded.type === 'embedded-code') {
						// get string content
						var code = stringContent(embedded);

						var alias = embedded.alias;
						var language = Array.isArray(alias) ? alias[0] : alias;

						var grammar = Prism.languages[language];
						if (!grammar) {
							// the embedded language isn't registered.
							continue;
						}

						content[1] = tokenizeEmbedded(code, grammar, language);
					}
				} else {
					findTemplateStrings(content);
				}
			}
		}

		findTemplateStrings(env.tokens);
	});


	/**
	 * Returns the string content of a token or token stream.
	 *
	 * @param {string | Token | (string | Token)[]} value
	 * @returns {string}
	 */
	function stringContent(value) {
		if (typeof value === 'string') {
			return value;
		} else if (Array.isArray(value)) {
			return value.map(stringContent).join('');
		} else {
			return stringContent(value.content);
		}
	}

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzLXRlbXBsYXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLGNBQWMsYUFBYSxFQUFFO0FBQzdCO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLElBQUk7QUFDaEIsWUFBWSxPQUFPO0FBQ25CLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPLGlEQUFpRCxHQUFHO0FBQ3ZFLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBLDBDQUEwQztBQUMxQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQSwrRkFBK0Y7QUFDL0Y7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsaUJBQWlCO0FBQzlCLGVBQWU7QUFDZjtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDREQUE0RCxPQUFPOztBQUVuRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQkFBbUI7QUFDaEMsZUFBZTtBQUNmO0FBQ0E7QUFDQSxxQ0FBcUMsT0FBTztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTs7O0FBR0Y7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQ0FBb0M7QUFDaEQsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxDQUFDIiwiZmlsZSI6IjIwMy5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHR2YXIgdGVtcGxhdGVTdHJpbmcgPSBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFsndGVtcGxhdGUtc3RyaW5nJ107XG5cblx0Ly8gc2VlIHRoZSBwYXR0ZXJuIGluIHByaXNtLWphdmFzY3JpcHQuanNcblx0dmFyIHRlbXBsYXRlTGl0ZXJhbFBhdHRlcm4gPSB0ZW1wbGF0ZVN0cmluZy5wYXR0ZXJuLnNvdXJjZTtcblx0dmFyIGludGVycG9sYXRpb25PYmplY3QgPSB0ZW1wbGF0ZVN0cmluZy5pbnNpZGVbJ2ludGVycG9sYXRpb24nXTtcblx0dmFyIGludGVycG9sYXRpb25QdW5jdHVhdGlvbk9iamVjdCA9IGludGVycG9sYXRpb25PYmplY3QuaW5zaWRlWydpbnRlcnBvbGF0aW9uLXB1bmN0dWF0aW9uJ107XG5cdHZhciBpbnRlcnBvbGF0aW9uUGF0dGVybiA9IGludGVycG9sYXRpb25PYmplY3QucGF0dGVybi5zb3VyY2U7XG5cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIG5ldyBwYXR0ZXJuIHRvIG1hdGNoIGEgdGVtcGxhdGUgc3RyaW5nIHdpdGggYSBzcGVjaWFsIHRhZy5cblx0ICpcblx0ICogVGhpcyB3aWxsIHJldHVybiBgdW5kZWZpbmVkYCBpZiB0aGVyZSBpcyBubyBncmFtbWFyIHdpdGggdGhlIGdpdmVuIGxhbmd1YWdlIGlkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgVGhlIGxhbmd1YWdlIGlkIG9mIHRoZSBlbWJlZGRlZCBsYW5ndWFnZS4gRS5nLiBgbWFya2Rvd25gLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSByZWdleCBwYXR0ZXJuIHRvIG1hdGNoIHRoZSB0YWcuXG5cdCAqIEByZXR1cm5zIHtvYmplY3QgfCB1bmRlZmluZWR9XG5cdCAqIEBleGFtcGxlXG5cdCAqIGNyZWF0ZVRlbXBsYXRlKCdjc3MnLCAvXFxiY3NzLy5zb3VyY2UpO1xuXHQgKi9cblx0ZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUobGFuZ3VhZ2UsIHRhZykge1xuXHRcdGlmICghUHJpc20ubGFuZ3VhZ2VzW2xhbmd1YWdlXSkge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKCcoKD86JyArIHRhZyArICcpXFxcXHMqKScgKyB0ZW1wbGF0ZUxpdGVyYWxQYXR0ZXJuKSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3RlbXBsYXRlLXB1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9eYHxgJC8sXG5cdFx0XHRcdFx0YWxpYXM6ICdzdHJpbmcnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdlbWJlZGRlZC1jb2RlJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9bXFxzXFxTXSsvLFxuXHRcdFx0XHRcdGFsaWFzOiBsYW5ndWFnZVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cblx0UHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRbJ3RlbXBsYXRlLXN0cmluZyddID0gW1xuXHRcdC8vIHN0eWxlZC1qc3g6XG5cdFx0Ly8gICBjc3NgYSB7IGNvbG9yOiAjMjVGOyB9YFxuXHRcdC8vIHN0eWxlZC1jb21wb25lbnRzOlxuXHRcdC8vICAgc3R5bGVkLmgxYGNvbG9yOiByZWQ7YFxuXHRcdGNyZWF0ZVRlbXBsYXRlKCdjc3MnLCAvXFxiKD86c3R5bGVkKD86XFwoW14pXSpcXCkpPyg/OlxccypcXC5cXHMqXFx3Kyg/OlxcKFteKV0qXFwpKSopKnxjc3MoPzpcXHMqXFwuXFxzKig/Omdsb2JhbHxyZXNvbHZlKSk/fGNyZWF0ZUdsb2JhbFN0eWxlfGtleWZyYW1lcykvLnNvdXJjZSksXG5cblx0XHQvLyBodG1sYDxwPjwvcD5gXG5cdFx0Ly8gZGl2LmlubmVySFRNTCA9IGA8cD48L3A+YFxuXHRcdGNyZWF0ZVRlbXBsYXRlKCdodG1sJywgL1xcYmh0bWx8XFwuXFxzKig/OmlubmVyfG91dGVyKUhUTUxcXHMqXFwrPz0vLnNvdXJjZSksXG5cblx0XHQvLyBzdmdgPHBhdGggZmlsbD1cIiNmZmZcIiBkPVwiTTU1LjM3IC4uLlwiLz5gXG5cdFx0Y3JlYXRlVGVtcGxhdGUoJ3N2ZycsIC9cXGJzdmcvLnNvdXJjZSksXG5cblx0XHQvLyBtZGAjIGgxYCwgbWFya2Rvd25gIyMgaDJgXG5cdFx0Y3JlYXRlVGVtcGxhdGUoJ21hcmtkb3duJywgL1xcYig/Om1kfG1hcmtkb3duKS8uc291cmNlKSxcblxuXHRcdC8vIGdxbGAuLi5gLCBncmFwaHFsYC4uLmAsIGdyYXBocWwuZXhwZXJpbWVudGFsYC4uLmBcblx0XHRjcmVhdGVUZW1wbGF0ZSgnZ3JhcGhxbCcsIC9cXGIoPzpncWx8Z3JhcGhxbCg/OlxccypcXC5cXHMqZXhwZXJpbWVudGFsKT8pLy5zb3VyY2UpLFxuXG5cdFx0Ly8gdmFuaWxsYSB0ZW1wbGF0ZSBzdHJpbmdcblx0XHR0ZW1wbGF0ZVN0cmluZ1xuXHRdLmZpbHRlcihCb29sZWFuKTtcblxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGEgc3BlY2lmaWMgcGxhY2Vob2xkZXIgbGl0ZXJhbCBmb3IgdGhlIGdpdmVuIGxhbmd1YWdlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcn0gY291bnRlclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2Vcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGZ1bmN0aW9uIGdldFBsYWNlaG9sZGVyKGNvdW50ZXIsIGxhbmd1YWdlKSB7XG5cdFx0cmV0dXJuICdfX18nICsgbGFuZ3VhZ2UudG9VcHBlckNhc2UoKSArICdfJyArIGNvdW50ZXIgKyAnX19fJztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSB0b2tlbnMgb2YgYFByaXNtLnRva2VuaXplYCBidXQgYWxzbyBydW5zIHRoZSBgYmVmb3JlLXRva2VuaXplYCBhbmQgYGFmdGVyLXRva2VuaXplYCBob29rcy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvZGVcblx0ICogQHBhcmFtIHthbnl9IGdyYW1tYXJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlXG5cdCAqIEByZXR1cm5zIHsoc3RyaW5nfFRva2VuKVtdfVxuXHQgKi9cblx0ZnVuY3Rpb24gdG9rZW5pemVXaXRoSG9va3MoY29kZSwgZ3JhbW1hciwgbGFuZ3VhZ2UpIHtcblx0XHR2YXIgZW52ID0ge1xuXHRcdFx0Y29kZTogY29kZSxcblx0XHRcdGdyYW1tYXI6IGdyYW1tYXIsXG5cdFx0XHRsYW5ndWFnZTogbGFuZ3VhZ2Vcblx0XHR9O1xuXHRcdFByaXNtLmhvb2tzLnJ1bignYmVmb3JlLXRva2VuaXplJywgZW52KTtcblx0XHRlbnYudG9rZW5zID0gUHJpc20udG9rZW5pemUoZW52LmNvZGUsIGVudi5ncmFtbWFyKTtcblx0XHRQcmlzbS5ob29rcy5ydW4oJ2FmdGVyLXRva2VuaXplJywgZW52KTtcblx0XHRyZXR1cm4gZW52LnRva2Vucztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSB0b2tlbiBvZiB0aGUgZ2l2ZW4gSmF2YVNjcmlwdCBpbnRlcnBvbGF0aW9uIGV4cHJlc3Npb24uXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uIFRoZSBjb2RlIG9mIHRoZSBleHByZXNzaW9uLiBFLmcuIGBcIiR7NDJ9XCJgXG5cdCAqIEByZXR1cm5zIHtUb2tlbn1cblx0ICovXG5cdGZ1bmN0aW9uIHRva2VuaXplSW50ZXJwb2xhdGlvbkV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuXHRcdHZhciB0ZW1wR3JhbW1hciA9IHt9O1xuXHRcdHRlbXBHcmFtbWFyWydpbnRlcnBvbGF0aW9uLXB1bmN0dWF0aW9uJ10gPSBpbnRlcnBvbGF0aW9uUHVuY3R1YXRpb25PYmplY3Q7XG5cblx0XHQvKiogQHR5cGUge0FycmF5fSAqL1xuXHRcdHZhciB0b2tlbnMgPSBQcmlzbS50b2tlbml6ZShleHByZXNzaW9uLCB0ZW1wR3JhbW1hcik7XG5cdFx0aWYgKHRva2Vucy5sZW5ndGggPT09IDMpIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogVGhlIHRva2VuIGFycmF5IHdpbGwgbG9vayBsaWtlIHRoaXNcblx0XHRcdCAqIFtcblx0XHRcdCAqICAgICBbXCJpbnRlcnBvbGF0aW9uLXB1bmN0dWF0aW9uXCIsIFwiJHtcIl1cblx0XHRcdCAqICAgICBcIi4uLlwiIC8vIEphdmFTY3JpcHQgZXhwcmVzc2lvbiBvZiB0aGUgaW50ZXJwb2xhdGlvblxuXHRcdFx0ICogICAgIFtcImludGVycG9sYXRpb24tcHVuY3R1YXRpb25cIiwgXCJ9XCJdXG5cdFx0XHQgKiBdXG5cdFx0XHQgKi9cblxuXHRcdFx0dmFyIGFyZ3MgPSBbMSwgMV07XG5cdFx0XHRhcmdzLnB1c2guYXBwbHkoYXJncywgdG9rZW5pemVXaXRoSG9va3ModG9rZW5zWzFdLCBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCwgJ2phdmFzY3JpcHQnKSk7XG5cblx0XHRcdHRva2Vucy5zcGxpY2UuYXBwbHkodG9rZW5zLCBhcmdzKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbmV3IFByaXNtLlRva2VuKCdpbnRlcnBvbGF0aW9uJywgdG9rZW5zLCBpbnRlcnBvbGF0aW9uT2JqZWN0LmFsaWFzLCBleHByZXNzaW9uKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUb2tlbml6ZXMgdGhlIGdpdmVuIGNvZGUgd2l0aCBzdXBwb3J0IGZvciBKYXZhU2NyaXB0IGludGVycG9sYXRpb24gZXhwcmVzc2lvbnMgbWl4ZWQgaW4uXG5cdCAqXG5cdCAqIFRoaXMgZnVuY3Rpb24gaGFzIDMgcGhhc2VzOlxuXHQgKlxuXHQgKiAxLiBSZXBsYWNlIGFsbCBKYXZhU2NyaXB0IGludGVycG9sYXRpb24gZXhwcmVzc2lvbiB3aXRoIGEgcGxhY2Vob2xkZXIuXG5cdCAqICAgIFRoZSBwbGFjZWhvbGRlciB3aWxsIGhhdmUgdGhlIHN5bnRheCBvZiBhIGlkZW50aWZ5IG9mIHRoZSB0YXJnZXQgbGFuZ3VhZ2UuXG5cdCAqIDIuIFRva2VuaXplIHRoZSBjb2RlIHdpdGggcGxhY2Vob2xkZXJzLlxuXHQgKiAzLiBUb2tlbml6ZSB0aGUgaW50ZXJwb2xhdGlvbiBleHByZXNzaW9ucyBhbmQgcmUtaW5zZXJ0IHRoZW0gaW50byB0aGUgdG9rZW5pemUgY29kZS5cblx0ICogICAgVGhlIGluc2VydGlvbiBvbmx5IHdvcmtzIGlmIGEgcGxhY2Vob2xkZXIgaGFzbid0IGJlZW4gXCJyaXBwZWQgYXBhcnRcIiBtZWFuaW5nIHRoYXQgdGhlIHBsYWNlaG9sZGVyIGhhcyBiZWVuXG5cdCAqICAgIHRva2VuaXplZCBhcyB0d28gdG9rZW5zIGJ5IHRoZSBncmFtbWFyIG9mIHRoZSBlbWJlZGRlZCBsYW5ndWFnZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvZGVcblx0ICogQHBhcmFtIHtvYmplY3R9IGdyYW1tYXJcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlXG5cdCAqIEByZXR1cm5zIHtUb2tlbn1cblx0ICovXG5cdGZ1bmN0aW9uIHRva2VuaXplRW1iZWRkZWQoY29kZSwgZ3JhbW1hciwgbGFuZ3VhZ2UpIHtcblx0XHQvLyAxLiBGaXJzdCBmaWx0ZXIgb3V0IGFsbCBpbnRlcnBvbGF0aW9uc1xuXG5cdFx0Ly8gYmVjYXVzZSB0aGV5IG1pZ2h0IGJlIGVzY2FwZWQsIHdlIG5lZWQgYSBsb29rYmVoaW5kLCBzbyB3ZSB1c2UgUHJpc21cblx0XHQvKiogQHR5cGUgeyhUb2tlbnxzdHJpbmcpW119ICovXG5cdFx0dmFyIF90b2tlbnMgPSBQcmlzbS50b2tlbml6ZShjb2RlLCB7XG5cdFx0XHQnaW50ZXJwb2xhdGlvbic6IHtcblx0XHRcdFx0cGF0dGVybjogUmVnRXhwKGludGVycG9sYXRpb25QYXR0ZXJuKSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gcmVwbGFjZSBhbGwgaW50ZXJwb2xhdGlvbnMgd2l0aCBhIHBsYWNlaG9sZGVyIHdoaWNoIGlzIG5vdCBpbiB0aGUgY29kZSBhbHJlYWR5XG5cdFx0dmFyIHBsYWNlaG9sZGVyQ291bnRlciA9IDA7XG5cdFx0LyoqIEB0eXBlIHtPYmplY3Q8c3RyaW5nLCBzdHJpbmc+fSAqL1xuXHRcdHZhciBwbGFjZWhvbGRlck1hcCA9IHt9O1xuXHRcdHZhciBlbWJlZGRlZENvZGUgPSBfdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcblx0XHRcdGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdHJldHVybiB0b2tlbjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBpbnRlcnBvbGF0aW9uRXhwcmVzc2lvbiA9IHRva2VuLmNvbnRlbnQ7XG5cblx0XHRcdFx0dmFyIHBsYWNlaG9sZGVyO1xuXHRcdFx0XHR3aGlsZSAoY29kZS5pbmRleE9mKHBsYWNlaG9sZGVyID0gZ2V0UGxhY2Vob2xkZXIocGxhY2Vob2xkZXJDb3VudGVyKyssIGxhbmd1YWdlKSkgIT09IC0xKSB7IH1cblx0XHRcdFx0cGxhY2Vob2xkZXJNYXBbcGxhY2Vob2xkZXJdID0gaW50ZXJwb2xhdGlvbkV4cHJlc3Npb247XG5cdFx0XHRcdHJldHVybiBwbGFjZWhvbGRlcjtcblx0XHRcdH1cblx0XHR9KS5qb2luKCcnKTtcblxuXG5cdFx0Ly8gMi4gVG9rZW5pemUgdGhlIGVtYmVkZGVkIGNvZGVcblxuXHRcdHZhciBlbWJlZGRlZFRva2VucyA9IHRva2VuaXplV2l0aEhvb2tzKGVtYmVkZGVkQ29kZSwgZ3JhbW1hciwgbGFuZ3VhZ2UpO1xuXG5cblx0XHQvLyAzLiBSZS1pbnNlcnQgdGhlIGludGVycG9sYXRpb25cblxuXHRcdHZhciBwbGFjZWhvbGRlcnMgPSBPYmplY3Qua2V5cyhwbGFjZWhvbGRlck1hcCk7XG5cdFx0cGxhY2Vob2xkZXJDb3VudGVyID0gMDtcblxuXHRcdC8qKlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsoVG9rZW58c3RyaW5nKVtdfSB0b2tlbnNcblx0XHQgKiBAcmV0dXJucyB7dm9pZH1cblx0XHQgKi9cblx0XHRmdW5jdGlvbiB3YWxrVG9rZW5zKHRva2Vucykge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHBsYWNlaG9sZGVyQ291bnRlciA+PSBwbGFjZWhvbGRlcnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHRva2VuID0gdG9rZW5zW2ldO1xuXG5cdFx0XHRcdGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0b2tlbi5jb250ZW50ID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdHZhciBwbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyc1twbGFjZWhvbGRlckNvdW50ZXJdO1xuXHRcdFx0XHRcdHZhciBzID0gdHlwZW9mIHRva2VuID09PSAnc3RyaW5nJyA/IHRva2VuIDogLyoqIEB0eXBlIHtzdHJpbmd9ICovICh0b2tlbi5jb250ZW50KTtcblxuXHRcdFx0XHRcdHZhciBpbmRleCA9IHMuaW5kZXhPZihwbGFjZWhvbGRlcik7XG5cdFx0XHRcdFx0aWYgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0XHRcdFx0KytwbGFjZWhvbGRlckNvdW50ZXI7XG5cblx0XHRcdFx0XHRcdHZhciBiZWZvcmUgPSBzLnN1YnN0cmluZygwLCBpbmRleCk7XG5cdFx0XHRcdFx0XHR2YXIgbWlkZGxlID0gdG9rZW5pemVJbnRlcnBvbGF0aW9uRXhwcmVzc2lvbihwbGFjZWhvbGRlck1hcFtwbGFjZWhvbGRlcl0pO1xuXHRcdFx0XHRcdFx0dmFyIGFmdGVyID0gcy5zdWJzdHJpbmcoaW5kZXggKyBwbGFjZWhvbGRlci5sZW5ndGgpO1xuXG5cdFx0XHRcdFx0XHR2YXIgcmVwbGFjZW1lbnQgPSBbXTtcblx0XHRcdFx0XHRcdGlmIChiZWZvcmUpIHtcblx0XHRcdFx0XHRcdFx0cmVwbGFjZW1lbnQucHVzaChiZWZvcmUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmVwbGFjZW1lbnQucHVzaChtaWRkbGUpO1xuXHRcdFx0XHRcdFx0aWYgKGFmdGVyKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBhZnRlclRva2VucyA9IFthZnRlcl07XG5cdFx0XHRcdFx0XHRcdHdhbGtUb2tlbnMoYWZ0ZXJUb2tlbnMpO1xuXHRcdFx0XHRcdFx0XHRyZXBsYWNlbWVudC5wdXNoLmFwcGx5KHJlcGxhY2VtZW50LCBhZnRlclRva2Vucyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHRcdHRva2Vucy5zcGxpY2UuYXBwbHkodG9rZW5zLCBbaSwgMV0uY29uY2F0KHJlcGxhY2VtZW50KSk7XG5cdFx0XHRcdFx0XHRcdGkgKz0gcmVwbGFjZW1lbnQubGVuZ3RoIC0gMTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRva2VuLmNvbnRlbnQgPSByZXBsYWNlbWVudDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIGNvbnRlbnQgPSB0b2tlbi5jb250ZW50O1xuXHRcdFx0XHRcdGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XG5cdFx0XHRcdFx0XHR3YWxrVG9rZW5zKGNvbnRlbnQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR3YWxrVG9rZW5zKFtjb250ZW50XSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHdhbGtUb2tlbnMoZW1iZWRkZWRUb2tlbnMpO1xuXG5cdFx0cmV0dXJuIG5ldyBQcmlzbS5Ub2tlbihsYW5ndWFnZSwgZW1iZWRkZWRUb2tlbnMsICdsYW5ndWFnZS0nICsgbGFuZ3VhZ2UsIGNvZGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBsYW5ndWFnZXMgZm9yIHdoaWNoIEpTIHRlbXBsYXRpbmcgd2lsbCBoYW5kbGUgdGFnZ2VkIHRlbXBsYXRlIGxpdGVyYWxzLlxuXHQgKlxuXHQgKiBKUyB0ZW1wbGF0aW5nIGlzbid0IGFjdGl2ZSBmb3Igb25seSBKYXZhU2NyaXB0IGJ1dCBhbHNvIHJlbGF0ZWQgbGFuZ3VhZ2VzIGxpa2UgVHlwZVNjcmlwdCwgSlNYLCBhbmQgVFNYLlxuXHQgKi9cblx0dmFyIHN1cHBvcnRlZExhbmd1YWdlcyA9IHtcblx0XHQnamF2YXNjcmlwdCc6IHRydWUsXG5cdFx0J2pzJzogdHJ1ZSxcblx0XHQndHlwZXNjcmlwdCc6IHRydWUsXG5cdFx0J3RzJzogdHJ1ZSxcblx0XHQnanN4JzogdHJ1ZSxcblx0XHQndHN4JzogdHJ1ZSxcblx0fTtcblx0UHJpc20uaG9va3MuYWRkKCdhZnRlci10b2tlbml6ZScsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHRpZiAoIShlbnYubGFuZ3VhZ2UgaW4gc3VwcG9ydGVkTGFuZ3VhZ2VzKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEZpbmRzIGFuZCB0b2tlbml6ZXMgYWxsIHRlbXBsYXRlIHN0cmluZ3Mgd2l0aCBhbiBlbWJlZGRlZCBsYW5ndWFnZXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyhUb2tlbiB8IHN0cmluZylbXX0gdG9rZW5zXG5cdFx0ICogQHJldHVybnMge3ZvaWR9XG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gZmluZFRlbXBsYXRlU3RyaW5ncyh0b2tlbnMpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwLCBsID0gdG9rZW5zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuXHRcdFx0XHR2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG5cblx0XHRcdFx0aWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBjb250ZW50ID0gdG9rZW4uY29udGVudDtcblx0XHRcdFx0aWYgKCFBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBjb250ZW50ICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0ZmluZFRlbXBsYXRlU3RyaW5ncyhbY29udGVudF0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0b2tlbi50eXBlID09PSAndGVtcGxhdGUtc3RyaW5nJykge1xuXHRcdFx0XHRcdC8qKlxuXHRcdFx0XHRcdCAqIEEgSmF2YVNjcmlwdCB0ZW1wbGF0ZS1zdHJpbmcgdG9rZW4gd2lsbCBsb29rIGxpa2UgdGhpczpcblx0XHRcdFx0XHQgKlxuXHRcdFx0XHRcdCAqIFtcInRlbXBsYXRlLXN0cmluZ1wiLCBbXG5cdFx0XHRcdFx0ICogICAgIFtcInRlbXBsYXRlLXB1bmN0dWF0aW9uXCIsIFwiYFwiXSxcblx0XHRcdFx0XHQgKiAgICAgKFxuXHRcdFx0XHRcdCAqICAgICAgICAgQW4gYXJyYXkgb2YgXCJzdHJpbmdcIiBhbmQgXCJpbnRlcnBvbGF0aW9uXCIgdG9rZW5zLiBUaGlzIGlzIHRoZSBzaW1wbGUgc3RyaW5nIGNhc2UuXG5cdFx0XHRcdFx0ICogICAgICAgICBvclxuXHRcdFx0XHRcdCAqICAgICAgICAgW1wiZW1iZWRkZWQtY29kZVwiLCBcIi4uLlwiXSBUaGlzIGlzIHRoZSB0b2tlbiBjb250YWluaW5nIHRoZSBlbWJlZGRlZCBjb2RlLlxuXHRcdFx0XHRcdCAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0IGFsc28gaGFzIGFuIGFsaWFzIHdoaWNoIGlzIHRoZSBsYW5ndWFnZSBvZiB0aGUgZW1iZWRkZWQgY29kZS5cblx0XHRcdFx0XHQgKiAgICAgKSxcblx0XHRcdFx0XHQgKiAgICAgW1widGVtcGxhdGUtcHVuY3R1YXRpb25cIiwgXCJgXCJdXG5cdFx0XHRcdFx0ICogXV1cblx0XHRcdFx0XHQgKi9cblxuXHRcdFx0XHRcdHZhciBlbWJlZGRlZCA9IGNvbnRlbnRbMV07XG5cdFx0XHRcdFx0aWYgKGNvbnRlbnQubGVuZ3RoID09PSAzICYmIHR5cGVvZiBlbWJlZGRlZCAhPT0gJ3N0cmluZycgJiYgZW1iZWRkZWQudHlwZSA9PT0gJ2VtYmVkZGVkLWNvZGUnKSB7XG5cdFx0XHRcdFx0XHQvLyBnZXQgc3RyaW5nIGNvbnRlbnRcblx0XHRcdFx0XHRcdHZhciBjb2RlID0gc3RyaW5nQ29udGVudChlbWJlZGRlZCk7XG5cblx0XHRcdFx0XHRcdHZhciBhbGlhcyA9IGVtYmVkZGVkLmFsaWFzO1xuXHRcdFx0XHRcdFx0dmFyIGxhbmd1YWdlID0gQXJyYXkuaXNBcnJheShhbGlhcykgPyBhbGlhc1swXSA6IGFsaWFzO1xuXG5cdFx0XHRcdFx0XHR2YXIgZ3JhbW1hciA9IFByaXNtLmxhbmd1YWdlc1tsYW5ndWFnZV07XG5cdFx0XHRcdFx0XHRpZiAoIWdyYW1tYXIpIHtcblx0XHRcdFx0XHRcdFx0Ly8gdGhlIGVtYmVkZGVkIGxhbmd1YWdlIGlzbid0IHJlZ2lzdGVyZWQuXG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRjb250ZW50WzFdID0gdG9rZW5pemVFbWJlZGRlZChjb2RlLCBncmFtbWFyLCBsYW5ndWFnZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZpbmRUZW1wbGF0ZVN0cmluZ3MoY29udGVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRmaW5kVGVtcGxhdGVTdHJpbmdzKGVudi50b2tlbnMpO1xuXHR9KTtcblxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBzdHJpbmcgY29udGVudCBvZiBhIHRva2VuIG9yIHRva2VuIHN0cmVhbS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmcgfCBUb2tlbiB8IChzdHJpbmcgfCBUb2tlbilbXX0gdmFsdWVcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGZ1bmN0aW9uIHN0cmluZ0NvbnRlbnQodmFsdWUpIHtcblx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcblx0XHRcdHJldHVybiB2YWx1ZS5tYXAoc3RyaW5nQ29udGVudCkuam9pbignJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBzdHJpbmdDb250ZW50KHZhbHVlLmNvbnRlbnQpO1xuXHRcdH1cblx0fVxuXG59KFByaXNtKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9