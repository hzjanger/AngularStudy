# 管道

管道用与在显示数据的时候做一些处理，然后在输出来，

## 应用场景
1. 例如显示时间的时候需要将时间的格式处理，让可读性更高

2. 例如由于Angular提供了防注入的风险，在数据绑定的时候会把html字符串当做普通的字符串输出，如果需要显示html字符串所对应的功能，那么需要调用DomSanitizer类的bypassSecurityTrustHtml方法，在考虑到复用性和方便性的时候，可以将其作为一个管道，来进行处理

## 内置管道

在Angular中有一些管道是由Angular已经提供好了，例如 [DatePipe](https://angular.cn/api/common/DatePipe)、[UpperCasePipe](https://angular.cn/api/common/UpperCasePipe)、[LowerCasePipe](https://angular.cn/api/common/LowerCasePipe)、[CurrencyPipe](https://angular.cn/api/common/CurrencyPipe) 和 [PercentPipe](https://angular.cn/api/common/PercentPipe),不需要实现，只需要使用就可以了

以DatePipe为例子

```typescript
//pipe-demo.component.ts
export class PipeDemoComponent implements OnInit {

  nowDate: Date = new Date();

}
```

```html
<p>{{nowDate | date}}</p>
```

不适用管道输出为`Tue Jun 18 2019 15:00:53 GMT+0800 (中国标准时间)`，使用管道之后输出为`Jun 18, 2019`，对于这种形式阅读感觉还不是特别好，所以可以添加一些参数

```html
<p>{{date | date:"yyyy-MM-dd HH:mm:ss"}}</p>
```

这时候输出为`2019-06-18 15:04:43`,其中的`-`、` `和`:`都是自己定义的，当是`yyyy`这些是固定的，不能够更改，修改间隔

```html
<p>{{date | date:"yyyy/MM/dd HH:mm:ss"}}</p>
```

有关更多日期格式的用法请参考这篇博客[https://blog.csdn.net/u011763994/article/details/78747587](https://blog.csdn.net/u011763994/article/details/78747587)

## 自定义管道

管道是可以自定义的

1. 使用@Pipe为管道取个名字,例如为管道取名为`exponentialStrengthPipe`

```typescript
@Pipe({
  name: 'exponentialStrengthPipe'
})
```

2. 实现`PipeTransform`类，并重写`transform`方法

3. 在`declarations`数组中添加该管道

### 创建管道

1. 使用命令创建
```bash
ng generate pipe html
```

使用命令之后就在`app`目录下创建了一个管道,初始代码如下

```typescript
// html.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'html'
})
export class HtmlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

```

可以看到在`app.module.ts`文件中`declarations`数组新增了`ExponentialStrengthPipePipe`

```typescript
// app.module.ts

import { HtmlPipe } from './pipe/html.pipe';

@NgModule({
  declarations: [
    //....
    HtmlPipe
  ],
})
```
如果不使用命令创建也可以，但所有的步骤不能够少

2. 添加一个构造函数

```typescript
// html.pipe.ts

  constructor(private domSanitizer: DomSanitizer) {

  }
```

3. 重写`transform`方法

```typescript
// html.pipe.ts

  transform(value: any, args?: any): any {
    return this.domSanitizer.bypassSecurityTrustHtml(value);
  }
```

4. 使用

```html
# pipe-demo.component.html

<div [innerHTML]="htmlDate | html"></div>
```
```typescript
//pipe-demo.component.ts

  htmlDate: any = '<h2>hell world</h2>';
```


这样，一个自定义的管道就完成了