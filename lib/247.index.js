(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[247],{

/***/ "./node_modules/prismjs/components/prism-markup-templating.js":
/*!********************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-markup-templating.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	/**
	 * Returns the placeholder for the given language id and index.
	 *
	 * @param {string} language
	 * @param {string|number} index
	 * @returns {string}
	 */
	function getPlaceholder(language, index) {
		return '___' + language.toUpperCase() + index + '___';
	}

	Object.defineProperties(Prism.languages['markup-templating'] = {}, {
		buildPlaceholders: {
			/**
			 * Tokenize all inline templating expressions matching `placeholderPattern`.
			 *
			 * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
			 * `true` will be replaced.
			 *
			 * @param {object} env The environment of the `before-tokenize` hook.
			 * @param {string} language The language id.
			 * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
			 * @param {(match: string) => boolean} [replaceFilter]
			 */
			value: function (env, language, placeholderPattern, replaceFilter) {
				if (env.language !== language) {
					return;
				}

				var tokenStack = env.tokenStack = [];

				env.code = env.code.replace(placeholderPattern, function (match) {
					if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
						return match;
					}
					var i = tokenStack.length;
					var placeholder;

					// Check for existing strings
					while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1)
						++i;

					// Create a sparse array
					tokenStack[i] = match;

					return placeholder;
				});

				// Switch the grammar to markup
				env.grammar = Prism.languages.markup;
			}
		},
		tokenizePlaceholders: {
			/**
			 * Replace placeholders with proper tokens after tokenizing.
			 *
			 * @param {object} env The environment of the `after-tokenize` hook.
			 * @param {string} language The language id.
			 */
			value: function (env, language) {
				if (env.language !== language || !env.tokenStack) {
					return;
				}

				// Switch the grammar back
				env.grammar = Prism.languages[language];

				var j = 0;
				var keys = Object.keys(env.tokenStack);

				function walkTokens(tokens) {
					for (var i = 0; i < tokens.length; i++) {
						// all placeholders are replaced already
						if (j >= keys.length) {
							break;
						}

						var token = tokens[i];
						if (typeof token === 'string' || (token.content && typeof token.content === 'string')) {
							var k = keys[j];
							var t = env.tokenStack[k];
							var s = typeof token === 'string' ? token : token.content;
							var placeholder = getPlaceholder(language, k);

							var index = s.indexOf(placeholder);
							if (index > -1) {
								++j;

								var before = s.substring(0, index);
								var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
								var after = s.substring(index + placeholder.length);

								var replacement = [];
								if (before) {
									replacement.push.apply(replacement, walkTokens([before]));
								}
								replacement.push(middle);
								if (after) {
									replacement.push.apply(replacement, walkTokens([after]));
								}

								if (typeof token === 'string') {
									tokens.splice.apply(tokens, [i, 1].concat(replacement));
								} else {
									token.content = replacement;
								}
							}
						} else if (token.content /* && typeof token.content !== 'string' */) {
							walkTokens(token.content);
						}
					}

					return tokens;
				}

				walkTokens(env.tokens);
			}
		}
	});

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW1hcmt1cC10ZW1wbGF0aW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLGNBQWM7QUFDMUIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsMkJBQTJCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUYsQ0FBQyIsImZpbGUiOiIyNDcuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKFByaXNtKSB7XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHBsYWNlaG9sZGVyIGZvciB0aGUgZ2l2ZW4gbGFuZ3VhZ2UgaWQgYW5kIGluZGV4LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2Vcblx0ICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBpbmRleFxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0UGxhY2Vob2xkZXIobGFuZ3VhZ2UsIGluZGV4KSB7XG5cdFx0cmV0dXJuICdfX18nICsgbGFuZ3VhZ2UudG9VcHBlckNhc2UoKSArIGluZGV4ICsgJ19fXyc7XG5cdH1cblxuXHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyhQcmlzbS5sYW5ndWFnZXNbJ21hcmt1cC10ZW1wbGF0aW5nJ10gPSB7fSwge1xuXHRcdGJ1aWxkUGxhY2Vob2xkZXJzOiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIFRva2VuaXplIGFsbCBpbmxpbmUgdGVtcGxhdGluZyBleHByZXNzaW9ucyBtYXRjaGluZyBgcGxhY2Vob2xkZXJQYXR0ZXJuYC5cblx0XHRcdCAqXG5cdFx0XHQgKiBJZiBgcmVwbGFjZUZpbHRlcmAgaXMgcHJvdmlkZWQsIG9ubHkgbWF0Y2hlcyBvZiBgcGxhY2Vob2xkZXJQYXR0ZXJuYCBmb3Igd2hpY2ggYHJlcGxhY2VGaWx0ZXJgIHJldHVybnNcblx0XHRcdCAqIGB0cnVlYCB3aWxsIGJlIHJlcGxhY2VkLlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBlbnYgVGhlIGVudmlyb25tZW50IG9mIHRoZSBgYmVmb3JlLXRva2VuaXplYCBob29rLlxuXHRcdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlIFRoZSBsYW5ndWFnZSBpZC5cblx0XHRcdCAqIEBwYXJhbSB7UmVnRXhwfSBwbGFjZWhvbGRlclBhdHRlcm4gVGhlIG1hdGNoZXMgb2YgdGhpcyBwYXR0ZXJuIHdpbGwgYmUgcmVwbGFjZWQgYnkgcGxhY2Vob2xkZXJzLlxuXHRcdFx0ICogQHBhcmFtIHsobWF0Y2g6IHN0cmluZykgPT4gYm9vbGVhbn0gW3JlcGxhY2VGaWx0ZXJdXG5cdFx0XHQgKi9cblx0XHRcdHZhbHVlOiBmdW5jdGlvbiAoZW52LCBsYW5ndWFnZSwgcGxhY2Vob2xkZXJQYXR0ZXJuLCByZXBsYWNlRmlsdGVyKSB7XG5cdFx0XHRcdGlmIChlbnYubGFuZ3VhZ2UgIT09IGxhbmd1YWdlKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dmFyIHRva2VuU3RhY2sgPSBlbnYudG9rZW5TdGFjayA9IFtdO1xuXG5cdFx0XHRcdGVudi5jb2RlID0gZW52LmNvZGUucmVwbGFjZShwbGFjZWhvbGRlclBhdHRlcm4sIGZ1bmN0aW9uIChtYXRjaCkge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgcmVwbGFjZUZpbHRlciA9PT0gJ2Z1bmN0aW9uJyAmJiAhcmVwbGFjZUZpbHRlcihtYXRjaCkpIHtcblx0XHRcdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dmFyIGkgPSB0b2tlblN0YWNrLmxlbmd0aDtcblx0XHRcdFx0XHR2YXIgcGxhY2Vob2xkZXI7XG5cblx0XHRcdFx0XHQvLyBDaGVjayBmb3IgZXhpc3Rpbmcgc3RyaW5nc1xuXHRcdFx0XHRcdHdoaWxlIChlbnYuY29kZS5pbmRleE9mKHBsYWNlaG9sZGVyID0gZ2V0UGxhY2Vob2xkZXIobGFuZ3VhZ2UsIGkpKSAhPT0gLTEpXG5cdFx0XHRcdFx0XHQrK2k7XG5cblx0XHRcdFx0XHQvLyBDcmVhdGUgYSBzcGFyc2UgYXJyYXlcblx0XHRcdFx0XHR0b2tlblN0YWNrW2ldID0gbWF0Y2g7XG5cblx0XHRcdFx0XHRyZXR1cm4gcGxhY2Vob2xkZXI7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIFN3aXRjaCB0aGUgZ3JhbW1hciB0byBtYXJrdXBcblx0XHRcdFx0ZW52LmdyYW1tYXIgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0dG9rZW5pemVQbGFjZWhvbGRlcnM6IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogUmVwbGFjZSBwbGFjZWhvbGRlcnMgd2l0aCBwcm9wZXIgdG9rZW5zIGFmdGVyIHRva2VuaXppbmcuXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHtvYmplY3R9IGVudiBUaGUgZW52aXJvbm1lbnQgb2YgdGhlIGBhZnRlci10b2tlbml6ZWAgaG9vay5cblx0XHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZSBUaGUgbGFuZ3VhZ2UgaWQuXG5cdFx0XHQgKi9cblx0XHRcdHZhbHVlOiBmdW5jdGlvbiAoZW52LCBsYW5ndWFnZSkge1xuXHRcdFx0XHRpZiAoZW52Lmxhbmd1YWdlICE9PSBsYW5ndWFnZSB8fCAhZW52LnRva2VuU3RhY2spIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTd2l0Y2ggdGhlIGdyYW1tYXIgYmFja1xuXHRcdFx0XHRlbnYuZ3JhbW1hciA9IFByaXNtLmxhbmd1YWdlc1tsYW5ndWFnZV07XG5cblx0XHRcdFx0dmFyIGogPSAwO1xuXHRcdFx0XHR2YXIga2V5cyA9IE9iamVjdC5rZXlzKGVudi50b2tlblN0YWNrKTtcblxuXHRcdFx0XHRmdW5jdGlvbiB3YWxrVG9rZW5zKHRva2Vucykge1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHQvLyBhbGwgcGxhY2Vob2xkZXJzIGFyZSByZXBsYWNlZCBhbHJlYWR5XG5cdFx0XHRcdFx0XHRpZiAoaiA+PSBrZXlzLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0dmFyIHRva2VuID0gdG9rZW5zW2ldO1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycgfHwgKHRva2VuLmNvbnRlbnQgJiYgdHlwZW9mIHRva2VuLmNvbnRlbnQgPT09ICdzdHJpbmcnKSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgayA9IGtleXNbal07XG5cdFx0XHRcdFx0XHRcdHZhciB0ID0gZW52LnRva2VuU3RhY2tba107XG5cdFx0XHRcdFx0XHRcdHZhciBzID0gdHlwZW9mIHRva2VuID09PSAnc3RyaW5nJyA/IHRva2VuIDogdG9rZW4uY29udGVudDtcblx0XHRcdFx0XHRcdFx0dmFyIHBsYWNlaG9sZGVyID0gZ2V0UGxhY2Vob2xkZXIobGFuZ3VhZ2UsIGspO1xuXG5cdFx0XHRcdFx0XHRcdHZhciBpbmRleCA9IHMuaW5kZXhPZihwbGFjZWhvbGRlcik7XG5cdFx0XHRcdFx0XHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdFx0KytqO1xuXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGJlZm9yZSA9IHMuc3Vic3RyaW5nKDAsIGluZGV4KTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgbWlkZGxlID0gbmV3IFByaXNtLlRva2VuKGxhbmd1YWdlLCBQcmlzbS50b2tlbml6ZSh0LCBlbnYuZ3JhbW1hciksICdsYW5ndWFnZS0nICsgbGFuZ3VhZ2UsIHQpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciBhZnRlciA9IHMuc3Vic3RyaW5nKGluZGV4ICsgcGxhY2Vob2xkZXIubGVuZ3RoKTtcblxuXHRcdFx0XHRcdFx0XHRcdHZhciByZXBsYWNlbWVudCA9IFtdO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChiZWZvcmUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJlcGxhY2VtZW50LnB1c2guYXBwbHkocmVwbGFjZW1lbnQsIHdhbGtUb2tlbnMoW2JlZm9yZV0pKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0cmVwbGFjZW1lbnQucHVzaChtaWRkbGUpO1xuXHRcdFx0XHRcdFx0XHRcdGlmIChhZnRlcikge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVwbGFjZW1lbnQucHVzaC5hcHBseShyZXBsYWNlbWVudCwgd2Fsa1Rva2VucyhbYWZ0ZXJdKSk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRva2Vucy5zcGxpY2UuYXBwbHkodG9rZW5zLCBbaSwgMV0uY29uY2F0KHJlcGxhY2VtZW50KSk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRva2VuLmNvbnRlbnQgPSByZXBsYWNlbWVudDtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodG9rZW4uY29udGVudCAvKiAmJiB0eXBlb2YgdG9rZW4uY29udGVudCAhPT0gJ3N0cmluZycgKi8pIHtcblx0XHRcdFx0XHRcdFx0d2Fsa1Rva2Vucyh0b2tlbi5jb250ZW50KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gdG9rZW5zO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2Fsa1Rva2VucyhlbnYudG9rZW5zKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG59KFByaXNtKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9