(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[370],{

/***/ "./node_modules/prismjs/components/prism-shell-session.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-shell-session.min.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(n){var s=["([\"'])(?:\\\\[^]|\\$\\([^)]+\\)|`[^`]+`|(?!\\1)[^\\\\])*\\1","<<-?\\s*(\\w+?)[ \t]*(?!.)[^]*?[\r\n]\\2","<<-?\\s*([\"'])(\\w+)\\3[ \t]*(?!.)[^]*?[\r\n]\\4"].join("|");n.languages["shell-session"]={info:{pattern:/^[^\r\n$#*!]+(?=[$#])/m,alias:"punctuation",inside:{path:{pattern:/(:)[\s\S]+/,lookbehind:!0},user:/^[^\s@:$#*!/\\]+@[^\s@:$#*!/\\]+(?=:|$)/,punctuation:/:/}},command:{pattern:RegExp("[$#](?:[^\\\\\r\n'\"<]|\\\\.|<<str>>)+".replace(/<<str>>/g,function(){return s})),greedy:!0,inside:{bash:{pattern:/(^[$#]\s*)[\s\S]+/,lookbehind:!0,alias:"language-bash",inside:n.languages.bash},"shell-symbol":{pattern:/^[$#]/,alias:"important"}}},output:/.(?:.*(?:[\r\n]|.$))*/}}(Prism);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXNoZWxsLXNlc3Npb24ubWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGFBQWEsZ0xBQWdMLDhCQUE4QixNQUFNLDZEQUE2RCxNQUFNLG1DQUFtQyxpRUFBaUUsVUFBVSxzRkFBc0YsU0FBUyxxQkFBcUIsTUFBTSx3RkFBd0YsaUJBQWlCLG9DQUFvQyxpQ0FBaUMsUSIsImZpbGUiOiIzNzAuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24obil7dmFyIHM9W1wiKFtcXFwiJ10pKD86XFxcXFxcXFxbXl18XFxcXCRcXFxcKFteKV0rXFxcXCl8YFteYF0rYHwoPyFcXFxcMSlbXlxcXFxcXFxcXSkqXFxcXDFcIixcIjw8LT9cXFxccyooXFxcXHcrPylbIFxcdF0qKD8hLilbXl0qP1tcXHJcXG5dXFxcXDJcIixcIjw8LT9cXFxccyooW1xcXCInXSkoXFxcXHcrKVxcXFwzWyBcXHRdKig/IS4pW15dKj9bXFxyXFxuXVxcXFw0XCJdLmpvaW4oXCJ8XCIpO24ubGFuZ3VhZ2VzW1wic2hlbGwtc2Vzc2lvblwiXT17aW5mbzp7cGF0dGVybjovXlteXFxyXFxuJCMqIV0rKD89WyQjXSkvbSxhbGlhczpcInB1bmN0dWF0aW9uXCIsaW5zaWRlOntwYXRoOntwYXR0ZXJuOi8oOilbXFxzXFxTXSsvLGxvb2tiZWhpbmQ6ITB9LHVzZXI6L15bXlxcc0A6JCMqIS9cXFxcXStAW15cXHNAOiQjKiEvXFxcXF0rKD89OnwkKS8scHVuY3R1YXRpb246LzovfX0sY29tbWFuZDp7cGF0dGVybjpSZWdFeHAoXCJbJCNdKD86W15cXFxcXFxcXFxcclxcbidcXFwiPF18XFxcXFxcXFwufDw8c3RyPj4pK1wiLnJlcGxhY2UoLzw8c3RyPj4vZyxmdW5jdGlvbigpe3JldHVybiBzfSkpLGdyZWVkeTohMCxpbnNpZGU6e2Jhc2g6e3BhdHRlcm46LyheWyQjXVxccyopW1xcc1xcU10rLyxsb29rYmVoaW5kOiEwLGFsaWFzOlwibGFuZ3VhZ2UtYmFzaFwiLGluc2lkZTpuLmxhbmd1YWdlcy5iYXNofSxcInNoZWxsLXN5bWJvbFwiOntwYXR0ZXJuOi9eWyQjXS8sYWxpYXM6XCJpbXBvcnRhbnRcIn19fSxvdXRwdXQ6Ly4oPzouKig/OltcXHJcXG5dfC4kKSkqL319KFByaXNtKTsiXSwic291cmNlUm9vdCI6IiJ9