import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { globalErrorHandlingInterceptor, I2, I3 } from './interceptors.service';
import { Component1Component } from './component1/component1.component';
import { ErrorHandleService } from './error-handle.service';
import { Component2Component } from './component2/component2.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, Component1Component, Component2Component],
  providers:[ErrorHandleService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: I2,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: I3,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: globalErrorHandlingInterceptor,
      multi: true
    }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
