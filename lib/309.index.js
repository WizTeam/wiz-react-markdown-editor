(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[309],{

/***/ "./node_modules/prismjs/components/prism-powerquery.js":
/*!*************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-powerquery.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://docs.microsoft.com/en-us/powerquery-m/power-query-m-language-specification

Prism.languages.powerquery = {
    'comment': {
        pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:\/\/).*)/,
        lookbehind: true
    },
    'quoted-identifier': {
        pattern: /#"(?:[^"\r\n]|"")*"(?!")/,
        greedy: true,
        alias: 'variable'
    },
    'string': {
        pattern: /"(?:[^"\r\n]|"")*"(?!")/,
        greedy: true
    },
    'constant': [
        /\bDay\.(?:Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)\b/,
        /\bTraceLevel\.(?:Critical|Error|Information|Verbose|Warning)\b/,
        /\bOccurrence\.(?:First|Last|All)\b/,
        /\bOrder\.(?:Ascending|Descending)\b/,
        /\bRoundingMode\.(?:AwayFromZero|Down|ToEven|TowardZero|Up)\b/,
        /\bMissingField\.(?:Error|Ignore|UseNull)\b/,
        /\bQuoteStyle\.(?:Csv|None)\b/,
        /\bJoinKind\.(?:Inner|LeftOuter|RightOuter|FullOuter|LeftAnti|RightAnti)\b/,
        /\bGroupKind\.(?:Global|Local)\b/,
        /\bExtraValues\.(?:List|Ignore|Error)\b/,
        /\bJoinAlgorithm\.(?:Dynamic|PairwiseHash|SortMerge|LeftHash|RightHash|LeftIndex|RightIndex)\b/,
        /\bJoinSide\.(?:Left|Right)\b/,
        /\bPrecision\.(?:Double|Decimal)\b/,
        /\bRelativePosition\.From(?:End|Start)\b/,
        /\bTextEncoding\.(?:Ascii|BigEndianUnicode|Unicode|Utf8|Utf16|Windows)\b/,
        /\b(?:Any|Binary|Date|DateTime|DateTimeZone|Duration|Int8|Int16|Int32|Int64|Function|List|Logical|None|Number|Record|Table|Text|Time)\.Type\b/,
        /\bnull\b/
    ],
    'boolean': /\b(?:true|false)\b/,
    'keyword': /\b(?:and|as|each|else|error|if|in|is|let|meta|not|nullable|optional|or|otherwise|section|shared|then|try|type)\b|#(?:binary|date|datetime|datetimezone|duration|infinity|nan|sections|shared|table|time)\b/,
    'function': {
        pattern: /(^|[^#\w.])(?!\d)[\w.]+(?=\s*\()/,
        lookbehind: true
    },
    'data-type': {
        pattern: /\b(?:any|anynonnull|binary|date|datetime|datetimezone|duration|function|list|logical|none|number|record|table|text|time|type)\b/,
        alias: 'variable'
    },
    'number': {
        pattern: /\b0x[\da-f]+\b|(?:[+-]?(?:\b\d+\.)?\b\d+|[+-]\.\d+|(^|[^.])\B\.\d+)(?:e[+-]?\d+)?\b/i,
        lookbehind: true
    },
    'operator': /[-+*\/&?@^]|<(?:=>?|>)?|>=?|=>?|\.\.\.?/,
    'punctuation': /[,;\[\](){}]/
};

Prism.languages.pq = Prism.languages['powerquery'];
Prism.languages.mscript = Prism.languages['powerquery']

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXBvd2VycXVlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7O0FBRUE7QUFDQSx1RCIsImZpbGUiOiIzMDkuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9wb3dlcnF1ZXJ5LW0vcG93ZXItcXVlcnktbS1sYW5ndWFnZS1zcGVjaWZpY2F0aW9uXG5cblByaXNtLmxhbmd1YWdlcy5wb3dlcnF1ZXJ5ID0ge1xuICAgICdjb21tZW50Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSkoPzpcXC9cXCpbXFxzXFxTXSo/XFwqXFwvfCg/OlxcL1xcLykuKikvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICAncXVvdGVkLWlkZW50aWZpZXInOiB7XG4gICAgICAgIHBhdHRlcm46IC8jXCIoPzpbXlwiXFxyXFxuXXxcIlwiKSpcIig/IVwiKS8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICB9LFxuICAgICdzdHJpbmcnOiB7XG4gICAgICAgIHBhdHRlcm46IC9cIig/OlteXCJcXHJcXG5dfFwiXCIpKlwiKD8hXCIpLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICAnY29uc3RhbnQnOiBbXG4gICAgICAgIC9cXGJEYXlcXC4oPzpTdW5kYXl8TW9uZGF5fFR1ZXNkYXl8V2VkbmVzZGF5fFRodXJzZGF5fEZyaWRheXxTYXR1cmRheSlcXGIvLFxuICAgICAgICAvXFxiVHJhY2VMZXZlbFxcLig/OkNyaXRpY2FsfEVycm9yfEluZm9ybWF0aW9ufFZlcmJvc2V8V2FybmluZylcXGIvLFxuICAgICAgICAvXFxiT2NjdXJyZW5jZVxcLig/OkZpcnN0fExhc3R8QWxsKVxcYi8sXG4gICAgICAgIC9cXGJPcmRlclxcLig/OkFzY2VuZGluZ3xEZXNjZW5kaW5nKVxcYi8sXG4gICAgICAgIC9cXGJSb3VuZGluZ01vZGVcXC4oPzpBd2F5RnJvbVplcm98RG93bnxUb0V2ZW58VG93YXJkWmVyb3xVcClcXGIvLFxuICAgICAgICAvXFxiTWlzc2luZ0ZpZWxkXFwuKD86RXJyb3J8SWdub3JlfFVzZU51bGwpXFxiLyxcbiAgICAgICAgL1xcYlF1b3RlU3R5bGVcXC4oPzpDc3Z8Tm9uZSlcXGIvLFxuICAgICAgICAvXFxiSm9pbktpbmRcXC4oPzpJbm5lcnxMZWZ0T3V0ZXJ8UmlnaHRPdXRlcnxGdWxsT3V0ZXJ8TGVmdEFudGl8UmlnaHRBbnRpKVxcYi8sXG4gICAgICAgIC9cXGJHcm91cEtpbmRcXC4oPzpHbG9iYWx8TG9jYWwpXFxiLyxcbiAgICAgICAgL1xcYkV4dHJhVmFsdWVzXFwuKD86TGlzdHxJZ25vcmV8RXJyb3IpXFxiLyxcbiAgICAgICAgL1xcYkpvaW5BbGdvcml0aG1cXC4oPzpEeW5hbWljfFBhaXJ3aXNlSGFzaHxTb3J0TWVyZ2V8TGVmdEhhc2h8UmlnaHRIYXNofExlZnRJbmRleHxSaWdodEluZGV4KVxcYi8sXG4gICAgICAgIC9cXGJKb2luU2lkZVxcLig/OkxlZnR8UmlnaHQpXFxiLyxcbiAgICAgICAgL1xcYlByZWNpc2lvblxcLig/OkRvdWJsZXxEZWNpbWFsKVxcYi8sXG4gICAgICAgIC9cXGJSZWxhdGl2ZVBvc2l0aW9uXFwuRnJvbSg/OkVuZHxTdGFydClcXGIvLFxuICAgICAgICAvXFxiVGV4dEVuY29kaW5nXFwuKD86QXNjaWl8QmlnRW5kaWFuVW5pY29kZXxVbmljb2RlfFV0Zjh8VXRmMTZ8V2luZG93cylcXGIvLFxuICAgICAgICAvXFxiKD86QW55fEJpbmFyeXxEYXRlfERhdGVUaW1lfERhdGVUaW1lWm9uZXxEdXJhdGlvbnxJbnQ4fEludDE2fEludDMyfEludDY0fEZ1bmN0aW9ufExpc3R8TG9naWNhbHxOb25lfE51bWJlcnxSZWNvcmR8VGFibGV8VGV4dHxUaW1lKVxcLlR5cGVcXGIvLFxuICAgICAgICAvXFxibnVsbFxcYi9cbiAgICBdLFxuICAgICdib29sZWFuJzogL1xcYig/OnRydWV8ZmFsc2UpXFxiLyxcbiAgICAna2V5d29yZCc6IC9cXGIoPzphbmR8YXN8ZWFjaHxlbHNlfGVycm9yfGlmfGlufGlzfGxldHxtZXRhfG5vdHxudWxsYWJsZXxvcHRpb25hbHxvcnxvdGhlcndpc2V8c2VjdGlvbnxzaGFyZWR8dGhlbnx0cnl8dHlwZSlcXGJ8Iyg/OmJpbmFyeXxkYXRlfGRhdGV0aW1lfGRhdGV0aW1lem9uZXxkdXJhdGlvbnxpbmZpbml0eXxuYW58c2VjdGlvbnN8c2hhcmVkfHRhYmxlfHRpbWUpXFxiLyxcbiAgICAnZnVuY3Rpb24nOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXiNcXHcuXSkoPyFcXGQpW1xcdy5dKyg/PVxccypcXCgpLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgJ2RhdGEtdHlwZSc6IHtcbiAgICAgICAgcGF0dGVybjogL1xcYig/OmFueXxhbnlub25udWxsfGJpbmFyeXxkYXRlfGRhdGV0aW1lfGRhdGV0aW1lem9uZXxkdXJhdGlvbnxmdW5jdGlvbnxsaXN0fGxvZ2ljYWx8bm9uZXxudW1iZXJ8cmVjb3JkfHRhYmxlfHRleHR8dGltZXx0eXBlKVxcYi8sXG4gICAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgfSxcbiAgICAnbnVtYmVyJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXFxiMHhbXFxkYS1mXStcXGJ8KD86WystXT8oPzpcXGJcXGQrXFwuKT9cXGJcXGQrfFsrLV1cXC5cXGQrfChefFteLl0pXFxCXFwuXFxkKykoPzplWystXT9cXGQrKT9cXGIvaSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgJ29wZXJhdG9yJzogL1stKypcXC8mP0BeXXw8KD86PT4/fD4pP3w+PT98PT4/fFxcLlxcLlxcLj8vLFxuICAgICdwdW5jdHVhdGlvbic6IC9bLDtcXFtcXF0oKXt9XS9cbn07XG5cblByaXNtLmxhbmd1YWdlcy5wcSA9IFByaXNtLmxhbmd1YWdlc1sncG93ZXJxdWVyeSddO1xuUHJpc20ubGFuZ3VhZ2VzLm1zY3JpcHQgPSBQcmlzbS5sYW5ndWFnZXNbJ3Bvd2VycXVlcnknXSJdLCJzb3VyY2VSb290IjoiIn0=