# 在Angular使用第三方插件

因为Angular是使用TypeScript编写的，并且只有在index.html才能引入\<script type="text/javascript" src="..."></script>，在其他页面是不能够使用\<script type="text/javascript"></script>标签的

## 在Angular引用第三方插件的三种方法

使用jQuery为例子

### 第一种方法:在angular.json文件中配置

**1. 先把jQuery的js文件复制到asses文件下**

**2. 在angular.json文件中找到Script字段,在数组中添加jQuery的文件**

```json
"scripts": ["assets/jquery-3.2.1.js"]
```

**3. 在要使用的插件的组件中(.ts文件夹中)做如下申明: declare var $:any**

#### 第二种方法:在index.html页面上引用插件

**1. 在根目录下的index.html页面中添加js的引用**

```html
<script type="text/javascript" src="assets/jquery-3.2.1.js"></script>
```

**2. 在要使用的插件的组件中(.ts文件夹中)做如下申明: declare var $:any**

**3. 接下来在ngOnInit方法中就能正常用上面的三款插件了**

### 第三种方法:在具体的组件中import插件

**1. 在需要使用插件的组件中(.ts文件中)做如下引用**

```typescript
import "assets/jquery-3.2.1.js"; 
```

**2. 在要使用的插件的组件中(.ts文件夹中)做如下申明: declare var $:any**

**3. 接下来在ngOnInit方法中就能正常用上面的三款插件了**

文章来源[脚本之家](https://www.jb51.net/article/135528.htm)