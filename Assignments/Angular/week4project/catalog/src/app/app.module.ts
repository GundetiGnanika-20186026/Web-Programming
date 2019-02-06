import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Catalog1Component } from './catalog1/catalog1.component';
import { NavbarComponent } from './catalog1/navbar/navbar.component';
import { FooterComponent } from './catalog1/footer/footer.component';
import { ListcatComponent } from './catalog1/listcat/listcat.component';

@NgModule({
  declarations: [
    AppComponent,
    Catalog1Component,
    NavbarComponent,
    FooterComponent,
    ListcatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
