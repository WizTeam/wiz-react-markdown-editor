(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[121],{

/***/ "./node_modules/prismjs/components/prism-factor.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-factor.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	var comment_inside = {
		'function': /\b(?:TODOS?|FIX(?:MES?)?|NOTES?|BUGS?|XX+|HACKS?|WARN(?:ING)?|\?{2,}|!{2,})\b/
	};
	var string_inside = {
		'number': /\\[^\s']|%\w/
	};

	var factor = {
		'comment': [
			{
				// ! single-line exclamation point comments with whitespace after/around the !
				pattern: /(^|\s)(?:! .*|!$)/,
				lookbehind: true,
				inside: comment_inside
			},

			/* from basis/multiline: */
			{
				// /* comment */, /* comment*/
				pattern: /(^|\s)\/\*\s[\s\S]*?\*\/(?=\s|$)/,
				lookbehind: true,
				greedy: true,
				inside: comment_inside
			},
			{
				// ![[ comment ]] , ![===[ comment]===]
				pattern: /(^|\s)!\[(={0,6})\[\s[\s\S]*?\]\2\](?=\s|$)/,
				lookbehind: true,
				greedy: true,
				inside: comment_inside
			}
		],

		'number': [
			{
				// basic base 10 integers 9, -9
				pattern: /(^|\s)[+-]?\d+(?=\s|$)/,
				lookbehind: true
			},
			{
				// base prefix integers 0b010 0o70 0xad 0d10 0XAD -0xa9
				pattern: /(^|\s)[+-]?0(?:b[01]+|o[0-7]+|d\d+|x[\dA-F]+)(?=\s|$)/i,
				lookbehind: true
			},
			{
				// fractional ratios 1/5 -1/5 and the literal float approximations 1/5. -1/5.
				pattern: /(^|\s)[+-]?\d+\/\d+\.?(?=\s|$)/,
				lookbehind: true
			},
			{
				// positive mixed numbers 23+1/5 +23+1/5
				pattern: /(^|\s)\+?\d+\+\d+\/\d+(?=\s|$)/,
				lookbehind: true
			},
			{
				// negative mixed numbers -23-1/5
				pattern: /(^|\s)-\d+-\d+\/\d+(?=\s|$)/,
				lookbehind: true
			},
			{
				// basic decimal floats -0.01 0. .0 .1 -.1 -1. -12.13 +12.13
				// and scientific notation with base 10 exponents 3e4 3e-4 .3e-4
				pattern: /(^|\s)[+-]?(?:\d*\.\d+|\d+\.\d*|\d+)(?:e[+-]?\d+)?(?=\s|$)/i,
				lookbehind: true
			},
			{
				// NAN literal syntax NAN: 80000deadbeef, NAN: a
				pattern: /(^|\s)NAN:\s+[\da-fA-F]+(?=\s|$)/,
				lookbehind: true
			},
			{
				/*
					base prefix floats 0x1.0p3 (8.0) 0b1.010p2 (5.0) 0x1.p1 0b1.11111111p11111...
					"The normalized hex form ±0x1.MMMMMMMMMMMMM[pP]±EEEE allows any floating-point number to be specified precisely.
					The values of MMMMMMMMMMMMM and EEEE map directly to the mantissa and exponent fields of the binary IEEE 754 representation."
					<https://docs.factorcode.org/content/article-syntax-floats.html>
				*/
				pattern: /(^|\s)[+-]?0(?:b1\.[01]*|o1\.[0-7]*|d1\.\d*|x1\.[\dA-F]*)p\d+(?=\s|$)/i,
				lookbehind: true
			}
		],

		// R/ regexp?\/\\/
		'regexp': {
			pattern: /(^|\s)R\/\s+(?:\\\S|[^\\/])*\/(?:[idmsr]*|[idmsr]+-[idmsr]+)(?=\s|$)/,
			lookbehind: true,
			alias: 'number',
			inside: {
				'variable': /\\\S/,
				'keyword': /[+?*\[\]^$(){}.|]/,
				'operator': {
					pattern: /(\/)[idmsr]+(?:-[idmsr]+)?/,
					lookbehind: true
				}
			}
		},

		'boolean': {
			pattern: /(^|\s)[tf](?=\s|$)/,
			lookbehind: true
		},

		// SBUF" asd", URL" ://...", P" /etc/"
		'custom-string': {
			pattern: /(^|\s)[A-Z0-9\-]+"\s(?:\\\S|[^"\\])*"/,
			lookbehind: true,
			greedy: true,
			alias: 'string',
			inside: {
				'number': /\\\S|%\w|\//
			}
		},

		'multiline-string': [
			{
				// STRING: name \n content \n ; -> CONSTANT: name "content" (symbol)
				pattern: /(^|\s)STRING:\s+\S+(?:\n|\r\n).*(?:\n|\r\n)\s*;(?=\s|$)/,
				lookbehind: true,
				greedy: true,
				alias: 'string',
				inside: {
					'number': string_inside.number,
					// trailing semicolon on its own line
					'semicolon-or-setlocal': {
						pattern: /((?:\n|\r\n)\s*);(?=\s|$)/,
						lookbehind: true,
						alias: 'function'
					}
				}
			},
			{
				// HEREDOC: marker \n content \n marker ; -> "content" (immediate)
				pattern: /(^|\s)HEREDOC:\s+\S+(?:\n|\r\n).*(?:\n|\r\n)\s*\S+(?=\s|$)/,
				lookbehind: true,
				greedy: true,
				alias: 'string',
				inside: string_inside
			},
			{
				// [[ string ]], [==[ string]==]
				pattern: /(^|\s)\[(={0,6})\[\s[\s\S]*?\]\2\](?=\s|$)/,
				lookbehind: true,
				greedy: true,
				alias: 'string',
				inside: string_inside
			}
		],

		'special-using': {
			pattern: /(^|\s)USING:(?:\s\S+)*(?=\s+;(?:\s|$))/,
			lookbehind: true,
			alias: 'function',
			inside: {
				// this is essentially a regex for vocab names, which i don't want to specify
				// but the USING: gets picked up as a vocab name
				'string': {
					pattern: /(\s)[^:\s]+/,
					lookbehind: true
				}
			}
		},

		/* this description of stack effect literal syntax is not complete and not as specific as theoretically possible
			trying to do better is more work and regex-computation-time than it's worth though.
			- we'd like to have the "delimiter" parts of the stack effect [ (, --, and ) ] be a different (less-important or comment-like) colour to the stack effect contents
			- we'd like if nested stack effects were treated as such rather than just appearing flat (with `inside`)
			- we'd like if the following variable name conventions were recognised specifically:
				special row variables = ..a b..
				type and stack effect annotations end with a colon = ( quot: ( a: ( -- ) -- b ) -- x ), ( x: number -- )
				word throws unconditional error = *
				any other word-like variable name = a ? q' etc

			https://docs.factorcode.org/content/article-effects.html

			these are pretty complicated to highlight properly without a real parser, and therefore out of scope
			the old pattern, which may be later useful, was: (^|\s)(?:call|execute|eval)?\((?:\s+[^"\r\n\t ]\S*)*?\s+--(?:\s+[^"\n\t ]\S*)*?\s+\)(?=\s|$)
		*/

		// current solution is not great
		'stack-effect-delimiter': [
			{
				// opening parenthesis
				pattern: /(^|\s)(?:call|execute|eval)?\((?=\s)/,
				lookbehind: true,
				alias: 'operator'
			},
			{
				// middle --
				pattern: /(\s)--(?=\s)/,
				lookbehind: true,
				alias: 'operator'
			},
			{
				// closing parenthesis
				pattern: /(\s)\)(?=\s|$)/,
				lookbehind: true,
				alias: 'operator'
			}
		],

		'combinators': {
			pattern: null,
			lookbehind: true,
			alias: 'keyword'
		},

		'kernel-builtin': {
			pattern: null,
			lookbehind: true,
			alias: 'variable'
		},

		'sequences-builtin': {
			pattern: null,
			lookbehind: true,
			alias: 'variable'
		},

		'math-builtin': {
			pattern: null,
			lookbehind: true,
			alias: 'variable'
		},

		'constructor-word': {
			// <array> but not <=>
			pattern: /(^|\s)<(?!=+>|-+>)\S+>(?=\s|$)/,
			lookbehind: true,
			alias: 'keyword'
		},

		'other-builtin-syntax': {
			pattern: null,
			lookbehind: true,
			alias: 'operator'
		},

		/*
			full list of supported word naming conventions: (the convention appears outside of the [brackets])
				set-[x]
				change-[x]
				with-[x]
				new-[x]
				>[string]
				[base]>
				[string]>[number]
				+[symbol]+
				[boolean-word]?
				?[of]
				[slot-reader]>>
				>>[slot-setter]
				[slot-writer]<<
				([implementation-detail])
				[mutater]!
				[variant]*
				[prettyprint].
				$[help-markup]

			<constructors>, SYNTAX:, etc are supported by their own patterns.

			`with` and `new` from `kernel` are their own builtins.

			see <https://docs.factorcode.org/content/article-conventions.html>
		*/
		'conventionally-named-word': {
			pattern: /(^|\s)(?!")(?:(?:set|change|with|new)-\S+|\$\S+|>[^>\s]+|[^:>\s]+>|[^>\s]+>[^>\s]+|\+[^+\s]+\+|[^?\s]+\?|\?[^?\s]+|[^>\s]+>>|>>[^>\s]+|[^<\s]+<<|\([^()\s]+\)|[^!\s]+!|[^*\s]\S*\*|[^.\s]\S*\.)(?=\s|$)/,
			lookbehind: true,
			alias: 'keyword'
		},

		'colon-syntax': {
			pattern: /(^|\s)(?:[A-Z0-9\-]+#?)?:{1,2}\s+(?:;\S+|(?!;)\S+)(?=\s|$)/,
			lookbehind: true,
			greedy: true,
			alias: 'function'
		},

		'semicolon-or-setlocal': {
			pattern: /(\s)(?:;|:>)(?=\s|$)/,
			lookbehind: true,
			alias: 'function'
		},

		// do not highlight leading } or trailing X{ at the begin/end of the file as it's invalid syntax
		'curly-brace-literal-delimiter': [
			{
				// opening
				pattern: /(^|\s)[a-z]*\{(?=\s)/i,
				lookbehind: true,
				alias: 'operator'
			},
			{
				// closing
				pattern: /(\s)\}(?=\s|$)/,
				lookbehind: true,
				alias: 'operator'
			},

		],

		// do not highlight leading ] or trailing [ at the begin/end of the file as it's invalid syntax
		'quotation-delimiter': [
			{
				// opening
				pattern: /(^|\s)\[(?=\s)/,
				lookbehind: true,
				alias: 'operator'
			},
			{
				// closing
				pattern: /(\s)\](?=\s|$)/,
				lookbehind: true,
				alias: 'operator'
			},
		],

		'normal-word': {
			pattern: /(^|\s)[^"\s]\S*(?=\s|$)/,
			lookbehind: true
		},

		/*
			basic first-class string "a"
				with escaped double-quote "a\""
				escaped backslash "\\"
				and general escapes since Factor has so many "\N"

			syntax that works in the reference implementation that isn't fully
			supported because it's an implementation detail:
				"string 1""string 2" -> 2 strings (works anyway)
				"string"5 -> string, 5
				"string"[ ] -> string, quotation
				{ "a"} -> array<string>

			the rest of those examples all properly recognise the string, but not
				the other object (number, quotation, etc)
			this is fine for a regex-only implementation.
		*/
		'string': {
			pattern: /"(?:\\\S|[^"\\])*"/,
			greedy: true,
			inside: string_inside
		}
	};

	var escape = function (str) {
		return (str+'').replace(/([.?*+\^$\[\]\\(){}|\-])/g, '\\$1');
	};

	var arrToWordsRegExp = function (arr) {
		return new RegExp(
			'(^|\\s)(?:' + arr.map(escape).join('|') + ')(?=\\s|$)'
		);
	};

	var builtins = {
		'kernel-builtin': [
			'or', '2nipd', '4drop', 'tuck', 'wrapper', 'nip', 'wrapper?', 'callstack>array', 'die', 'dupd', 'callstack', 'callstack?', '3dup', 'hashcode', 'pick', '4nip', 'build', '>boolean', 'nipd', 'clone', '5nip', 'eq?', '?', '=', 'swapd', '2over', 'clear', '2dup', 'get-retainstack', 'not', 'tuple?', 'dup', '3nipd', 'call', '-rotd', 'object', 'drop', 'assert=', 'assert?', '-rot', 'execute', 'boa', 'get-callstack', 'curried?', '3drop', 'pickd', 'overd', 'over', 'roll', '3nip', 'swap', 'and', '2nip', 'rotd', 'throw', '(clone)', 'hashcode*', 'spin', 'reach', '4dup', 'equal?', 'get-datastack', 'assert', '2drop', '<wrapper>', 'boolean?', 'identity-hashcode', 'identity-tuple?', 'null', 'composed?', 'new', '5drop', 'rot', '-roll', 'xor', 'identity-tuple', 'boolean'
		],
		'other-builtin-syntax': [
			// syntax
			'=======', 'recursive', 'flushable', '>>', '<<<<<<', 'M\\', 'B', 'PRIVATE>', '\\', '======', 'final', 'inline', 'delimiter', 'deprecated', '<PRIVATE', '>>>>>>', '<<<<<<<', 'parse-complex', 'malformed-complex', 'read-only', '>>>>>>>', 'call-next-method', '<<', 'foldable',
			// literals
			'$', '$[', '${'
		],
		'sequences-builtin': [
			'member-eq?', 'mismatch', 'append', 'assert-sequence=', 'longer', 'repetition', 'clone-like', '3sequence', 'assert-sequence?', 'last-index-from', 'reversed', 'index-from', 'cut*', 'pad-tail', 'join-as', 'remove-eq!', 'concat-as', 'but-last', 'snip', 'nths', 'nth', 'sequence', 'longest', 'slice?', '<slice>', 'remove-nth', 'tail-slice', 'empty?', 'tail*', 'member?', 'virtual-sequence?', 'set-length', 'drop-prefix', 'iota', 'unclip', 'bounds-error?', 'unclip-last-slice', 'non-negative-integer-expected', 'non-negative-integer-expected?', 'midpoint@', 'longer?', '?set-nth', '?first', 'rest-slice', 'prepend-as', 'prepend', 'fourth', 'sift', 'subseq-start', 'new-sequence', '?last', 'like', 'first4', '1sequence', 'reverse', 'slice', 'virtual@', 'repetition?', 'set-last', 'index', '4sequence', 'max-length', 'set-second', 'immutable-sequence', 'first2', 'first3', 'supremum', 'unclip-slice', 'suffix!', 'insert-nth', 'tail', '3append', 'short', 'suffix', 'concat', 'flip', 'immutable?', 'reverse!', '2sequence', 'sum', 'delete-all', 'indices', 'snip-slice', '<iota>', 'check-slice', 'sequence?', 'head', 'append-as', 'halves', 'sequence=', 'collapse-slice', '?second', 'slice-error?', 'product', 'bounds-check?', 'bounds-check', 'immutable', 'virtual-exemplar', 'harvest', 'remove', 'pad-head', 'last', 'set-fourth', 'cartesian-product', 'remove-eq', 'shorten', 'shorter', 'reversed?', 'shorter?', 'shortest', 'head-slice', 'pop*', 'tail-slice*', 'but-last-slice', 'iota?', 'append!', 'cut-slice', 'new-resizable', 'head-slice*', 'sequence-hashcode', 'pop', 'set-nth', '?nth', 'second', 'join', 'immutable-sequence?', '<reversed>', '3append-as', 'virtual-sequence', 'subseq?', 'remove-nth!', 'length', 'last-index', 'lengthen', 'assert-sequence', 'copy', 'move', 'third', 'first', 'tail?', 'set-first', 'prefix', 'bounds-error', '<repetition>', 'exchange', 'surround', 'cut', 'min-length', 'set-third', 'push-all', 'head?', 'subseq-start-from', 'delete-slice', 'rest', 'sum-lengths', 'head*', 'infimum', 'remove!', 'glue', 'slice-error', 'subseq', 'push', 'replace-slice', 'subseq-as', 'unclip-last'
		],
		'math-builtin': [
			'number=', 'next-power-of-2', '?1+', 'fp-special?', 'imaginary-part', 'float>bits', 'number?', 'fp-infinity?', 'bignum?', 'fp-snan?', 'denominator', 'gcd', '*', '+', 'fp-bitwise=', '-', 'u>=', '/', '>=', 'bitand', 'power-of-2?', 'log2-expects-positive', 'neg?', '<', 'log2', '>', 'integer?', 'number', 'bits>double', '2/', 'zero?', 'bits>float', 'float?', 'shift', 'ratio?', 'rect>', 'even?', 'ratio', 'fp-sign', 'bitnot', '>fixnum', 'complex?', '/i', 'integer>fixnum', '/f', 'sgn', '>bignum', 'next-float', 'u<', 'u>', 'mod', 'recip', 'rational', '>float', '2^', 'integer', 'fixnum?', 'neg', 'fixnum', 'sq', 'bignum', '>rect', 'bit?', 'fp-qnan?', 'simple-gcd', 'complex', '<fp-nan>', 'real', '>fraction', 'double>bits', 'bitor', 'rem', 'fp-nan-payload', 'real-part', 'log2-expects-positive?', 'prev-float', 'align', 'unordered?', 'float', 'fp-nan?', 'abs', 'bitxor', 'integer>fixnum-strict', 'u<=', 'odd?', '<=', '/mod', '>integer', 'real?', 'rational?', 'numerator'
		]
		// that's all for now
	};

	Object.keys(builtins).forEach(function (k) {
		factor[k].pattern = arrToWordsRegExp( builtins[k] );
	});

	var combinators = [
		// kernel
		'2bi', 'while', '2tri', 'bi*', '4dip', 'both?', 'same?', 'tri@', 'curry', 'prepose', '3bi', '?if', 'tri*', '2keep', '3keep', 'curried', '2keepd', 'when', '2bi*', '2tri*', '4keep', 'bi@', 'keepdd', 'do', 'unless*', 'tri-curry', 'if*', 'loop', 'bi-curry*', 'when*', '2bi@', '2tri@', 'with', '2with', 'either?', 'bi', 'until', '3dip', '3curry', 'tri-curry*', 'tri-curry@', 'bi-curry', 'keepd', 'compose', '2dip', 'if', '3tri', 'unless', 'tuple', 'keep', '2curry', 'tri', 'most', 'while*', 'dip', 'composed', 'bi-curry@',
		// sequences
		'find-last-from', 'trim-head-slice', 'map-as', 'each-from', 'none?', 'trim-tail', 'partition', 'if-empty', 'accumulate*', 'reject!', 'find-from', 'accumulate-as', 'collector-for-as', 'reject', 'map', 'map-sum', 'accumulate!', '2each-from', 'follow', 'supremum-by', 'map!', 'unless-empty', 'collector', 'padding', 'reduce-index', 'replicate-as', 'infimum-by', 'trim-tail-slice', 'count', 'find-index', 'filter', 'accumulate*!', 'reject-as', 'map-integers', 'map-find', 'reduce', 'selector', 'interleave', '2map', 'filter-as', 'binary-reduce', 'map-index-as', 'find', 'produce', 'filter!', 'replicate', 'cartesian-map', 'cartesian-each', 'find-index-from', 'map-find-last', '3map-as', '3map', 'find-last', 'selector-as', '2map-as', '2map-reduce', 'accumulate', 'each', 'each-index', 'accumulate*-as', 'when-empty', 'all?', 'collector-as', 'push-either', 'new-like', 'collector-for', '2selector', 'push-if', '2all?', 'map-reduce', '3each', 'any?', 'trim-slice', '2reduce', 'change-nth', 'produce-as', '2each', 'trim', 'trim-head', 'cartesian-find', 'map-index',
		// math
		'if-zero', 'each-integer', 'unless-zero', '(find-integer)', 'when-zero', 'find-last-integer', '(all-integers?)', 'times', '(each-integer)', 'find-integer', 'all-integers?',
		// math.combinators
		'unless-negative', 'if-positive', 'when-positive', 'when-negative', 'unless-positive', 'if-negative',
		// combinators
		'case', '2cleave', 'cond>quot', 'case>quot', '3cleave', 'wrong-values', 'to-fixed-point', 'alist>quot', 'cond', 'cleave', 'call-effect', 'recursive-hashcode', 'spread', 'deep-spread>quot',
		// combinators.short-circuit
		'2||', '0||', 'n||', '0&&', '2&&', '3||', '1||', '1&&', 'n&&', '3&&',
		// combinators.smart
		'smart-unless*', 'keep-inputs', 'reduce-outputs', 'smart-when*', 'cleave>array', 'smart-with', 'smart-apply', 'smart-if', 'inputs/outputs', 'output>sequence-n', 'map-outputs', 'map-reduce-outputs', 'dropping', 'output>array', 'smart-map-reduce', 'smart-2map-reduce', 'output>array-n', 'nullary', 'input<sequence', 'append-outputs', 'drop-inputs', 'inputs', 'smart-2reduce', 'drop-outputs', 'smart-reduce', 'preserving', 'smart-when', 'outputs', 'append-outputs-as', 'smart-unless', 'smart-if*', 'sum-outputs', 'input<sequence-unsafe', 'output>sequence',
		// tafn
	];

	factor.combinators.pattern = arrToWordsRegExp(combinators);

	Prism.languages.factor = factor;

})(Prism);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWZhY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBLGdGQUFnRixHQUFHLEdBQUcsR0FBRztBQUN6RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLDBCQUEwQixJQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLHlCQUF5QixJQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsdUNBQXVDLElBQUksT0FBTyxRQUFRO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEdBQUc7O0FBRUgsK0JBQStCLGVBQWU7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxLQUFLOztBQUVWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDIiwiZmlsZSI6IjEyMS5pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoUHJpc20pIHtcblxuXHR2YXIgY29tbWVudF9pbnNpZGUgPSB7XG5cdFx0J2Z1bmN0aW9uJzogL1xcYig/OlRPRE9TP3xGSVgoPzpNRVM/KT98Tk9URVM/fEJVR1M/fFhYK3xIQUNLUz98V0FSTig/OklORyk/fFxcP3syLH18IXsyLH0pXFxiL1xuXHR9O1xuXHR2YXIgc3RyaW5nX2luc2lkZSA9IHtcblx0XHQnbnVtYmVyJzogL1xcXFxbXlxccyddfCVcXHcvXG5cdH07XG5cblx0dmFyIGZhY3RvciA9IHtcblx0XHQnY29tbWVudCc6IFtcblx0XHRcdHtcblx0XHRcdFx0Ly8gISBzaW5nbGUtbGluZSBleGNsYW1hdGlvbiBwb2ludCBjb21tZW50cyB3aXRoIHdoaXRlc3BhY2UgYWZ0ZXIvYXJvdW5kIHRoZSAhXG5cdFx0XHRcdHBhdHRlcm46IC8oXnxcXHMpKD86ISAuKnwhJCkvLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IGNvbW1lbnRfaW5zaWRlXG5cdFx0XHR9LFxuXG5cdFx0XHQvKiBmcm9tIGJhc2lzL211bHRpbGluZTogKi9cblx0XHRcdHtcblx0XHRcdFx0Ly8gLyogY29tbWVudCAqLywgLyogY29tbWVudCovXG5cdFx0XHRcdHBhdHRlcm46IC8oXnxcXHMpXFwvXFwqXFxzW1xcc1xcU10qP1xcKlxcLyg/PVxcc3wkKS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiBjb21tZW50X2luc2lkZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gIVtbIGNvbW1lbnQgXV0gLCAhWz09PVsgY29tbWVudF09PT1dXG5cdFx0XHRcdHBhdHRlcm46IC8oXnxcXHMpIVxcWyg9ezAsNn0pXFxbXFxzW1xcc1xcU10qP1xcXVxcMlxcXSg/PVxcc3wkKS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiBjb21tZW50X2luc2lkZVxuXHRcdFx0fVxuXHRcdF0sXG5cblx0XHQnbnVtYmVyJzogW1xuXHRcdFx0e1xuXHRcdFx0XHQvLyBiYXNpYyBiYXNlIDEwIGludGVnZXJzIDksIC05XG5cdFx0XHRcdHBhdHRlcm46IC8oXnxcXHMpWystXT9cXGQrKD89XFxzfCQpLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gYmFzZSBwcmVmaXggaW50ZWdlcnMgMGIwMTAgMG83MCAweGFkIDBkMTAgMFhBRCAtMHhhOVxuXHRcdFx0XHRwYXR0ZXJuOiAvKF58XFxzKVsrLV0/MCg/OmJbMDFdK3xvWzAtN10rfGRcXGQrfHhbXFxkQS1GXSspKD89XFxzfCQpL2ksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdC8vIGZyYWN0aW9uYWwgcmF0aW9zIDEvNSAtMS81IGFuZCB0aGUgbGl0ZXJhbCBmbG9hdCBhcHByb3hpbWF0aW9ucyAxLzUuIC0xLzUuXG5cdFx0XHRcdHBhdHRlcm46IC8oXnxcXHMpWystXT9cXGQrXFwvXFxkK1xcLj8oPz1cXHN8JCkvLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHQvLyBwb3NpdGl2ZSBtaXhlZCBudW1iZXJzIDIzKzEvNSArMjMrMS81XG5cdFx0XHRcdHBhdHRlcm46IC8oXnxcXHMpXFwrP1xcZCtcXCtcXGQrXFwvXFxkKyg/PVxcc3wkKS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdC8vIG5lZ2F0aXZlIG1peGVkIG51bWJlcnMgLTIzLTEvNVxuXHRcdFx0XHRwYXR0ZXJuOiAvKF58XFxzKS1cXGQrLVxcZCtcXC9cXGQrKD89XFxzfCQpLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gYmFzaWMgZGVjaW1hbCBmbG9hdHMgLTAuMDEgMC4gLjAgLjEgLS4xIC0xLiAtMTIuMTMgKzEyLjEzXG5cdFx0XHRcdC8vIGFuZCBzY2llbnRpZmljIG5vdGF0aW9uIHdpdGggYmFzZSAxMCBleHBvbmVudHMgM2U0IDNlLTQgLjNlLTRcblx0XHRcdFx0cGF0dGVybjogLyhefFxccylbKy1dPyg/OlxcZCpcXC5cXGQrfFxcZCtcXC5cXGQqfFxcZCspKD86ZVsrLV0/XFxkKyk/KD89XFxzfCQpL2ksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdC8vIE5BTiBsaXRlcmFsIHN5bnRheCBOQU46IDgwMDAwZGVhZGJlZWYsIE5BTjogYVxuXHRcdFx0XHRwYXR0ZXJuOiAvKF58XFxzKU5BTjpcXHMrW1xcZGEtZkEtRl0rKD89XFxzfCQpLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Lypcblx0XHRcdFx0XHRiYXNlIHByZWZpeCBmbG9hdHMgMHgxLjBwMyAoOC4wKSAwYjEuMDEwcDIgKDUuMCkgMHgxLnAxIDBiMS4xMTExMTExMXAxMTExMS4uLlxuXHRcdFx0XHRcdFwiVGhlIG5vcm1hbGl6ZWQgaGV4IGZvcm0gwrEweDEuTU1NTU1NTU1NTU1NTVtwUF3CsUVFRUUgYWxsb3dzIGFueSBmbG9hdGluZy1wb2ludCBudW1iZXIgdG8gYmUgc3BlY2lmaWVkIHByZWNpc2VseS5cblx0XHRcdFx0XHRUaGUgdmFsdWVzIG9mIE1NTU1NTU1NTU1NTU0gYW5kIEVFRUUgbWFwIGRpcmVjdGx5IHRvIHRoZSBtYW50aXNzYSBhbmQgZXhwb25lbnQgZmllbGRzIG9mIHRoZSBiaW5hcnkgSUVFRSA3NTQgcmVwcmVzZW50YXRpb24uXCJcblx0XHRcdFx0XHQ8aHR0cHM6Ly9kb2NzLmZhY3RvcmNvZGUub3JnL2NvbnRlbnQvYXJ0aWNsZS1zeW50YXgtZmxvYXRzLmh0bWw+XG5cdFx0XHRcdCovXG5cdFx0XHRcdHBhdHRlcm46IC8oXnxcXHMpWystXT8wKD86YjFcXC5bMDFdKnxvMVxcLlswLTddKnxkMVxcLlxcZCp8eDFcXC5bXFxkQS1GXSopcFxcZCsoPz1cXHN8JCkvaSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdFx0fVxuXHRcdF0sXG5cblx0XHQvLyBSLyByZWdleHA/XFwvXFxcXC9cblx0XHQncmVnZXhwJzoge1xuXHRcdFx0cGF0dGVybjogLyhefFxccylSXFwvXFxzKyg/OlxcXFxcXFN8W15cXFxcL10pKlxcLyg/OltpZG1zcl0qfFtpZG1zcl0rLVtpZG1zcl0rKSg/PVxcc3wkKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdudW1iZXInLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCd2YXJpYWJsZSc6IC9cXFxcXFxTLyxcblx0XHRcdFx0J2tleXdvcmQnOiAvWys/KlxcW1xcXV4kKCl7fS58XS8sXG5cdFx0XHRcdCdvcGVyYXRvcic6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiAvKFxcLylbaWRtc3JdKyg/Oi1baWRtc3JdKyk/Lyxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0J2Jvb2xlYW4nOiB7XG5cdFx0XHRwYXR0ZXJuOiAvKF58XFxzKVt0Zl0oPz1cXHN8JCkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cblx0XHQvLyBTQlVGXCIgYXNkXCIsIFVSTFwiIDovLy4uLlwiLCBQXCIgL2V0Yy9cIlxuXHRcdCdjdXN0b20tc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogLyhefFxccylbQS1aMC05XFwtXStcIlxccyg/OlxcXFxcXFN8W15cIlxcXFxdKSpcIi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdzdHJpbmcnLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdudW1iZXInOiAvXFxcXFxcU3wlXFx3fFxcLy9cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0J211bHRpbGluZS1zdHJpbmcnOiBbXG5cdFx0XHR7XG5cdFx0XHRcdC8vIFNUUklORzogbmFtZSBcXG4gY29udGVudCBcXG4gOyAtPiBDT05TVEFOVDogbmFtZSBcImNvbnRlbnRcIiAoc3ltYm9sKVxuXHRcdFx0XHRwYXR0ZXJuOiAvKF58XFxzKVNUUklORzpcXHMrXFxTKyg/OlxcbnxcXHJcXG4pLiooPzpcXG58XFxyXFxuKVxccyo7KD89XFxzfCQpLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRhbGlhczogJ3N0cmluZycsXG5cdFx0XHRcdGluc2lkZToge1xuXHRcdFx0XHRcdCdudW1iZXInOiBzdHJpbmdfaW5zaWRlLm51bWJlcixcblx0XHRcdFx0XHQvLyB0cmFpbGluZyBzZW1pY29sb24gb24gaXRzIG93biBsaW5lXG5cdFx0XHRcdFx0J3NlbWljb2xvbi1vci1zZXRsb2NhbCc6IHtcblx0XHRcdFx0XHRcdHBhdHRlcm46IC8oKD86XFxufFxcclxcbilcXHMqKTsoPz1cXHN8JCkvLFxuXHRcdFx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0XHRcdGFsaWFzOiAnZnVuY3Rpb24nXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHQvLyBIRVJFRE9DOiBtYXJrZXIgXFxuIGNvbnRlbnQgXFxuIG1hcmtlciA7IC0+IFwiY29udGVudFwiIChpbW1lZGlhdGUpXG5cdFx0XHRcdHBhdHRlcm46IC8oXnxcXHMpSEVSRURPQzpcXHMrXFxTKyg/OlxcbnxcXHJcXG4pLiooPzpcXG58XFxyXFxuKVxccypcXFMrKD89XFxzfCQpLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0XHRhbGlhczogJ3N0cmluZycsXG5cdFx0XHRcdGluc2lkZTogc3RyaW5nX2luc2lkZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gW1sgc3RyaW5nIF1dLCBbPT1bIHN0cmluZ109PV1cblx0XHRcdFx0cGF0dGVybjogLyhefFxccylcXFsoPXswLDZ9KVxcW1xcc1tcXHNcXFNdKj9cXF1cXDJcXF0oPz1cXHN8JCkvLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGFsaWFzOiAnc3RyaW5nJyxcblx0XHRcdFx0aW5zaWRlOiBzdHJpbmdfaW5zaWRlXG5cdFx0XHR9XG5cdFx0XSxcblxuXHRcdCdzcGVjaWFsLXVzaW5nJzoge1xuXHRcdFx0cGF0dGVybjogLyhefFxccylVU0lORzooPzpcXHNcXFMrKSooPz1cXHMrOyg/Olxcc3wkKSkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGFsaWFzOiAnZnVuY3Rpb24nLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdC8vIHRoaXMgaXMgZXNzZW50aWFsbHkgYSByZWdleCBmb3Igdm9jYWIgbmFtZXMsIHdoaWNoIGkgZG9uJ3Qgd2FudCB0byBzcGVjaWZ5XG5cdFx0XHRcdC8vIGJ1dCB0aGUgVVNJTkc6IGdldHMgcGlja2VkIHVwIGFzIGEgdm9jYWIgbmFtZVxuXHRcdFx0XHQnc3RyaW5nJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IC8oXFxzKVteOlxcc10rLyxcblx0XHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyogdGhpcyBkZXNjcmlwdGlvbiBvZiBzdGFjayBlZmZlY3QgbGl0ZXJhbCBzeW50YXggaXMgbm90IGNvbXBsZXRlIGFuZCBub3QgYXMgc3BlY2lmaWMgYXMgdGhlb3JldGljYWxseSBwb3NzaWJsZVxuXHRcdFx0dHJ5aW5nIHRvIGRvIGJldHRlciBpcyBtb3JlIHdvcmsgYW5kIHJlZ2V4LWNvbXB1dGF0aW9uLXRpbWUgdGhhbiBpdCdzIHdvcnRoIHRob3VnaC5cblx0XHRcdC0gd2UnZCBsaWtlIHRvIGhhdmUgdGhlIFwiZGVsaW1pdGVyXCIgcGFydHMgb2YgdGhlIHN0YWNrIGVmZmVjdCBbICgsIC0tLCBhbmQgKSBdIGJlIGEgZGlmZmVyZW50IChsZXNzLWltcG9ydGFudCBvciBjb21tZW50LWxpa2UpIGNvbG91ciB0byB0aGUgc3RhY2sgZWZmZWN0IGNvbnRlbnRzXG5cdFx0XHQtIHdlJ2QgbGlrZSBpZiBuZXN0ZWQgc3RhY2sgZWZmZWN0cyB3ZXJlIHRyZWF0ZWQgYXMgc3VjaCByYXRoZXIgdGhhbiBqdXN0IGFwcGVhcmluZyBmbGF0ICh3aXRoIGBpbnNpZGVgKVxuXHRcdFx0LSB3ZSdkIGxpa2UgaWYgdGhlIGZvbGxvd2luZyB2YXJpYWJsZSBuYW1lIGNvbnZlbnRpb25zIHdlcmUgcmVjb2duaXNlZCBzcGVjaWZpY2FsbHk6XG5cdFx0XHRcdHNwZWNpYWwgcm93IHZhcmlhYmxlcyA9IC4uYSBiLi5cblx0XHRcdFx0dHlwZSBhbmQgc3RhY2sgZWZmZWN0IGFubm90YXRpb25zIGVuZCB3aXRoIGEgY29sb24gPSAoIHF1b3Q6ICggYTogKCAtLSApIC0tIGIgKSAtLSB4ICksICggeDogbnVtYmVyIC0tIClcblx0XHRcdFx0d29yZCB0aHJvd3MgdW5jb25kaXRpb25hbCBlcnJvciA9ICpcblx0XHRcdFx0YW55IG90aGVyIHdvcmQtbGlrZSB2YXJpYWJsZSBuYW1lID0gYSA/IHEnIGV0Y1xuXG5cdFx0XHRodHRwczovL2RvY3MuZmFjdG9yY29kZS5vcmcvY29udGVudC9hcnRpY2xlLWVmZmVjdHMuaHRtbFxuXG5cdFx0XHR0aGVzZSBhcmUgcHJldHR5IGNvbXBsaWNhdGVkIHRvIGhpZ2hsaWdodCBwcm9wZXJseSB3aXRob3V0IGEgcmVhbCBwYXJzZXIsIGFuZCB0aGVyZWZvcmUgb3V0IG9mIHNjb3BlXG5cdFx0XHR0aGUgb2xkIHBhdHRlcm4sIHdoaWNoIG1heSBiZSBsYXRlciB1c2VmdWwsIHdhczogKF58XFxzKSg/OmNhbGx8ZXhlY3V0ZXxldmFsKT9cXCgoPzpcXHMrW15cIlxcclxcblxcdCBdXFxTKikqP1xccystLSg/OlxccytbXlwiXFxuXFx0IF1cXFMqKSo/XFxzK1xcKSg/PVxcc3wkKVxuXHRcdCovXG5cblx0XHQvLyBjdXJyZW50IHNvbHV0aW9uIGlzIG5vdCBncmVhdFxuXHRcdCdzdGFjay1lZmZlY3QtZGVsaW1pdGVyJzogW1xuXHRcdFx0e1xuXHRcdFx0XHQvLyBvcGVuaW5nIHBhcmVudGhlc2lzXG5cdFx0XHRcdHBhdHRlcm46IC8oXnxcXHMpKD86Y2FsbHxleGVjdXRlfGV2YWwpP1xcKCg/PVxccykvLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRhbGlhczogJ29wZXJhdG9yJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gbWlkZGxlIC0tXG5cdFx0XHRcdHBhdHRlcm46IC8oXFxzKS0tKD89XFxzKS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGFsaWFzOiAnb3BlcmF0b3InXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHQvLyBjbG9zaW5nIHBhcmVudGhlc2lzXG5cdFx0XHRcdHBhdHRlcm46IC8oXFxzKVxcKSg/PVxcc3wkKS8sXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGFsaWFzOiAnb3BlcmF0b3InXG5cdFx0XHR9XG5cdFx0XSxcblxuXHRcdCdjb21iaW5hdG9ycyc6IHtcblx0XHRcdHBhdHRlcm46IG51bGwsXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdrZXl3b3JkJ1xuXHRcdH0sXG5cblx0XHQna2VybmVsLWJ1aWx0aW4nOiB7XG5cdFx0XHRwYXR0ZXJuOiBudWxsLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGFsaWFzOiAndmFyaWFibGUnXG5cdFx0fSxcblxuXHRcdCdzZXF1ZW5jZXMtYnVpbHRpbic6IHtcblx0XHRcdHBhdHRlcm46IG51bGwsXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0YWxpYXM6ICd2YXJpYWJsZSdcblx0XHR9LFxuXG5cdFx0J21hdGgtYnVpbHRpbic6IHtcblx0XHRcdHBhdHRlcm46IG51bGwsXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0YWxpYXM6ICd2YXJpYWJsZSdcblx0XHR9LFxuXG5cdFx0J2NvbnN0cnVjdG9yLXdvcmQnOiB7XG5cdFx0XHQvLyA8YXJyYXk+IGJ1dCBub3QgPD0+XG5cdFx0XHRwYXR0ZXJuOiAvKF58XFxzKTwoPyE9Kz58LSs+KVxcUys+KD89XFxzfCQpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRhbGlhczogJ2tleXdvcmQnXG5cdFx0fSxcblxuXHRcdCdvdGhlci1idWlsdGluLXN5bnRheCc6IHtcblx0XHRcdHBhdHRlcm46IG51bGwsXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdvcGVyYXRvcidcblx0XHR9LFxuXG5cdFx0Lypcblx0XHRcdGZ1bGwgbGlzdCBvZiBzdXBwb3J0ZWQgd29yZCBuYW1pbmcgY29udmVudGlvbnM6ICh0aGUgY29udmVudGlvbiBhcHBlYXJzIG91dHNpZGUgb2YgdGhlIFticmFja2V0c10pXG5cdFx0XHRcdHNldC1beF1cblx0XHRcdFx0Y2hhbmdlLVt4XVxuXHRcdFx0XHR3aXRoLVt4XVxuXHRcdFx0XHRuZXctW3hdXG5cdFx0XHRcdD5bc3RyaW5nXVxuXHRcdFx0XHRbYmFzZV0+XG5cdFx0XHRcdFtzdHJpbmddPltudW1iZXJdXG5cdFx0XHRcdCtbc3ltYm9sXStcblx0XHRcdFx0W2Jvb2xlYW4td29yZF0/XG5cdFx0XHRcdD9bb2ZdXG5cdFx0XHRcdFtzbG90LXJlYWRlcl0+PlxuXHRcdFx0XHQ+PltzbG90LXNldHRlcl1cblx0XHRcdFx0W3Nsb3Qtd3JpdGVyXTw8XG5cdFx0XHRcdChbaW1wbGVtZW50YXRpb24tZGV0YWlsXSlcblx0XHRcdFx0W211dGF0ZXJdIVxuXHRcdFx0XHRbdmFyaWFudF0qXG5cdFx0XHRcdFtwcmV0dHlwcmludF0uXG5cdFx0XHRcdCRbaGVscC1tYXJrdXBdXG5cblx0XHRcdDxjb25zdHJ1Y3RvcnM+LCBTWU5UQVg6LCBldGMgYXJlIHN1cHBvcnRlZCBieSB0aGVpciBvd24gcGF0dGVybnMuXG5cblx0XHRcdGB3aXRoYCBhbmQgYG5ld2AgZnJvbSBga2VybmVsYCBhcmUgdGhlaXIgb3duIGJ1aWx0aW5zLlxuXG5cdFx0XHRzZWUgPGh0dHBzOi8vZG9jcy5mYWN0b3Jjb2RlLm9yZy9jb250ZW50L2FydGljbGUtY29udmVudGlvbnMuaHRtbD5cblx0XHQqL1xuXHRcdCdjb252ZW50aW9uYWxseS1uYW1lZC13b3JkJzoge1xuXHRcdFx0cGF0dGVybjogLyhefFxccykoPyFcIikoPzooPzpzZXR8Y2hhbmdlfHdpdGh8bmV3KS1cXFMrfFxcJFxcUyt8PltePlxcc10rfFteOj5cXHNdKz58W14+XFxzXSs+W14+XFxzXSt8XFwrW14rXFxzXStcXCt8W14/XFxzXStcXD98XFw/W14/XFxzXSt8W14+XFxzXSs+Pnw+PltePlxcc10rfFtePFxcc10rPDx8XFwoW14oKVxcc10rXFwpfFteIVxcc10rIXxbXipcXHNdXFxTKlxcKnxbXi5cXHNdXFxTKlxcLikoPz1cXHN8JCkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGFsaWFzOiAna2V5d29yZCdcblx0XHR9LFxuXG5cdFx0J2NvbG9uLXN5bnRheCc6IHtcblx0XHRcdHBhdHRlcm46IC8oXnxcXHMpKD86W0EtWjAtOVxcLV0rIz8pPzp7MSwyfVxccysoPzo7XFxTK3woPyE7KVxcUyspKD89XFxzfCQpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRhbGlhczogJ2Z1bmN0aW9uJ1xuXHRcdH0sXG5cblx0XHQnc2VtaWNvbG9uLW9yLXNldGxvY2FsJzoge1xuXHRcdFx0cGF0dGVybjogLyhcXHMpKD86O3w6PikoPz1cXHN8JCkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGFsaWFzOiAnZnVuY3Rpb24nXG5cdFx0fSxcblxuXHRcdC8vIGRvIG5vdCBoaWdobGlnaHQgbGVhZGluZyB9IG9yIHRyYWlsaW5nIFh7IGF0IHRoZSBiZWdpbi9lbmQgb2YgdGhlIGZpbGUgYXMgaXQncyBpbnZhbGlkIHN5bnRheFxuXHRcdCdjdXJseS1icmFjZS1saXRlcmFsLWRlbGltaXRlcic6IFtcblx0XHRcdHtcblx0XHRcdFx0Ly8gb3BlbmluZ1xuXHRcdFx0XHRwYXR0ZXJuOiAvKF58XFxzKVthLXpdKlxceyg/PVxccykvaSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0YWxpYXM6ICdvcGVyYXRvcidcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdC8vIGNsb3Npbmdcblx0XHRcdFx0cGF0dGVybjogLyhcXHMpXFx9KD89XFxzfCQpLyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0YWxpYXM6ICdvcGVyYXRvcidcblx0XHRcdH0sXG5cblx0XHRdLFxuXG5cdFx0Ly8gZG8gbm90IGhpZ2hsaWdodCBsZWFkaW5nIF0gb3IgdHJhaWxpbmcgWyBhdCB0aGUgYmVnaW4vZW5kIG9mIHRoZSBmaWxlIGFzIGl0J3MgaW52YWxpZCBzeW50YXhcblx0XHQncXVvdGF0aW9uLWRlbGltaXRlcic6IFtcblx0XHRcdHtcblx0XHRcdFx0Ly8gb3BlbmluZ1xuXHRcdFx0XHRwYXR0ZXJuOiAvKF58XFxzKVxcWyg/PVxccykvLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRhbGlhczogJ29wZXJhdG9yJ1xuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gY2xvc2luZ1xuXHRcdFx0XHRwYXR0ZXJuOiAvKFxccylcXF0oPz1cXHN8JCkvLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRhbGlhczogJ29wZXJhdG9yJ1xuXHRcdFx0fSxcblx0XHRdLFxuXG5cdFx0J25vcm1hbC13b3JkJzoge1xuXHRcdFx0cGF0dGVybjogLyhefFxccylbXlwiXFxzXVxcUyooPz1cXHN8JCkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH0sXG5cblx0XHQvKlxuXHRcdFx0YmFzaWMgZmlyc3QtY2xhc3Mgc3RyaW5nIFwiYVwiXG5cdFx0XHRcdHdpdGggZXNjYXBlZCBkb3VibGUtcXVvdGUgXCJhXFxcIlwiXG5cdFx0XHRcdGVzY2FwZWQgYmFja3NsYXNoIFwiXFxcXFwiXG5cdFx0XHRcdGFuZCBnZW5lcmFsIGVzY2FwZXMgc2luY2UgRmFjdG9yIGhhcyBzbyBtYW55IFwiXFxOXCJcblxuXHRcdFx0c3ludGF4IHRoYXQgd29ya3MgaW4gdGhlIHJlZmVyZW5jZSBpbXBsZW1lbnRhdGlvbiB0aGF0IGlzbid0IGZ1bGx5XG5cdFx0XHRzdXBwb3J0ZWQgYmVjYXVzZSBpdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbDpcblx0XHRcdFx0XCJzdHJpbmcgMVwiXCJzdHJpbmcgMlwiIC0+IDIgc3RyaW5ncyAod29ya3MgYW55d2F5KVxuXHRcdFx0XHRcInN0cmluZ1wiNSAtPiBzdHJpbmcsIDVcblx0XHRcdFx0XCJzdHJpbmdcIlsgXSAtPiBzdHJpbmcsIHF1b3RhdGlvblxuXHRcdFx0XHR7IFwiYVwifSAtPiBhcnJheTxzdHJpbmc+XG5cblx0XHRcdHRoZSByZXN0IG9mIHRob3NlIGV4YW1wbGVzIGFsbCBwcm9wZXJseSByZWNvZ25pc2UgdGhlIHN0cmluZywgYnV0IG5vdFxuXHRcdFx0XHR0aGUgb3RoZXIgb2JqZWN0IChudW1iZXIsIHF1b3RhdGlvbiwgZXRjKVxuXHRcdFx0dGhpcyBpcyBmaW5lIGZvciBhIHJlZ2V4LW9ubHkgaW1wbGVtZW50YXRpb24uXG5cdFx0Ki9cblx0XHQnc3RyaW5nJzoge1xuXHRcdFx0cGF0dGVybjogL1wiKD86XFxcXFxcU3xbXlwiXFxcXF0pKlwiLyxcblx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdGluc2lkZTogc3RyaW5nX2luc2lkZVxuXHRcdH1cblx0fTtcblxuXHR2YXIgZXNjYXBlID0gZnVuY3Rpb24gKHN0cikge1xuXHRcdHJldHVybiAoc3RyKycnKS5yZXBsYWNlKC8oWy4/KitcXF4kXFxbXFxdXFxcXCgpe318XFwtXSkvZywgJ1xcXFwkMScpO1xuXHR9O1xuXG5cdHZhciBhcnJUb1dvcmRzUmVnRXhwID0gZnVuY3Rpb24gKGFycikge1xuXHRcdHJldHVybiBuZXcgUmVnRXhwKFxuXHRcdFx0JyhefFxcXFxzKSg/OicgKyBhcnIubWFwKGVzY2FwZSkuam9pbignfCcpICsgJykoPz1cXFxcc3wkKSdcblx0XHQpO1xuXHR9O1xuXG5cdHZhciBidWlsdGlucyA9IHtcblx0XHQna2VybmVsLWJ1aWx0aW4nOiBbXG5cdFx0XHQnb3InLCAnMm5pcGQnLCAnNGRyb3AnLCAndHVjaycsICd3cmFwcGVyJywgJ25pcCcsICd3cmFwcGVyPycsICdjYWxsc3RhY2s+YXJyYXknLCAnZGllJywgJ2R1cGQnLCAnY2FsbHN0YWNrJywgJ2NhbGxzdGFjaz8nLCAnM2R1cCcsICdoYXNoY29kZScsICdwaWNrJywgJzRuaXAnLCAnYnVpbGQnLCAnPmJvb2xlYW4nLCAnbmlwZCcsICdjbG9uZScsICc1bmlwJywgJ2VxPycsICc/JywgJz0nLCAnc3dhcGQnLCAnMm92ZXInLCAnY2xlYXInLCAnMmR1cCcsICdnZXQtcmV0YWluc3RhY2snLCAnbm90JywgJ3R1cGxlPycsICdkdXAnLCAnM25pcGQnLCAnY2FsbCcsICctcm90ZCcsICdvYmplY3QnLCAnZHJvcCcsICdhc3NlcnQ9JywgJ2Fzc2VydD8nLCAnLXJvdCcsICdleGVjdXRlJywgJ2JvYScsICdnZXQtY2FsbHN0YWNrJywgJ2N1cnJpZWQ/JywgJzNkcm9wJywgJ3BpY2tkJywgJ292ZXJkJywgJ292ZXInLCAncm9sbCcsICczbmlwJywgJ3N3YXAnLCAnYW5kJywgJzJuaXAnLCAncm90ZCcsICd0aHJvdycsICcoY2xvbmUpJywgJ2hhc2hjb2RlKicsICdzcGluJywgJ3JlYWNoJywgJzRkdXAnLCAnZXF1YWw/JywgJ2dldC1kYXRhc3RhY2snLCAnYXNzZXJ0JywgJzJkcm9wJywgJzx3cmFwcGVyPicsICdib29sZWFuPycsICdpZGVudGl0eS1oYXNoY29kZScsICdpZGVudGl0eS10dXBsZT8nLCAnbnVsbCcsICdjb21wb3NlZD8nLCAnbmV3JywgJzVkcm9wJywgJ3JvdCcsICctcm9sbCcsICd4b3InLCAnaWRlbnRpdHktdHVwbGUnLCAnYm9vbGVhbidcblx0XHRdLFxuXHRcdCdvdGhlci1idWlsdGluLXN5bnRheCc6IFtcblx0XHRcdC8vIHN5bnRheFxuXHRcdFx0Jz09PT09PT0nLCAncmVjdXJzaXZlJywgJ2ZsdXNoYWJsZScsICc+PicsICc8PDw8PDwnLCAnTVxcXFwnLCAnQicsICdQUklWQVRFPicsICdcXFxcJywgJz09PT09PScsICdmaW5hbCcsICdpbmxpbmUnLCAnZGVsaW1pdGVyJywgJ2RlcHJlY2F0ZWQnLCAnPFBSSVZBVEUnLCAnPj4+Pj4+JywgJzw8PDw8PDwnLCAncGFyc2UtY29tcGxleCcsICdtYWxmb3JtZWQtY29tcGxleCcsICdyZWFkLW9ubHknLCAnPj4+Pj4+PicsICdjYWxsLW5leHQtbWV0aG9kJywgJzw8JywgJ2ZvbGRhYmxlJyxcblx0XHRcdC8vIGxpdGVyYWxzXG5cdFx0XHQnJCcsICckWycsICckeydcblx0XHRdLFxuXHRcdCdzZXF1ZW5jZXMtYnVpbHRpbic6IFtcblx0XHRcdCdtZW1iZXItZXE/JywgJ21pc21hdGNoJywgJ2FwcGVuZCcsICdhc3NlcnQtc2VxdWVuY2U9JywgJ2xvbmdlcicsICdyZXBldGl0aW9uJywgJ2Nsb25lLWxpa2UnLCAnM3NlcXVlbmNlJywgJ2Fzc2VydC1zZXF1ZW5jZT8nLCAnbGFzdC1pbmRleC1mcm9tJywgJ3JldmVyc2VkJywgJ2luZGV4LWZyb20nLCAnY3V0KicsICdwYWQtdGFpbCcsICdqb2luLWFzJywgJ3JlbW92ZS1lcSEnLCAnY29uY2F0LWFzJywgJ2J1dC1sYXN0JywgJ3NuaXAnLCAnbnRocycsICdudGgnLCAnc2VxdWVuY2UnLCAnbG9uZ2VzdCcsICdzbGljZT8nLCAnPHNsaWNlPicsICdyZW1vdmUtbnRoJywgJ3RhaWwtc2xpY2UnLCAnZW1wdHk/JywgJ3RhaWwqJywgJ21lbWJlcj8nLCAndmlydHVhbC1zZXF1ZW5jZT8nLCAnc2V0LWxlbmd0aCcsICdkcm9wLXByZWZpeCcsICdpb3RhJywgJ3VuY2xpcCcsICdib3VuZHMtZXJyb3I/JywgJ3VuY2xpcC1sYXN0LXNsaWNlJywgJ25vbi1uZWdhdGl2ZS1pbnRlZ2VyLWV4cGVjdGVkJywgJ25vbi1uZWdhdGl2ZS1pbnRlZ2VyLWV4cGVjdGVkPycsICdtaWRwb2ludEAnLCAnbG9uZ2VyPycsICc/c2V0LW50aCcsICc/Zmlyc3QnLCAncmVzdC1zbGljZScsICdwcmVwZW5kLWFzJywgJ3ByZXBlbmQnLCAnZm91cnRoJywgJ3NpZnQnLCAnc3Vic2VxLXN0YXJ0JywgJ25ldy1zZXF1ZW5jZScsICc/bGFzdCcsICdsaWtlJywgJ2ZpcnN0NCcsICcxc2VxdWVuY2UnLCAncmV2ZXJzZScsICdzbGljZScsICd2aXJ0dWFsQCcsICdyZXBldGl0aW9uPycsICdzZXQtbGFzdCcsICdpbmRleCcsICc0c2VxdWVuY2UnLCAnbWF4LWxlbmd0aCcsICdzZXQtc2Vjb25kJywgJ2ltbXV0YWJsZS1zZXF1ZW5jZScsICdmaXJzdDInLCAnZmlyc3QzJywgJ3N1cHJlbXVtJywgJ3VuY2xpcC1zbGljZScsICdzdWZmaXghJywgJ2luc2VydC1udGgnLCAndGFpbCcsICczYXBwZW5kJywgJ3Nob3J0JywgJ3N1ZmZpeCcsICdjb25jYXQnLCAnZmxpcCcsICdpbW11dGFibGU/JywgJ3JldmVyc2UhJywgJzJzZXF1ZW5jZScsICdzdW0nLCAnZGVsZXRlLWFsbCcsICdpbmRpY2VzJywgJ3NuaXAtc2xpY2UnLCAnPGlvdGE+JywgJ2NoZWNrLXNsaWNlJywgJ3NlcXVlbmNlPycsICdoZWFkJywgJ2FwcGVuZC1hcycsICdoYWx2ZXMnLCAnc2VxdWVuY2U9JywgJ2NvbGxhcHNlLXNsaWNlJywgJz9zZWNvbmQnLCAnc2xpY2UtZXJyb3I/JywgJ3Byb2R1Y3QnLCAnYm91bmRzLWNoZWNrPycsICdib3VuZHMtY2hlY2snLCAnaW1tdXRhYmxlJywgJ3ZpcnR1YWwtZXhlbXBsYXInLCAnaGFydmVzdCcsICdyZW1vdmUnLCAncGFkLWhlYWQnLCAnbGFzdCcsICdzZXQtZm91cnRoJywgJ2NhcnRlc2lhbi1wcm9kdWN0JywgJ3JlbW92ZS1lcScsICdzaG9ydGVuJywgJ3Nob3J0ZXInLCAncmV2ZXJzZWQ/JywgJ3Nob3J0ZXI/JywgJ3Nob3J0ZXN0JywgJ2hlYWQtc2xpY2UnLCAncG9wKicsICd0YWlsLXNsaWNlKicsICdidXQtbGFzdC1zbGljZScsICdpb3RhPycsICdhcHBlbmQhJywgJ2N1dC1zbGljZScsICduZXctcmVzaXphYmxlJywgJ2hlYWQtc2xpY2UqJywgJ3NlcXVlbmNlLWhhc2hjb2RlJywgJ3BvcCcsICdzZXQtbnRoJywgJz9udGgnLCAnc2Vjb25kJywgJ2pvaW4nLCAnaW1tdXRhYmxlLXNlcXVlbmNlPycsICc8cmV2ZXJzZWQ+JywgJzNhcHBlbmQtYXMnLCAndmlydHVhbC1zZXF1ZW5jZScsICdzdWJzZXE/JywgJ3JlbW92ZS1udGghJywgJ2xlbmd0aCcsICdsYXN0LWluZGV4JywgJ2xlbmd0aGVuJywgJ2Fzc2VydC1zZXF1ZW5jZScsICdjb3B5JywgJ21vdmUnLCAndGhpcmQnLCAnZmlyc3QnLCAndGFpbD8nLCAnc2V0LWZpcnN0JywgJ3ByZWZpeCcsICdib3VuZHMtZXJyb3InLCAnPHJlcGV0aXRpb24+JywgJ2V4Y2hhbmdlJywgJ3N1cnJvdW5kJywgJ2N1dCcsICdtaW4tbGVuZ3RoJywgJ3NldC10aGlyZCcsICdwdXNoLWFsbCcsICdoZWFkPycsICdzdWJzZXEtc3RhcnQtZnJvbScsICdkZWxldGUtc2xpY2UnLCAncmVzdCcsICdzdW0tbGVuZ3RocycsICdoZWFkKicsICdpbmZpbXVtJywgJ3JlbW92ZSEnLCAnZ2x1ZScsICdzbGljZS1lcnJvcicsICdzdWJzZXEnLCAncHVzaCcsICdyZXBsYWNlLXNsaWNlJywgJ3N1YnNlcS1hcycsICd1bmNsaXAtbGFzdCdcblx0XHRdLFxuXHRcdCdtYXRoLWJ1aWx0aW4nOiBbXG5cdFx0XHQnbnVtYmVyPScsICduZXh0LXBvd2VyLW9mLTInLCAnPzErJywgJ2ZwLXNwZWNpYWw/JywgJ2ltYWdpbmFyeS1wYXJ0JywgJ2Zsb2F0PmJpdHMnLCAnbnVtYmVyPycsICdmcC1pbmZpbml0eT8nLCAnYmlnbnVtPycsICdmcC1zbmFuPycsICdkZW5vbWluYXRvcicsICdnY2QnLCAnKicsICcrJywgJ2ZwLWJpdHdpc2U9JywgJy0nLCAndT49JywgJy8nLCAnPj0nLCAnYml0YW5kJywgJ3Bvd2VyLW9mLTI/JywgJ2xvZzItZXhwZWN0cy1wb3NpdGl2ZScsICduZWc/JywgJzwnLCAnbG9nMicsICc+JywgJ2ludGVnZXI/JywgJ251bWJlcicsICdiaXRzPmRvdWJsZScsICcyLycsICd6ZXJvPycsICdiaXRzPmZsb2F0JywgJ2Zsb2F0PycsICdzaGlmdCcsICdyYXRpbz8nLCAncmVjdD4nLCAnZXZlbj8nLCAncmF0aW8nLCAnZnAtc2lnbicsICdiaXRub3QnLCAnPmZpeG51bScsICdjb21wbGV4PycsICcvaScsICdpbnRlZ2VyPmZpeG51bScsICcvZicsICdzZ24nLCAnPmJpZ251bScsICduZXh0LWZsb2F0JywgJ3U8JywgJ3U+JywgJ21vZCcsICdyZWNpcCcsICdyYXRpb25hbCcsICc+ZmxvYXQnLCAnMl4nLCAnaW50ZWdlcicsICdmaXhudW0/JywgJ25lZycsICdmaXhudW0nLCAnc3EnLCAnYmlnbnVtJywgJz5yZWN0JywgJ2JpdD8nLCAnZnAtcW5hbj8nLCAnc2ltcGxlLWdjZCcsICdjb21wbGV4JywgJzxmcC1uYW4+JywgJ3JlYWwnLCAnPmZyYWN0aW9uJywgJ2RvdWJsZT5iaXRzJywgJ2JpdG9yJywgJ3JlbScsICdmcC1uYW4tcGF5bG9hZCcsICdyZWFsLXBhcnQnLCAnbG9nMi1leHBlY3RzLXBvc2l0aXZlPycsICdwcmV2LWZsb2F0JywgJ2FsaWduJywgJ3Vub3JkZXJlZD8nLCAnZmxvYXQnLCAnZnAtbmFuPycsICdhYnMnLCAnYml0eG9yJywgJ2ludGVnZXI+Zml4bnVtLXN0cmljdCcsICd1PD0nLCAnb2RkPycsICc8PScsICcvbW9kJywgJz5pbnRlZ2VyJywgJ3JlYWw/JywgJ3JhdGlvbmFsPycsICdudW1lcmF0b3InXG5cdFx0XVxuXHRcdC8vIHRoYXQncyBhbGwgZm9yIG5vd1xuXHR9O1xuXG5cdE9iamVjdC5rZXlzKGJ1aWx0aW5zKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdFx0ZmFjdG9yW2tdLnBhdHRlcm4gPSBhcnJUb1dvcmRzUmVnRXhwKCBidWlsdGluc1trXSApO1xuXHR9KTtcblxuXHR2YXIgY29tYmluYXRvcnMgPSBbXG5cdFx0Ly8ga2VybmVsXG5cdFx0JzJiaScsICd3aGlsZScsICcydHJpJywgJ2JpKicsICc0ZGlwJywgJ2JvdGg/JywgJ3NhbWU/JywgJ3RyaUAnLCAnY3VycnknLCAncHJlcG9zZScsICczYmknLCAnP2lmJywgJ3RyaSonLCAnMmtlZXAnLCAnM2tlZXAnLCAnY3VycmllZCcsICcya2VlcGQnLCAnd2hlbicsICcyYmkqJywgJzJ0cmkqJywgJzRrZWVwJywgJ2JpQCcsICdrZWVwZGQnLCAnZG8nLCAndW5sZXNzKicsICd0cmktY3VycnknLCAnaWYqJywgJ2xvb3AnLCAnYmktY3VycnkqJywgJ3doZW4qJywgJzJiaUAnLCAnMnRyaUAnLCAnd2l0aCcsICcyd2l0aCcsICdlaXRoZXI/JywgJ2JpJywgJ3VudGlsJywgJzNkaXAnLCAnM2N1cnJ5JywgJ3RyaS1jdXJyeSonLCAndHJpLWN1cnJ5QCcsICdiaS1jdXJyeScsICdrZWVwZCcsICdjb21wb3NlJywgJzJkaXAnLCAnaWYnLCAnM3RyaScsICd1bmxlc3MnLCAndHVwbGUnLCAna2VlcCcsICcyY3VycnknLCAndHJpJywgJ21vc3QnLCAnd2hpbGUqJywgJ2RpcCcsICdjb21wb3NlZCcsICdiaS1jdXJyeUAnLFxuXHRcdC8vIHNlcXVlbmNlc1xuXHRcdCdmaW5kLWxhc3QtZnJvbScsICd0cmltLWhlYWQtc2xpY2UnLCAnbWFwLWFzJywgJ2VhY2gtZnJvbScsICdub25lPycsICd0cmltLXRhaWwnLCAncGFydGl0aW9uJywgJ2lmLWVtcHR5JywgJ2FjY3VtdWxhdGUqJywgJ3JlamVjdCEnLCAnZmluZC1mcm9tJywgJ2FjY3VtdWxhdGUtYXMnLCAnY29sbGVjdG9yLWZvci1hcycsICdyZWplY3QnLCAnbWFwJywgJ21hcC1zdW0nLCAnYWNjdW11bGF0ZSEnLCAnMmVhY2gtZnJvbScsICdmb2xsb3cnLCAnc3VwcmVtdW0tYnknLCAnbWFwIScsICd1bmxlc3MtZW1wdHknLCAnY29sbGVjdG9yJywgJ3BhZGRpbmcnLCAncmVkdWNlLWluZGV4JywgJ3JlcGxpY2F0ZS1hcycsICdpbmZpbXVtLWJ5JywgJ3RyaW0tdGFpbC1zbGljZScsICdjb3VudCcsICdmaW5kLWluZGV4JywgJ2ZpbHRlcicsICdhY2N1bXVsYXRlKiEnLCAncmVqZWN0LWFzJywgJ21hcC1pbnRlZ2VycycsICdtYXAtZmluZCcsICdyZWR1Y2UnLCAnc2VsZWN0b3InLCAnaW50ZXJsZWF2ZScsICcybWFwJywgJ2ZpbHRlci1hcycsICdiaW5hcnktcmVkdWNlJywgJ21hcC1pbmRleC1hcycsICdmaW5kJywgJ3Byb2R1Y2UnLCAnZmlsdGVyIScsICdyZXBsaWNhdGUnLCAnY2FydGVzaWFuLW1hcCcsICdjYXJ0ZXNpYW4tZWFjaCcsICdmaW5kLWluZGV4LWZyb20nLCAnbWFwLWZpbmQtbGFzdCcsICczbWFwLWFzJywgJzNtYXAnLCAnZmluZC1sYXN0JywgJ3NlbGVjdG9yLWFzJywgJzJtYXAtYXMnLCAnMm1hcC1yZWR1Y2UnLCAnYWNjdW11bGF0ZScsICdlYWNoJywgJ2VhY2gtaW5kZXgnLCAnYWNjdW11bGF0ZSotYXMnLCAnd2hlbi1lbXB0eScsICdhbGw/JywgJ2NvbGxlY3Rvci1hcycsICdwdXNoLWVpdGhlcicsICduZXctbGlrZScsICdjb2xsZWN0b3ItZm9yJywgJzJzZWxlY3RvcicsICdwdXNoLWlmJywgJzJhbGw/JywgJ21hcC1yZWR1Y2UnLCAnM2VhY2gnLCAnYW55PycsICd0cmltLXNsaWNlJywgJzJyZWR1Y2UnLCAnY2hhbmdlLW50aCcsICdwcm9kdWNlLWFzJywgJzJlYWNoJywgJ3RyaW0nLCAndHJpbS1oZWFkJywgJ2NhcnRlc2lhbi1maW5kJywgJ21hcC1pbmRleCcsXG5cdFx0Ly8gbWF0aFxuXHRcdCdpZi16ZXJvJywgJ2VhY2gtaW50ZWdlcicsICd1bmxlc3MtemVybycsICcoZmluZC1pbnRlZ2VyKScsICd3aGVuLXplcm8nLCAnZmluZC1sYXN0LWludGVnZXInLCAnKGFsbC1pbnRlZ2Vycz8pJywgJ3RpbWVzJywgJyhlYWNoLWludGVnZXIpJywgJ2ZpbmQtaW50ZWdlcicsICdhbGwtaW50ZWdlcnM/Jyxcblx0XHQvLyBtYXRoLmNvbWJpbmF0b3JzXG5cdFx0J3VubGVzcy1uZWdhdGl2ZScsICdpZi1wb3NpdGl2ZScsICd3aGVuLXBvc2l0aXZlJywgJ3doZW4tbmVnYXRpdmUnLCAndW5sZXNzLXBvc2l0aXZlJywgJ2lmLW5lZ2F0aXZlJyxcblx0XHQvLyBjb21iaW5hdG9yc1xuXHRcdCdjYXNlJywgJzJjbGVhdmUnLCAnY29uZD5xdW90JywgJ2Nhc2U+cXVvdCcsICczY2xlYXZlJywgJ3dyb25nLXZhbHVlcycsICd0by1maXhlZC1wb2ludCcsICdhbGlzdD5xdW90JywgJ2NvbmQnLCAnY2xlYXZlJywgJ2NhbGwtZWZmZWN0JywgJ3JlY3Vyc2l2ZS1oYXNoY29kZScsICdzcHJlYWQnLCAnZGVlcC1zcHJlYWQ+cXVvdCcsXG5cdFx0Ly8gY29tYmluYXRvcnMuc2hvcnQtY2lyY3VpdFxuXHRcdCcyfHwnLCAnMHx8JywgJ258fCcsICcwJiYnLCAnMiYmJywgJzN8fCcsICcxfHwnLCAnMSYmJywgJ24mJicsICczJiYnLFxuXHRcdC8vIGNvbWJpbmF0b3JzLnNtYXJ0XG5cdFx0J3NtYXJ0LXVubGVzcyonLCAna2VlcC1pbnB1dHMnLCAncmVkdWNlLW91dHB1dHMnLCAnc21hcnQtd2hlbionLCAnY2xlYXZlPmFycmF5JywgJ3NtYXJ0LXdpdGgnLCAnc21hcnQtYXBwbHknLCAnc21hcnQtaWYnLCAnaW5wdXRzL291dHB1dHMnLCAnb3V0cHV0PnNlcXVlbmNlLW4nLCAnbWFwLW91dHB1dHMnLCAnbWFwLXJlZHVjZS1vdXRwdXRzJywgJ2Ryb3BwaW5nJywgJ291dHB1dD5hcnJheScsICdzbWFydC1tYXAtcmVkdWNlJywgJ3NtYXJ0LTJtYXAtcmVkdWNlJywgJ291dHB1dD5hcnJheS1uJywgJ251bGxhcnknLCAnaW5wdXQ8c2VxdWVuY2UnLCAnYXBwZW5kLW91dHB1dHMnLCAnZHJvcC1pbnB1dHMnLCAnaW5wdXRzJywgJ3NtYXJ0LTJyZWR1Y2UnLCAnZHJvcC1vdXRwdXRzJywgJ3NtYXJ0LXJlZHVjZScsICdwcmVzZXJ2aW5nJywgJ3NtYXJ0LXdoZW4nLCAnb3V0cHV0cycsICdhcHBlbmQtb3V0cHV0cy1hcycsICdzbWFydC11bmxlc3MnLCAnc21hcnQtaWYqJywgJ3N1bS1vdXRwdXRzJywgJ2lucHV0PHNlcXVlbmNlLXVuc2FmZScsICdvdXRwdXQ+c2VxdWVuY2UnLFxuXHRcdC8vIHRhZm5cblx0XTtcblxuXHRmYWN0b3IuY29tYmluYXRvcnMucGF0dGVybiA9IGFyclRvV29yZHNSZWdFeHAoY29tYmluYXRvcnMpO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5mYWN0b3IgPSBmYWN0b3I7XG5cbn0pKFByaXNtKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=