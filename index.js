import perfectionistPlugin from 'eslint-plugin-perfectionist';


export default {
    plugins: {
        perfectionist: perfectionistPlugin,
    },

    disabledRules: {
        'function-paren-newline'      : 'off',
        'keyword-spacing'             : 'off',
        'one-var-declaration-per-line': 'off',
        'perfectionist/sort-imports'  : 'off',
        'quote-props'                 : 'off',
        'quotes'                      : 'off',
        'semi'                        : 'off',
        'semi-spacing'                : 'off',
        'sort-imports'                : 'off',
        'sort-keys'                   : 'off',
        'space-before-function-paren' : 'off',
    },

    rules: {
        'perfectionist/sort-interfaces': [
            'error',
            {
                fallbackSort: { order: 'asc', type: 'alphabetical' },
                ignoreCase  : false,
                order       : 'asc',
                type        : 'alphabetical',
            },
        ],
        'perfectionist/sort-jsx-props': [
            'error',
            {
                fallbackSort: { order: 'asc', type: 'alphabetical' },
                ignoreCase  : false,
                order       : 'asc',
                type        : 'alphabetical',
            },
        ],
        'perfectionist/sort-objects': [
            'error',
            {
                fallbackSort      : { order: 'asc', type: 'alphabetical' },
                ignoreCase        : false,
                objectDeclarations: true,
                order             : 'asc',
                type              : 'alphabetical',
            },
        ],

        'curly'                         : ['error', 'multi-line'],
        'function-call-argument-newline': ['warn', 'consistent'],
        'key-spacing'                   : [
            'warn',
            {
                multiLine: {
                    afterColon : true,
                    align      : 'colon',
                    beforeColon: false,
                },
                singleLine: {
                    afterColon : true,
                    beforeColon: false,
                    mode       : 'strict',
                },
            },
        ],
        'no-empty': [
            'error',
            {
                'allowEmptyCatch': true
            }
        ],
        'no-implicit-coercion': [
            'warn',
            {
                allow  : ['!!', '~'],
                boolean: true,
                number : true,
                string : true,
            },
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                max   : 2,
                maxBOF: 0,
                maxEOF: 1,
            },
        ],
        'no-undef'            : 'error',
        'object-curly-newline': [
            'warn',
            {
                ExportDeclaration: {
                    consistent: true,
                },
                ImportDeclaration: {
                    consistent: true,
                },
                ObjectExpression: {
                    consistent: true,
                },
                ObjectPattern: {
                    consistent: true,
                },
            },
        ],
        'object-curly-spacing': [
            'warn',
            'always',
            {
                arraysInObjects : true,
                objectsInObjects: true,
            },
        ],
        'object-property-newline': [
            'warn',
            {
                allowAllPropertiesOnSameLine: true,
            },
        ],
        'object-shorthand': [
            'warn',
            'always',
            {
                avoidExplicitReturnArrows: true,
                avoidQuotes              : true,
            },
        ],
        'one-var'            : ['warn', 'never'],
        'operator-assignment': ['warn', 'always'],
        'operator-linebreak' : [
            'warn',
            'before',
            {
                overrides: {
                    ':': 'before',
                    '?': 'before',
                },
            },
        ],
        'padded-blocks': [
            'warn',
            {
                classes: 'always',
            },
        ],
        'padding-line-between-statements': [
            'warn',
            {
                blankLine: 'any',
                next     : '*',
                prev     : ['const', 'let', 'var'],
            },
            {
                blankLine: 'any',
                next     : ['const', 'let', 'var'],
                prev     : '*',
            },
            {
                blankLine: 'any',
                next     : [
                    'multiline-const',
                    'multiline-let',
                    'multiline-var',
                    'multiline-expression',
                    'multiline-block-like',
                ],
                prev: '*',
            },
            {
                blankLine: 'any',
                next     : '*',
                prev     : [
                    'multiline-const',
                    'multiline-let',
                    'multiline-var',
                    'multiline-expression',
                    'multiline-block-like',
                ],
            },
            {
                blankLine: 'any',
                next     : '*',
                prev     : 'directive',
            },
            {
                blankLine: 'any',
                next     : '*',
                prev     : 'iife',
            },
            {
                blankLine: 'any',
                next     : '*',
                prev     : 'iife',
            },
            {
                blankLine: 'any',
                next     : '*',
                prev     : 'if',
            },
            {
                blankLine: 'any',
                next     : 'if',
                prev     : '*',
            },
            {
                blankLine: 'any',
                next     : '*',
                prev     : 'block-like',
            },
            {
                blankLine: 'any',
                next     : 'block-like',
                prev     : '*',
            },
            {
                blankLine: 'any',
                next     : '*',
                prev     : 'export',
            },
            {
                blankLine: 'any',
                next     : 'export',
                prev     : '*',
            },
            {
                blankLine: 'any',
                next     : 'multiline-expression',
                prev     : '*',
            },
            {
                blankLine: 'any',
                next     : '*',
                prev     : 'multiline-expression',
            },
            {
                blankLine: 'any',
                next     : ['break'],
                prev     : 'multiline-expression',
            },
            {
                blankLine: 'always',
                next     : '*',
                prev     : 'class',
            },
            {
                blankLine: 'always',
                next     : 'class',
                prev     : '*',
            },
            {
                blankLine: 'always',
                next     : '*',
                prev     : 'function',
            },
            {
                blankLine: 'always',
                next     : 'function',
                prev     : '*',
            },
            {
                blankLine: 'any',
                next     : '*',
                prev     : 'switch',
            },
            {
                blankLine: 'any',
                next     : 'switch',
                prev     : '*',
            },
            {
                blankLine: 'any',
                next     : '*',
                prev     : 'case',
            },
            {
                blankLine: 'any',
                next     : 'case',
                prev     : '*',
            },
        ],
        'prefer-arrow-callback': [
            'warn',
            {
                allowUnboundThis: false,
            },
        ],
        'prefer-const': [
            'warn',
            {
                destructuring         : 'any',
                ignoreReadBeforeAssign: false,
            },
        ],
        'prefer-numeric-literals': 'warn',
        'prefer-object-spread'   : 'warn',
        'prefer-template'        : 'warn',
        'rest-spread-spacing'    : ['warn', 'never'],
        'semi-style'             : ['warn', 'last'],
        'space-before-blocks'    : ['warn', 'always'],
        'space-infix-ops'        : 'warn',
        'space-unary-ops'        : 'warn',
        'spaced-comment'         : [
            'warn',
            'always',
            {
                block: {
                    exceptions: ['*'],
                    markers   : ['/'],
                },
                line: {
                    exceptions: ['*'],
                    markers   : ['/', '#region', '#endregion'],
                },
            },
        ],
        'switch-colon-spacing': [
            'warn',
            {
                after : true,
                before: true,
            },
        ],
        'template-curly-spacing': ['warn', 'never'],
        'template-tag-spacing'  : ['warn', 'never'],
        'unicode-bom'           : ['warn', 'never'],
        'wrap-iife'             : ['warn', 'outside'],
        'wrap-regex'            : 'warn',
    },

    settings: {
        perfectionist: {
            ignoreCase        : false,
            partitionByComment: true,
            partitionByNewLine: true,
            type              : 'alphabetical',
        },
    },
};
