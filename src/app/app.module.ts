import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentWrapperComponent } from 'src/components/ReactComponent1/MyReactComponentWrapper';
import { ReactComponentWrapper2 } from 'src/components/ReactComponent2/ReactComponentWrapper2';



@NgModule({
  declarations: [
    AppComponent,
    MyComponentWrapperComponent,
    ReactComponentWrapper2,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }