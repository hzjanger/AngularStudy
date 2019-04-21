# 准备

## nodejs安装

### 在安装nodejs之前先安装nvm
1. `wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash`,下载并且安装nvm
2. `source ~/.bashrc`，更新环境配置文件

[nvm安装来源：https://github.com/creationix/nvm](https://github.com/creationix/nvm)

### 通过nvm安装nodejs特定的版本
	
使用nvm安装最新的nodejs，`nvm install node`

查看npm的版本`npm -v`（安装nodejs自带有npm）和node的版本`node -v`

## 全局安装angular-cli

使用nodejs全局安装angular-cli：`npm install -g @angular/cli`

查看angular-cli版本：`ng version`

## 配置镜像

`npm config set registry " https://registry.npm.taobao.org "`

更改npm的config的registry 为淘宝镜像，然后再使用npm的时候，就是从淘宝镜像拉取数据了

在更新node-sass中，有时候也会出现资源下载不了的问题，通常是git上的资源下载不了，这时候，可以
更改node-sass的资源路径为淘宝的 `npm config set sass_binary_site=https://npm.taobao.org/mirrors/node-sass/ `

phantomjs的源 `npm config set phantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs/ `

electron源 `npm config set electron_mirror=https://npm.taobao.org/mirrors/electron/`

镜像配置来源：李小蒙
链接：[https://blog.csdn.net/lixiaomeng_/article/details/74617668](https://blog.csdn.net/lixiaomeng_/article/details/74617668) 
