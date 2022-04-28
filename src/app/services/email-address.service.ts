import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import {map} from 'rxjs/operators'; 
import { EmailAddress} from '../models/email-address.model';
import { Email } from '../models/email.model';
import { EmailMock } from '../models/email-mock.model';

@Injectable({
  providedIn: 'root'
})
export class EmailAddressService {

  constructor(private http:HttpClient) {
  }

   public getEmailsType(url:string):Observable<EmailMock[]> {
    return this.http.get<any[]>(url).pipe(map((data: any) => data.data ))
   }

   public getEmailsTypes2nd_Case(url:string):Observable<EmailMock[]> {
    return this.http.get<any[]>(url).pipe(
      map( ( item: any[]) => item.map(xx => new EmailMock()))
    );
  
   }


 
}
