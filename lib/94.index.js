(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ "./node_modules/prismjs/components/prism-diff.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-diff.min.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(i){i.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d+.*$/m]};var r={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(r).forEach(function(e){var n=r[e],a=[];/^\w+$/.test(e)||a.push(/\w+/.exec(e)[0]),"diff"===e&&a.push("bold"),i.languages.diff[e]={pattern:RegExp("^(?:["+n+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:a,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(e)[0]}}}}),Object.defineProperty(i.languages.diff,"PREFIXES",{value:r})}(Prism);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWRpZmYubWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGFBQWEsa0JBQWtCLGVBQWUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLGdDQUFnQyxPQUFPLHdHQUF3RyxtQ0FBbUMsZ0JBQWdCLDBGQUEwRiwrRUFBK0UsTUFBTSxxREFBcUQsU0FBUywyQ0FBMkMscURBQXFELFFBQVEsRUFBRSxRIiwiZmlsZSI6Ijk0LmluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGkpe2kubGFuZ3VhZ2VzLmRpZmY9e2Nvb3JkOlsvXig/OlxcKnszfXwtezN9fFxcK3szfSkuKiQvbSwvXkBALipAQCQvbSwvXlxcZCsuKiQvbV19O3ZhciByPXtcImRlbGV0ZWQtc2lnblwiOlwiLVwiLFwiZGVsZXRlZC1hcnJvd1wiOlwiPFwiLFwiaW5zZXJ0ZWQtc2lnblwiOlwiK1wiLFwiaW5zZXJ0ZWQtYXJyb3dcIjpcIj5cIix1bmNoYW5nZWQ6XCIgXCIsZGlmZjpcIiFcIn07T2JqZWN0LmtleXMocikuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgbj1yW2VdLGE9W107L15cXHcrJC8udGVzdChlKXx8YS5wdXNoKC9cXHcrLy5leGVjKGUpWzBdKSxcImRpZmZcIj09PWUmJmEucHVzaChcImJvbGRcIiksaS5sYW5ndWFnZXMuZGlmZltlXT17cGF0dGVybjpSZWdFeHAoXCJeKD86W1wiK24rXCJdLiooPzpcXHJcXG4/fFxcbnwoPyFbXFxcXHNcXFxcU10pKSkrXCIsXCJtXCIpLGFsaWFzOmEsaW5zaWRlOntsaW5lOntwYXR0ZXJuOi8oLikoPz1bXFxzXFxTXSkuKig/Olxcclxcbj98XFxuKT8vLGxvb2tiZWhpbmQ6ITB9LHByZWZpeDp7cGF0dGVybjovW1xcc1xcU10vLGFsaWFzOi9cXHcrLy5leGVjKGUpWzBdfX19fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGkubGFuZ3VhZ2VzLmRpZmYsXCJQUkVGSVhFU1wiLHt2YWx1ZTpyfSl9KFByaXNtKTsiXSwic291cmNlUm9vdCI6IiJ9