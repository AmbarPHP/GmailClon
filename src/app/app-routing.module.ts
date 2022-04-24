import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailComponent } from './components/mail/mail.component';

const routes: Routes = [
  { path: 'Destacados', component: MailComponent },
  { path: 'Pospuestos', component: MailComponent },
  { path: 'Importantes', component: MailComponent },
  { path: 'Pospuestos', component: MailComponent },
  { path: 'Enviados', component: MailComponent },
  { path: 'Tags', component: MailComponent },
  { path: 'Programados', component: MailComponent },
  { path: 'Borradores', component: MailComponent },
  { path: 'Todos', component: MailComponent },
  { path: 'Papelera', component: MailComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
}