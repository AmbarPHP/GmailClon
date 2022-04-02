import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pais} from '../model/pais.modelo';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  constructor(private http: HttpClient) {  
  }

  public get(url:string){
   return this.http.get(url);   
  }
}
