(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "./node_modules/prismjs/components/prism-csharp.js":
/*!*********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-csharp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (Prism) {

	/**
	 * Replaces all placeholders "<<n>>" of given pattern with the n-th replacement (zero based).
	 *
	 * Note: This is a simple text based replacement. Be careful when using backreferences!
	 *
	 * @param {string} pattern the given pattern.
	 * @param {string[]} replacements a list of replacement which can be inserted into the given pattern.
	 * @returns {string} the pattern with all placeholders replaced with their corresponding replacements.
	 * @example replace(/a<<0>>a/.source, [/b+/.source]) === /a(?:b+)a/.source
	 */
	function replace(pattern, replacements) {
		return pattern.replace(/<<(\d+)>>/g, function (m, index) {
			return '(?:' + replacements[+index] + ')';
		});
	}
	/**
	 * @param {string} pattern
	 * @param {string[]} replacements
	 * @param {string} [flags]
	 * @returns {RegExp}
	 */
	function re(pattern, replacements, flags) {
		return RegExp(replace(pattern, replacements), flags || '');
	}

	/**
	 * Creates a nested pattern where all occurrences of the string `<<self>>` are replaced with the pattern itself.
	 *
	 * @param {string} pattern
	 * @param {number} depthLog2
	 * @returns {string}
	 */
	function nested(pattern, depthLog2) {
		for (var i = 0; i < depthLog2; i++) {
			pattern = pattern.replace(/<<self>>/g, function () { return '(?:' + pattern + ')'; });
		}
		return pattern.replace(/<<self>>/g, '[^\\s\\S]');
	}

	// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/
	var keywordKinds = {
		// keywords which represent a return or variable type
		type: 'bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void',
		// keywords which are used to declare a type
		typeDeclaration: 'class enum interface struct',
		// contextual keywords
		// ("var" and "dynamic" are missing because they are used like types)
		contextual: 'add alias and ascending async await by descending from get global group into join let nameof not notnull on or orderby partial remove select set unmanaged value when where where',
		// all other keywords
		other: 'abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield'
	};

	// keywords
	function keywordsToPattern(words) {
		return '\\b(?:' + words.trim().replace(/ /g, '|') + ')\\b';
	}
	var typeDeclarationKeywords = keywordsToPattern(keywordKinds.typeDeclaration);
	var keywords = RegExp(keywordsToPattern(keywordKinds.type + ' ' + keywordKinds.typeDeclaration + ' ' + keywordKinds.contextual + ' ' + keywordKinds.other));
	var nonTypeKeywords = keywordsToPattern(keywordKinds.typeDeclaration + ' ' + keywordKinds.contextual + ' ' + keywordKinds.other);
	var nonContextualKeywords = keywordsToPattern(keywordKinds.type + ' ' + keywordKinds.typeDeclaration + ' ' + keywordKinds.other);

	// types
	var generic = nested(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2); // the idea behind the other forbidden characters is to prevent false positives. Same for tupleElement.
	var nestedRound = nested(/\((?:[^()]|<<self>>)*\)/.source, 2);
	var name = /@?\b[A-Za-z_]\w*\b/.source;
	var genericName = replace(/<<0>>(?:\s*<<1>>)?/.source, [name, generic]);
	var identifier = replace(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [nonTypeKeywords, genericName]);
	var array = /\[\s*(?:,\s*)*\]/.source;
	var typeExpressionWithoutTuple = replace(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [identifier, array]);
	var tupleElement = replace(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [generic, nestedRound, array])
	var tuple = replace(/\(<<0>>+(?:,<<0>>+)+\)/.source, [tupleElement]);
	var typeExpression = replace(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [tuple, identifier, array]);

	var typeInside = {
		'keyword': keywords,
		'punctuation': /[<>()?,.:[\]]/
	};

	// strings & characters
	// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#character-literals
	// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#string-literals
	var character = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source; // simplified pattern
	var regularString = /"(?:\\.|[^\\"\r\n])*"/.source;
	var verbatimString = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;


	Prism.languages.csharp = Prism.languages.extend('clike', {
		'string': [
			{
				pattern: re(/(^|[^$\\])<<0>>/.source, [verbatimString]),
				lookbehind: true,
				greedy: true
			},
			{
				pattern: re(/(^|[^@$\\])<<0>>/.source, [regularString]),
				lookbehind: true,
				greedy: true
			},
			{
				pattern: RegExp(character),
				greedy: true,
				alias: 'character'
			}
		],
		'class-name': [
			{
				// Using static
				// using static System.Math;
				pattern: re(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [identifier]),
				lookbehind: true,
				inside: typeInside
			},
			{
				// Using alias (type)
				// using Project = PC.MyCompany.Project;
				pattern: re(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [name, typeExpression]),
				lookbehind: true,
				inside: typeInside
			},
			{
				// Using alias (alias)
				// using Project = PC.MyCompany.Project;
				pattern: re(/(\busing\s+)<<0>>(?=\s*=)/.source, [name]),
				lookbehind: true
			},
			{
				// Type declarations
				// class Foo<A, B>
				// interface Foo<out A, B>
				pattern: re(/(\b<<0>>\s+)<<1>>/.source, [typeDeclarationKeywords, genericName]),
				lookbehind: true,
				inside: typeInside
			},
			{
				// Single catch exception declaration
				// catch(Foo)
				// (things like catch(Foo e) is covered by variable declaration)
				pattern: re(/(\bcatch\s*\(\s*)<<0>>/.source, [identifier]),
				lookbehind: true,
				inside: typeInside
			},
			{
				// Name of the type parameter of generic constraints
				// where Foo : class
				pattern: re(/(\bwhere\s+)<<0>>/.source, [name]),
				lookbehind: true
			},
			{
				// Casts and checks via as and is.
				// as Foo<A>, is Bar<B>
				// (things like if(a is Foo b) is covered by variable declaration)
				pattern: re(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [typeExpressionWithoutTuple]),
				lookbehind: true,
				inside: typeInside
			},
			{
				// Variable, field and parameter declaration
				// (Foo bar, Bar baz, Foo[,,] bay, Foo<Bar, FooBar<Bar>> bax)
				pattern: re(/\b<<0>>(?=\s+(?!<<1>>)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source, [typeExpression, nonContextualKeywords, name]),
				inside: typeInside
			}
		],
		'keyword': keywords,
		// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#literals
		'number': /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:ul|lu|[dflmu])?\b/i,
		'operator': />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
		'punctuation': /\?\.?|::|[{}[\];(),.:]/
	});

	Prism.languages.insertBefore('csharp', 'number', {
		'range': {
			pattern: /\.\./,
			alias: 'operator'
		}
	});

	Prism.languages.insertBefore('csharp', 'punctuation', {
		'named-parameter': {
			pattern: re(/([(,]\s*)<<0>>(?=\s*:)/.source, [name]),
			lookbehind: true,
			alias: 'punctuation'
		}
	});

	Prism.languages.insertBefore('csharp', 'class-name', {
		'namespace': {
			// namespace Foo.Bar {}
			// using Foo.Bar;
			pattern: re(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source, [name]),
			lookbehind: true,
			inside: {
				'punctuation': /\./
			}
		},
		'type-expression': {
			// default(Foo), typeof(Foo<Bar>), sizeof(int)
			pattern: re(/(\b(?:default|typeof|sizeof)\s*\(\s*)(?:[^()\s]|\s(?!\s*\))|<<0>>)*(?=\s*\))/.source, [nestedRound]),
			lookbehind: true,
			alias: 'class-name',
			inside: typeInside
		},
		'return-type': {
			// Foo<Bar> ForBar(); Foo IFoo.Bar() => 0
			// int this[int index] => 0; T IReadOnlyList<T>.this[int index] => this[index];
			// int Foo => 0; int Foo { get; set } = 0;
			pattern: re(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source, [typeExpression, identifier]),
			inside: typeInside,
			alias: 'class-name'
		},
		'constructor-invocation': {
			// new List<Foo<Bar[]>> { }
			pattern: re(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [typeExpression]),
			lookbehind: true,
			inside: typeInside,
			alias: 'class-name'
		},
		/*'explicit-implementation': {
			// int IFoo<Foo>.Bar => 0; void IFoo<Foo<Foo>>.Foo<T>();
			pattern: replace(/\b<<0>>(?=\.<<1>>)/, className, methodOrPropertyDeclaration),
			inside: classNameInside,
			alias: 'class-name'
		},*/
		'generic-method': {
			// foo<Bar>()
			pattern: re(/<<0>>\s*<<1>>(?=\s*\()/.source, [name, generic]),
			inside: {
				'function': re(/^<<0>>/.source, [name]),
				'generic': {
					pattern: RegExp(generic),
					alias: 'class-name',
					inside: typeInside
				}
			}
		},
		'type-list': {
			// The list of types inherited or of generic constraints
			// class Foo<F> : Bar, IList<FooBar>
			// where F : Bar, IList<int>
			pattern: re(
				/\b((?:<<0>>\s+<<1>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>)(?:\s*,\s*(?:<<3>>|<<4>>))*(?=\s*(?:where|[{;]|=>|$))/.source,
				[typeDeclarationKeywords, genericName, name, typeExpression, keywords.source]
			),
			lookbehind: true,
			inside: {
				'keyword': keywords,
				'class-name': {
					pattern: RegExp(typeExpression),
					greedy: true,
					inside: typeInside
				},
				'punctuation': /,/
			}
		},
		'preprocessor': {
			pattern: /(^\s*)#.*/m,
			lookbehind: true,
			alias: 'property',
			inside: {
				// highlight preprocessor directives as keywords
				'directive': {
					pattern: /(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
					lookbehind: true,
					alias: 'keyword'
				}
			}
		}
	});

	// attributes
	var regularStringOrCharacter = regularString + '|' + character;
	var regularStringCharacterOrComment = replace(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source, [regularStringOrCharacter]);
	var roundExpression = nested(replace(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [regularStringCharacterOrComment]), 2);

	// https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/#attribute-targets
	var attrTarget = /\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source;
	var attr = replace(/<<0>>(?:\s*\(<<1>>*\))?/.source, [identifier, roundExpression]);

	Prism.languages.insertBefore('csharp', 'class-name', {
		'attribute': {
			// Attributes
			// [Foo], [Foo(1), Bar(2, Prop = "foo")], [return: Foo(1), Bar(2)], [assembly: Foo(Bar)]
			pattern: re(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source, [attrTarget, attr]),
			lookbehind: true,
			greedy: true,
			inside: {
				'target': {
					pattern: re(/^<<0>>(?=\s*:)/.source, [attrTarget]),
					alias: 'keyword'
				},
				'attribute-arguments': {
					pattern: re(/\(<<0>>*\)/.source, [roundExpression]),
					inside: Prism.languages.csharp
				},
				'class-name': {
					pattern: RegExp(identifier),
					inside: {
						'punctuation': /\./
					}
				},
				'punctuation': /[:,]/
			}
		}
	});


	// string interpolation
	var formatString = /:[^}\r\n]+/.source;
	// multi line
	var mInterpolationRound = nested(replace(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [regularStringCharacterOrComment]), 2)
	var mInterpolation = replace(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [mInterpolationRound, formatString]);
	// single line
	var sInterpolationRound = nested(replace(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source, [regularStringOrCharacter]), 2)
	var sInterpolation = replace(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [sInterpolationRound, formatString]);

	function createInterpolationInside(interpolation, interpolationRound) {
		return {
			'interpolation': {
				pattern: re(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [interpolation]),
				lookbehind: true,
				inside: {
					'format-string': {
						pattern: re(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [interpolationRound, formatString]),
						lookbehind: true,
						inside: {
							'punctuation': /^:/
						}
					},
					'punctuation': /^\{|\}$/,
					'expression': {
						pattern: /[\s\S]+/,
						alias: 'language-csharp',
						inside: Prism.languages.csharp
					}
				}
			},
			'string': /[\s\S]+/
		};
	}

	Prism.languages.insertBefore('csharp', 'string', {
		'interpolation-string': [
			{
				pattern: re(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source, [mInterpolation]),
				lookbehind: true,
				greedy: true,
				inside: createInterpolationInside(mInterpolation, mInterpolationRound),
			},
			{
				pattern: re(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [sInterpolation]),
				lookbehind: true,
				greedy: true,
				inside: createInterpolationInside(sInterpolation, sInterpolationRound),
			}
		]
	});

}(Prism));

Prism.languages.dotnet = Prism.languages.cs = Prism.languages.csharp;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNzaGFycC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksU0FBUztBQUNyQixjQUFjLE9BQU87QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksU0FBUztBQUNyQixZQUFZLE9BQU87QUFDbkIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsY0FBYztBQUNkO0FBQ0E7QUFDQSxpQkFBaUIsZUFBZTtBQUNoQyx1REFBdUQsOEJBQThCLEVBQUU7QUFDdkY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLG9DQUFvQztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsSUFBSSxXQUFXO0FBQ3RFO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixJQUFJO0FBQ2xDLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx3QkFBd0I7QUFDeEIsK0JBQStCO0FBQy9CLG1CQUFtQixVQUFVLEtBQUssTUFBTTtBQUN4QywrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLDRCQUE0QjtBQUM1Qix5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyR0FBMkc7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxpQ0FBaUMsS0FBSyxTQUFTLGtCQUFrQjtBQUNqRTtBQUNBO0FBQ0EsaUNBQWlDLEtBQUssU0FBUyxrQkFBa0I7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixPQUFPLEVBQUU7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVEscUJBQXFCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHdCQUF3QixHQUFHO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELEVBQUUsWUFBWTtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSx1Q0FBdUMsRUFBRSxhQUFhO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGLENBQUM7O0FBRUQiLCJmaWxlIjoiNzUuaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKFByaXNtKSB7XG5cblx0LyoqXG5cdCAqIFJlcGxhY2VzIGFsbCBwbGFjZWhvbGRlcnMgXCI8PG4+PlwiIG9mIGdpdmVuIHBhdHRlcm4gd2l0aCB0aGUgbi10aCByZXBsYWNlbWVudCAoemVybyBiYXNlZCkuXG5cdCAqXG5cdCAqIE5vdGU6IFRoaXMgaXMgYSBzaW1wbGUgdGV4dCBiYXNlZCByZXBsYWNlbWVudC4gQmUgY2FyZWZ1bCB3aGVuIHVzaW5nIGJhY2tyZWZlcmVuY2VzIVxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGF0dGVybiB0aGUgZ2l2ZW4gcGF0dGVybi5cblx0ICogQHBhcmFtIHtzdHJpbmdbXX0gcmVwbGFjZW1lbnRzIGEgbGlzdCBvZiByZXBsYWNlbWVudCB3aGljaCBjYW4gYmUgaW5zZXJ0ZWQgaW50byB0aGUgZ2l2ZW4gcGF0dGVybi5cblx0ICogQHJldHVybnMge3N0cmluZ30gdGhlIHBhdHRlcm4gd2l0aCBhbGwgcGxhY2Vob2xkZXJzIHJlcGxhY2VkIHdpdGggdGhlaXIgY29ycmVzcG9uZGluZyByZXBsYWNlbWVudHMuXG5cdCAqIEBleGFtcGxlIHJlcGxhY2UoL2E8PDA+PmEvLnNvdXJjZSwgWy9iKy8uc291cmNlXSkgPT09IC9hKD86YispYS8uc291cmNlXG5cdCAqL1xuXHRmdW5jdGlvbiByZXBsYWNlKHBhdHRlcm4sIHJlcGxhY2VtZW50cykge1xuXHRcdHJldHVybiBwYXR0ZXJuLnJlcGxhY2UoLzw8KFxcZCspPj4vZywgZnVuY3Rpb24gKG0sIGluZGV4KSB7XG5cdFx0XHRyZXR1cm4gJyg/OicgKyByZXBsYWNlbWVudHNbK2luZGV4XSArICcpJztcblx0XHR9KTtcblx0fVxuXHQvKipcblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm5cblx0ICogQHBhcmFtIHtzdHJpbmdbXX0gcmVwbGFjZW1lbnRzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbZmxhZ3NdXG5cdCAqIEByZXR1cm5zIHtSZWdFeHB9XG5cdCAqL1xuXHRmdW5jdGlvbiByZShwYXR0ZXJuLCByZXBsYWNlbWVudHMsIGZsYWdzKSB7XG5cdFx0cmV0dXJuIFJlZ0V4cChyZXBsYWNlKHBhdHRlcm4sIHJlcGxhY2VtZW50cyksIGZsYWdzIHx8ICcnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgbmVzdGVkIHBhdHRlcm4gd2hlcmUgYWxsIG9jY3VycmVuY2VzIG9mIHRoZSBzdHJpbmcgYDw8c2VsZj4+YCBhcmUgcmVwbGFjZWQgd2l0aCB0aGUgcGF0dGVybiBpdHNlbGYuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBkZXB0aExvZzJcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdGZ1bmN0aW9uIG5lc3RlZChwYXR0ZXJuLCBkZXB0aExvZzIpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcHRoTG9nMjsgaSsrKSB7XG5cdFx0XHRwYXR0ZXJuID0gcGF0dGVybi5yZXBsYWNlKC88PHNlbGY+Pi9nLCBmdW5jdGlvbiAoKSB7IHJldHVybiAnKD86JyArIHBhdHRlcm4gKyAnKSc7IH0pO1xuXHRcdH1cblx0XHRyZXR1cm4gcGF0dGVybi5yZXBsYWNlKC88PHNlbGY+Pi9nLCAnW15cXFxcc1xcXFxTXScpO1xuXHR9XG5cblx0Ly8gaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvZG90bmV0L2NzaGFycC9sYW5ndWFnZS1yZWZlcmVuY2Uva2V5d29yZHMvXG5cdHZhciBrZXl3b3JkS2luZHMgPSB7XG5cdFx0Ly8ga2V5d29yZHMgd2hpY2ggcmVwcmVzZW50IGEgcmV0dXJuIG9yIHZhcmlhYmxlIHR5cGVcblx0XHR0eXBlOiAnYm9vbCBieXRlIGNoYXIgZGVjaW1hbCBkb3VibGUgZHluYW1pYyBmbG9hdCBpbnQgbG9uZyBvYmplY3Qgc2J5dGUgc2hvcnQgc3RyaW5nIHVpbnQgdWxvbmcgdXNob3J0IHZhciB2b2lkJyxcblx0XHQvLyBrZXl3b3JkcyB3aGljaCBhcmUgdXNlZCB0byBkZWNsYXJlIGEgdHlwZVxuXHRcdHR5cGVEZWNsYXJhdGlvbjogJ2NsYXNzIGVudW0gaW50ZXJmYWNlIHN0cnVjdCcsXG5cdFx0Ly8gY29udGV4dHVhbCBrZXl3b3Jkc1xuXHRcdC8vIChcInZhclwiIGFuZCBcImR5bmFtaWNcIiBhcmUgbWlzc2luZyBiZWNhdXNlIHRoZXkgYXJlIHVzZWQgbGlrZSB0eXBlcylcblx0XHRjb250ZXh0dWFsOiAnYWRkIGFsaWFzIGFuZCBhc2NlbmRpbmcgYXN5bmMgYXdhaXQgYnkgZGVzY2VuZGluZyBmcm9tIGdldCBnbG9iYWwgZ3JvdXAgaW50byBqb2luIGxldCBuYW1lb2Ygbm90IG5vdG51bGwgb24gb3Igb3JkZXJieSBwYXJ0aWFsIHJlbW92ZSBzZWxlY3Qgc2V0IHVubWFuYWdlZCB2YWx1ZSB3aGVuIHdoZXJlIHdoZXJlJyxcblx0XHQvLyBhbGwgb3RoZXIga2V5d29yZHNcblx0XHRvdGhlcjogJ2Fic3RyYWN0IGFzIGJhc2UgYnJlYWsgY2FzZSBjYXRjaCBjaGVja2VkIGNvbnN0IGNvbnRpbnVlIGRlZmF1bHQgZGVsZWdhdGUgZG8gZWxzZSBldmVudCBleHBsaWNpdCBleHRlcm4gZmluYWxseSBmaXhlZCBmb3IgZm9yZWFjaCBnb3RvIGlmIGltcGxpY2l0IGluIGludGVybmFsIGlzIGxvY2sgbmFtZXNwYWNlIG5ldyBudWxsIG9wZXJhdG9yIG91dCBvdmVycmlkZSBwYXJhbXMgcHJpdmF0ZSBwcm90ZWN0ZWQgcHVibGljIHJlYWRvbmx5IHJlZiByZXR1cm4gc2VhbGVkIHNpemVvZiBzdGFja2FsbG9jIHN0YXRpYyBzd2l0Y2ggdGhpcyB0aHJvdyB0cnkgdHlwZW9mIHVuY2hlY2tlZCB1bnNhZmUgdXNpbmcgdmlydHVhbCB2b2xhdGlsZSB3aGlsZSB5aWVsZCdcblx0fTtcblxuXHQvLyBrZXl3b3Jkc1xuXHRmdW5jdGlvbiBrZXl3b3Jkc1RvUGF0dGVybih3b3Jkcykge1xuXHRcdHJldHVybiAnXFxcXGIoPzonICsgd29yZHMudHJpbSgpLnJlcGxhY2UoLyAvZywgJ3wnKSArICcpXFxcXGInO1xuXHR9XG5cdHZhciB0eXBlRGVjbGFyYXRpb25LZXl3b3JkcyA9IGtleXdvcmRzVG9QYXR0ZXJuKGtleXdvcmRLaW5kcy50eXBlRGVjbGFyYXRpb24pO1xuXHR2YXIga2V5d29yZHMgPSBSZWdFeHAoa2V5d29yZHNUb1BhdHRlcm4oa2V5d29yZEtpbmRzLnR5cGUgKyAnICcgKyBrZXl3b3JkS2luZHMudHlwZURlY2xhcmF0aW9uICsgJyAnICsga2V5d29yZEtpbmRzLmNvbnRleHR1YWwgKyAnICcgKyBrZXl3b3JkS2luZHMub3RoZXIpKTtcblx0dmFyIG5vblR5cGVLZXl3b3JkcyA9IGtleXdvcmRzVG9QYXR0ZXJuKGtleXdvcmRLaW5kcy50eXBlRGVjbGFyYXRpb24gKyAnICcgKyBrZXl3b3JkS2luZHMuY29udGV4dHVhbCArICcgJyArIGtleXdvcmRLaW5kcy5vdGhlcik7XG5cdHZhciBub25Db250ZXh0dWFsS2V5d29yZHMgPSBrZXl3b3Jkc1RvUGF0dGVybihrZXl3b3JkS2luZHMudHlwZSArICcgJyArIGtleXdvcmRLaW5kcy50eXBlRGVjbGFyYXRpb24gKyAnICcgKyBrZXl3b3JkS2luZHMub3RoZXIpO1xuXG5cdC8vIHR5cGVzXG5cdHZhciBnZW5lcmljID0gbmVzdGVkKC88KD86W148Pjs9K1xcLSovJSZ8Xl18PDxzZWxmPj4pKj4vLnNvdXJjZSwgMik7IC8vIHRoZSBpZGVhIGJlaGluZCB0aGUgb3RoZXIgZm9yYmlkZGVuIGNoYXJhY3RlcnMgaXMgdG8gcHJldmVudCBmYWxzZSBwb3NpdGl2ZXMuIFNhbWUgZm9yIHR1cGxlRWxlbWVudC5cblx0dmFyIG5lc3RlZFJvdW5kID0gbmVzdGVkKC9cXCgoPzpbXigpXXw8PHNlbGY+PikqXFwpLy5zb3VyY2UsIDIpO1xuXHR2YXIgbmFtZSA9IC9AP1xcYltBLVphLXpfXVxcdypcXGIvLnNvdXJjZTtcblx0dmFyIGdlbmVyaWNOYW1lID0gcmVwbGFjZSgvPDwwPj4oPzpcXHMqPDwxPj4pPy8uc291cmNlLCBbbmFtZSwgZ2VuZXJpY10pO1xuXHR2YXIgaWRlbnRpZmllciA9IHJlcGxhY2UoLyg/ITw8MD4+KTw8MT4+KD86XFxzKlxcLlxccyo8PDE+PikqLy5zb3VyY2UsIFtub25UeXBlS2V5d29yZHMsIGdlbmVyaWNOYW1lXSk7XG5cdHZhciBhcnJheSA9IC9cXFtcXHMqKD86LFxccyopKlxcXS8uc291cmNlO1xuXHR2YXIgdHlwZUV4cHJlc3Npb25XaXRob3V0VHVwbGUgPSByZXBsYWNlKC88PDA+Pig/OlxccyooPzpcXD9cXHMqKT88PDE+PikqKD86XFxzKlxcPyk/Ly5zb3VyY2UsIFtpZGVudGlmaWVyLCBhcnJheV0pO1xuXHR2YXIgdHVwbGVFbGVtZW50ID0gcmVwbGFjZSgvW14sKCk8PltcXF07PStcXC0qLyUmfF5dfDw8MD4+fDw8MT4+fDw8Mj4+Ly5zb3VyY2UsIFtnZW5lcmljLCBuZXN0ZWRSb3VuZCwgYXJyYXldKVxuXHR2YXIgdHVwbGUgPSByZXBsYWNlKC9cXCg8PDA+PisoPzosPDwwPj4rKStcXCkvLnNvdXJjZSwgW3R1cGxlRWxlbWVudF0pO1xuXHR2YXIgdHlwZUV4cHJlc3Npb24gPSByZXBsYWNlKC8oPzo8PDA+Pnw8PDE+PikoPzpcXHMqKD86XFw/XFxzKik/PDwyPj4pKig/OlxccypcXD8pPy8uc291cmNlLCBbdHVwbGUsIGlkZW50aWZpZXIsIGFycmF5XSk7XG5cblx0dmFyIHR5cGVJbnNpZGUgPSB7XG5cdFx0J2tleXdvcmQnOiBrZXl3b3Jkcyxcblx0XHQncHVuY3R1YXRpb24nOiAvWzw+KCk/LC46W1xcXV0vXG5cdH07XG5cblx0Ly8gc3RyaW5ncyAmIGNoYXJhY3RlcnNcblx0Ly8gaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvZG90bmV0L2NzaGFycC9sYW5ndWFnZS1yZWZlcmVuY2UvbGFuZ3VhZ2Utc3BlY2lmaWNhdGlvbi9sZXhpY2FsLXN0cnVjdHVyZSNjaGFyYWN0ZXItbGl0ZXJhbHNcblx0Ly8gaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvZG90bmV0L2NzaGFycC9sYW5ndWFnZS1yZWZlcmVuY2UvbGFuZ3VhZ2Utc3BlY2lmaWNhdGlvbi9sZXhpY2FsLXN0cnVjdHVyZSNzdHJpbmctbGl0ZXJhbHNcblx0dmFyIGNoYXJhY3RlciA9IC8nKD86W15cXHJcXG4nXFxcXF18XFxcXC58XFxcXFtVdXhdW1xcZGEtZkEtRl17MSw4fSknLy5zb3VyY2U7IC8vIHNpbXBsaWZpZWQgcGF0dGVyblxuXHR2YXIgcmVndWxhclN0cmluZyA9IC9cIig/OlxcXFwufFteXFxcXFwiXFxyXFxuXSkqXCIvLnNvdXJjZTtcblx0dmFyIHZlcmJhdGltU3RyaW5nID0gL0BcIig/OlwiXCJ8XFxcXFtcXHNcXFNdfFteXFxcXFwiXSkqXCIoPyFcIikvLnNvdXJjZTtcblxuXG5cdFByaXNtLmxhbmd1YWdlcy5jc2hhcnAgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcblx0XHQnc3RyaW5nJzogW1xuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiByZSgvKF58W14kXFxcXF0pPDwwPj4vLnNvdXJjZSwgW3ZlcmJhdGltU3RyaW5nXSksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogcmUoLyhefFteQCRcXFxcXSk8PDA+Pi8uc291cmNlLCBbcmVndWxhclN0cmluZ10pLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRncmVlZHk6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHBhdHRlcm46IFJlZ0V4cChjaGFyYWN0ZXIpLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGFsaWFzOiAnY2hhcmFjdGVyJ1xuXHRcdFx0fVxuXHRcdF0sXG5cdFx0J2NsYXNzLW5hbWUnOiBbXG5cdFx0XHR7XG5cdFx0XHRcdC8vIFVzaW5nIHN0YXRpY1xuXHRcdFx0XHQvLyB1c2luZyBzdGF0aWMgU3lzdGVtLk1hdGg7XG5cdFx0XHRcdHBhdHRlcm46IHJlKC8oXFxidXNpbmdcXHMrc3RhdGljXFxzKyk8PDA+Pig/PVxccyo7KS8uc291cmNlLCBbaWRlbnRpZmllcl0pLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRpbnNpZGU6IHR5cGVJbnNpZGVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdC8vIFVzaW5nIGFsaWFzICh0eXBlKVxuXHRcdFx0XHQvLyB1c2luZyBQcm9qZWN0ID0gUEMuTXlDb21wYW55LlByb2plY3Q7XG5cdFx0XHRcdHBhdHRlcm46IHJlKC8oXFxidXNpbmdcXHMrPDwwPj5cXHMqPVxccyopPDwxPj4oPz1cXHMqOykvLnNvdXJjZSwgW25hbWUsIHR5cGVFeHByZXNzaW9uXSksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZTogdHlwZUluc2lkZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gVXNpbmcgYWxpYXMgKGFsaWFzKVxuXHRcdFx0XHQvLyB1c2luZyBQcm9qZWN0ID0gUEMuTXlDb21wYW55LlByb2plY3Q7XG5cdFx0XHRcdHBhdHRlcm46IHJlKC8oXFxidXNpbmdcXHMrKTw8MD4+KD89XFxzKj0pLy5zb3VyY2UsIFtuYW1lXSksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdC8vIFR5cGUgZGVjbGFyYXRpb25zXG5cdFx0XHRcdC8vIGNsYXNzIEZvbzxBLCBCPlxuXHRcdFx0XHQvLyBpbnRlcmZhY2UgRm9vPG91dCBBLCBCPlxuXHRcdFx0XHRwYXR0ZXJuOiByZSgvKFxcYjw8MD4+XFxzKyk8PDE+Pi8uc291cmNlLCBbdHlwZURlY2xhcmF0aW9uS2V5d29yZHMsIGdlbmVyaWNOYW1lXSksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZTogdHlwZUluc2lkZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gU2luZ2xlIGNhdGNoIGV4Y2VwdGlvbiBkZWNsYXJhdGlvblxuXHRcdFx0XHQvLyBjYXRjaChGb28pXG5cdFx0XHRcdC8vICh0aGluZ3MgbGlrZSBjYXRjaChGb28gZSkgaXMgY292ZXJlZCBieSB2YXJpYWJsZSBkZWNsYXJhdGlvbilcblx0XHRcdFx0cGF0dGVybjogcmUoLyhcXGJjYXRjaFxccypcXChcXHMqKTw8MD4+Ly5zb3VyY2UsIFtpZGVudGlmaWVyXSksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZTogdHlwZUluc2lkZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gTmFtZSBvZiB0aGUgdHlwZSBwYXJhbWV0ZXIgb2YgZ2VuZXJpYyBjb25zdHJhaW50c1xuXHRcdFx0XHQvLyB3aGVyZSBGb28gOiBjbGFzc1xuXHRcdFx0XHRwYXR0ZXJuOiByZSgvKFxcYndoZXJlXFxzKyk8PDA+Pi8uc291cmNlLCBbbmFtZV0pLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHQvLyBDYXN0cyBhbmQgY2hlY2tzIHZpYSBhcyBhbmQgaXMuXG5cdFx0XHRcdC8vIGFzIEZvbzxBPiwgaXMgQmFyPEI+XG5cdFx0XHRcdC8vICh0aGluZ3MgbGlrZSBpZihhIGlzIEZvbyBiKSBpcyBjb3ZlcmVkIGJ5IHZhcmlhYmxlIGRlY2xhcmF0aW9uKVxuXHRcdFx0XHRwYXR0ZXJuOiByZSgvKFxcYig/OmlzKD86XFxzK25vdCk/fGFzKVxccyspPDwwPj4vLnNvdXJjZSwgW3R5cGVFeHByZXNzaW9uV2l0aG91dFR1cGxlXSksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGluc2lkZTogdHlwZUluc2lkZVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0Ly8gVmFyaWFibGUsIGZpZWxkIGFuZCBwYXJhbWV0ZXIgZGVjbGFyYXRpb25cblx0XHRcdFx0Ly8gKEZvbyBiYXIsIEJhciBiYXosIEZvb1ssLF0gYmF5LCBGb288QmFyLCBGb29CYXI8QmFyPj4gYmF4KVxuXHRcdFx0XHRwYXR0ZXJuOiByZSgvXFxiPDwwPj4oPz1cXHMrKD8hPDwxPj4pPDwyPj4oPzpcXHMqWz0sOzp7KVxcXV18XFxzKyg/OmlufHdoZW4pXFxiKSkvLnNvdXJjZSwgW3R5cGVFeHByZXNzaW9uLCBub25Db250ZXh0dWFsS2V5d29yZHMsIG5hbWVdKSxcblx0XHRcdFx0aW5zaWRlOiB0eXBlSW5zaWRlXG5cdFx0XHR9XG5cdFx0XSxcblx0XHQna2V5d29yZCc6IGtleXdvcmRzLFxuXHRcdC8vIGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL2RvdG5ldC9jc2hhcnAvbGFuZ3VhZ2UtcmVmZXJlbmNlL2xhbmd1YWdlLXNwZWNpZmljYXRpb24vbGV4aWNhbC1zdHJ1Y3R1cmUjbGl0ZXJhbHNcblx0XHQnbnVtYmVyJzogLyg/OlxcYjAoPzp4W1xcZGEtZl9dKltcXGRhLWZdfGJbMDFfXSpbMDFdKXwoPzpcXEJcXC5cXGQrKD86XytcXGQrKSp8XFxiXFxkKyg/Ol8rXFxkKykqKD86XFwuXFxkKyg/Ol8rXFxkKykqKT8pKD86ZVstK10/XFxkKyg/Ol8rXFxkKykqKT8pKD86dWx8bHV8W2RmbG11XSk/XFxiL2ksXG5cdFx0J29wZXJhdG9yJzogLz4+PT98PDw9P3xbLT1dPnwoWy0rJnxdKVxcMXx+fFxcP1xcPz0/fFstKyovJSZ8XiE9PD5dPT8vLFxuXHRcdCdwdW5jdHVhdGlvbic6IC9cXD9cXC4/fDo6fFt7fVtcXF07KCksLjpdL1xuXHR9KTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdjc2hhcnAnLCAnbnVtYmVyJywge1xuXHRcdCdyYW5nZSc6IHtcblx0XHRcdHBhdHRlcm46IC9cXC5cXC4vLFxuXHRcdFx0YWxpYXM6ICdvcGVyYXRvcidcblx0XHR9XG5cdH0pO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2NzaGFycCcsICdwdW5jdHVhdGlvbicsIHtcblx0XHQnbmFtZWQtcGFyYW1ldGVyJzoge1xuXHRcdFx0cGF0dGVybjogcmUoLyhbKCxdXFxzKik8PDA+Pig/PVxccyo6KS8uc291cmNlLCBbbmFtZV0pLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGFsaWFzOiAncHVuY3R1YXRpb24nXG5cdFx0fVxuXHR9KTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdjc2hhcnAnLCAnY2xhc3MtbmFtZScsIHtcblx0XHQnbmFtZXNwYWNlJzoge1xuXHRcdFx0Ly8gbmFtZXNwYWNlIEZvby5CYXIge31cblx0XHRcdC8vIHVzaW5nIEZvby5CYXI7XG5cdFx0XHRwYXR0ZXJuOiByZSgvKFxcYig/Om5hbWVzcGFjZXx1c2luZylcXHMrKTw8MD4+KD86XFxzKlxcLlxccyo8PDA+PikqKD89XFxzKls7e10pLy5zb3VyY2UsIFtuYW1lXSksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXC4vXG5cdFx0XHR9XG5cdFx0fSxcblx0XHQndHlwZS1leHByZXNzaW9uJzoge1xuXHRcdFx0Ly8gZGVmYXVsdChGb28pLCB0eXBlb2YoRm9vPEJhcj4pLCBzaXplb2YoaW50KVxuXHRcdFx0cGF0dGVybjogcmUoLyhcXGIoPzpkZWZhdWx0fHR5cGVvZnxzaXplb2YpXFxzKlxcKFxccyopKD86W14oKVxcc118XFxzKD8hXFxzKlxcKSl8PDwwPj4pKig/PVxccypcXCkpLy5zb3VyY2UsIFtuZXN0ZWRSb3VuZF0pLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGFsaWFzOiAnY2xhc3MtbmFtZScsXG5cdFx0XHRpbnNpZGU6IHR5cGVJbnNpZGVcblx0XHR9LFxuXHRcdCdyZXR1cm4tdHlwZSc6IHtcblx0XHRcdC8vIEZvbzxCYXI+IEZvckJhcigpOyBGb28gSUZvby5CYXIoKSA9PiAwXG5cdFx0XHQvLyBpbnQgdGhpc1tpbnQgaW5kZXhdID0+IDA7IFQgSVJlYWRPbmx5TGlzdDxUPi50aGlzW2ludCBpbmRleF0gPT4gdGhpc1tpbmRleF07XG5cdFx0XHQvLyBpbnQgRm9vID0+IDA7IGludCBGb28geyBnZXQ7IHNldCB9ID0gMDtcblx0XHRcdHBhdHRlcm46IHJlKC88PDA+Pig/PVxccysoPzo8PDE+PlxccyooPzo9PnxbKHtdfFxcLlxccyp0aGlzXFxzKlxcWyl8dGhpc1xccypcXFspKS8uc291cmNlLCBbdHlwZUV4cHJlc3Npb24sIGlkZW50aWZpZXJdKSxcblx0XHRcdGluc2lkZTogdHlwZUluc2lkZSxcblx0XHRcdGFsaWFzOiAnY2xhc3MtbmFtZSdcblx0XHR9LFxuXHRcdCdjb25zdHJ1Y3Rvci1pbnZvY2F0aW9uJzoge1xuXHRcdFx0Ly8gbmV3IExpc3Q8Rm9vPEJhcltdPj4geyB9XG5cdFx0XHRwYXR0ZXJuOiByZSgvKFxcYm5ld1xccyspPDwwPj4oPz1cXHMqW1soe10pLy5zb3VyY2UsIFt0eXBlRXhwcmVzc2lvbl0pLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZTogdHlwZUluc2lkZSxcblx0XHRcdGFsaWFzOiAnY2xhc3MtbmFtZSdcblx0XHR9LFxuXHRcdC8qJ2V4cGxpY2l0LWltcGxlbWVudGF0aW9uJzoge1xuXHRcdFx0Ly8gaW50IElGb288Rm9vPi5CYXIgPT4gMDsgdm9pZCBJRm9vPEZvbzxGb28+Pi5Gb288VD4oKTtcblx0XHRcdHBhdHRlcm46IHJlcGxhY2UoL1xcYjw8MD4+KD89XFwuPDwxPj4pLywgY2xhc3NOYW1lLCBtZXRob2RPclByb3BlcnR5RGVjbGFyYXRpb24pLFxuXHRcdFx0aW5zaWRlOiBjbGFzc05hbWVJbnNpZGUsXG5cdFx0XHRhbGlhczogJ2NsYXNzLW5hbWUnXG5cdFx0fSwqL1xuXHRcdCdnZW5lcmljLW1ldGhvZCc6IHtcblx0XHRcdC8vIGZvbzxCYXI+KClcblx0XHRcdHBhdHRlcm46IHJlKC88PDA+Plxccyo8PDE+Pig/PVxccypcXCgpLy5zb3VyY2UsIFtuYW1lLCBnZW5lcmljXSksXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2Z1bmN0aW9uJzogcmUoL148PDA+Pi8uc291cmNlLCBbbmFtZV0pLFxuXHRcdFx0XHQnZ2VuZXJpYyc6IHtcblx0XHRcdFx0XHRwYXR0ZXJuOiBSZWdFeHAoZ2VuZXJpYyksXG5cdFx0XHRcdFx0YWxpYXM6ICdjbGFzcy1uYW1lJyxcblx0XHRcdFx0XHRpbnNpZGU6IHR5cGVJbnNpZGVcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J3R5cGUtbGlzdCc6IHtcblx0XHRcdC8vIFRoZSBsaXN0IG9mIHR5cGVzIGluaGVyaXRlZCBvciBvZiBnZW5lcmljIGNvbnN0cmFpbnRzXG5cdFx0XHQvLyBjbGFzcyBGb288Rj4gOiBCYXIsIElMaXN0PEZvb0Jhcj5cblx0XHRcdC8vIHdoZXJlIEYgOiBCYXIsIElMaXN0PGludD5cblx0XHRcdHBhdHRlcm46IHJlKFxuXHRcdFx0XHQvXFxiKCg/Ojw8MD4+XFxzKzw8MT4+fHdoZXJlXFxzKzw8Mj4+KVxccyo6XFxzKikoPzo8PDM+Pnw8PDQ+PikoPzpcXHMqLFxccyooPzo8PDM+Pnw8PDQ+PikpKig/PVxccyooPzp3aGVyZXxbeztdfD0+fCQpKS8uc291cmNlLFxuXHRcdFx0XHRbdHlwZURlY2xhcmF0aW9uS2V5d29yZHMsIGdlbmVyaWNOYW1lLCBuYW1lLCB0eXBlRXhwcmVzc2lvbiwga2V5d29yZHMuc291cmNlXVxuXHRcdFx0KSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2tleXdvcmQnOiBrZXl3b3Jkcyxcblx0XHRcdFx0J2NsYXNzLW5hbWUnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogUmVnRXhwKHR5cGVFeHByZXNzaW9uKSxcblx0XHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdFx0aW5zaWRlOiB0eXBlSW5zaWRlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdwdW5jdHVhdGlvbic6IC8sL1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0J3ByZXByb2Nlc3Nvcic6IHtcblx0XHRcdHBhdHRlcm46IC8oXlxccyopIy4qL20sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0YWxpYXM6ICdwcm9wZXJ0eScsXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0Ly8gaGlnaGxpZ2h0IHByZXByb2Nlc3NvciBkaXJlY3RpdmVzIGFzIGtleXdvcmRzXG5cdFx0XHRcdCdkaXJlY3RpdmUnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogLyhcXHMqIylcXGIoPzpkZWZpbmV8ZWxpZnxlbHNlfGVuZGlmfGVuZHJlZ2lvbnxlcnJvcnxpZnxsaW5lfHByYWdtYXxyZWdpb258dW5kZWZ8d2FybmluZylcXGIvLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdFx0YWxpYXM6ICdrZXl3b3JkJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBhdHRyaWJ1dGVzXG5cdHZhciByZWd1bGFyU3RyaW5nT3JDaGFyYWN0ZXIgPSByZWd1bGFyU3RyaW5nICsgJ3wnICsgY2hhcmFjdGVyO1xuXHR2YXIgcmVndWxhclN0cmluZ0NoYXJhY3Rlck9yQ29tbWVudCA9IHJlcGxhY2UoL1xcLyg/IVsqL10pfFxcL1xcL1teXFxyXFxuXSpbXFxyXFxuXXxcXC9cXCooPzpbXipdfFxcKig/IVxcLykpKlxcKlxcL3w8PDA+Pi8uc291cmNlLCBbcmVndWxhclN0cmluZ09yQ2hhcmFjdGVyXSk7XG5cdHZhciByb3VuZEV4cHJlc3Npb24gPSBuZXN0ZWQocmVwbGFjZSgvW15cIicvKCldfDw8MD4+fFxcKDw8c2VsZj4+KlxcKS8uc291cmNlLCBbcmVndWxhclN0cmluZ0NoYXJhY3Rlck9yQ29tbWVudF0pLCAyKTtcblxuXHQvLyBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9kb3RuZXQvY3NoYXJwL3Byb2dyYW1taW5nLWd1aWRlL2NvbmNlcHRzL2F0dHJpYnV0ZXMvI2F0dHJpYnV0ZS10YXJnZXRzXG5cdHZhciBhdHRyVGFyZ2V0ID0gL1xcYig/OmFzc2VtYmx5fGV2ZW50fGZpZWxkfG1ldGhvZHxtb2R1bGV8cGFyYW18cHJvcGVydHl8cmV0dXJufHR5cGUpXFxiLy5zb3VyY2U7XG5cdHZhciBhdHRyID0gcmVwbGFjZSgvPDwwPj4oPzpcXHMqXFwoPDwxPj4qXFwpKT8vLnNvdXJjZSwgW2lkZW50aWZpZXIsIHJvdW5kRXhwcmVzc2lvbl0pO1xuXG5cdFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2NzaGFycCcsICdjbGFzcy1uYW1lJywge1xuXHRcdCdhdHRyaWJ1dGUnOiB7XG5cdFx0XHQvLyBBdHRyaWJ1dGVzXG5cdFx0XHQvLyBbRm9vXSwgW0ZvbygxKSwgQmFyKDIsIFByb3AgPSBcImZvb1wiKV0sIFtyZXR1cm46IEZvbygxKSwgQmFyKDIpXSwgW2Fzc2VtYmx5OiBGb28oQmFyKV1cblx0XHRcdHBhdHRlcm46IHJlKC8oKD86XnxbXlxcc1xcdz4pP10pXFxzKlxcW1xccyopKD86PDwwPj5cXHMqOlxccyopPzw8MT4+KD86XFxzKixcXHMqPDwxPj4pKig/PVxccypcXF0pLy5zb3VyY2UsIFthdHRyVGFyZ2V0LCBhdHRyXSksXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlLFxuXHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdCd0YXJnZXQnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogcmUoL148PDA+Pig/PVxccyo6KS8uc291cmNlLCBbYXR0clRhcmdldF0pLFxuXHRcdFx0XHRcdGFsaWFzOiAna2V5d29yZCdcblx0XHRcdFx0fSxcblx0XHRcdFx0J2F0dHJpYnV0ZS1hcmd1bWVudHMnOiB7XG5cdFx0XHRcdFx0cGF0dGVybjogcmUoL1xcKDw8MD4+KlxcKS8uc291cmNlLCBbcm91bmRFeHByZXNzaW9uXSksXG5cdFx0XHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuY3NoYXJwXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCdjbGFzcy1uYW1lJzoge1xuXHRcdFx0XHRcdHBhdHRlcm46IFJlZ0V4cChpZGVudGlmaWVyKSxcblx0XHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9cXC4vXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0XHQncHVuY3R1YXRpb24nOiAvWzosXS9cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cblx0Ly8gc3RyaW5nIGludGVycG9sYXRpb25cblx0dmFyIGZvcm1hdFN0cmluZyA9IC86W159XFxyXFxuXSsvLnNvdXJjZTtcblx0Ly8gbXVsdGkgbGluZVxuXHR2YXIgbUludGVycG9sYXRpb25Sb3VuZCA9IG5lc3RlZChyZXBsYWNlKC9bXlwiJy8oKV18PDwwPj58XFwoPDxzZWxmPj4qXFwpLy5zb3VyY2UsIFtyZWd1bGFyU3RyaW5nQ2hhcmFjdGVyT3JDb21tZW50XSksIDIpXG5cdHZhciBtSW50ZXJwb2xhdGlvbiA9IHJlcGxhY2UoL1xceyg/IVxceykoPzooPyFbfTpdKTw8MD4+KSo8PDE+Pj9cXH0vLnNvdXJjZSwgW21JbnRlcnBvbGF0aW9uUm91bmQsIGZvcm1hdFN0cmluZ10pO1xuXHQvLyBzaW5nbGUgbGluZVxuXHR2YXIgc0ludGVycG9sYXRpb25Sb3VuZCA9IG5lc3RlZChyZXBsYWNlKC9bXlwiJy8oKV18XFwvKD8hXFwqKXxcXC9cXCooPzpbXipdfFxcKig/IVxcLykpKlxcKlxcL3w8PDA+PnxcXCg8PHNlbGY+PipcXCkvLnNvdXJjZSwgW3JlZ3VsYXJTdHJpbmdPckNoYXJhY3Rlcl0pLCAyKVxuXHR2YXIgc0ludGVycG9sYXRpb24gPSByZXBsYWNlKC9cXHsoPyFcXHspKD86KD8hW306XSk8PDA+PikqPDwxPj4/XFx9Ly5zb3VyY2UsIFtzSW50ZXJwb2xhdGlvblJvdW5kLCBmb3JtYXRTdHJpbmddKTtcblxuXHRmdW5jdGlvbiBjcmVhdGVJbnRlcnBvbGF0aW9uSW5zaWRlKGludGVycG9sYXRpb24sIGludGVycG9sYXRpb25Sb3VuZCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHQnaW50ZXJwb2xhdGlvbic6IHtcblx0XHRcdFx0cGF0dGVybjogcmUoLygoPzpefFtee10pKD86XFx7XFx7KSopPDwwPj4vLnNvdXJjZSwgW2ludGVycG9sYXRpb25dKSxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J2Zvcm1hdC1zdHJpbmcnOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiByZSgvKF5cXHsoPzooPyFbfTpdKTw8MD4+KSopPDwxPj4oPz1cXH0kKS8uc291cmNlLCBbaW50ZXJwb2xhdGlvblJvdW5kLCBmb3JtYXRTdHJpbmddKSxcblx0XHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL146L1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL15cXHt8XFx9JC8sXG5cdFx0XHRcdFx0J2V4cHJlc3Npb24nOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvW1xcc1xcU10rLyxcblx0XHRcdFx0XHRcdGFsaWFzOiAnbGFuZ3VhZ2UtY3NoYXJwJyxcblx0XHRcdFx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmNzaGFycFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCdzdHJpbmcnOiAvW1xcc1xcU10rL1xuXHRcdH07XG5cdH1cblxuXHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdjc2hhcnAnLCAnc3RyaW5nJywge1xuXHRcdCdpbnRlcnBvbGF0aW9uLXN0cmluZyc6IFtcblx0XHRcdHtcblx0XHRcdFx0cGF0dGVybjogcmUoLyhefFteXFxcXF0pKD86XFwkQHxAXFwkKVwiKD86XCJcInxcXFxcW1xcc1xcU118XFx7XFx7fDw8MD4+fFteXFxcXHtcIl0pKlwiLy5zb3VyY2UsIFttSW50ZXJwb2xhdGlvbl0pLFxuXHRcdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRcdGluc2lkZTogY3JlYXRlSW50ZXJwb2xhdGlvbkluc2lkZShtSW50ZXJwb2xhdGlvbiwgbUludGVycG9sYXRpb25Sb3VuZCksXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwYXR0ZXJuOiByZSgvKF58W15AXFxcXF0pXFwkXCIoPzpcXFxcLnxcXHtcXHt8PDwwPj58W15cXFxcXCJ7XSkqXCIvLnNvdXJjZSwgW3NJbnRlcnBvbGF0aW9uXSksXG5cdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRcdGdyZWVkeTogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiBjcmVhdGVJbnRlcnBvbGF0aW9uSW5zaWRlKHNJbnRlcnBvbGF0aW9uLCBzSW50ZXJwb2xhdGlvblJvdW5kKSxcblx0XHRcdH1cblx0XHRdXG5cdH0pO1xuXG59KFByaXNtKSk7XG5cblByaXNtLmxhbmd1YWdlcy5kb3RuZXQgPSBQcmlzbS5sYW5ndWFnZXMuY3MgPSBQcmlzbS5sYW5ndWFnZXMuY3NoYXJwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==