module.exports = {
  // 代码行长度，超过换行
  printWidth: 80,
  // tab键对应的空格缩进长度
  tabWidth: 2,
  // 使用tab缩进替代空格缩进
  useTabs: false,
  // 表达式后是否添加分号,false则只在可能引起语法错误的行首添加
  semi: false,
  // 使用单引号而非双引号
  singleQuote: true,
  /**
   * "是否给对象属性添加引号:
   * as-needed: 只在需要时添加；
   * consistent: 如果对象的一个属性添加，则所有属性添加，保持一致；
   * preserve: 不做特殊处理"
   */
  quoteProps: 'as-needed',
  // 是否在jsx中属性值使用单引号替代双引号
  jsxSingleQuote: false,
  /**
   * "是否在多行以逗号分隔的结构体中加入末尾逗号:
   * es5: 在符合es5规范的结构中使用尾逗号，例如对象和数组。在ts类型参数中不使用
   * none: 不使用尾逗号
   * all: 在所有可能情况下使用，包括函数参数与调用（需要es2017、ts2.7以上支持）"
   */
  trailingComma: 'es5',
  // 在对象字面量的大括号之间添加空格：{a: 1} -> { a: 1 }
  bracketSpacing: true,
  // 是否将元素结束标记">"置于行末，而非换行的行首
  bracketSampleLine: true,
  // 是否给单参数箭头函数的参数添加括号：(x) => x。 always | none
  arrowParens: 'always',
  // 是否对markdown文本自动处理换行
  proseWrap: 'preserve',
  // html类文件中空格的敏感度，默认css:指根据元素默认css的display属性
  htmlWhitespaceSensitivity: 'css',
  // 是否对vue文件中的script和style标签中的内容进行缩进
  vueIndentScriptAndStyle: false,
  /**
   * "换行符指定：
   * lf: \n，linux与macos通用的换行符
   * crlf: \r\n, windows中通用
   * cr: \r, 很少用
   * auto: 保持原有输入不变"
   */
  endOfLine: 'lf',
}
