import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Pipes } from './component/pipesDemo/pipesDemo.component';
import { TitlePipe } from './component/pipesDemo/pipesDemo.pipe';


@NgModule({
  declarations: [
    AppComponent,Pipes,TitlePipe
    

  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
