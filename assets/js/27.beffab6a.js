(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{531:function(a,t,e){"use strict";e.r(t);var v=e(6),_=Object(v.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h3",{attrs:{id:"构建工具篇"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建工具篇"}},[a._v("#")]),a._v(" 构建工具篇")]),a._v(" "),e("h4",{attrs:{id:"webpack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[a._v("#")]),a._v(" webpack")]),a._v(" "),e("h5",{attrs:{id:"基本配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本配置"}},[a._v("#")]),a._v(" 基本配置")]),a._v(" "),e("p",[a._v("entry: （指定  chunk的 入口文件  及  name）")]),a._v(" "),e("p",[a._v("单入口")]),a._v(" "),e("p",[a._v("多入口")]),a._v(" "),e("p",[a._v("output:")]),a._v(" "),e("p",[a._v('mode:""')]),a._v(" "),e("h5",{attrs:{id:"常用插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用插件"}},[a._v("#")]),a._v(" 常用插件")]),a._v(" "),e("p",[a._v("html-webpack-plugin   指定一个模板")]),a._v(" "),e("p",[a._v("clean-webpack-plugin  每次打包前清除文件夹    webpack 5.x 支持ouput  clean true属性")]),a._v(" "),e("h5",{attrs:{id:"注意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[a._v("#")]),a._v(" 注意")]),a._v(" "),e("p",[a._v("若  webpack-dev-server 3.x  启动报错  需要将webpack-cli 的版本也改成3.x")]),a._v(" "),e("h5",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),e("p",[a._v("区分  module   chunk   bundle"),e("br"),a._v("\n多个module 组成一个 chunk"),e("br"),a._v("\nchunk  和  bundle正常情况下一一对应")]),a._v(" "),e("h3",{attrs:{id:"核心类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心类"}},[a._v("#")]),a._v(" 核心类")]),a._v(" "),e("ol",[e("li",[a._v("tapable   =>  webpack的核心  发布订阅模式      plugin  applyplugin  订阅和触发对应的操作")]),a._v(" "),e("li",[a._v("compiler => 编译器实例  管控整个编译流程  将整个流程分为n多个任务点")]),a._v(" "),e("li",[a._v("compilation  => 解析module 和 trunk")])]),a._v(" "),e("p",[a._v("几个任务点")]),a._v(" "),e("p",[a._v("this-compilation   compilation    ///当Compilation实例生成时")]),a._v(" "),e("p",[a._v("optimize // 当所有modules和chunks已生成，开始优化时")]),a._v(" "),e("p",[a._v("compile // 当编译器开始编译模块时")]),a._v(" "),e("p",[a._v("before-resolve   // 在factory开始解析模块前")]),a._v(" "),e("p",[a._v("阶段")]),a._v(" "),e("ol",[e("li",[a._v("webpack的准备阶段")]),a._v(" "),e("li",[a._v("modules和chunks的生成阶段")]),a._v(" "),e("li",[a._v("文件生成阶段")])])])}),[],!1,null,null,null);t.default=_.exports}}]);