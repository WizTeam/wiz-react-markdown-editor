(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[201],{

/***/ "./node_modules/prismjs/components/prism-js-extras.js":
/*!************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-js-extras.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	Prism.languages.insertBefore('javascript', 'function-variable', {
		'method-variable': {
			pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function-variable'].pattern.source),
			lookbehind: true,
			alias: ['function-variable', 'method', 'function', 'property-access']
		}
	});

	Prism.languages.insertBefore('javascript', 'function', {
		'method': {
			pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function'].source),
			lookbehind: true,
			alias: ['function', 'property-access']
		}
	});

	Prism.languages.insertBefore('javascript', 'constant', {
		'known-class-name': [
			{
				// standard built-ins
				// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
				pattern: /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
				alias: 'class-name'
			},
			{
				// errors
				pattern: /\b(?:[A-Z]\w*)Error\b/,
				alias: 'class-name'
			}
		]
	});

	Prism.languages.javascript['keyword'].unshift(
		{
			pattern: /\b(?:as|default|export|from|import)\b/,
			alias: 'module'
		},
		{
			pattern: /\bnull\b/,
			alias: ['null', 'nil']
		},
		{
			pattern: /\bundefined\b/,
			alias: 'nil'
		}
	);

	Prism.languages.insertBefore('javascript', 'operator', {
		'spread': {
			pattern: /\.{3}/,
			alias: 'operator'
		},
		'arrow': {
			pattern: /=>/,
			alias: 'operator'
		}
	});

	Prism.languages.insertBefore('javascript', 'punctuation', {
		'property-access': {
			pattern: /(\.\s*)#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,
			lookbehind: true
		},
		'maybe-class-name': {
			pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
			lookbehind: true
		},
		'dom': {
			// this contains only a few commonly used DOM variables
			pattern: /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
			alias: 'variable'
		},
		'console': {
			pattern: /\bconsole(?=\s*\.)/,
			alias: 'class-name'
		}
	});


	// add 'maybe-class-name' to tokens which might be a class name
	var maybeClassNameTokens = ['function', 'function-variable', 'method', 'method-variable', 'property-access'];

	for (var i = 0; i < maybeClassNameTokens.length; i++) {
		var token = maybeClassNameTokens[i];
		var value = Prism.languages.javascript[token];

		// convert regex to object
		if (Prism.util.type(value) === 'RegExp') {
			value = Prism.languages.javascript[token] = {
				pattern: value
			};
		}

		// keep in mind that we don't support arrays

		var inside = value.inside || {};
		value.inside = inside;

		inside['maybe-class-name'] = /^[A-Z][\s\S]*/;
	}

}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWpzLWV4dHJhcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLEVBQUU7QUFDbEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7O0FBRUEsZ0JBQWdCLGlDQUFpQztBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBQyIsImZpbGUiOiIyMDEuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKFByaXNtKSB7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdmdW5jdGlvbi12YXJpYWJsZScsIHtcblx0XHQnbWV0aG9kLXZhcmlhYmxlJzoge1xuXHRcdFx0cGF0dGVybjogUmVnRXhwKCcoXFxcXC5cXFxccyopJyArIFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0WydmdW5jdGlvbi12YXJpYWJsZSddLnBhdHRlcm4uc291cmNlKSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRhbGlhczogWydmdW5jdGlvbi12YXJpYWJsZScsICdtZXRob2QnLCAnZnVuY3Rpb24nLCAncHJvcGVydHktYWNjZXNzJ11cblx0XHR9XG5cdH0pO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2phdmFzY3JpcHQnLCAnZnVuY3Rpb24nLCB7XG5cdFx0J21ldGhvZCc6IHtcblx0XHRcdHBhdHRlcm46IFJlZ0V4cCgnKFxcXFwuXFxcXHMqKScgKyBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFsnZnVuY3Rpb24nXS5zb3VyY2UpLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGFsaWFzOiBbJ2Z1bmN0aW9uJywgJ3Byb3BlcnR5LWFjY2VzcyddXG5cdFx0fVxuXHR9KTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdqYXZhc2NyaXB0JywgJ2NvbnN0YW50Jywge1xuXHRcdCdrbm93bi1jbGFzcy1uYW1lJzogW1xuXHRcdFx0e1xuXHRcdFx0XHQvLyBzdGFuZGFyZCBidWlsdC1pbnNcblx0XHRcdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHNcblx0XHRcdFx0cGF0dGVybjogL1xcYig/Oig/Oig/OlVpbnR8SW50KSg/Ojh8MTZ8MzIpfFVpbnQ4Q2xhbXBlZHxGbG9hdCg/OjMyfDY0KSk/QXJyYXl8QXJyYXlCdWZmZXJ8QmlnSW50fEJvb2xlYW58RGF0YVZpZXd8RGF0ZXxFcnJvcnxGdW5jdGlvbnxJbnRsfEpTT058TWF0aHxOdW1iZXJ8T2JqZWN0fFByb21pc2V8UHJveHl8UmVmbGVjdHxSZWdFeHB8U3RyaW5nfFN5bWJvbHwoPzpXZWFrKT8oPzpTZXR8TWFwKXxXZWJBc3NlbWJseSlcXGIvLFxuXHRcdFx0XHRhbGlhczogJ2NsYXNzLW5hbWUnXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHQvLyBlcnJvcnNcblx0XHRcdFx0cGF0dGVybjogL1xcYig/OltBLVpdXFx3KilFcnJvclxcYi8sXG5cdFx0XHRcdGFsaWFzOiAnY2xhc3MtbmFtZSdcblx0XHRcdH1cblx0XHRdXG5cdH0pO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0WydrZXl3b3JkJ10udW5zaGlmdChcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvXFxiKD86YXN8ZGVmYXVsdHxleHBvcnR8ZnJvbXxpbXBvcnQpXFxiLyxcblx0XHRcdGFsaWFzOiAnbW9kdWxlJ1xuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogL1xcYm51bGxcXGIvLFxuXHRcdFx0YWxpYXM6IFsnbnVsbCcsICduaWwnXVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogL1xcYnVuZGVmaW5lZFxcYi8sXG5cdFx0XHRhbGlhczogJ25pbCdcblx0XHR9XG5cdCk7XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YXNjcmlwdCcsICdvcGVyYXRvcicsIHtcblx0XHQnc3ByZWFkJzoge1xuXHRcdFx0cGF0dGVybjogL1xcLnszfS8sXG5cdFx0XHRhbGlhczogJ29wZXJhdG9yJ1xuXHRcdH0sXG5cdFx0J2Fycm93Jzoge1xuXHRcdFx0cGF0dGVybjogLz0+Lyxcblx0XHRcdGFsaWFzOiAnb3BlcmF0b3InXG5cdFx0fVxuXHR9KTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdqYXZhc2NyaXB0JywgJ3B1bmN0dWF0aW9uJywge1xuXHRcdCdwcm9wZXJ0eS1hY2Nlc3MnOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKFxcLlxccyopIz9bXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdCdtYXliZS1jbGFzcy1uYW1lJzoge1xuXHRcdFx0cGF0dGVybjogLyhefFteJFxcd1xceEEwLVxcdUZGRkZdKVtBLVpdWyRcXHdcXHhBMC1cXHVGRkZGXSsvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cdFx0J2RvbSc6IHtcblx0XHRcdC8vIHRoaXMgY29udGFpbnMgb25seSBhIGZldyBjb21tb25seSB1c2VkIERPTSB2YXJpYWJsZXNcblx0XHRcdHBhdHRlcm46IC9cXGIoPzpkb2N1bWVudHxsb2NhdGlvbnxuYXZpZ2F0b3J8cGVyZm9ybWFuY2V8KD86bG9jYWx8c2Vzc2lvbilTdG9yYWdlfHdpbmRvdylcXGIvLFxuXHRcdFx0YWxpYXM6ICd2YXJpYWJsZSdcblx0XHR9LFxuXHRcdCdjb25zb2xlJzoge1xuXHRcdFx0cGF0dGVybjogL1xcYmNvbnNvbGUoPz1cXHMqXFwuKS8sXG5cdFx0XHRhbGlhczogJ2NsYXNzLW5hbWUnXG5cdFx0fVxuXHR9KTtcblxuXG5cdC8vIGFkZCAnbWF5YmUtY2xhc3MtbmFtZScgdG8gdG9rZW5zIHdoaWNoIG1pZ2h0IGJlIGEgY2xhc3MgbmFtZVxuXHR2YXIgbWF5YmVDbGFzc05hbWVUb2tlbnMgPSBbJ2Z1bmN0aW9uJywgJ2Z1bmN0aW9uLXZhcmlhYmxlJywgJ21ldGhvZCcsICdtZXRob2QtdmFyaWFibGUnLCAncHJvcGVydHktYWNjZXNzJ107XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXliZUNsYXNzTmFtZVRva2Vucy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0b2tlbiA9IG1heWJlQ2xhc3NOYW1lVG9rZW5zW2ldO1xuXHRcdHZhciB2YWx1ZSA9IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0W3Rva2VuXTtcblxuXHRcdC8vIGNvbnZlcnQgcmVnZXggdG8gb2JqZWN0XG5cdFx0aWYgKFByaXNtLnV0aWwudHlwZSh2YWx1ZSkgPT09ICdSZWdFeHAnKSB7XG5cdFx0XHR2YWx1ZSA9IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0W3Rva2VuXSA9IHtcblx0XHRcdFx0cGF0dGVybjogdmFsdWVcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8ga2VlcCBpbiBtaW5kIHRoYXQgd2UgZG9uJ3Qgc3VwcG9ydCBhcnJheXNcblxuXHRcdHZhciBpbnNpZGUgPSB2YWx1ZS5pbnNpZGUgfHwge307XG5cdFx0dmFsdWUuaW5zaWRlID0gaW5zaWRlO1xuXG5cdFx0aW5zaWRlWydtYXliZS1jbGFzcy1uYW1lJ10gPSAvXltBLVpdW1xcc1xcU10qLztcblx0fVxuXG59KFByaXNtKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9