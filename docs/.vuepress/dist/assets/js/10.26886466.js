(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{179:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("使用jQuery为例子")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("文章来源"),a("a",{attrs:{href:"https://www.jb51.net/article/135528.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("脚本之家"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"在angular使用第三方插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在angular使用第三方插件","aria-hidden":"true"}},[this._v("#")]),this._v(" 在Angular使用第三方插件")])},function(){var t=this.$createElement;return(this._self._c||t)("p",[this._v('因为Angular是使用TypeScript编写的，并且只有在index.html才能引入<script type="text/javascript" src="...">'),this._v('，在其他页面是不能够使用<script type="text/javascript">'),this._v("标签的")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"在angular引用第三方插件的三种方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在angular引用第三方插件的三种方法","aria-hidden":"true"}},[this._v("#")]),this._v(" 在Angular引用第三方插件的三种方法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"第一种方法-在angular-json文件中配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一种方法-在angular-json文件中配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 第一种方法:在angular.json文件中配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("1. 先把jQuery的js文件复制到asses文件下")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("2. 在angular.json文件中找到Script字段,在数组中添加jQuery的文件")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[this._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[this._v(":")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[this._v('"assets/jquery-3.2.1.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("]")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("3. 在要使用的插件的组件中(.ts文件夹中)做如下申明: declare var $:any")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"第二种方法-在index-html页面上引用插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二种方法-在index-html页面上引用插件","aria-hidden":"true"}},[this._v("#")]),this._v(" 第二种方法:在index.html页面上引用插件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("1. 在根目录下的index.html页面中添加js的引用")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("assets/jquery-3.2.1.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("2. 在要使用的插件的组件中(.ts文件夹中)做如下申明: declare var $:any")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("3. 接下来在ngOnInit方法中就能正常用上面的三款插件了")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"第三种方法-在具体的组件中import插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三种方法-在具体的组件中import插件","aria-hidden":"true"}},[this._v("#")]),this._v(" 第三种方法:在具体的组件中import插件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("1. 在需要使用插件的组件中(.ts文件中)做如下引用")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("import")]),this._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[this._v('"assets/jquery-3.2.1.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(";")]),this._v(" \n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("2. 在要使用的插件的组件中(.ts文件夹中)做如下申明: declare var $:any")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("3. 接下来在ngOnInit方法中就能正常用上面的三款插件了")])])}],!1,null,null,null);s.default=r.exports}}]);