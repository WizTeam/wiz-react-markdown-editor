(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[433],{

/***/ "./node_modules/prismjs/components/prism-visual-basic.js":
/*!***************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-visual-basic.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages['visual-basic'] = {
	'comment': {
		pattern: /(?:['‘’]|REM\b)(?:[^\r\n_]|_(?:\r\n?|\n)?)*/i,
		inside: {
			'keyword': /^REM/i
		}
	},
	'directive': {
		pattern: /#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:[^\S\r\n]_[^\S\r\n]*(?:\r\n?|\n)|.)+/i,
		alias: 'comment',
		greedy: true
	},
	'string': {
		pattern: /\$?["“”](?:["“”]{2}|[^"“”])*["“”]C?/i,
		greedy: true
	},
	'date': {
		pattern: /#[^\S\r\n]*(?:\d+([/-])\d+\1\d+(?:[^\S\r\n]+(?:\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?))?|\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?)[^\S\r\n]*#/i,
		alias: 'builtin'
	},
	'number': /(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:U?[ILS]|[FRD])?/i,
	'boolean': /\b(?:True|False|Nothing)\b/i,
	'keyword': /\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Currency|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|Type|TypeOf|U(?:Integer|Long|Short)|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Until|Xor)\b/i,
	'operator': [
		/[+\-*/\\^<=>&#@$%!]/,
		{
			pattern: /([^\S\r\n])_(?=[^\S\r\n]*[\r\n])/,
			lookbehind: true
		}
	],
	'punctuation': /[{}().,:?]/
};

Prism.languages.vb = Prism.languages['visual-basic'];
Prism.languages.vba = Prism.languages['visual-basic'];


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXZpc3VhbC1iYXNpYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSw2QkFBNkIsRUFBRTtBQUMvQjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQSIsImZpbGUiOiI0MzMuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJQcmlzbS5sYW5ndWFnZXNbJ3Zpc3VhbC1iYXNpYyddID0ge1xuXHQnY29tbWVudCc6IHtcblx0XHRwYXR0ZXJuOiAvKD86WyfigJjigJldfFJFTVxcYikoPzpbXlxcclxcbl9dfF8oPzpcXHJcXG4/fFxcbik/KSovaSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdCdrZXl3b3JkJzogL15SRU0vaVxuXHRcdH1cblx0fSxcblx0J2RpcmVjdGl2ZSc6IHtcblx0XHRwYXR0ZXJuOiAvIyg/OkNvbnN0fEVsc2V8RWxzZUlmfEVuZHxFeHRlcm5hbENoZWNrc3VtfEV4dGVybmFsU291cmNlfElmfFJlZ2lvbikoPzpbXlxcU1xcclxcbl1fW15cXFNcXHJcXG5dKig/Olxcclxcbj98XFxuKXwuKSsvaSxcblx0XHRhbGlhczogJ2NvbW1lbnQnLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQnc3RyaW5nJzoge1xuXHRcdHBhdHRlcm46IC9cXCQ/W1wi4oCc4oCdXSg/OltcIuKAnOKAnV17Mn18W15cIuKAnOKAnV0pKltcIuKAnOKAnV1DPy9pLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQnZGF0ZSc6IHtcblx0XHRwYXR0ZXJuOiAvI1teXFxTXFxyXFxuXSooPzpcXGQrKFsvLV0pXFxkK1xcMVxcZCsoPzpbXlxcU1xcclxcbl0rKD86XFxkK1teXFxTXFxyXFxuXSooPzpBTXxQTSl8XFxkKzpcXGQrKD86OlxcZCspPyg/OlteXFxTXFxyXFxuXSooPzpBTXxQTSkpPykpP3xcXGQrW15cXFNcXHJcXG5dKig/OkFNfFBNKXxcXGQrOlxcZCsoPzo6XFxkKyk/KD86W15cXFNcXHJcXG5dKig/OkFNfFBNKSk/KVteXFxTXFxyXFxuXSojL2ksXG5cdFx0YWxpYXM6ICdidWlsdGluJ1xuXHR9LFxuXHQnbnVtYmVyJzogLyg/Oig/OlxcYlxcZCsoPzpcXC5cXGQrKT98XFwuXFxkKykoPzpFWystXT9cXGQrKT98JltIT11bXFxkQS1GXSspKD86VT9bSUxTXXxbRlJEXSk/L2ksXG5cdCdib29sZWFuJzogL1xcYig/OlRydWV8RmFsc2V8Tm90aGluZylcXGIvaSxcblx0J2tleXdvcmQnOiAvXFxiKD86QWRkSGFuZGxlcnxBZGRyZXNzT2Z8QWxpYXN8QW5kKD86QWxzbyk/fEFzfEJvb2xlYW58QnlSZWZ8Qnl0ZXxCeVZhbHxDYWxsfENhc2V8Q2F0Y2h8Qyg/OkJvb2x8Qnl0ZXxDaGFyfERhdGV8RGJsfERlY3xJbnR8TG5nfE9ianxTQnl0ZXxTaG9ydHxTbmd8U3RyfFR5cGV8VUludHxVTG5nfFVTaG9ydCl8Q2hhcnxDbGFzc3xDb25zdHxDb250aW51ZXxDdXJyZW5jeXxEYXRlfERlY2ltYWx8RGVjbGFyZXxEZWZhdWx0fERlbGVnYXRlfERpbXxEaXJlY3RDYXN0fERvfERvdWJsZXxFYWNofEVsc2UoPzpJZik/fEVuZCg/OklmKT98RW51bXxFcmFzZXxFcnJvcnxFdmVudHxFeGl0fEZpbmFsbHl8Rm9yfEZyaWVuZHxGdW5jdGlvbnxHZXQoPzpUeXBlfFhNTE5hbWVzcGFjZSk/fEdsb2JhbHxHb1N1YnxHb1RvfEhhbmRsZXN8SWZ8SW1wbGVtZW50c3xJbXBvcnRzfElufEluaGVyaXRzfEludGVnZXJ8SW50ZXJmYWNlfElzfElzTm90fExldHxMaWJ8TGlrZXxMb25nfExvb3B8TWV8TW9kfE1vZHVsZXxNdXN0KD86SW5oZXJpdHxPdmVycmlkZSl8TXkoPzpCYXNlfENsYXNzKXxOYW1lc3BhY2V8TmFycm93aW5nfE5ld3xOZXh0fE5vdCg/OkluaGVyaXRhYmxlfE92ZXJyaWRhYmxlKT98T2JqZWN0fE9mfE9ufE9wZXJhdG9yfE9wdGlvbig/OmFsKT98T3IoPzpFbHNlKT98T3V0fE92ZXJsb2Fkc3xPdmVycmlkYWJsZXxPdmVycmlkZXN8UGFyYW1BcnJheXxQYXJ0aWFsfFByaXZhdGV8UHJvcGVydHl8UHJvdGVjdGVkfFB1YmxpY3xSYWlzZUV2ZW50fFJlYWRPbmx5fFJlRGltfFJlbW92ZUhhbmRsZXJ8UmVzdW1lfFJldHVybnxTQnl0ZXxTZWxlY3R8U2V0fFNoYWRvd3N8U2hhcmVkfHNob3J0fFNpbmdsZXxTdGF0aWN8U3RlcHxTdG9wfFN0cmluZ3xTdHJ1Y3R1cmV8U3VifFN5bmNMb2NrfFRoZW58VGhyb3d8VG98VHJ5fFRyeUNhc3R8VHlwZXxUeXBlT2Z8VSg/OkludGVnZXJ8TG9uZ3xTaG9ydCl8VXNpbmd8VmFyaWFudHxXZW5kfFdoZW58V2hpbGV8V2lkZW5pbmd8V2l0aCg/OkV2ZW50cyk/fFdyaXRlT25seXxVbnRpbHxYb3IpXFxiL2ksXG5cdCdvcGVyYXRvcic6IFtcblx0XHQvWytcXC0qL1xcXFxePD0+JiNAJCUhXS8sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLyhbXlxcU1xcclxcbl0pXyg/PVteXFxTXFxyXFxuXSpbXFxyXFxuXSkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH1cblx0XSxcblx0J3B1bmN0dWF0aW9uJzogL1t7fSgpLiw6P10vXG59O1xuXG5QcmlzbS5sYW5ndWFnZXMudmIgPSBQcmlzbS5sYW5ndWFnZXNbJ3Zpc3VhbC1iYXNpYyddO1xuUHJpc20ubGFuZ3VhZ2VzLnZiYSA9IFByaXNtLmxhbmd1YWdlc1sndmlzdWFsLWJhc2ljJ107XG4iXSwic291cmNlUm9vdCI6IiJ9