// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        // allow flag: " ; " 添加分号，否则报错
        'semi': ['error', 'always'],
        // 忽视编辑器的缩进，使用编辑器默认缩进
        'indent': 0,
        // 忽略function前的空格
        'space-before-function-paren': 0,
        //忽略换行符
        'eol-last': 0,
        //允许尾随空格行
        'no-trailing-spaces': ["error", { "skipBlankLines": true }],
        'keyword-spacing': 0,
        'semi': 0,
        'eqeqeq': 0,
        'key-spacing': 0,
        'no-tabs': 0,
        'padded-blocks': 0,
        'comma-dangle': 0,
        'no-trailing-spaces': 0,
        'no-mixed-spaces-and-tabs': 0,
        'no-undef': 0,
        'no-unused-vars': 0,
        'no-labels': 0,
        'no-label-var': 0,
        'space-infix-ops': 0,
        'space-before-blocks': 0
    }
}