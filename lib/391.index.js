(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[391],{

/***/ "./node_modules/prismjs/components/prism-stylus.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-stylus.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {
	var unit = {
		pattern: /(\b\d+)(?:%|[a-z]+)/,
		lookbehind: true
	};
	// 123 -123 .123 -.123 12.3 -12.3
	var number = {
		pattern: /(^|[^\w.-])-?\d*\.?\d+/,
		lookbehind: true
	};

	var inside = {
		'comment': {
			pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
			lookbehind: true
		},
		'url': {
			pattern: /url\((["']?).*?\1\)/i,
			greedy: true
		},
		'string': {
			pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
			greedy: true
		},
		'interpolation': null, // See below
		'func': null, // See below
		'important': /\B!(?:important|optional)\b/i,
		'keyword': {
			pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
			lookbehind: true
		},
		'hexcode': /#[\da-f]{3,6}/i,
		'color': [
			/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
			{
				pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
				inside: {
					'unit': unit,
					'number': number,
					'function': /[\w-]+(?=\()/,
					'punctuation': /[(),]/
				}
			}
		],
		'entity': /\\[\da-f]{1,8}/i,
		'unit': unit,
		'boolean': /\b(?:true|false)\b/,
		'operator': [
			// We want non-word chars around "-" because it is
			// accepted in property names.
			/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/
		],
		'number': number,
		'punctuation': /[{}()\[\];:,]/
	};

	inside['interpolation'] = {
		pattern: /\{[^\r\n}:]+\}/,
		alias: 'variable',
		inside: {
			'delimiter': {
				pattern: /^{|}$/,
				alias: 'punctuation'
			},
			rest: inside
		}
	};
	inside['func'] = {
		pattern: /[\w-]+\([^)]*\).*/,
		inside: {
			'function': /^[^(]+/,
			rest: inside
		}
	};

	Prism.languages.stylus = {
		'atrule-declaration': {
			pattern: /(^\s*)@.+/m,
			lookbehind: true,
			inside: {
				'atrule': /^@[\w-]+/,
				rest: inside
			}
		},
		'variable-declaration': {
			pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
			lookbehind: true,
			inside: {
				'variable': /^\S+/,
				rest: inside
			}
		},

		'statement': {
			pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
			lookbehind: true,
			inside: {
				'keyword': /^\S+/,
				rest: inside
			}
		},

		// A property/value pair cannot end with a comma or a brace
		// It cannot have indented content unless it ended with a semicolon
		'property-declaration': {
			pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(?:\r?\n|\r)(?:\{|\2[ \t]+)))/m,
			lookbehind: true,
			inside: {
				'property': {
					pattern: /^[^\s:]+/,
					inside: {
						'interpolation': inside.interpolation
					}
				},
				rest: inside
			}
		},



		// A selector can contain parentheses only as part of a pseudo-element
		// It can span multiple lines.
		// It must end with a comma or an accolade or have indented content.
		'selector': {
			pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
			lookbehind: true,
			inside: {
				'interpolation': inside.interpolation,
				'comment': inside.comment,
				'punctuation': /[{},]/
			}
		},

		'func': inside.func,
		'string': inside.string,
		'comment': {
			pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
			lookbehind: true,
			greedy: true
		},
		'interpolation': inside.interpolation,
		'punctuation': /[{}()\[\];:.]/
	};
}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXN0eWx1cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCx1QkFBdUIsSUFBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsSUFBSSxVQUFVLElBQUksWUFBWSxJQUFJLGdDQUFnQyxJQUFJLFVBQVUsSUFBSSxZQUFZLElBQUk7QUFDdkk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixJQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsSUFBSTtBQUN6QztBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUI7O0FBRUE7QUFDQSxjQUFjLE9BQU8sS0FBSztBQUMxQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsRUFBRTtBQUNsQjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsaURBQWlELEdBQUcsSUFBSTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQixHQUFHLFFBQVEsdUJBQXVCLFVBQVUsSUFBSSwrQkFBK0I7QUFDekg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7Ozs7QUFJSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyx1Q0FBdUMsR0FBRyxRQUFRLHVDQUF1Qyx1Q0FBdUMsR0FBRyxRQUFRLGNBQWMscUJBQXFCO0FBQ3BOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxxQkFBcUIsT0FBTztBQUM1QjtBQUNBLENBQUMiLCJmaWxlIjoiMzkxLmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIChQcmlzbSkge1xuXHR2YXIgdW5pdCA9IHtcblx0XHRwYXR0ZXJuOiAvKFxcYlxcZCspKD86JXxbYS16XSspLyxcblx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdH07XG5cdC8vIDEyMyAtMTIzIC4xMjMgLS4xMjMgMTIuMyAtMTIuM1xuXHR2YXIgbnVtYmVyID0ge1xuXHRcdHBhdHRlcm46IC8oXnxbXlxcdy4tXSktP1xcZCpcXC4/XFxkKy8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZVxuXHR9O1xuXG5cdHZhciBpbnNpZGUgPSB7XG5cdFx0J2NvbW1lbnQnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W15cXFxcXSkoPzpcXC9cXCpbXFxzXFxTXSo/XFwqXFwvfFxcL1xcLy4qKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHQndXJsJzoge1xuXHRcdFx0cGF0dGVybjogL3VybFxcKChbXCInXT8pLio/XFwxXFwpL2ksXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdCdzdHJpbmcnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKFwifCcpKD86KD8hXFwxKVteXFxcXFxcclxcbl18XFxcXCg/OlxcclxcbnxbXFxzXFxTXSkpKlxcMS8sXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdCdpbnRlcnBvbGF0aW9uJzogbnVsbCwgLy8gU2VlIGJlbG93XG5cdFx0J2Z1bmMnOiBudWxsLCAvLyBTZWUgYmVsb3dcblx0XHQnaW1wb3J0YW50JzogL1xcQiEoPzppbXBvcnRhbnR8b3B0aW9uYWwpXFxiL2ksXG5cdFx0J2tleXdvcmQnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF58XFxzKykoPzooPzppZnxlbHNlfGZvcnxyZXR1cm58dW5sZXNzKSg/PVxccyt8JCl8QFtcXHctXSspLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdCdoZXhjb2RlJzogLyNbXFxkYS1mXXszLDZ9L2ksXG5cdFx0J2NvbG9yJzogW1xuXHRcdFx0L1xcYig/OkFsaWNlQmx1ZXxBbnRpcXVlV2hpdGV8QXF1YXxBcXVhbWFyaW5lfEF6dXJlfEJlaWdlfEJpc3F1ZXxCbGFja3xCbGFuY2hlZEFsbW9uZHxCbHVlfEJsdWVWaW9sZXR8QnJvd258QnVybHlXb29kfENhZGV0Qmx1ZXxDaGFydHJldXNlfENob2NvbGF0ZXxDb3JhbHxDb3JuZmxvd2VyQmx1ZXxDb3Juc2lsa3xDcmltc29ufEN5YW58RGFya0JsdWV8RGFya0N5YW58RGFya0dvbGRlblJvZHxEYXJrR3JbYWVdeXxEYXJrR3JlZW58RGFya0toYWtpfERhcmtNYWdlbnRhfERhcmtPbGl2ZUdyZWVufERhcmtPcmFuZ2V8RGFya09yY2hpZHxEYXJrUmVkfERhcmtTYWxtb258RGFya1NlYUdyZWVufERhcmtTbGF0ZUJsdWV8RGFya1NsYXRlR3JbYWVdeXxEYXJrVHVycXVvaXNlfERhcmtWaW9sZXR8RGVlcFBpbmt8RGVlcFNreUJsdWV8RGltR3JbYWVdeXxEb2RnZXJCbHVlfEZpcmVCcmlja3xGbG9yYWxXaGl0ZXxGb3Jlc3RHcmVlbnxGdWNoc2lhfEdhaW5zYm9yb3xHaG9zdFdoaXRlfEdvbGR8R29sZGVuUm9kfEdyW2FlXXl8R3JlZW58R3JlZW5ZZWxsb3d8SG9uZXlEZXd8SG90UGlua3xJbmRpYW5SZWR8SW5kaWdvfEl2b3J5fEtoYWtpfExhdmVuZGVyfExhdmVuZGVyQmx1c2h8TGF3bkdyZWVufExlbW9uQ2hpZmZvbnxMaWdodEJsdWV8TGlnaHRDb3JhbHxMaWdodEN5YW58TGlnaHRHb2xkZW5Sb2RZZWxsb3d8TGlnaHRHclthZV15fExpZ2h0R3JlZW58TGlnaHRQaW5rfExpZ2h0U2FsbW9ufExpZ2h0U2VhR3JlZW58TGlnaHRTa3lCbHVlfExpZ2h0U2xhdGVHclthZV15fExpZ2h0U3RlZWxCbHVlfExpZ2h0WWVsbG93fExpbWV8TGltZUdyZWVufExpbmVufE1hZ2VudGF8TWFyb29ufE1lZGl1bUFxdWFNYXJpbmV8TWVkaXVtQmx1ZXxNZWRpdW1PcmNoaWR8TWVkaXVtUHVycGxlfE1lZGl1bVNlYUdyZWVufE1lZGl1bVNsYXRlQmx1ZXxNZWRpdW1TcHJpbmdHcmVlbnxNZWRpdW1UdXJxdW9pc2V8TWVkaXVtVmlvbGV0UmVkfE1pZG5pZ2h0Qmx1ZXxNaW50Q3JlYW18TWlzdHlSb3NlfE1vY2Nhc2lufE5hdmFqb1doaXRlfE5hdnl8T2xkTGFjZXxPbGl2ZXxPbGl2ZURyYWJ8T3JhbmdlfE9yYW5nZVJlZHxPcmNoaWR8UGFsZUdvbGRlblJvZHxQYWxlR3JlZW58UGFsZVR1cnF1b2lzZXxQYWxlVmlvbGV0UmVkfFBhcGF5YVdoaXB8UGVhY2hQdWZmfFBlcnV8UGlua3xQbHVtfFBvd2RlckJsdWV8UHVycGxlfFJlZHxSb3N5QnJvd258Um95YWxCbHVlfFNhZGRsZUJyb3dufFNhbG1vbnxTYW5keUJyb3dufFNlYUdyZWVufFNlYVNoZWxsfFNpZW5uYXxTaWx2ZXJ8U2t5Qmx1ZXxTbGF0ZUJsdWV8U2xhdGVHclthZV15fFNub3d8U3ByaW5nR3JlZW58U3RlZWxCbHVlfFRhbnxUZWFsfFRoaXN0bGV8VG9tYXRvfFRyYW5zcGFyZW50fFR1cnF1b2lzZXxWaW9sZXR8V2hlYXR8V2hpdGV8V2hpdGVTbW9rZXxZZWxsb3d8WWVsbG93R3JlZW4pXFxiL2ksXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC9cXGIoPzpyZ2J8aHNsKVxcKFxccypcXGR7MSwzfVxccyosXFxzKlxcZHsxLDN9JT9cXHMqLFxccypcXGR7MSwzfSU/XFxzKlxcKVxcQnxcXGIoPzpyZ2J8aHNsKWFcXChcXHMqXFxkezEsM31cXHMqLFxccypcXGR7MSwzfSU/XFxzKixcXHMqXFxkezEsM30lP1xccyosXFxzKig/OjB8MD9cXC5cXGQrfDEpXFxzKlxcKVxcQi9pLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQndW5pdCc6IHVuaXQsXG5cdFx0XHRcdFx0J251bWJlcic6IG51bWJlcixcblx0XHRcdFx0XHQnZnVuY3Rpb24nOiAvW1xcdy1dKyg/PVxcKCkvLFxuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9bKCksXS9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF0sXG5cdFx0J2VudGl0eSc6IC9cXFxcW1xcZGEtZl17MSw4fS9pLFxuXHRcdCd1bml0JzogdW5pdCxcblx0XHQnYm9vbGVhbic6IC9cXGIoPzp0cnVlfGZhbHNlKVxcYi8sXG5cdFx0J29wZXJhdG9yJzogW1xuXHRcdFx0Ly8gV2Ugd2FudCBub24td29yZCBjaGFycyBhcm91bmQgXCItXCIgYmVjYXVzZSBpdCBpc1xuXHRcdFx0Ly8gYWNjZXB0ZWQgaW4gcHJvcGVydHkgbmFtZXMuXG5cdFx0XHQvfnxbKyFcXC8lPD4/PV09P3xbLTpdPXxcXCpbKj1dP3xcXC57MiwzfXwmJnxcXHxcXHx8XFxCLVxcQnxcXGIoPzphbmR8aW58aXMoPzogYXwgZGVmaW5lZHwgbm90fG50KT98bm90fG9yKVxcYi9cblx0XHRdLFxuXHRcdCdudW1iZXInOiBudW1iZXIsXG5cdFx0J3B1bmN0dWF0aW9uJzogL1t7fSgpXFxbXFxdOzosXS9cblx0fTtcblxuXHRpbnNpZGVbJ2ludGVycG9sYXRpb24nXSA9IHtcblx0XHRwYXR0ZXJuOiAvXFx7W15cXHJcXG59Ol0rXFx9Lyxcblx0XHRhbGlhczogJ3ZhcmlhYmxlJyxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdkZWxpbWl0ZXInOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9ee3x9JC8sXG5cdFx0XHRcdGFsaWFzOiAncHVuY3R1YXRpb24nXG5cdFx0XHR9LFxuXHRcdFx0cmVzdDogaW5zaWRlXG5cdFx0fVxuXHR9O1xuXHRpbnNpZGVbJ2Z1bmMnXSA9IHtcblx0XHRwYXR0ZXJuOiAvW1xcdy1dK1xcKFteKV0qXFwpLiovLFxuXHRcdGluc2lkZToge1xuXHRcdFx0J2Z1bmN0aW9uJzogL15bXihdKy8sXG5cdFx0XHRyZXN0OiBpbnNpZGVcblx0XHR9XG5cdH07XG5cblx0UHJpc20ubGFuZ3VhZ2VzLnN0eWx1cyA9IHtcblx0XHQnYXRydWxlLWRlY2xhcmF0aW9uJzoge1xuXHRcdFx0cGF0dGVybjogLyheXFxzKilALisvbSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2F0cnVsZSc6IC9eQFtcXHctXSsvLFxuXHRcdFx0XHRyZXN0OiBpbnNpZGVcblx0XHRcdH1cblx0XHR9LFxuXHRcdCd2YXJpYWJsZS1kZWNsYXJhdGlvbic6IHtcblx0XHRcdHBhdHRlcm46IC8oXlsgXFx0XSopW1xcdyQtXStcXHMqLj89WyBcXHRdKig/Oig/Olxce1tefV0qXFx9fC4rKXwkKS9tLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQndmFyaWFibGUnOiAvXlxcUysvLFxuXHRcdFx0XHRyZXN0OiBpbnNpZGVcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0J3N0YXRlbWVudCc6IHtcblx0XHRcdHBhdHRlcm46IC8oXlsgXFx0XSopKD86aWZ8ZWxzZXxmb3J8cmV0dXJufHVubGVzcylbIFxcdF0rLisvbSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2tleXdvcmQnOiAvXlxcUysvLFxuXHRcdFx0XHRyZXN0OiBpbnNpZGVcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gQSBwcm9wZXJ0eS92YWx1ZSBwYWlyIGNhbm5vdCBlbmQgd2l0aCBhIGNvbW1hIG9yIGEgYnJhY2Vcblx0XHQvLyBJdCBjYW5ub3QgaGF2ZSBpbmRlbnRlZCBjb250ZW50IHVubGVzcyBpdCBlbmRlZCB3aXRoIGEgc2VtaWNvbG9uXG5cdFx0J3Byb3BlcnR5LWRlY2xhcmF0aW9uJzoge1xuXHRcdFx0cGF0dGVybjogLygoPzpefFxceykoWyBcXHRdKikpKD86W1xcdy1dfFxce1tefVxcclxcbl0rXFx9KSsoPzpcXHMqOlxccyp8WyBcXHRdKylbXntcXHJcXG5dKig/Ojt8W157XFxyXFxuLF0oPz0kKSg/ISg/Olxccj9cXG58XFxyKSg/Olxce3xcXDJbIFxcdF0rKSkpL20sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdwcm9wZXJ0eSc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvXlteXFxzOl0rLyxcblx0XHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHRcdCdpbnRlcnBvbGF0aW9uJzogaW5zaWRlLmludGVycG9sYXRpb25cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHJlc3Q6IGluc2lkZVxuXHRcdFx0fVxuXHRcdH0sXG5cblxuXG5cdFx0Ly8gQSBzZWxlY3RvciBjYW4gY29udGFpbiBwYXJlbnRoZXNlcyBvbmx5IGFzIHBhcnQgb2YgYSBwc2V1ZG8tZWxlbWVudFxuXHRcdC8vIEl0IGNhbiBzcGFuIG11bHRpcGxlIGxpbmVzLlxuXHRcdC8vIEl0IG11c3QgZW5kIHdpdGggYSBjb21tYSBvciBhbiBhY2NvbGFkZSBvciBoYXZlIGluZGVudGVkIGNvbnRlbnQuXG5cdFx0J3NlbGVjdG9yJzoge1xuXHRcdFx0cGF0dGVybjogLyheWyBcXHRdKikoPzooPz1cXFMpKD86W157fVxcclxcbjooKV18Ojo/W1xcdy1dKyg/OlxcKFteKVxcclxcbl0qXFwpKT98XFx7W159XFxyXFxuXStcXH0pKykoPzooPzpcXHI/XFxufFxccikoPzpcXDEoPzooPz1cXFMpKD86W157fVxcclxcbjooKV18Ojo/W1xcdy1dKyg/OlxcKFteKVxcclxcbl0qXFwpKT98XFx7W159XFxyXFxuXStcXH0pKykpKSooPzosJHxcXHt8KD89KD86XFxyP1xcbnxcXHIpKD86XFx7fFxcMVsgXFx0XSspKSkvbSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2ludGVycG9sYXRpb24nOiBpbnNpZGUuaW50ZXJwb2xhdGlvbixcblx0XHRcdFx0J2NvbW1lbnQnOiBpbnNpZGUuY29tbWVudCxcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL1t7fSxdL1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQnZnVuYyc6IGluc2lkZS5mdW5jLFxuXHRcdCdzdHJpbmcnOiBpbnNpZGUuc3RyaW5nLFxuXHRcdCdjb21tZW50Jzoge1xuXHRcdFx0cGF0dGVybjogLyhefFteXFxcXF0pKD86XFwvXFwqW1xcc1xcU10qP1xcKlxcL3xcXC9cXC8uKikvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdH0sXG5cdFx0J2ludGVycG9sYXRpb24nOiBpbnNpZGUuaW50ZXJwb2xhdGlvbixcblx0XHQncHVuY3R1YXRpb24nOiAvW3t9KClcXFtcXF07Oi5dL1xuXHR9O1xufShQcmlzbSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==