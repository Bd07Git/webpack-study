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