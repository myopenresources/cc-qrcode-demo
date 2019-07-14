# angular版 二维码组件cc-qrcode

## 安装
npm install cc-qrcode --save 或 yarn add cc-qrcode

## 使用
```javascript
// 业务模块
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QrcodeModule } from 'cc-qrcode';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    QrcodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//业务html
<div>
  <cc-qrcode [value]="'123456789'"></cc-qrcode>
</div>

```

## 参数
1. value：二维码值<br>

2. background：背景颜色，默认白色<br>

3. foreground：前景颜色，默认黑色<br>

4. backgroundAlpha：背景透明度<br>

5. foregroundAlpha：前景透明度<br>

6. level：二维码级别，默认L<br>

7. mime：生成的图片类型，默认image/png<br>

8. padding：内边距<br>

9. size：二维码大小（宽高）<br>

10. canvas：是否使用画布生成，默认为false，图片方式
