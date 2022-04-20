import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from '../models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http:HttpClient) {

   }

  public getAddress(url:string):Observable<Address[]>{
    return this.http.get<Address[]>(url)
  }
}
