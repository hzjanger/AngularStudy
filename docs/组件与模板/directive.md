# 属性型指令

用于改变一个DOM元素的外观或行为

## 内置属性型指令

Angular提供了`NgClass`、`NgStyle`、`NgModel`等属性型指令，`NgClass`可以添加或移除一组 CSS 类，`NgStyle`可以 添加或移除一组 CSS 样式，`NgModel`是双向绑定到 HTML 表单元素

### NgClass的使用

在学js的时候，通过DOM操作来动态的添加或删除css类，例如

```javascript
let demoClassList = document.querySelectorAll('.demo1')[0].classList;
console.log(demoClassList);
demoClassList.add('red');
console.log(demoClassList);
demoClassList.remove('demo1');
console.log(demoClassList);
```

所对应的html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>

  <style>
    .red {
      color: #ff0000;
    }
  </style>
</head>
<body>
<div class="demo1">hello world</div>
<script src="demo.js"></script>
</body>
</html>
```

在使用`NgClass`的时候，通过绑定一个对象，对象的键作为class的名字，键的值如果为true，那么添加这个class名，如果为false，那么不添加这个calss名

1. 定义一个对象

```typescript
// directive-demo.component.ts

export class DirectiveDemoComponent implements OnInit {


  dataClass = {
    'red': true,
    'yellow': false,
    'backgroundGreen':  true
  };


}
```

2. 在html中使用

```typescript
<div [ngClass]="dataClass">
  ngClass使用
</div>
```

可以看到这个div节点的class属性有red和backgroundGreen

### NgStyle的使用

NgStyle和NgClass的使用方法是一样的，详细可看这里[https://angular.cn/guide/template-syntax#ngstyle](https://angular.cn/guide/template-syntax#ngstyle)

### NgModule的使用

ngModule用于双向数据绑定，用于模板驱动表单中

1. 在使用之前，需要在app.module.ts（自定义的模块也可）中导入FormsModule模块

```typescript
@NgModule({
	// ...
	imports: [
		// ....
    	FormsModule,
    ]
    // ...
})    
```

2. 使用

在html中使用

```html
<!-- directive-demo.component.html -->
<input type="text" [(ngModel)]="inputData">
<p>{{inputData}}</p>
```
定义inputData成员变量

```typescript
// directive-demo.component.ts
export class DirectiveDemoComponent implements OnInit {

  inputData: any = "";
}  
```

## 自定义属性型指令

### 步骤

1. 通过`@Directive`声明

2. 在`declarations`数组中添加该指令

### 背景

最近需要开发一个系统，需要写一些文章啥的，找了一些文本编辑器，例如百度的[ueditor](https://ueditor.baidu.com/website/)，国外的[ckeditor](https://ckeditor.com/docs/index.html),这个分ckeditor4和ckeditor5，又找了[editor.md](https://pandao.github.io/editor.md/),发现这个感觉不错，最终选了这个，最后把这个整进了Angular(v8),通过属性型指令来达到复用效果

### 开发

#### 环境准备

1. 下载editor.md的源码放到assets目录下

2. 把`editor.md`需要的css和js全局引入,在此之前需要先引入`jquery`的js

```json
angular.json

"styles": [
  "./src/assets/editor.md/css/editormd.css",
],
"scripts": [
  "./node_modules/jquery/dist/jquery.js",
  "./src/assets/editor.md/editormd.min.js"
]
```

#### editor.md的配置文件


```typescript
//editor-config.ts

export class EditorConfig {
  public width = '100%';
  /**
  * editor的高度
  */
  public height = `500`;
  /**
  * editor的lib文件夹路径
  */
  public path = 'assets/editor.md/lib/';
  public codeFold: true;
  public searchReplace = true;
  /**
   * 工具栏
   */
  public toolbar = true;
  public emoji = true;
  public taskList = true;
  /**
   * 科学公式TeX语言支持
   */
  public tex = true;
  public readOnly = false;
  public tocm = true;
  /**
   * 实时预览
   */
  public watch = true;
  /**
   * 预览 HTML的代码块高亮
   */
  public previewCodeHighlight = true;
  /**
   * 保存HTML到Textarea
   */
  public saveHTMLToTextarea = true;
  public markdown = '';
  /**
   * 流程图支持
   */
  public flowChart = true;
  public syncScrolling = true;
  /**
   * 时序/序列图支持
   */
  public sequenceDiagram = true;
  public imageUpload = true;
  public imageFormats = ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'];
  public imageUploadURL = '';

  };

  constructor() {
  }


}

```

#### 编写editor的属性型指令

1. 创建指令

```bash
ng generate directive editorMd
```

2. 指令内容编写

> 通过@Input()数据绑定向指令传递值
>
> 通过@Output()从指令中向外发送事件
>

```typescript
//editor-md.directive.ts

import {AfterViewInit, Attribute, Directive, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2} from '@angular/core';
import {EditorConfig} from './model/editor-config';

declare var editormd: any;

@Directive({
  selector: '[appEditorMd]'
})
export class EditorMdDirective implements AfterViewInit {

  /**
   * 配置选项
   */
  @Input() editormdConfig: EditorConfig;
  /**
   * 发射器
   */
  @Output() onEditorChange: EventEmitter<string> = new EventEmitter<string>();

  /**
   * editormd编辑器
   */
  editor: any;

  constructor(@Attribute('id') private id: string) {
  }

  /**
   * 获取markdown编辑器里面的markdown语法
   */
  getMarkdown(): string {
    return this.editor.getMarkdown();
  }

  /**
   * 获取markdown编辑器里面由markdown语法生成的html代码
   */
  getHTML(): string {
    return this.editor.getHTML();
  }

  /**
   * angular的生命周期
   */
  ngAfterViewInit(): void {
    //创建编辑器
    this.editor = editormd(this.id, this.editormdConfig);
    // 当编辑器内容改变时，触发textarea的change事件
    this.editor.on('change', () => {
      this.onEditorChange.emit(this.editor.getMarkdown());
    });
  }

}


```

3. 在组件中使用

组件html内容编写

```html
<!-- editor-blog.component.html -->


<button (click)="getMarkdown()">得到md内容</button>
<button (click)="getHtml()">得到html内容</button>
<div id="md"
     appEditorMd
     [editormdConfig]="conf"
     (onEditorChange)="syncModel($event)">
  <textarea style="display: block;" [(ngModel)]="markdown"></textarea>
</div>
```

组件ts内容编写

> 在组件中使用@ViewChild()调用指令中的方法

```typescript
// editor-blog.component.ts


import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {EditorConfig} from '../../editor/model/editor-config';
import {ActivatedRoute, Params} from '@angular/router';
import {EditorMdDirective} from '../../editor/editor-md.directive';
import {MatDialog} from '@angular/material';
import {ReleaseArticleDialogComponent} from '../dialog/release-article-dialog/release-article-dialog.component';

@Component({
  selector: 'app-editor-blog',
  templateUrl: './editor-blog.component.html',
  styleUrls: ['./editor-blog.component.scss']
})
export class EditorBlogComponent implements OnInit {

  conf = new EditorConfig();
  /**
  * markdown内容
  */
  markdown = '';


  @ViewChild(EditorMdDirective, {static: false})
  private editorMdDirective: EditorMdDirective;

  /**
  * 同步属性内容
  */
  syncModel(str): void {
    this.markdown = str;
  }


  constructor() { }

  ngOnInit() {
  }

  /**
   * 获取markdown语法
   */
  getMarkdown() {
    console.log(this.editorMdDirective.getMarkdown());
  }

  /**
   * 获取markdown语法产生的html
   */
  getHtml() {
    console.log(this.editorMdDirective.getHTML());
  }
}

```
