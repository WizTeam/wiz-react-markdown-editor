(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[185],{

/***/ "./node_modules/prismjs/components/prism-j.js":
/*!****************************************************!*\
  !*** ./node_modules/prismjs/components/prism-j.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.j = {
	'comment': /\bNB\..*/,
	'string': {
		pattern: /'(?:''|[^'\r\n])*'/,
		greedy: true
	},
	'keyword': /\b(?:(?:adverb|conjunction|CR|def|define|dyad|LF|monad|noun|verb)\b|(?:assert|break|case|catch[dt]?|continue|do|else|elseif|end|fcase|for|for_\w+|goto_\w+|if|label_\w+|return|select|throw|try|while|whilst)\.)/,
	'verb': {
		// Negative look-ahead prevents bad highlighting
		// of ^: ;. =. =: !. !:
		pattern: /(?!\^:|;\.|[=!][.:])(?:\{(?:\.|::?)?|p(?:\.\.?|:)|[=!\]]|[<>+*\-%$|,#][.:]?|[?^]\.?|[;\[]:?|[~}"i][.:]|[ACeEIjLor]\.|(?:[_\/\\qsux]|_?\d):)/,
		alias: 'keyword'
	},
	'number': /\b_?(?:(?!\d:)\d+(?:\.\d+)?(?:(?:[ejpx]|ad|ar)_?\d+(?:\.\d+)?)*(?:b_?[\da-z]+(?:\.[\da-z]+)?)?|_\b(?!\.))/,
	'adverb': {
		pattern: /[~}]|[\/\\]\.?|[bfM]\.|t[.:]/,
		alias: 'builtin'
	},
	'operator': /[=a][.:]|_\./,
	'conjunction': {
		pattern: /&(?:\.:?|:)?|[.:@][.:]?|[!D][.:]|[;dHT]\.|`:?|[\^LS]:|"/,
		alias: 'variable'
	},
	'punctuation': /[()]/
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWouanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osb0JBQW9CLGlCQUFpQiw2REFBNkQsU0FBUztBQUMzRztBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQSxFQUFFO0FBQ0Y7QUFDQSIsImZpbGUiOiIxODUuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJQcmlzbS5sYW5ndWFnZXMuaiA9IHtcblx0J2NvbW1lbnQnOiAvXFxiTkJcXC4uKi8sXG5cdCdzdHJpbmcnOiB7XG5cdFx0cGF0dGVybjogLycoPzonJ3xbXidcXHJcXG5dKSonLyxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0J2tleXdvcmQnOiAvXFxiKD86KD86YWR2ZXJifGNvbmp1bmN0aW9ufENSfGRlZnxkZWZpbmV8ZHlhZHxMRnxtb25hZHxub3VufHZlcmIpXFxifCg/OmFzc2VydHxicmVha3xjYXNlfGNhdGNoW2R0XT98Y29udGludWV8ZG98ZWxzZXxlbHNlaWZ8ZW5kfGZjYXNlfGZvcnxmb3JfXFx3K3xnb3RvX1xcdyt8aWZ8bGFiZWxfXFx3K3xyZXR1cm58c2VsZWN0fHRocm93fHRyeXx3aGlsZXx3aGlsc3QpXFwuKS8sXG5cdCd2ZXJiJzoge1xuXHRcdC8vIE5lZ2F0aXZlIGxvb2stYWhlYWQgcHJldmVudHMgYmFkIGhpZ2hsaWdodGluZ1xuXHRcdC8vIG9mIF46IDsuID0uID06ICEuICE6XG5cdFx0cGF0dGVybjogLyg/IVxcXjp8O1xcLnxbPSFdWy46XSkoPzpcXHsoPzpcXC58Ojo/KT98cCg/OlxcLlxcLj98Oil8Wz0hXFxdXXxbPD4rKlxcLSUkfCwjXVsuOl0/fFs/Xl1cXC4/fFs7XFxbXTo/fFt+fVwiaV1bLjpdfFtBQ2VFSWpMb3JdXFwufCg/OltfXFwvXFxcXHFzdXhdfF8/XFxkKTopLyxcblx0XHRhbGlhczogJ2tleXdvcmQnXG5cdH0sXG5cdCdudW1iZXInOiAvXFxiXz8oPzooPyFcXGQ6KVxcZCsoPzpcXC5cXGQrKT8oPzooPzpbZWpweF18YWR8YXIpXz9cXGQrKD86XFwuXFxkKyk/KSooPzpiXz9bXFxkYS16XSsoPzpcXC5bXFxkYS16XSspPyk/fF9cXGIoPyFcXC4pKS8sXG5cdCdhZHZlcmInOiB7XG5cdFx0cGF0dGVybjogL1t+fV18W1xcL1xcXFxdXFwuP3xbYmZNXVxcLnx0Wy46XS8sXG5cdFx0YWxpYXM6ICdidWlsdGluJ1xuXHR9LFxuXHQnb3BlcmF0b3InOiAvWz1hXVsuOl18X1xcLi8sXG5cdCdjb25qdW5jdGlvbic6IHtcblx0XHRwYXR0ZXJuOiAvJig/OlxcLjo/fDopP3xbLjpAXVsuOl0/fFshRF1bLjpdfFs7ZEhUXVxcLnxgOj98W1xcXkxTXTp8XCIvLFxuXHRcdGFsaWFzOiAndmFyaWFibGUnXG5cdH0sXG5cdCdwdW5jdHVhdGlvbic6IC9bKCldL1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=