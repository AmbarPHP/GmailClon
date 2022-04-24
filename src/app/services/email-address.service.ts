import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmailAddress} from '../models/email-address.model';

@Injectable({
  providedIn: 'root'
})
export class EmailAddressService {

  constructor(private http:HttpClient) {

   }

   public getEmailsAddress(url:string):Observable<any>{
     return this.http.get(url);
   }
}
