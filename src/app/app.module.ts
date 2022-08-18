import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactWrapperComponent1 } from 'src/components/ReactComponent1/ReactComponentWrapper1';
import { ReactComponentWrapper2 } from 'src/components/ReactComponent2/ReactComponentWrapper2';



@NgModule({
  declarations: [
    AppComponent,
    ReactWrapperComponent1,
    ReactComponentWrapper2,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }