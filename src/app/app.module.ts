import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { MailComponent } from './mail/mail.component';
import { EnviadosComponent } from './enviados/enviados.component';
import { LeftBarComponent } from './layout/left-bar/left-bar.component';
import { SuperiorBarComponent } from './layout/superior-bar/superior-bar.component';

import { FormBusquedaComponent } from './layout/form-busqueda/form-busqueda.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MailComponent,
    EnviadosComponent,
    LeftBarComponent,
    SuperiorBarComponent,

    FormBusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
