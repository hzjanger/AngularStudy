# Material

Material个人感觉是一个非常好的一个组件库，里面的动画挺炫酷的，并且上手难度并不大，只需要了解@Input()和@Output()这两个，api中的文档差不多就可以看懂了，如果连@Input()和@Output()都不了解，那么api文档也就基本上呵呵了

## 安装

### 安装 Angular Material、Angular CDK 和 Angular 动画库

```bash
npm install --save @angular/material @angular/cdk @angular/animations
```

### 配置动画

```bash
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
export class AppModule { }
```

### 导入组件模块

由于Material中的每个组件都需要导入相应的模块，例如需要使用Material中的按钮，那么就需要导入`MatButtonModule`模块，总而言之，需要使用组件就需要导入相应的模块(需要导入的模块可以在Api文档中查找)，这个比较麻烦，可以创建一个单独的 NgModule 来导入应用中要用到的所有 Angular Material 组件。然后只要在其它用到这些组件的模块中导入这个模块就可以了

1. 创建模块

```bash
ng generate module shared/myOwnCustomMaterialModule
```

2. 在模块中导入和导出Material组件

```typescript
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCheckboxModule],
})
export class MyOwnCustomMaterialModule { }
```

3. 在共享模块中导入需要的组件模块，在把共享模块导入需要使用的模块中(例如AppModule)

```typescript
@NgModule({

  ...
  imports: [
    MyOwnCustomMaterialModule,
  ],
  ...
})

export class AppModule {
}
```

### 包含一个主题

在style.scss中添加

```scss
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```

### 手势支持

使用npm安装hammerjs

```bash
npm install --save hammerjs
```

在`main.ts`中导入

```typescript
import 'hammerjs';
```

### 添加 Material 图标集

这一步是可选的，我一般不会加上这步，我是先把图标下载下来，在使用Material的MatIconRegistry和DomSanitizer去加载本地的svg图标
