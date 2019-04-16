// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // GET POST 可省略
  'GET /api/mark': {mark:'### 安装依赖\n' +
      '```shell\n' +
      '1.安装 redux 依赖\n' +
      'npm install --save redux @tarojs/redux @tarojs/redux-h5 redux-thunk redux-logger\n' +
      '2.安装异步编程依赖\n' +
      'npm install --save @tarojs/async-await\n' +
      '3.安装dva\n' +
      'npm install --save dva-core dva-loading\n' +
      '4.安装 taro-ui\n' +
      'npm install --save taro-ui\n' +
      '```\n' +
      '###### 安装Taro ui注意事项\n' +
      '\n' +
      'H5 配置 `esnextModules`，在 taro 项目的 `config/index.js` 中新增如下配置项：\n' +
      '```json\n' +
      'h5: {\n' +
      '  esnextModules: [\'taro-ui\']\n' +
      '}\n' +
      '```\n' +
      '在`app.js`引入所需样式\n' +
      '```javascript\n' +
      'import \'taro-ui/dist/style/index.scss\' // 全局引入一次即可\n' +
      '```\n' +
      '\n' +
      '### 编写插件\n' +
      '###### 工程目录\n' +
      '```\n' +
      'src\n' +
      '    │  app.js\n' +
      '    │  app.scss\n' +
      '    │  index.html\n' +
      '    │\n' +
      '    ├─asset\n' +
      '    │  └─images\n' +
      '    │\n' +
      '    ├─components\n' +
      '    │  │\n' +
      '    │  └─login\n' +
      '    │          login.js\n' +
      '    │          login.scss\n' +
      '    │\n' +
      '    ├─config\n' +
      '    │      index.js\n' +
      '    │\n' +
      '    ├─constants\n' +
      '    │      common.js\n' +
      '    │\n' +
      '    ├─model\n' +
      '    │      common.js\n' +
      '    │      index.js\n' +
      '    │      login.js\n' +
      '    │\n' +
      '    ├─pages\n' +
      '    │  |\n' +
      '    │  └─login\n' +
      '    │         login.js\n' +
      '    │         login.scss\n' +
      '    │         service.js\n' +
      '    │\n' +
      '    └─utils\n' +
      '            action.js\n' +
      '            common.js\n' +
      '            delay.js\n' +
      '            dva.js\n' +
      '            request.js\n' +
      '\n' +
      '```\n' +
      '各js文件内容：\n' +
      'http://code.githink.cn/Maozk/Taro-Kit'},
  'GET /api/html': {html:'<h4>1. 什么是Kotlin</h4>\n' +
      '<p>Kotlin 是一个用于现代多平台应用的静态编程语言，由 JetBrains 开发。Kotlin可以编译成Java字节码，也可以编译成JavaScript，方便在没有JVM的设备上运行。Kotlin已正式成为Android官方支持开发语言。此外，Kotlin还是一门融合了面向对象与函数式编程的语言，支持泛型、安全的空判断，并且Kotlin与Java可以做到完全的交互。</p>'},
};
