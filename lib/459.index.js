(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[459],{

/***/ "./node_modules/prismjs/plugins/keep-markup/prism-keep-markup.js":
/*!***********************************************************************!*\
  !*** ./node_modules/prismjs/plugins/keep-markup/prism-keep-markup.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {

	if (typeof self === 'undefined' || !self.Prism || !self.document || !document.createRange) {
		return;
	}

	Prism.plugins.KeepMarkup = true;

	Prism.hooks.add('before-highlight', function (env) {
		if (!env.element.children.length) {
			return;
		}

		if (!Prism.util.isActive(env.element, 'keep-markup', true)) {
			return;
		}

		var pos = 0;
		var data = [];
		var f = function (elt, baseNode) {
			var o = {};
			if (!baseNode) {
				// Clone the original tag to keep all attributes
				o.clone = elt.cloneNode(false);
				o.posOpen = pos;
				data.push(o);
			}
			for (var i = 0, l = elt.childNodes.length; i < l; i++) {
				var child = elt.childNodes[i];
				if (child.nodeType === 1) { // element
					f(child);
				} else if(child.nodeType === 3) { // text
					pos += child.data.length;
				}
			}
			if (!baseNode) {
				o.posClose = pos;
			}
		};
		f(env.element, true);

		if (data && data.length) {
			// data is an array of all existing tags
			env.keepMarkup = data;
		}
	});

	Prism.hooks.add('after-highlight', function (env) {
		if(env.keepMarkup && env.keepMarkup.length) {

			var walk = function (elt, nodeState) {
				for (var i = 0, l = elt.childNodes.length; i < l; i++) {

					var child = elt.childNodes[i];

					if (child.nodeType === 1) { // element
						if (!walk(child, nodeState)) {
							return false;
						}

					} else if (child.nodeType === 3) { // text
						if(!nodeState.nodeStart && nodeState.pos + child.data.length > nodeState.node.posOpen) {
							// We found the start position
							nodeState.nodeStart = child;
							nodeState.nodeStartPos = nodeState.node.posOpen - nodeState.pos;
						}
						if(nodeState.nodeStart && nodeState.pos + child.data.length >= nodeState.node.posClose) {
							// We found the end position
							nodeState.nodeEnd = child;
							nodeState.nodeEndPos = nodeState.node.posClose - nodeState.pos;
						}

						nodeState.pos += child.data.length;
					}

					if (nodeState.nodeStart && nodeState.nodeEnd) {
						// Select the range and wrap it with the clone
						var range = document.createRange();
						range.setStart(nodeState.nodeStart, nodeState.nodeStartPos);
						range.setEnd(nodeState.nodeEnd, nodeState.nodeEndPos);
						nodeState.node.clone.appendChild(range.extractContents());
						range.insertNode(nodeState.node.clone);
						range.detach();

						// Process is over
						return false;
					}
				}
				return true;
			};

			// For each tag, we walk the DOM to reinsert it
			env.keepMarkup.forEach(function (node) {
				walk(env.element, {
					node: node,
					pos: 0
				});
			});
			// Store new highlightedCode for later hooks calls
			env.highlightedCode = env.element.innerHTML;
		}
	});
}());


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL2tlZXAtbWFya3VwL3ByaXNtLWtlZXAtbWFya3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsT0FBTztBQUNwRDtBQUNBLCtCQUErQjtBQUMvQjtBQUNBLEtBQUssZ0NBQWdDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsT0FBTzs7QUFFckQ7O0FBRUEsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLGlDQUFpQztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDIiwiZmlsZSI6IjQ1OS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG5cblx0aWYgKHR5cGVvZiBzZWxmID09PSAndW5kZWZpbmVkJyB8fCAhc2VsZi5QcmlzbSB8fCAhc2VsZi5kb2N1bWVudCB8fCAhZG9jdW1lbnQuY3JlYXRlUmFuZ2UpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRQcmlzbS5wbHVnaW5zLktlZXBNYXJrdXAgPSB0cnVlO1xuXG5cdFByaXNtLmhvb2tzLmFkZCgnYmVmb3JlLWhpZ2hsaWdodCcsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHRpZiAoIWVudi5lbGVtZW50LmNoaWxkcmVuLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICghUHJpc20udXRpbC5pc0FjdGl2ZShlbnYuZWxlbWVudCwgJ2tlZXAtbWFya3VwJywgdHJ1ZSkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgcG9zID0gMDtcblx0XHR2YXIgZGF0YSA9IFtdO1xuXHRcdHZhciBmID0gZnVuY3Rpb24gKGVsdCwgYmFzZU5vZGUpIHtcblx0XHRcdHZhciBvID0ge307XG5cdFx0XHRpZiAoIWJhc2VOb2RlKSB7XG5cdFx0XHRcdC8vIENsb25lIHRoZSBvcmlnaW5hbCB0YWcgdG8ga2VlcCBhbGwgYXR0cmlidXRlc1xuXHRcdFx0XHRvLmNsb25lID0gZWx0LmNsb25lTm9kZShmYWxzZSk7XG5cdFx0XHRcdG8ucG9zT3BlbiA9IHBvcztcblx0XHRcdFx0ZGF0YS5wdXNoKG8pO1xuXHRcdFx0fVxuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIGwgPSBlbHQuY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblx0XHRcdFx0dmFyIGNoaWxkID0gZWx0LmNoaWxkTm9kZXNbaV07XG5cdFx0XHRcdGlmIChjaGlsZC5ub2RlVHlwZSA9PT0gMSkgeyAvLyBlbGVtZW50XG5cdFx0XHRcdFx0ZihjaGlsZCk7XG5cdFx0XHRcdH0gZWxzZSBpZihjaGlsZC5ub2RlVHlwZSA9PT0gMykgeyAvLyB0ZXh0XG5cdFx0XHRcdFx0cG9zICs9IGNoaWxkLmRhdGEubGVuZ3RoO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWJhc2VOb2RlKSB7XG5cdFx0XHRcdG8ucG9zQ2xvc2UgPSBwb3M7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRmKGVudi5lbGVtZW50LCB0cnVlKTtcblxuXHRcdGlmIChkYXRhICYmIGRhdGEubGVuZ3RoKSB7XG5cdFx0XHQvLyBkYXRhIGlzIGFuIGFycmF5IG9mIGFsbCBleGlzdGluZyB0YWdzXG5cdFx0XHRlbnYua2VlcE1hcmt1cCA9IGRhdGE7XG5cdFx0fVxuXHR9KTtcblxuXHRQcmlzbS5ob29rcy5hZGQoJ2FmdGVyLWhpZ2hsaWdodCcsIGZ1bmN0aW9uIChlbnYpIHtcblx0XHRpZihlbnYua2VlcE1hcmt1cCAmJiBlbnYua2VlcE1hcmt1cC5sZW5ndGgpIHtcblxuXHRcdFx0dmFyIHdhbGsgPSBmdW5jdGlvbiAoZWx0LCBub2RlU3RhdGUpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDAsIGwgPSBlbHQuY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcblxuXHRcdFx0XHRcdHZhciBjaGlsZCA9IGVsdC5jaGlsZE5vZGVzW2ldO1xuXG5cdFx0XHRcdFx0aWYgKGNoaWxkLm5vZGVUeXBlID09PSAxKSB7IC8vIGVsZW1lbnRcblx0XHRcdFx0XHRcdGlmICghd2FsayhjaGlsZCwgbm9kZVN0YXRlKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9IGVsc2UgaWYgKGNoaWxkLm5vZGVUeXBlID09PSAzKSB7IC8vIHRleHRcblx0XHRcdFx0XHRcdGlmKCFub2RlU3RhdGUubm9kZVN0YXJ0ICYmIG5vZGVTdGF0ZS5wb3MgKyBjaGlsZC5kYXRhLmxlbmd0aCA+IG5vZGVTdGF0ZS5ub2RlLnBvc09wZW4pIHtcblx0XHRcdFx0XHRcdFx0Ly8gV2UgZm91bmQgdGhlIHN0YXJ0IHBvc2l0aW9uXG5cdFx0XHRcdFx0XHRcdG5vZGVTdGF0ZS5ub2RlU3RhcnQgPSBjaGlsZDtcblx0XHRcdFx0XHRcdFx0bm9kZVN0YXRlLm5vZGVTdGFydFBvcyA9IG5vZGVTdGF0ZS5ub2RlLnBvc09wZW4gLSBub2RlU3RhdGUucG9zO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYobm9kZVN0YXRlLm5vZGVTdGFydCAmJiBub2RlU3RhdGUucG9zICsgY2hpbGQuZGF0YS5sZW5ndGggPj0gbm9kZVN0YXRlLm5vZGUucG9zQ2xvc2UpIHtcblx0XHRcdFx0XHRcdFx0Ly8gV2UgZm91bmQgdGhlIGVuZCBwb3NpdGlvblxuXHRcdFx0XHRcdFx0XHRub2RlU3RhdGUubm9kZUVuZCA9IGNoaWxkO1xuXHRcdFx0XHRcdFx0XHRub2RlU3RhdGUubm9kZUVuZFBvcyA9IG5vZGVTdGF0ZS5ub2RlLnBvc0Nsb3NlIC0gbm9kZVN0YXRlLnBvcztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0bm9kZVN0YXRlLnBvcyArPSBjaGlsZC5kYXRhLmxlbmd0aDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAobm9kZVN0YXRlLm5vZGVTdGFydCAmJiBub2RlU3RhdGUubm9kZUVuZCkge1xuXHRcdFx0XHRcdFx0Ly8gU2VsZWN0IHRoZSByYW5nZSBhbmQgd3JhcCBpdCB3aXRoIHRoZSBjbG9uZVxuXHRcdFx0XHRcdFx0dmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcblx0XHRcdFx0XHRcdHJhbmdlLnNldFN0YXJ0KG5vZGVTdGF0ZS5ub2RlU3RhcnQsIG5vZGVTdGF0ZS5ub2RlU3RhcnRQb3MpO1xuXHRcdFx0XHRcdFx0cmFuZ2Uuc2V0RW5kKG5vZGVTdGF0ZS5ub2RlRW5kLCBub2RlU3RhdGUubm9kZUVuZFBvcyk7XG5cdFx0XHRcdFx0XHRub2RlU3RhdGUubm9kZS5jbG9uZS5hcHBlbmRDaGlsZChyYW5nZS5leHRyYWN0Q29udGVudHMoKSk7XG5cdFx0XHRcdFx0XHRyYW5nZS5pbnNlcnROb2RlKG5vZGVTdGF0ZS5ub2RlLmNsb25lKTtcblx0XHRcdFx0XHRcdHJhbmdlLmRldGFjaCgpO1xuXG5cdFx0XHRcdFx0XHQvLyBQcm9jZXNzIGlzIG92ZXJcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBGb3IgZWFjaCB0YWcsIHdlIHdhbGsgdGhlIERPTSB0byByZWluc2VydCBpdFxuXHRcdFx0ZW52LmtlZXBNYXJrdXAuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuXHRcdFx0XHR3YWxrKGVudi5lbGVtZW50LCB7XG5cdFx0XHRcdFx0bm9kZTogbm9kZSxcblx0XHRcdFx0XHRwb3M6IDBcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHRcdC8vIFN0b3JlIG5ldyBoaWdobGlnaHRlZENvZGUgZm9yIGxhdGVyIGhvb2tzIGNhbGxzXG5cdFx0XHRlbnYuaGlnaGxpZ2h0ZWRDb2RlID0gZW52LmVsZW1lbnQuaW5uZXJIVE1MO1xuXHRcdH1cblx0fSk7XG59KCkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==