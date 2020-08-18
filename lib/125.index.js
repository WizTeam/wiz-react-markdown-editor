(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[125],{

/***/ "./node_modules/prismjs/components/prism-flow.js":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/components/prism-flow.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {
	Prism.languages.flow = Prism.languages.extend('javascript', {});

	Prism.languages.insertBefore('flow', 'keyword', {
		'type': [
			{
				pattern: /\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/,
				alias: 'tag'
			}
		]
	});
	Prism.languages.flow['function-variable'].pattern = /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i;
	delete Prism.languages.flow['parameter'];

	Prism.languages.insertBefore('flow', 'operator', {
		'flow-punctuation': {
			pattern: /\{\||\|\}/,
			alias: 'punctuation'
		}
	});

	if (!Array.isArray(Prism.languages.flow.keyword)) {
		Prism.languages.flow.keyword = [Prism.languages.flow.keyword];
	}
	Prism.languages.flow.keyword.unshift(
		{
			pattern: /(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/,
			lookbehind: true
		},
		{
			pattern: /(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/,
			lookbehind: true
		}
	);
}(Prism));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWZsb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSwrREFBK0Q7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIxMjUuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKFByaXNtKSB7XG5cdFByaXNtLmxhbmd1YWdlcy5mbG93ID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnamF2YXNjcmlwdCcsIHt9KTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdmbG93JywgJ2tleXdvcmQnLCB7XG5cdFx0J3R5cGUnOiBbXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IC9cXGIoPzpbTm5ddW1iZXJ8W1NzXXRyaW5nfFtCYl1vb2xlYW58RnVuY3Rpb258YW55fG1peGVkfG51bGx8dm9pZClcXGIvLFxuXHRcdFx0XHRhbGlhczogJ3RhZydcblx0XHRcdH1cblx0XHRdXG5cdH0pO1xuXHRQcmlzbS5sYW5ndWFnZXMuZmxvd1snZnVuY3Rpb24tdmFyaWFibGUnXS5wYXR0ZXJuID0gL1tfJGEtelxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSooPz1cXHMqPVxccyooPzpmdW5jdGlvblxcYnwoPzpcXChbXigpXSpcXCkoPzpcXHMqOlxccypcXHcrKT98W18kYS16XFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKilcXHMqPT4pKS9pO1xuXHRkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLmZsb3dbJ3BhcmFtZXRlciddO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2Zsb3cnLCAnb3BlcmF0b3InLCB7XG5cdFx0J2Zsb3ctcHVuY3R1YXRpb24nOiB7XG5cdFx0XHRwYXR0ZXJuOiAvXFx7XFx8fFxcfFxcfS8sXG5cdFx0XHRhbGlhczogJ3B1bmN0dWF0aW9uJ1xuXHRcdH1cblx0fSk7XG5cblx0aWYgKCFBcnJheS5pc0FycmF5KFByaXNtLmxhbmd1YWdlcy5mbG93LmtleXdvcmQpKSB7XG5cdFx0UHJpc20ubGFuZ3VhZ2VzLmZsb3cua2V5d29yZCA9IFtQcmlzbS5sYW5ndWFnZXMuZmxvdy5rZXl3b3JkXTtcblx0fVxuXHRQcmlzbS5sYW5ndWFnZXMuZmxvdy5rZXl3b3JkLnVuc2hpZnQoXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhefFteJF1cXGIpKD86dHlwZXxvcGFxdWV8ZGVjbGFyZXxDbGFzcylcXGIoPyFcXCQpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXiRdXFxCKVxcJCg/OmF3YWl0fERpZmZ8RXhhY3R8S2V5c3xPYmpNYXB8UHJvcGVydHlUeXBlfFNoYXBlfFJlY29yZHxTdXBlcnR5cGV8U3VidHlwZXxFbnVtKVxcYig/IVxcJCkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH1cblx0KTtcbn0oUHJpc20pKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=