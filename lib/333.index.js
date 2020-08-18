(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[333],{

/***/ "./node_modules/prismjs/components/prism-qml.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-qml.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var jsString = /"(?:\\.|[^\\"\r\n])*"|'(?:\\.|[^\\'\r\n])*'/.source;
	var jsComment = /\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))*\*\//.source;

	var jsExpr = /(?:[^\\()[\]{}"'/]|<string>|\/(?![*/])|<comment>|\(<expr>*\)|\[<expr>*\]|\{<expr>*\}|\\[\s\S])/
		.source.replace(/<string>/g, function () { return jsString; }).replace(/<comment>/g, function () { return jsComment; });

	// the pattern will blow up, so only a few iterations
	for (var i = 0; i < 2; i++) {
		jsExpr = jsExpr.replace(/<expr>/g, function () { return jsExpr; });
	}
	jsExpr = jsExpr.replace(/<expr>/g, '[^\\s\\S]');


	Prism.languages.qml = {
		'comment': {
			pattern: /\/\/.*|\/\*[\s\S]*?\*\//,
			greedy: true
		},
		'javascript-function': {
			pattern: RegExp(/((?:^|;)[ \t]*)function\s+[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*\(<js>*\)\s*\{<js>*\}/.source.replace(/<js>/g, function () { return jsExpr; }), 'm'),
			lookbehind: true,
			greedy: true,
			alias: 'language-javascript',
			inside: Prism.languages.javascript
		},
		'class-name': {
			pattern: /((?:^|[:;])[ \t]*)(?!\d)\w+(?=[ \t]*\{|[ \t]+on\b)/m,
			lookbehind: true
		},
		'property': [
			{
				pattern: /((?:^|[;{])[ \t]*)(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,
				lookbehind: true
			},
			{
				pattern: /((?:^|[;{])[ \t]*)property[ \t]+(?!\d)\w+(?:\.\w+)*[ \t]+(?!\d)\w+(?:\.\w+)*(?=[ \t]*:)/m,
				lookbehind: true,
				inside: {
					'keyword': /^property/,
					'property': /\w+(?:\.\w+)*/
				}
			}
		],
		'javascript-expression': {
			pattern: RegExp(/(:[ \t]*)(?![\s;}[])(?:(?!$|[;}])<js>)+/.source.replace(/<js>/g, function () { return jsExpr; }), 'm'),
			lookbehind: true,
			greedy: true,
			alias: 'language-javascript',
			inside: Prism.languages.javascript
		},
		'string': /"(?:\\.|[^\\"\r\n])*"/,
		'keyword': /\b(?:as|import|on)\b/,
		'punctuation': /[{}[\]:;,]/
	};

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXFtbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBOztBQUVBLDZCQUE2Qiw2REFBNkQsU0FBUztBQUNuRyw0Q0FBNEMsaUJBQWlCLEVBQUUscUNBQXFDLGtCQUFrQixFQUFFOztBQUV4SDtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCLGtEQUFrRCxlQUFlLEVBQUU7QUFDbkU7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSwyQkFBMkIsMEVBQTBFLE9BQU8sdUNBQXVDLGVBQWUsRUFBRTtBQUNwSztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNCQUFzQiw2QkFBNkI7QUFDbkQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLElBQUk7QUFDSjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGNBQWMsK0NBQStDLGVBQWUsRUFBRTtBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLEtBQUs7QUFDMUI7O0FBRUEsQ0FBQyIsImZpbGUiOiIzMzMuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKFByaXNtKSB7XG5cblx0dmFyIGpzU3RyaW5nID0gL1wiKD86XFxcXC58W15cXFxcXCJcXHJcXG5dKSpcInwnKD86XFxcXC58W15cXFxcJ1xcclxcbl0pKicvLnNvdXJjZTtcblx0dmFyIGpzQ29tbWVudCA9IC9cXC9cXC8uKig/IS4pfFxcL1xcKig/OlteKl18XFwqKD8hXFwvKSkqXFwqXFwvLy5zb3VyY2U7XG5cblx0dmFyIGpzRXhwciA9IC8oPzpbXlxcXFwoKVtcXF17fVwiJy9dfDxzdHJpbmc+fFxcLyg/IVsqL10pfDxjb21tZW50PnxcXCg8ZXhwcj4qXFwpfFxcWzxleHByPipcXF18XFx7PGV4cHI+KlxcfXxcXFxcW1xcc1xcU10pL1xuXHRcdC5zb3VyY2UucmVwbGFjZSgvPHN0cmluZz4vZywgZnVuY3Rpb24gKCkgeyByZXR1cm4ganNTdHJpbmc7IH0pLnJlcGxhY2UoLzxjb21tZW50Pi9nLCBmdW5jdGlvbiAoKSB7IHJldHVybiBqc0NvbW1lbnQ7IH0pO1xuXG5cdC8vIHRoZSBwYXR0ZXJuIHdpbGwgYmxvdyB1cCwgc28gb25seSBhIGZldyBpdGVyYXRpb25zXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgMjsgaSsrKSB7XG5cdFx0anNFeHByID0ganNFeHByLnJlcGxhY2UoLzxleHByPi9nLCBmdW5jdGlvbiAoKSB7IHJldHVybiBqc0V4cHI7IH0pO1xuXHR9XG5cdGpzRXhwciA9IGpzRXhwci5yZXBsYWNlKC88ZXhwcj4vZywgJ1teXFxcXHNcXFxcU10nKTtcblxuXG5cdFByaXNtLmxhbmd1YWdlcy5xbWwgPSB7XG5cdFx0J2NvbW1lbnQnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXFwvXFwvLip8XFwvXFwqW1xcc1xcU10qP1xcKlxcLy8sXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdCdqYXZhc2NyaXB0LWZ1bmN0aW9uJzoge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKC8oKD86Xnw7KVsgXFx0XSopZnVuY3Rpb25cXHMrW18kYS16QS1aXFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKlxccypcXCg8anM+KlxcKVxccypcXHs8anM+KlxcfS8uc291cmNlLnJlcGxhY2UoLzxqcz4vZywgZnVuY3Rpb24gKCkgeyByZXR1cm4ganNFeHByOyB9KSwgJ20nKSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRhbGlhczogJ2xhbmd1YWdlLWphdmFzY3JpcHQnLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cdFx0J2NsYXNzLW5hbWUnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKCg/Ol58Wzo7XSlbIFxcdF0qKSg/IVxcZClcXHcrKD89WyBcXHRdKlxce3xbIFxcdF0rb25cXGIpL20sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHQncHJvcGVydHknOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC8oKD86XnxbO3tdKVsgXFx0XSopKD8hXFxkKVxcdysoPzpcXC5cXHcrKSooPz1bIFxcdF0qOikvbSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogLygoPzpefFs7e10pWyBcXHRdKilwcm9wZXJ0eVsgXFx0XSsoPyFcXGQpXFx3Kyg/OlxcLlxcdyspKlsgXFx0XSsoPyFcXGQpXFx3Kyg/OlxcLlxcdyspKig/PVsgXFx0XSo6KS9tLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQna2V5d29yZCc6IC9ecHJvcGVydHkvLFxuXHRcdFx0XHRcdCdwcm9wZXJ0eSc6IC9cXHcrKD86XFwuXFx3KykqL1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XSxcblx0XHQnamF2YXNjcmlwdC1leHByZXNzaW9uJzoge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKC8oOlsgXFx0XSopKD8hW1xcczt9W10pKD86KD8hJHxbO31dKTxqcz4pKy8uc291cmNlLnJlcGxhY2UoLzxqcz4vZywgZnVuY3Rpb24gKCkgeyByZXR1cm4ganNFeHByOyB9KSwgJ20nKSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRhbGlhczogJ2xhbmd1YWdlLWphdmFzY3JpcHQnLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cdFx0J3N0cmluZyc6IC9cIig/OlxcXFwufFteXFxcXFwiXFxyXFxuXSkqXCIvLFxuXHRcdCdrZXl3b3JkJzogL1xcYig/OmFzfGltcG9ydHxvbilcXGIvLFxuXHRcdCdwdW5jdHVhdGlvbic6IC9be31bXFxdOjssXS9cblx0fTtcblxufShQcmlzbSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==