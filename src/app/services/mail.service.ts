import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Email} from '../models/email.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private grupos=[{}];


  constructor( private http:HttpClient) {
    this.grupos=[
     
      {"id":1 ,"name":"Destacados"},
      {"id":2 ,"name":"Pospuestos"},
      {"id":3 ,"name":"Importantes"},
      {"id":4 ,"name":"Enviados"},
   
      {"id":5 ,"name":"Tags"},
     
      {"id":6 ,"name":"Programados"},
      
      {"id":7 ,"name":"Borradores"},
      
      {"id":8 ,"name":"Todos"},
     
      {"id":9 ,"name":"Spam"},
      
      {"id":10 ,"name":"Papelera"},
      {"id":11 ,"name":"Categorias"},
      {"id":12 ,"name":"Social"},
      {"id":13 ,"name":"Gestionar Etiquetas"},
      {"id":14 ,"name":"Nueva Etiqueta"}];
  }


  public getEmails (url:string):Observable<Email[]>{
    return this.http.get<Email[]>(url);
  }

  public getTipos(url:string){
      return this.grupos;
    
  }

  public getEmail(id: string | number, url:string) {
    return this.http.get(`${url}/get?idMail=${id}`);
  }

  public addEmail(email: Email, url:string):Observable<Email[]> {
    return this.http.post<any>(`${url}/post`, email);
  }

  public deleteEmail(email:Email, url:string) {
    return this.http.delete(`${url}/delete?idMascota=${email.id}`);
  }

  public updateEmail(email: Email, url:string) {
    return this.http.put(`${url}/update.php`, email);
  }

}
