# eslint-config-lagou
a simple configuration based on [configuring eSlint](https://eslint.org/docs/user-guide/configuring)

### Rules
The following is introduce of [rules](https://eslint.org/docs/rules/):

#### Spaces

* [warn: indent] 缩进为4个空格
* [warn: semi-spacing] 分号前无空格，后有空格
* [warn: comma-spacing] 逗号前无空格，后有空格
* [warn: space-before-blocks] 语句块之前有空格
* [warn: space-before-function-paren] 函数括号之前不能有空格（匿名函数，命名函数，异步函数）
* [warn: space-infix-ops] 操作符（+，-，*，/）前后有空格
* [warn: space-in-parens] “(”前和“)”后不存在空格
* [warn: no-multi-spaces] 禁止使用多个空格（非用于缩进）
* [warn: keyword-spacing] 关键字（if，else）前后使用空格
* [warn: key-spacing] 对象字面量的键值前使用空格
* [warn: array-bracket-spacing] 数组中[后和]前不使用空格
* [warn: object-curly-spacing] 对象中{后和}前不使用空格
* [warn: spaced-comment] 注释“//”或“/*”后必须有空格，除了“-、+、\*”

#### Syntax
* `[error: for-direction] 禁止for无限循环`
* `[error: no-await-in-loop] 禁止循环语句中用await`
* `[error: no-prototype-builtins] 禁止实例对象上直接调用Object.prototype下的内置属性（方法）`
* `[error: default-case] switch语句必须有default分支`
* `[error: eqeqeq] “===、!==”代替“==、!=”`
* `[error: no-loop-func] 禁止循环中定义函数`
* `[error: no-unmodified-loop-condition] 禁止错误的循环语句，条件值在循环途中并未改变导致无限循环`
* `[error: require-await] async函数必须有await语句`
* [warn: wrap-iife] IIFE需括号包裹函数部分
* `[error: semi] 语句末尾必须添加分号（ASI）`
* `[error: guard-for-in] for-in语句中必须有if语句`
* `[error: no-unused-vars] 禁止存在未使用过的变量（函数），除了函数参数为“require,exports,module”`

#### Deprecated or not recommend
* `[error: no-caller] 禁止arguments.caller或arguments.callee`
* [warn: no-eval] 禁止eval语句
* `[error: no-with] 禁止with语句`
* `[error: no-restricted-globals] 禁止使用全局变量event、undefined`

<!-- #### Debugging
* [warn: no-alert] 禁止alert、confirm、prompt -->

#### Others
* [warn: no-extend-native] 禁止扩展原生类型
* `[error: no-new-wrappers] 禁止基本类型用new方式声明`
* [warn: no-param-reassign] 禁止对函数参数再次赋值
* [warn: no-magic-numbers] 禁止使用魔术数字，即必须单独以一个变量来声明数字，不可直接用数字作运算
* `[error: no-throw-literal] 禁止抛出非error对象`
* `[error: prefer-promise-reject-errors] 禁止非error对象作为Promise.reject的返回值`
* [warn: vars-on-top] var声明在作用域顶部
* [warn: no-use-before-define] 禁止变量（函数）定义之前使用它们
* `[error: eol-last] 强制文件结尾必须有空行`
* `[error: arrow-body-style] 当箭头函数的花括号不可省略时必须要有`
* [warn: arrow-parens] 箭头函数的参数只有一个可省略圆括号
* `[error: new-cap] 构造函数首字母大写`
* [warn: no-useless-escape] 禁止不必要的转义
* [warn: no-control-regex] 禁止正则中使用控制字符（ASCII码中0-31的不可见字符）
