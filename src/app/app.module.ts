import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LuzinhasComponent } from './luzinhas/luzinhas.component';
import { PapaiNoelComponent } from './papai-noel/papai-noel.component';
import { ImgResultComponent } from './img-result/img-result.component';

@NgModule({
  declarations: [
    AppComponent,
    LuzinhasComponent,
    PapaiNoelComponent,
    ImgResultComponent
  ],
  imports: [
    BrowserModule,
  RouterModule.forRoot([{
                path: '',
                component: AppComponent
            },
        ]), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
