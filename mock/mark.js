// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // GET POST 可省略
  'GET /api/mark': {mark:'- 视图逻辑和业务逻辑分别抽象到了View和Presenter的接口中去，提高代码的可阅读性。\n' +
      '- Presenter被抽象成接口，可以有多种具体的实现，所以方便进行单元测试。由于业务逻辑都在Presenter里，我们完全可以写一个PresenterTest的实现类继承Presenter的接口，现在只要在Activity里把Presenter的创建换成PresenterTest，就能进行单元测试了，测试完再换回来即可。\n' +
      '- 把业务逻辑抽到Presenter中去，避免后台线程引用着Activity导致Activity的资源无法被系统回收从而引起内存泄露和OOM。\n' +
      '\n' +
      '通过以上几个概念我们已经了简单解了什么是MVP模式，什么Kotlin语言，下面我们就用一张思维导图来看一下我们要做的App MVP架构的数据流向。\n' +
      '![enter image description here](https://images.gitbook.cn/85d4eb70-e63c-11e8-b46a-91431ad2fddb)'},

  'GET /api/html': {html:'<h4>1. 什么是Kotlin</h4>\n' +
      '<p>Kotlin 是一个用于现代多平台应用的静态编程语言，由 JetBrains 开发。Kotlin可以编译成Java字节码，也可以编译成JavaScript，方便在没有JVM的设备上运行。Kotlin已正式成为Android官方支持开发语言。此外，Kotlin还是一门融合了面向对象与函数式编程的语言，支持泛型、安全的空判断，并且Kotlin与Java可以做到完全的交互。</p>'},
};
