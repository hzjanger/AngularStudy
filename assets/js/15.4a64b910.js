(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{218:function(t,a,e){"use strict";e.r(a);var n=e(0),r=Object(n.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备","aria-hidden":"true"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),e("h2",{attrs:{id:"nodejs安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodejs安装","aria-hidden":"true"}},[t._v("#")]),t._v(" nodejs安装")]),t._v(" "),e("h3",{attrs:{id:"在安装nodejs之前先安装nvm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在安装nodejs之前先安装nvm","aria-hidden":"true"}},[t._v("#")]),t._v(" 在安装nodejs之前先安装nvm")]),t._v(" "),e("ol",[e("li",[e("code",[t._v("wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash")]),t._v(",下载并且安装nvm")]),t._v(" "),e("li",[e("code",[t._v("source ~/.bashrc")]),t._v("，更新环境配置文件")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"}},[t._v("nvm安装来源：https://github.com/creationix/nvm"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"通过nvm安装nodejs特定的版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过nvm安装nodejs特定的版本","aria-hidden":"true"}},[t._v("#")]),t._v(" 通过nvm安装nodejs特定的版本")]),t._v(" "),e("p",[t._v("使用nvm安装最新的nodejs，"),e("code",[t._v("nvm install node")])]),t._v(" "),e("p",[t._v("查看npm的版本"),e("code",[t._v("npm -v")]),t._v("（安装nodejs自带有npm）和node的版本"),e("code",[t._v("node -v")])]),t._v(" "),e("h2",{attrs:{id:"全局安装angular-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局安装angular-cli","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局安装angular-cli")]),t._v(" "),e("p",[t._v("使用nodejs全局安装angular-cli："),e("code",[t._v("npm install -g @angular/cli")])]),t._v(" "),e("p",[t._v("查看angular-cli版本："),e("code",[t._v("ng version")])]),t._v(" "),e("h2",{attrs:{id:"配置镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置镜像","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置镜像")]),t._v(" "),e("p",[e("code",[t._v('npm config set registry " https://registry.npm.taobao.org "')])]),t._v(" "),e("p",[t._v("更改npm的config的registry 为淘宝镜像，然后再使用npm的时候，就是从淘宝镜像拉取数据了")]),t._v(" "),e("p",[t._v("在更新node-sass中，有时候也会出现资源下载不了的问题，通常是git上的资源下载不了，这时候，可以\n更改node-sass的资源路径为淘宝的 "),e("code",[t._v("npm config set sass_binary_site=https://npm.taobao.org/mirrors/node-sass/")])]),t._v(" "),e("p",[t._v("phantomjs的源 "),e("code",[t._v("npm config set phantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs/")])]),t._v(" "),e("p",[t._v("electron源 "),e("code",[t._v("npm config set electron_mirror=https://npm.taobao.org/mirrors/electron/")])]),t._v(" "),e("p",[t._v("镜像配置来源：李小蒙\n链接："),e("a",{attrs:{href:"https://blog.csdn.net/lixiaomeng_/article/details/74617668",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/lixiaomeng_/article/details/74617668"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"ng命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ng命令","aria-hidden":"true"}},[t._v("#")]),t._v(" ng命令")]),t._v(" "),e("ol",[e("li",[t._v("创建一个带路由的 NgModule，并把它注册进 AppModule 中")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在heroe目录下创建HeroesModule")]),t._v("\nng generate module heroe/heroes --module app --flat --routing\n")])])]),e("ol",{attrs:{start:"2"}},[e("li",[t._v("创建一个路由守卫")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在auth目录下创建AuthGuard")]),t._v("\nng generate guard auth/auth\n")])])])])},[],!1,null,null,null);a.default=r.exports}}]);