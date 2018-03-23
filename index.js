/**
 * @fileoverview Used for exporting ESLint Configuring.
 * @author ice.tang
 */
'use strict';
module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'amd': true,
        'es6': true,
        'worker': true,
        'jquery': true
    },
    'rules': {
        'indent': [
            1,
            4
        ],
        'semi-spacing': [
            1
        ],
        'comma-spacing': [
            1
        ],
        'space-before-blocks': [
            1,
            'always'
        ],
        'space-before-function-paren': [
            1,
            'never'
        ],
        'space-infix-ops': [
            1
        ],
        'space-in-parens': [
            1
        ],
        'no-multi-spaces': [
            1
        ],
        'keyword-spacing': [
            1
        ],
        'key-spacing': [
            1
        ],
        'array-bracket-spacing': [
            1
        ],
        'object-curly-spacing': [
            1
        ],
        'spaced-comment': [
            1,
            'always',
            {
                'exceptions': [
                    '-',
                    '+',
                    '*'
                ]
            }
        ],
        'for-direction': [
            2
        ],
        'no-await-in-loop': [
            2
        ],
        'no-prototype-builtins': [
            2
        ],
        'default-case': [
            2
        ],
        'eqeqeq': [
            2
        ],
        'no-loop-func': [
            2
        ],
        'no-unmodified-loop-condition': [
            2
        ],
        'require-await': [
            2
        ],
        'wrap-iife': [
            1,
            'inside'
        ],
        'semi': [
            2,
            'always'
        ],
        'guard-for-in': [
            2
        ],
        'no-unused-vars': [
            2,
            {
                'argsIgnorePattern': '^(require)|(exports)|(module)$'
            }
        ],
        'no-console': [
            0
        ],
        'no-caller': [
            2
        ],
        'no-eval': [
            1
        ],
        'no-with': [
            2
        ],
        'no-restricted-globals': [
            2,
            'event',
            'undefined'
        ],
        'no-extend-native': [
            1
        ],
        'no-new-wrappers': [
            2
        ],
        'no-param-reassign': [
            1
        ],
        'no-magic-numbers': [
            1
        ],
        'no-throw-literal': [
            2
        ],
        'prefer-promise-reject-errors': [
            2
        ],
        // 'vars-on-top': [
        //     1
        // ],
        'no-use-before-define': [
            1
        ],
        'eol-last': [
            2,
            'always'
        ],
        'arrow-body-style': [
            2
        ],
        'arrow-parens': [
            1,
            'as-needed'
        ],
        'new-cap': [
            2
        ],
        'no-useless-escape': 0,
        'no-control-regex': 0
    }
}
