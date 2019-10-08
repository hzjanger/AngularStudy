# editor.md

## 下载editor的文件

进入官网进行下载[https://pandao.github.io/editor.md/](https://pandao.github.io/editor.md/),解压后放入`assets`目录下

## 全局加载editormd资源文件

### 全局加载js文件

在`angular.json`中引入`editormd.min.js`,在引入`editormd.min.js`文件前需要先引入`jQuery`

- 安装jQuery

```bash
npm install jquery --save
```

- 在`scripts`中引入js文件

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "scripts": [
              //引入js文件
              "node_modules/jquery/dist/jquery.js",
              "src/assets/editor.md/editormd.min.js"
            ]
          }
        }
      }
  }
}
```

### 全局加载css文件

```json
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "styles": [
              "src/styles.scss",
              //引入css
              "src/assets/editor.md/css/editormd.css"
            ],
          }
        }
      }
  }
}
```

## 编写editor.md的配置选项

```typescript
export class EditorConfig {
    public width = '100%';
    public height = '100%';
    //下载的editor.md的地址
    public path = 'assets/editor.md/lib/';
    public codeFold: true;
    public searchReplace = true;
    public toolbar = true;
    public emoji = true;
    public taskList = true;
    public tex = true;
    public readOnly = false;
    public tocm = true;
    public watch = true;
    public previewCodeHighlight = true;
    public saveHTMLToTextarea = true;
    public markdown = '';
    public flowChart = true;
    public syncScrolling = true;
    public sequenceDiagram = true;
    public imageUpload = true;
    public imageFormats = ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'];
    public imageUploadURL = '';

    constructor(option: any = null) {
      Object.assign(this, option);
    }
}
```

## 创建指令,通过指令使用editor

```typescript
import {AfterViewInit, Attribute, Directive, EventEmitter, Input, Output} from '@angular/core';
import {EditorConfig} from './config/EditorConfig';

declare var editormd: any;
import * as $ from 'jquery';

@Directive({
  selector: '[appEditorMd]'
})
export class EditorMdDirective implements AfterViewInit {
  /**
   * 配置选项
   */
  @Input() editormdConfig: EditorConfig;
  /**
   * 发射器, markdown 文本
   */
  @Output() onEditorChange: EventEmitter<string> = new EventEmitter<string>();

  /**
   * editormd编辑器
   */
  editor: any;

  constructor(@Attribute('id') private id: string) {
  }

  ngAfterViewInit(): void {
    //可以调用editor中的方法
    this.editor = editormd(this.id, this.editormdConfig); // 创建编辑器
    // 当编辑器内容改变时，触发textarea的change事件
    this.editor.on('change',  () => {
      this.onEditorChange.emit(this.getMarkdown());
    });
  }

  getMarkdown() {
    return this.editor.getMarkdown();
  }

  getHtml() {
    return $('.editormd-preview').html();
  }
}
```

## 通过组件将其进行封装

```typescript
import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {EditorConfig} from '../@plugin/editor/config/EditorConfig';
import {EditorMdDirective} from '../@plugin/editor/EditorMdDirective';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-editor-markdown',
  template: `
    <form [formGroup]="markdownForm">
      <div id="md"
           appEditorMd
           [editormdConfig]="conf"
           class="editor-md-content"
           (onEditorChange)="syncModel($event)">
        <textarea formControlName="markdown" style="display: block;"></textarea>
      </div>
    </form>
  `,
  styleUrls: ['./editor-markdown.component.scss']
})
export class EditorMarkdownComponent implements OnInit {

  /**
   * markdown文章内容表单控件
   */
  markdownForm: FormGroup;

  /**
   * 原先的markdown文档内容
   */
  private _oldMarkdownContent: string;

  /**
   * markdown编辑器的属性配置
   */
  @Input() conf: EditorConfig;


  @ViewChild(EditorMdDirective, {static: false})
  private editorMdDirective: EditorMdDirective;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.markdownForm = this.fb.group({
      markdown: [this._oldMarkdownContent, [Validators.required]]
    });
  }

  @Input() set oldMarkdownContent(value: string) {
    this._oldMarkdownContent = value;
    //markdownForm初始化了,先执行@Input在执行ngOnInit
    if (this.markdownForm) {
      this.markdownForm.patchValue({
        markdown: value
      });
    }
  }

  get markdown(): FormControl {
    return this.markdownForm.get('markdown') as FormControl;
  }

  /**
   * 同步属性内容
   * @param str 输入的markdown文档
   */
  syncModel(str): void {
    this.markdown.setValue(str);
  }

  /**
   * 判断是否修改过
   */
  get isDirtyMarkdown() {
    return this._oldMarkdownContent === this.markdownForm.value.markdown;
  }

  /**
   * 得到editor编辑器里面的值
   */
  getEditorMarkdownComponentValue(): {markdown: string, html: string} {
    let obj: any = this.markdownForm.value;
    obj.html = this.editorMdDirective.getHtml();
    return obj;
  }

}
```

## 使用

```typescript
import { Component } from '@angular/core';
import {EditorConfig} from './@plugin/editor/config/EditorConfig';

@Component({
  selector: 'app-root',
  template: `
    <app-editor-markdown [conf]="config" [oldMarkdownContent]="markdown"></app-editor-markdown>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /**
   * editor的配置参数信息
   */
  config: EditorConfig;

  /**
   * markdown的内容
   */
  markdown: string;

  constructor() {
    this.config = new EditorConfig({height: 'calc(100vh - 71px)'});
    this.markdown = '测试内容';
  }
}
```

代码地址: [https://gitee.com/hzjanger/angular-editor](https://gitee.com/hzjanger/angular-editor)
