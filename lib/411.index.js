(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[411],{

/***/ "./node_modules/prismjs/components/prism-tt2.js":
/*!******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-tt2.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(Prism) {

	Prism.languages.tt2 = Prism.languages.extend('clike', {
		'comment': /#.*|\[%#[\s\S]*?%\]/,
		'keyword': /\b(?:BLOCK|CALL|CASE|CATCH|CLEAR|DEBUG|DEFAULT|ELSE|ELSIF|END|FILTER|FINAL|FOREACH|GET|IF|IN|INCLUDE|INSERT|LAST|MACRO|META|NEXT|PERL|PROCESS|RAWPERL|RETURN|SET|STOP|TAGS|THROW|TRY|SWITCH|UNLESS|USE|WHILE|WRAPPER)\b/,
		'punctuation': /[[\]{},()]/
	});

	Prism.languages.insertBefore('tt2', 'number', {
		'operator': /=[>=]?|!=?|<=?|>=?|&&|\|\|?|\b(?:and|or|not)\b/,
		'variable': {
			pattern: /\b[a-z]\w*(?:\s*\.\s*(?:\d+|\$?[a-z]\w*))*\b/i
		}
	});

	Prism.languages.insertBefore('tt2', 'keyword', {
		'delimiter': {
			pattern: /^(?:\[%|%%)-?|-?%]$/,
			alias: 'punctuation'
		}
	});

	Prism.languages.insertBefore('tt2', 'string', {
		'single-quoted-string': {
			pattern: /'[^\\']*(?:\\[\s\S][^\\']*)*'/,
			greedy: true,
			alias: 'string'
		},
		'double-quoted-string': {
			pattern: /"[^\\"]*(?:\\[\s\S][^\\"]*)*"/,
			greedy: true,
			alias: 'string',
			inside: {
				'variable': {
					pattern: /\$(?:[a-z]\w*(?:\.(?:\d+|\$?[a-z]\w*))*)/i
				}
			}
		}
	});

	// The different types of TT2 strings "replace" the C-like standard string
	delete Prism.languages.tt2.string;

	Prism.hooks.add('before-tokenize', function(env) {
		var tt2Pattern = /\[%[\s\S]+?%\]/g;
		Prism.languages['markup-templating'].buildPlaceholders(env, 'tt2', tt2Pattern);
	});

	Prism.hooks.add('after-tokenize', function(env) {
		Prism.languages['markup-templating'].tokenizePlaceholders(env, 'tt2');
	});

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXR0Mi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBLEVBQUU7O0FBRUYsQ0FBQyIsImZpbGUiOiI0MTEuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oUHJpc20pIHtcblxuXHRQcmlzbS5sYW5ndWFnZXMudHQyID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG5cdFx0J2NvbW1lbnQnOiAvIy4qfFxcWyUjW1xcc1xcU10qPyVcXF0vLFxuXHRcdCdrZXl3b3JkJzogL1xcYig/OkJMT0NLfENBTEx8Q0FTRXxDQVRDSHxDTEVBUnxERUJVR3xERUZBVUxUfEVMU0V8RUxTSUZ8RU5EfEZJTFRFUnxGSU5BTHxGT1JFQUNIfEdFVHxJRnxJTnxJTkNMVURFfElOU0VSVHxMQVNUfE1BQ1JPfE1FVEF8TkVYVHxQRVJMfFBST0NFU1N8UkFXUEVSTHxSRVRVUk58U0VUfFNUT1B8VEFHU3xUSFJPV3xUUll8U1dJVENIfFVOTEVTU3xVU0V8V0hJTEV8V1JBUFBFUilcXGIvLFxuXHRcdCdwdW5jdHVhdGlvbic6IC9bW1xcXXt9LCgpXS9cblx0fSk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgndHQyJywgJ251bWJlcicsIHtcblx0XHQnb3BlcmF0b3InOiAvPVs+PV0/fCE9P3w8PT98Pj0/fCYmfFxcfFxcfD98XFxiKD86YW5kfG9yfG5vdClcXGIvLFxuXHRcdCd2YXJpYWJsZSc6IHtcblx0XHRcdHBhdHRlcm46IC9cXGJbYS16XVxcdyooPzpcXHMqXFwuXFxzKig/OlxcZCt8XFwkP1thLXpdXFx3KikpKlxcYi9pXG5cdFx0fVxuXHR9KTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCd0dDInLCAna2V5d29yZCcsIHtcblx0XHQnZGVsaW1pdGVyJzoge1xuXHRcdFx0cGF0dGVybjogL14oPzpcXFslfCUlKS0/fC0/JV0kLyxcblx0XHRcdGFsaWFzOiAncHVuY3R1YXRpb24nXG5cdFx0fVxuXHR9KTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCd0dDInLCAnc3RyaW5nJywge1xuXHRcdCdzaW5nbGUtcXVvdGVkLXN0cmluZyc6IHtcblx0XHRcdHBhdHRlcm46IC8nW15cXFxcJ10qKD86XFxcXFtcXHNcXFNdW15cXFxcJ10qKSonLyxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGFsaWFzOiAnc3RyaW5nJ1xuXHRcdH0sXG5cdFx0J2RvdWJsZS1xdW90ZWQtc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogL1wiW15cXFxcXCJdKig/OlxcXFxbXFxzXFxTXVteXFxcXFwiXSopKlwiLyxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGFsaWFzOiAnc3RyaW5nJyxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQndmFyaWFibGUnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogL1xcJCg/OlthLXpdXFx3Kig/OlxcLig/OlxcZCt8XFwkP1thLXpdXFx3KikpKikvaVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBUaGUgZGlmZmVyZW50IHR5cGVzIG9mIFRUMiBzdHJpbmdzIFwicmVwbGFjZVwiIHRoZSBDLWxpa2Ugc3RhbmRhcmQgc3RyaW5nXG5cdGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMudHQyLnN0cmluZztcblxuXHRQcmlzbS5ob29rcy5hZGQoJ2JlZm9yZS10b2tlbml6ZScsIGZ1bmN0aW9uKGVudikge1xuXHRcdHZhciB0dDJQYXR0ZXJuID0gL1xcWyVbXFxzXFxTXSs/JVxcXS9nO1xuXHRcdFByaXNtLmxhbmd1YWdlc1snbWFya3VwLXRlbXBsYXRpbmcnXS5idWlsZFBsYWNlaG9sZGVycyhlbnYsICd0dDInLCB0dDJQYXR0ZXJuKTtcblx0fSk7XG5cblx0UHJpc20uaG9va3MuYWRkKCdhZnRlci10b2tlbml6ZScsIGZ1bmN0aW9uKGVudikge1xuXHRcdFByaXNtLmxhbmd1YWdlc1snbWFya3VwLXRlbXBsYXRpbmcnXS50b2tlbml6ZVBsYWNlaG9sZGVycyhlbnYsICd0dDInKTtcblx0fSk7XG5cbn0oUHJpc20pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=