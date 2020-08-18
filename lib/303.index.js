(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[303],{

/***/ "./node_modules/prismjs/components/prism-php.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-php.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Original by Aaron Harun: http://aahacreative.com/2012/07/31/php-syntax-highlighting-prism/
 * Modified by Miles Johnson: http://milesj.me
 *
 * Supports the following:
 * 		- Extends clike syntax
 * 		- Support for PHP 5.3+ (namespaces, traits, generators, etc)
 * 		- Smarter constant and function matching
 *
 * Adds the following new token classes:
 * 		constant, delimiter, variable, function, package
 */
(function (Prism) {
	Prism.languages.php = Prism.languages.extend('clike', {
		'keyword': /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
		'boolean': {
			pattern: /\b(?:false|true)\b/i,
			alias: 'constant'
		},
		'constant': [
			/\b[A-Z_][A-Z0-9_]*\b/,
			/\b(?:null)\b/i,
		],
		'comment': {
			pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
			lookbehind: true
		}
	});

	Prism.languages.insertBefore('php', 'string', {
		'shell-comment': {
			pattern: /(^|[^\\])#.*/,
			lookbehind: true,
			alias: 'comment'
		}
	});

	Prism.languages.insertBefore('php', 'comment', {
		'delimiter': {
			pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
			alias: 'important'
		}
	});

	Prism.languages.insertBefore('php', 'keyword', {
		'variable': /\$+(?:\w+\b|(?={))/i,
		'package': {
			pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
			lookbehind: true,
			inside: {
				punctuation: /\\/
			}
		}
	});

	// Must be defined after the function pattern
	Prism.languages.insertBefore('php', 'operator', {
		'property': {
			pattern: /(->)[\w]+/,
			lookbehind: true
		}
	});

	var string_interpolation = {
		pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)*)/,
		lookbehind: true,
		inside: Prism.languages.php
	};

	Prism.languages.insertBefore('php', 'string', {
		'nowdoc-string': {
			pattern: /<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,
			greedy: true,
			alias: 'string',
			inside: {
				'delimiter': {
					pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
					alias: 'symbol',
					inside: {
						'punctuation': /^<<<'?|[';]$/
					}
				}
			}
		},
		'heredoc-string': {
			pattern: /<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,
			greedy: true,
			alias: 'string',
			inside: {
				'delimiter': {
					pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
					alias: 'symbol',
					inside: {
						'punctuation': /^<<<"?|[";]$/
					}
				},
				'interpolation': string_interpolation // See below
			}
		},
		'single-quoted-string': {
			pattern: /'(?:\\[\s\S]|[^\\'])*'/,
			greedy: true,
			alias: 'string'
		},
		'double-quoted-string': {
			pattern: /"(?:\\[\s\S]|[^\\"])*"/,
			greedy: true,
			alias: 'string',
			inside: {
				'interpolation': string_interpolation // See below
			}
		}
	});
	// The different types of PHP strings "replace" the C-like standard string
	delete Prism.languages.php['string'];

	Prism.hooks.add('before-tokenize', function(env) {
		if (!/<\?/.test(env.code)) {
			return;
		}

		var phpPattern = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/ig;
		Prism.languages['markup-templating'].buildPlaceholders(env, 'php', phpPattern);
	});

	Prism.hooks.add('after-tokenize', function(env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'php');
	});

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXBocC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLGFBQWEsTUFBTSxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksS0FBSyxJQUFJLFNBQVM7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxtREFBbUQsbUNBQW1DO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUYsQ0FBQyIsImZpbGUiOiIzMDMuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE9yaWdpbmFsIGJ5IEFhcm9uIEhhcnVuOiBodHRwOi8vYWFoYWNyZWF0aXZlLmNvbS8yMDEyLzA3LzMxL3BocC1zeW50YXgtaGlnaGxpZ2h0aW5nLXByaXNtL1xuICogTW9kaWZpZWQgYnkgTWlsZXMgSm9obnNvbjogaHR0cDovL21pbGVzai5tZVxuICpcbiAqIFN1cHBvcnRzIHRoZSBmb2xsb3dpbmc6XG4gKiBcdFx0LSBFeHRlbmRzIGNsaWtlIHN5bnRheFxuICogXHRcdC0gU3VwcG9ydCBmb3IgUEhQIDUuMysgKG5hbWVzcGFjZXMsIHRyYWl0cywgZ2VuZXJhdG9ycywgZXRjKVxuICogXHRcdC0gU21hcnRlciBjb25zdGFudCBhbmQgZnVuY3Rpb24gbWF0Y2hpbmdcbiAqXG4gKiBBZGRzIHRoZSBmb2xsb3dpbmcgbmV3IHRva2VuIGNsYXNzZXM6XG4gKiBcdFx0Y29uc3RhbnQsIGRlbGltaXRlciwgdmFyaWFibGUsIGZ1bmN0aW9uLCBwYWNrYWdlXG4gKi9cbihmdW5jdGlvbiAoUHJpc20pIHtcblx0UHJpc20ubGFuZ3VhZ2VzLnBocCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuXHRcdCdrZXl3b3JkJzogL1xcYig/Ol9faGFsdF9jb21waWxlcnxhYnN0cmFjdHxhbmR8YXJyYXl8YXN8YnJlYWt8Y2FsbGFibGV8Y2FzZXxjYXRjaHxjbGFzc3xjbG9uZXxjb25zdHxjb250aW51ZXxkZWNsYXJlfGRlZmF1bHR8ZGllfGRvfGVjaG98ZWxzZXxlbHNlaWZ8ZW1wdHl8ZW5kZGVjbGFyZXxlbmRmb3J8ZW5kZm9yZWFjaHxlbmRpZnxlbmRzd2l0Y2h8ZW5kd2hpbGV8ZXZhbHxleGl0fGV4dGVuZHN8ZmluYWx8ZmluYWxseXxmb3J8Zm9yZWFjaHxmdW5jdGlvbnxnbG9iYWx8Z290b3xpZnxpbXBsZW1lbnRzfGluY2x1ZGV8aW5jbHVkZV9vbmNlfGluc3RhbmNlb2Z8aW5zdGVhZG9mfGludGVyZmFjZXxpc3NldHxsaXN0fG5hbWVzcGFjZXxuZXd8b3J8cGFyZW50fHByaW50fHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZXF1aXJlfHJlcXVpcmVfb25jZXxyZXR1cm58c3RhdGljfHN3aXRjaHx0aHJvd3x0cmFpdHx0cnl8dW5zZXR8dXNlfHZhcnx3aGlsZXx4b3J8eWllbGQpXFxiL2ksXG5cdFx0J2Jvb2xlYW4nOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXFxiKD86ZmFsc2V8dHJ1ZSlcXGIvaSxcblx0XHRcdGFsaWFzOiAnY29uc3RhbnQnXG5cdFx0fSxcblx0XHQnY29uc3RhbnQnOiBbXG5cdFx0XHQvXFxiW0EtWl9dW0EtWjAtOV9dKlxcYi8sXG5cdFx0XHQvXFxiKD86bnVsbClcXGIvaSxcblx0XHRdLFxuXHRcdCdjb21tZW50Jzoge1xuXHRcdFx0cGF0dGVybjogLyhefFteXFxcXF0pKD86XFwvXFwqW1xcc1xcU10qP1xcKlxcL3xcXC9cXC8uKikvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH1cblx0fSk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgncGhwJywgJ3N0cmluZycsIHtcblx0XHQnc2hlbGwtY29tbWVudCc6IHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXlxcXFxdKSMuKi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdjb21tZW50J1xuXHRcdH1cblx0fSk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgncGhwJywgJ2NvbW1lbnQnLCB7XG5cdFx0J2RlbGltaXRlcic6IHtcblx0XHRcdHBhdHRlcm46IC9cXD8+JHxePFxcPyg/OnBocCg/PVxccyl8PSk/L2ksXG5cdFx0XHRhbGlhczogJ2ltcG9ydGFudCdcblx0XHR9XG5cdH0pO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3BocCcsICdrZXl3b3JkJywge1xuXHRcdCd2YXJpYWJsZSc6IC9cXCQrKD86XFx3K1xcYnwoPz17KSkvaSxcblx0XHQncGFja2FnZSc6IHtcblx0XHRcdHBhdHRlcm46IC8oXFxcXHxuYW1lc3BhY2VcXHMrfHVzZVxccyspW1xcd1xcXFxdKy8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdHB1bmN0dWF0aW9uOiAvXFxcXC9cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdC8vIE11c3QgYmUgZGVmaW5lZCBhZnRlciB0aGUgZnVuY3Rpb24gcGF0dGVyblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdwaHAnLCAnb3BlcmF0b3InLCB7XG5cdFx0J3Byb3BlcnR5Jzoge1xuXHRcdFx0cGF0dGVybjogLygtPilbXFx3XSsvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH1cblx0fSk7XG5cblx0dmFyIHN0cmluZ19pbnRlcnBvbGF0aW9uID0ge1xuXHRcdHBhdHRlcm46IC97XFwkKD86eyg/OntbXnt9XSt9fFtee31dKyl9fFtee31dKSt9fChefFteXFxcXHtdKVxcJCsoPzpcXHcrKD86XFxbW15cXHJcXG5cXFtcXF1dK1xcXXwtPlxcdyspKikvLFxuXHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMucGhwXG5cdH07XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgncGhwJywgJ3N0cmluZycsIHtcblx0XHQnbm93ZG9jLXN0cmluZyc6IHtcblx0XHRcdHBhdHRlcm46IC88PDwnKFteJ10rKSdbXFxyXFxuXSg/Oi4qW1xcclxcbl0pKj9cXDE7Lyxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGFsaWFzOiAnc3RyaW5nJyxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnZGVsaW1pdGVyJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9ePDw8J1teJ10rJ3xbYS16X11cXHcqOyQvaSxcblx0XHRcdFx0XHRhbGlhczogJ3N5bWJvbCcsXG5cdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXjw8PCc/fFsnO10kL1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2hlcmVkb2Mtc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogLzw8PCg/OlwiKFteXCJdKylcIltcXHJcXG5dKD86LipbXFxyXFxuXSkqP1xcMTt8KFthLXpfXVxcdyopW1xcclxcbl0oPzouKltcXHJcXG5dKSo/XFwyOykvaSxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGFsaWFzOiAnc3RyaW5nJyxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQnZGVsaW1pdGVyJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9ePDw8KD86XCJbXlwiXStcInxbYS16X11cXHcqKXxbYS16X11cXHcqOyQvaSxcblx0XHRcdFx0XHRhbGlhczogJ3N5bWJvbCcsXG5cdFx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiAvXjw8PFwiP3xbXCI7XSQvXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQnaW50ZXJwb2xhdGlvbic6IHN0cmluZ19pbnRlcnBvbGF0aW9uIC8vIFNlZSBiZWxvd1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J3NpbmdsZS1xdW90ZWQtc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogLycoPzpcXFxcW1xcc1xcU118W15cXFxcJ10pKicvLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdzdHJpbmcnXG5cdFx0fSxcblx0XHQnZG91YmxlLXF1b3RlZC1zdHJpbmcnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXCIoPzpcXFxcW1xcc1xcU118W15cXFxcXCJdKSpcIi8sXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRhbGlhczogJ3N0cmluZycsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2ludGVycG9sYXRpb24nOiBzdHJpbmdfaW50ZXJwb2xhdGlvbiAvLyBTZWUgYmVsb3dcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXHQvLyBUaGUgZGlmZmVyZW50IHR5cGVzIG9mIFBIUCBzdHJpbmdzIFwicmVwbGFjZVwiIHRoZSBDLWxpa2Ugc3RhbmRhcmQgc3RyaW5nXG5cdGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMucGhwWydzdHJpbmcnXTtcblxuXHRQcmlzbS5ob29rcy5hZGQoJ2JlZm9yZS10b2tlbml6ZScsIGZ1bmN0aW9uKGVudikge1xuXHRcdGlmICghLzxcXD8vLnRlc3QoZW52LmNvZGUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIHBocFBhdHRlcm4gPSAvPFxcPyg/OlteXCInLyNdfFxcLyg/IVsqL10pfChcInwnKSg/OlxcXFxbXFxzXFxTXXwoPyFcXDEpW15cXFxcXSkqXFwxfCg/OlxcL1xcL3wjKSg/OlteP1xcblxccl18XFw/KD8hPikpKig/PSR8XFw/PnxbXFxyXFxuXSl8XFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKSkqPyg/OlxcPz58JCkvaWc7XG5cdFx0UHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddLmJ1aWxkUGxhY2Vob2xkZXJzKGVudiwgJ3BocCcsIHBocFBhdHRlcm4pO1xuXHR9KTtcblxuXHRQcmlzbS5ob29rcy5hZGQoJ2FmdGVyLXRva2VuaXplJywgZnVuY3Rpb24oZW52KSB7XG5cdFx0UHJpc20ubGFuZ3VhZ2VzWydtYXJrdXAtdGVtcGxhdGluZyddLnRva2VuaXplUGxhY2Vob2xkZXJzKGVudiwgJ3BocCcpO1xuXHR9KTtcblxufShQcmlzbSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==