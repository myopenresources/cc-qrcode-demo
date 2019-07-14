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
