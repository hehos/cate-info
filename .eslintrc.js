// http://eslint.org/docs/user-guide/configuring
// 0：关闭，1：警告，2：错误
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
    // // 声明的变量或参数未使用
    // "no-unused-vars": [1, {"vars": "all", "args": "after-used"}],
    // 语句结束没有分隔符
    // 'semi': [1, "always"]
    'semi': 0,
    // 不能有多余的空格
    'no-multi-spaces': 0,
    // 一行结束后面不要有空格
    'no-trailing-spaces': 0,
    "eol-last": 0,//文件以单一的换行符结束
    "space-before-function-paren": 0 // 函数定义时括号前面要不要有空格
  }
}