import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Folder} from '../models/folder.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  constructor(private http:HttpClient ) { }

  public getFolders (url:string):Observable<Folder[]>{
   
    return this.http.get<Folder[]>(url);
  }
}
