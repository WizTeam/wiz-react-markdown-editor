(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[99],{

/***/ "./node_modules/prismjs/components/prism-docker.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-docker.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Prism.languages.docker = {
	'keyword': {
		pattern: /(^\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)/mi,
		lookbehind: true
	},
	'string': /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
	'comment': {
		pattern: /#.*/,
		greedy: true
	},
	'punctuation': /---|\.\.\.|[:[\]{}\-,|>?]/
};

Prism.languages.dockerfile = Prism.languages.docker;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWRvY2tlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixtQ0FBbUM7QUFDbkM7O0FBRUEiLCJmaWxlIjoiOTkuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJQcmlzbS5sYW5ndWFnZXMuZG9ja2VyID0ge1xuXHQna2V5d29yZCc6IHtcblx0XHRwYXR0ZXJuOiAvKF5cXHMqKSg/OkFERHxBUkd8Q01EfENPUFl8RU5UUllQT0lOVHxFTlZ8RVhQT1NFfEZST018SEVBTFRIQ0hFQ0t8TEFCRUx8TUFJTlRBSU5FUnxPTkJVSUxEfFJVTnxTSEVMTHxTVE9QU0lHTkFMfFVTRVJ8Vk9MVU1FfFdPUktESVIpKD89XFxzKS9taSxcblx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdH0sXG5cdCdzdHJpbmcnOiAvKFwifCcpKD86KD8hXFwxKVteXFxcXFxcclxcbl18XFxcXCg/OlxcclxcbnxbXFxzXFxTXSkpKlxcMS8sXG5cdCdjb21tZW50Jzoge1xuXHRcdHBhdHRlcm46IC8jLiovLFxuXHRcdGdyZWVkeTogdHJ1ZVxuXHR9LFxuXHQncHVuY3R1YXRpb24nOiAvLS0tfFxcLlxcLlxcLnxbOltcXF17fVxcLSx8Pj9dL1xufTtcblxuUHJpc20ubGFuZ3VhZ2VzLmRvY2tlcmZpbGUgPSBQcmlzbS5sYW5ndWFnZXMuZG9ja2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==