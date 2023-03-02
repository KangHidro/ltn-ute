import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutofocusDirective } from './autofocus.directive';
import { TotNghiepComponent } from './tot-nghiep/tot-nghiep.component';
import { KhenThuongComponent } from './khen-thuong/khen-thuong.component';

@NgModule({
  declarations: [
    AppComponent,
    TotNghiepComponent,
    KhenThuongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AutofocusDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
