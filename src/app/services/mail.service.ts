import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Email} from '../models/email.model';
import {AddressType} from '../models/address-type.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {



  constructor( private http:HttpClient) {
   
  }


  public getEmails (url:string):Observable<Email[]>{
    return this.http.get<Email[]>(url);
  }

  public getTiposMails(url:string){
      
  }

  public getEmail(id: string | number, url:string) {
    return this.http.get(`${url}/get?idMail=${id}`);
  }

  public addEmail(email: Email, url:string):Observable<Email[]> {
    return this.http.post<any>(`${url}/post`, email);
  }

  public deleteEmail(email:Email, url:string) {
    return this.http.delete(`${url}/delete?idMascota=${email.idEmail}`);
  }

  public updateEmail(email: Email, url:string) {
    return this.http.put(`${url}/update.php`, email);
  }

}
