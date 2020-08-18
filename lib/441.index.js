(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[441],{

/***/ "./node_modules/prismjs/components/prism-xeora.js":
/*!********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-xeora.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(Prism) {
	Prism.languages.xeora = Prism.languages.extend('markup', {
		'constant': {
			pattern: /\$(?:DomainContents|PageRenderDuration)\$/,
			inside: {
				'punctuation': {
					pattern: /\$/
				}
			}
		},
		'variable': {
			pattern: /\$@?(?:#+|[-+*~=^])?[\w.]+\$/,
			inside: {
				'punctuation': {
					pattern: /[$.]/
				},
				'operator': {
					pattern: /#+|[-+*~=^@]/
				}
			}
		},
		'function-inline': {
			pattern: /\$F:[-\w.]+\?[-\w.]+(?:,(?:\|?(?:[-#.^+*~]*(?:[\w+][^$]*)|=(?:[\S+][^$]*)|@[-#]*(?:\w+.)[\w+.]+)?)*)?\$/,
			inside: {
				'variable': {
					pattern: /(?:[,|])@?(?:#+|[-+*~=^])?[\w.]+/,
					inside: {
						'punctuation': {
							pattern: /[,.|]/
						},
						'operator': {
							pattern: /#+|[-+*~=^@]/
						}
					}
				},
				'punctuation': {
					pattern: /\$\w:|[$:?.,|]/
				}
			},
			alias: 'function'
		},
		'function-block': {
			pattern: /\$XF:{[-\w.]+\?[-\w.]+(?:,(?:\|?(?:[-#.^+*~]*(?:[\w+][^$]*)|=(?:[\S+][^$]*)|@[-#]*(?:\w+.)[\w+.]+)?)*)?}:XF\$/,
			inside: {
				'punctuation': {
					pattern: /[$:{}?.,|]/
				}
			},
			alias: 'function'
		},
		'directive-inline': {
			pattern: /\$\w(?:#\d+\+?)?(?:\[[-\w.]+])?:[-\/\w.]+\$/,
			inside: {
				'punctuation': {
					pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
					inside: {
						'tag': {
							pattern: /#\d/
						}
					}
				}
			},
			alias: 'function'
		},
		'directive-block-open': {
			pattern: /\$\w+:{|\$\w(?:#\d+\+?)?(?:\[[-\w.]+])?:[-\w.]+:{(?:![A-Z]+)?/,
			inside: {
				'punctuation': {
					pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
					inside: {
						'tag': {
							pattern: /#\d/
						}
					}
				},
				'attribute': {
					pattern: /![A-Z]+$/,
					inside: {
						'punctuation': {
							pattern: /!/
						}
					},
					alias: 'keyword'
				}
			},
			alias: 'function'
		},
		'directive-block-separator': {
			pattern: /}:[-\w.]+:{/,
			inside: {
				'punctuation': {
					pattern: /[:{}]/
				}
			},
			alias: 'function'
		},
		'directive-block-close': {
			pattern: /}:[-\w.]+\$/,
			inside: {
				'punctuation': {
					pattern: /[:{}$]/
				}
			},
			alias: 'function'
		}
	});

	Prism.languages.insertBefore('inside', 'punctuation', {
		'variable': Prism.languages.xeora['function-inline'].inside['variable']
	}, Prism.languages.xeora["function-block"]);

	Prism.languages.xeoracube = Prism.languages.xeora;

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXhlb3JhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CLGtHQUFrRztBQUNySDtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDtBQUNBLG9CQUFvQiwwQ0FBMEM7QUFDOUQ7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIO0FBQ0EsY0FBYyxVQUFVO0FBQ3hCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjs7QUFFQSxDQUFDIiwiZmlsZSI6IjQ0MS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihQcmlzbSkge1xuXHRQcmlzbS5sYW5ndWFnZXMueGVvcmEgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCB7XG5cdFx0J2NvbnN0YW50Jzoge1xuXHRcdFx0cGF0dGVybjogL1xcJCg/OkRvbWFpbkNvbnRlbnRzfFBhZ2VSZW5kZXJEdXJhdGlvbilcXCQvLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvXFwkL1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQndmFyaWFibGUnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXFwkQD8oPzojK3xbLSsqfj1eXSk/W1xcdy5dK1xcJC8sXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9bJC5dL1xuXHRcdFx0XHR9LFxuXHRcdFx0XHQnb3BlcmF0b3InOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogLyMrfFstKyp+PV5AXS9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J2Z1bmN0aW9uLWlubGluZSc6IHtcblx0XHRcdHBhdHRlcm46IC9cXCRGOlstXFx3Ll0rXFw/Wy1cXHcuXSsoPzosKD86XFx8Pyg/OlstIy5eKyp+XSooPzpbXFx3K11bXiRdKil8PSg/OltcXFMrXVteJF0qKXxAWy0jXSooPzpcXHcrLilbXFx3Ky5dKyk/KSopP1xcJC8sXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3ZhcmlhYmxlJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC8oPzpbLHxdKUA/KD86Iyt8Wy0rKn49Xl0pP1tcXHcuXSsvLFxuXHRcdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiAvWywufF0vXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0J29wZXJhdG9yJzoge1xuXHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiAvIyt8Wy0rKn49XkBdL1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9cXCRcXHc6fFskOj8uLHxdL1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0YWxpYXM6ICdmdW5jdGlvbidcblx0XHR9LFxuXHRcdCdmdW5jdGlvbi1ibG9jayc6IHtcblx0XHRcdHBhdHRlcm46IC9cXCRYRjp7Wy1cXHcuXStcXD9bLVxcdy5dKyg/OiwoPzpcXHw/KD86Wy0jLl4rKn5dKig/OltcXHcrXVteJF0qKXw9KD86W1xcUytdW14kXSopfEBbLSNdKig/OlxcdysuKVtcXHcrLl0rKT8pKik/fTpYRlxcJC8sXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC9bJDp7fT8uLHxdL1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0YWxpYXM6ICdmdW5jdGlvbidcblx0XHR9LFxuXHRcdCdkaXJlY3RpdmUtaW5saW5lJzoge1xuXHRcdFx0cGF0dGVybjogL1xcJFxcdyg/OiNcXGQrXFwrPyk/KD86XFxbWy1cXHcuXStdKT86Wy1cXC9cXHcuXStcXCQvLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvXFwkKD86XFx3OnxDKD86XFxbfCNcXGQpKT98Wzp7W1xcXV0vLFxuXHRcdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdFx0J3RhZyc6IHtcblx0XHRcdFx0XHRcdFx0cGF0dGVybjogLyNcXGQvXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0YWxpYXM6ICdmdW5jdGlvbidcblx0XHR9LFxuXHRcdCdkaXJlY3RpdmUtYmxvY2stb3Blbic6IHtcblx0XHRcdHBhdHRlcm46IC9cXCRcXHcrOnt8XFwkXFx3KD86I1xcZCtcXCs/KT8oPzpcXFtbLVxcdy5dK10pPzpbLVxcdy5dKzp7KD86IVtBLVpdKyk/Lyxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQncHVuY3R1YXRpb24nOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogL1xcJCg/Olxcdzp8Qyg/OlxcW3wjXFxkKSk/fFs6e1tcXF1dLyxcblx0XHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHRcdCd0YWcnOiB7XG5cdFx0XHRcdFx0XHRcdHBhdHRlcm46IC8jXFxkL1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0J2F0dHJpYnV0ZSc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvIVtBLVpdKyQvLFxuXHRcdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzoge1xuXHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiAvIS9cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGFsaWFzOiAna2V5d29yZCdcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGFsaWFzOiAnZnVuY3Rpb24nXG5cdFx0fSxcblx0XHQnZGlyZWN0aXZlLWJsb2NrLXNlcGFyYXRvcic6IHtcblx0XHRcdHBhdHRlcm46IC99OlstXFx3Ll0rOnsvLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvWzp7fV0vXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRhbGlhczogJ2Z1bmN0aW9uJ1xuXHRcdH0sXG5cdFx0J2RpcmVjdGl2ZS1ibG9jay1jbG9zZSc6IHtcblx0XHRcdHBhdHRlcm46IC99OlstXFx3Ll0rXFwkLyxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQncHVuY3R1YXRpb24nOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogL1s6e30kXS9cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGFsaWFzOiAnZnVuY3Rpb24nXG5cdFx0fVxuXHR9KTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdpbnNpZGUnLCAncHVuY3R1YXRpb24nLCB7XG5cdFx0J3ZhcmlhYmxlJzogUHJpc20ubGFuZ3VhZ2VzLnhlb3JhWydmdW5jdGlvbi1pbmxpbmUnXS5pbnNpZGVbJ3ZhcmlhYmxlJ11cblx0fSwgUHJpc20ubGFuZ3VhZ2VzLnhlb3JhW1wiZnVuY3Rpb24tYmxvY2tcIl0pO1xuXG5cdFByaXNtLmxhbmd1YWdlcy54ZW9yYWN1YmUgPSBQcmlzbS5sYW5ndWFnZXMueGVvcmE7XG5cbn0oUHJpc20pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=