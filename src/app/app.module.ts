import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { MailComponent } from './components/mail/mail.component';
import { EnviadosComponent } from './components/enviados/enviados.component';
import { LeftBarComponent } from './components/sub_layout/left-bar/left-bar.component';
import { SuperiorBarComponent } from './components/sub_layout/superior-bar/superior-bar.component';
import { FormBusquedaComponent } from './components/form-busqueda/form-busqueda.component';
import { NuevoMailComponent } from './components/nuevo-mail/nuevo-mail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    EnviadosComponent,
    LeftBarComponent,
    SuperiorBarComponent,
    FormBusquedaComponent,
     NuevoMailComponent,
     ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
