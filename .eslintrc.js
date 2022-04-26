module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['react-hooks'],
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        '@typescript-eslint/ban-ts-ignore': 0,
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-template-curly-in-string': 0,
        '@typescript-eslint/array-callback-return': 0,
        '@typescript-eslint/block-scoped-var': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/no-use-before-define': 0,
        'react/prop-types': 0,
        '@typescript-eslint/ban-types': 0,
        'react/no-string-refs': 0,
        'react-hooks/rules-of-hooks': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
