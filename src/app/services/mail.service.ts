import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Imail} from '../model/email.modelo';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor( private http:HttpClient) {}

  public getMails (url:string){
    return this.http.get(url);
  }

}
