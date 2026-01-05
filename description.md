### v1.0 调整 package.json 文件以确保安装包是私有的，并移除 main 入口，这可以防止意外发布代码。
使用这种方式管理 JavaScript 项目存在一些问题：

无法直接体现脚本的执行依赖于外部库。
如果依赖不存在，或者引入顺序错误，应用程序将无法正常运行。
如果依赖被引入但是并没有使用，浏览器将被迫下载无用代码。
试试使用 webpack 管理这些脚本。

### v2.0  删除根目录下的index.html文件,安装loadsh.   npm install --save lodash
安装一个将被打包到生产环境 bundle 的包时，应该使用 npm install --save；而安装一个用于开发环境的包时（例如代码检查工具、测试库等），应该使用 npm install --save-dev。请查看 npm 文档 以了解更多相关信息。

执行 npx webpack --mode development,可以看到在dist目录下生成了一个main.js文件
然后执行 open dist/index.html,可以看到页面可以正常访问"'Hello webpack",或者安装vscode 插件live server


### v3.0  建一个 webpack 配置文件 webpack.config.js
在webpack.config.js中添加 mode: 'development'
执行 npx webpack --config webpack.config.js（必须加上--config参数）
为什么npx wepack ./webpack.config.js 会报错？
当运行 npx webpack [某个路径] 时，Webpack 会按照以下逻辑来理解意图：
1. 不带参数的默认行为
如果只运行 npx webpack：
Webpack 会自动在当前目录下寻找名为 webpack.config.js 的文件作为配置文件。
如果找到了，就按照里面的配置运行。
2. 为什么 npx webpack ./webpack.config.js 会报错？
当你直接在后面跟一个路径（而不加 --config）时，Webpack 会把这个路径理解为入口文件（Entry Point），而不是配置文件。
你的意图：使用 webpack.config.js 来配置打包过程。
Webpack 的理解：你想把 webpack.config.js 这个文件本身给“打包”了，把它当成源码（就像 index.js 一样）去处理。
结果： 由于 webpack.config.js 是运行在 Node.js 环境下的脚本，里面使用了 require('path')。而 Webpack 默认是为浏览器打包的，浏览器里根本没有 path 模块，所以它会报错说 Module not found: Error: Can't resolve 'path'。
3. --config 参数的作用
--config 是一个显式声明。它告诉 Webpack：
“嘿，不要把后面这个文件当成要打包的源码，它是你的指挥手册（配置文件）。”
总结
如果用默认文件名 (webpack.config.js)：直接运行 npx webpack 即可，它会自动识别，不需要加参数。
如果你用了非默认文件名（比如 webpack.prod.js）：你必须运行 npx webpack --config webpack.prod.js。
如果你误传了路径：Webpack 会把它当成源码入口，从而导致各种环境不匹配的报错。


### v4.0  考虑到使用 CLI 这种方式运行本地 webpack 副本不是特别方便，可以在 package.json 文件中添加 npm script 以设置一个快捷方式："build": "webpack"

现在可以使用 npm run build 命令替代之前使用的 npx 命令。注意，使用 npm scripts 便可以像使用 npx 那样通过模块名引用本地安装的 npm 包。


### v5.0  之前都是在index.html中手动引入资源，但是实际开发中，随着应用程序的不断增长，手动引入资源的方式已经不能满足需求了。使用插件可以更容易地管理资源。
比如现在有多个入口文件（entry），每个入口文件对应一个输出文件（output）。我们不可能每次都在index.html中手动引入资源。
npm install --save-dev html-webpack-plugin