module.exports = {
    "rules": {
        "array-bracket-newline": [
            1,
            {
                "multiline": true
            }
        ],
        "array-bracket-spacing": [
            1,
            "always",
            {
                "arraysInArrays": true,
                "singleValue": true
            }
        ],
        "array-element-newline": [
            1,
            "consistent"
        ],
        "arrow-body-style": [
            1,
            "as-needed"
        ],
        "arrow-parens": [
            1,
            "as-needed",
            {
                "requireForBlockBody": true
            }
        ],
        "arrow-spacing": 1,
        "block-spacing": [
            1,
            "always"
        ],
        "brace-style": [
            1,
            "1tbs"
        ],
        "comma-dangle": [
            1,
            {
                "arrays": "always-multiline",
                "exports": "always-multiline",
                "functions": "always-multiline",
                "imports": "always-multiline",
                "objects": "always-multiline"
            }
        ],
        "comma-spacing": [
            1,
            {
                "after": true,
                "before": false
            }
        ],
        "comma-style": [
            1,
            "last"
        ],
        "computed-property-spacing": [
            1,
            "always"
        ],
        "curly": [
            1,
            "all"
        ],
        "dot-notation": 1,
        "eol-last": [
            1,
            "always"
        ],
        "eqeqeq": [
            1,
            "smart"
        ],
        "func-call-spacing": [
            1,
            "never"
        ],
        "function-call-argument-newline": [
            1,
            "consistent"
        ],
        "function-paren-newline": [
            1,
            "consistent"
        ],
        "generator-star-spacing": [
            1,
            {
                "after": true,
                "before": false
            }
        ],
        "implicit-arrow-linebreak": [
            1,
            "beside"
        ],
        "indent": [
            1,
            4,
            {
                "ignoreComments": false,
                "SwitchCase": 1
            }
        ],
        "key-spacing": [
            1,
            {
                "multiLine": {
                    "afterColon": true,
                    "align": "colon",
                    "beforeColon": false
                },
                "singleLine": {
                    "afterColon": true,
                    "beforeColon": false,
                    "mode": "strict"
                }
            }
        ],
        "keyword-spacing": [
            1,
            {
                "after": true,
                "before": true
            }
        ],
        "linebreak-style": [
            1,
            "unix"
        ],
        "lines-around-comment": [
            1,
            {
                "afterBlockComment": true,
                "allowArrayEnd": false,
                "allowArrayStart": true,
                "allowBlockEnd": false,
                "allowBlockStart": true,
                "allowClassEnd": false,
                "allowClassStart": true,
                "allowObjectEnd": false,
                "allowObjectStart": true,
                "beforeBlockComment": true
            }
        ],
        "lines-between-class-members": [
            1,
            "always"
        ],
        "multiline-comment-style": 0,
        "new-parens": 1,
        "newline-per-chained-call": 0,
        "no-confusing-arrow": 0,
        "no-else-return": [
            1,
            {
                "allowElseIf": true
            }
        ],
        "no-extra-bind": 1,
        "no-extra-label": 1,
        "no-floating-decimal": 1,
        "no-implicit-coercion": [
            1,
            {
                "allow": [
                    "!!",
                    "~"
                ],
                "boolean": true,
                "number": true,
                "string": true
            }
        ],
        "no-lonely-if": 1,
        "no-magic-numbers": [
            1,
            {
                "ignore": [
                    -1,
                    0,
                    1
                ]
            }
        ],
        "no-mixed-operators": 0,
        "no-multi-spaces": 1,
        "no-multiple-empty-lines": [
            1,
            {
                "max": 1,
                "maxBOF": 0,
                "maxEOF": 1
            }
        ],
        "no-return-await": 1,
        "no-trailing-spaces": 1,
        "no-undef-init": 1,
        "no-unneeded-ternary": [
            1,
            {
                "defaultAssignment": false
            }
        ],
        "no-unused-expressions": [
            1,
            {
                "allowShortCircuit": true,
                "allowTaggedTemplates": false,
                "allowTernary": false
            }
        ],
        "no-unused-labels": 1,
        "no-unused-vars": 1,
        "no-use-before-define": [
            1,
            {
                "classes": false,
                "functions": false,
                "variables": true
            }
        ],
        "no-useless-computed-key": 1,
        "no-useless-constructor": 1,
        "no-useless-rename": 1,
        "no-useless-return": 1,
        "no-var": 1,
        "no-whitespace-before-property": 1,
        "nonblock-statement-body-position": [
            1,
            "beside"
        ],
        "object-curly-newline": [
            1,
            {
                "ExportDeclaration": {
                    "consistent": true
                },
                "ImportDeclaration": {
                    "consistent": true
                },
                "ObjectExpression": {
                    "consistent": true
                },
                "ObjectPattern": {
                    "consistent": true
                }
            }
        ],
        "object-curly-spacing": [
            1,
            "always",
            {
                "arraysInObjects": true,
                "objectsInObjects": true
            }
        ],
        "object-property-newline": [
            1,
            {
                "allowAllPropertiesOnSameLine": false
            }
        ],
        "object-shorthand": [
            1,
            "always",
            {
                "avoidExplicitReturnArrows": true,
                "avoidQuotes": true
            }
        ],
        "one-var": [
            1,
            "never"
        ],
        "one-var-declaration-per-line": 0,
        "operator-assignment": [
            1,
            "always"
        ],
        "operator-linebreak": [
            1,
            "after",
            {
                "overrides": {
                    ":": "before",
                    "?": "before"
                }
            }
        ],
        "padded-blocks": [
            1,
            {
                "classes": "always"
            }
        ],
        "padding-line-between-statements": [
            1,
            {
                "blankLine": "any",
                "next": "*",
                "prev": [
                    "const",
                    "let",
                    "var"
                ]
            },
            {
                "blankLine": "any",
                "next": [
                    "const",
                    "let",
                    "var"
                ],
                "prev": "*"
            },
            {
                "blankLine": "any",
                "next": [
                    "multiline-const",
                    "multiline-let",
                    "multiline-var",
                    "multiline-expression",
                    "multiline-block-like"
                ],
                "prev": "*"
            },
            {
                "blankLine": "any",
                "next": "*",
                "prev": [
                    "multiline-const",
                    "multiline-let",
                    "multiline-var",
                    "multiline-expression",
                    "multiline-block-like"
                ]
            },
            {
                "blankLine": "any",
                "next": "*",
                "prev": "directive"
            },
            {
                "blankLine": "any",
                "next": "*",
                "prev": "iife"
            },
            {
                "blankLine": "any",
                "next": "iife",
                "prev": "*"
            },
            {
                "blankLine": "any",
                "next": "*",
                "prev": "if"
            },
            {
                "blankLine": "any",
                "next": "if",
                "prev": "*"
            },
            {
                "blankLine": "any",
                "next": "*",
                "prev": "block-like"
            },
            {
                "blankLine": "any",
                "next": "block-like",
                "prev": "*"
            },
            {
                "blankLine": "any",
                "next": "*",
                "prev": "export"
            },
            {
                "blankLine": "any",
                "next": "export",
                "prev": "*"
            },
            {
                "blankLine": "any",
                "next": "multiline-expression",
                "prev": "*"
            },
            {
                "blankLine": "any",
                "next": "*",
                "prev": "multiline-expression"
            },
            {
                "blankLine": "any",
                "next": [
                    "break"
                ],
                "prev": "multiline-expression"
            },
            {
                "blankLine": "always",
                "next": "*",
                "prev": "class"
            },
            {
                "blankLine": "always",
                "next": "class",
                "prev": "*"
            },
            {
                "blankLine": "always",
                "next": "*",
                "prev": "function"
            },
            {
                "blankLine": "always",
                "next": "function",
                "prev": "*"
            },
            {
                "blankLine": "any",
                "next": "*",
                "prev": "switch"
            },
            {
                "blankLine": "any",
                "next": "switch",
                "prev": "*"
            },
            {
                "blankLine": "any",
                "next": "*",
                "prev": "case"
            },
            {
                "blankLine": "any",
                "next": "case",
                "prev": "*"
            }
        ],
        "prefer-arrow-callback": [
            1,
            {
                "allowUnboundThis": false
            }
        ],
        "prefer-const": [
            1,
            {
                "destructuring": "any",
                "ignoreReadBeforeAssign": false
            }
        ],
        "prefer-destructuring": [
            1,
            {
                "VariableDeclarator": {
                    "object": true
                }
            }
        ],
        "prefer-exponentiation-operator": 1,
        "prefer-numeric-literals": 1,
        "prefer-object-spread": 1,
        "prefer-template": 1,
        "quote-props": [
            1,
            "consistent"
        ],
        "quotes": [
            1,
            "double",
            {
                "allowTemplateLiterals": true
            }
        ],
        "rest-spread-spacing": [
            1,
            "never"
        ],
        "semi": [
            1,
            "always"
        ],
        "semi-spacing": 0,
        "semi-style": [
            1,
            "last"
        ],
        "sort-imports": [
            1,
            {
                "allowSeparatedGroups": false,
                "ignoreCase": false,
                "ignoreDeclarationSort": true,
                "ignoreMemberSort": false,
                "memberSyntaxSortOrder": [
                    "none",
                    "all",
                    "multiple",
                    "single"
                ]
            }
        ],
        "sort-vars": 1,
        "space-before-blocks": [
            1,
            "always"
        ],
        "space-before-function-paren": 1,
        "space-in-parens": [
            1,
            "always",
            {
                "exceptions": [
                    "empty"
                ]
            }
        ],
        "space-infix-ops": 1,
        "space-unary-ops": 1,
        "spaced-comment": [
            1,
            "always",
            {
                "exceptions": [
                    "*"
                ],
                "markers": [
                    "/"
                ]
            }
        ],
        "switch-colon-spacing": [
            1,
            {
                "after": true,
                "before": true
            }
        ],
        "template-curly-spacing": [
            1,
            "always"
        ],
        "template-tag-spacing": [
            1,
            "never"
        ],
        "unicode-bom": [
            1,
            "never"
        ],
        "wrap-iife": [
            1,
            "outside"
        ],
        "wrap-regex": 1,
        "yield-star-spacing": [
            1,
            "after"
        ],
        "yoda": 2
    }
};
