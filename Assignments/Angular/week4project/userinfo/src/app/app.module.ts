import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavComponent } from './user/nav/nav.component';
import { FooterComponent } from './user/footer/footer.component';
import { InfoComponent } from './user/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavComponent,
    FooterComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
