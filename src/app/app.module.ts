import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponentComponent } from './ex-cv/cv-component/cv-component.component';
import { ListeComponentComponent } from './ex-cv/liste-component/liste-component.component';
import { ItemComponentComponent } from './ex-cv/item-component/item-component.component';
import { DetailComponentComponent } from './ex-cv/detail-component/detail-component.component';
import { FormsModule } from '@angular/forms';
import { DefaultImagePipe } from './ex-pipe/default-image.pipe';
import {PipeTestComponent} from './ex-pipe/test/test.component';
import { EmbaucheComponent } from './embauche/embauche-component/embauche.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponentComponent,
    ListeComponentComponent,
    ItemComponentComponent,
    DetailComponentComponent,
    DefaultImagePipe,
    PipeTestComponent,
    EmbaucheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
