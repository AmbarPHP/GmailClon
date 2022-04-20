import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddressType } from '../models/address-type.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressTypeService {


  constructor(private http:HttpClient) {

   }

   public getTypeSender(url:string):Observable<AddressType[]>{
    return this.http.get<AddressType[]>(url);
   }
   public getTypeCC(url:string):Observable<AddressType[]>{
    return this.http.get<AddressType[]>(url);
   }
   public getTypeCC0(url:string):Observable<AddressType[]>{
    return this.http.get<AddressType[]>(url);
   }
   public getTypeTo(url:string):Observable<AddressType[]>{
    return this.http.get<AddressType[]>(url);
   }
}
