import { Component, OnInit } from '@angular/core';
import {FolderService} from "../../../services/folder.service";
import {Folder} from "../../../models/folder.model";

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent implements OnInit {

  public grupos:any=[];
  //Todo, me falta estudiar como definir le tipado
  public folders:Folder[]=[];
  private url="";
  
  
  constructor(private service:FolderService) { }

  ngOnInit(): void {
   this.getFolders();
   
  }

  public getFolders(){
    this.url="http://localhost:4001/catalog/folders";

      this.service.getFolders(this.url).subscribe(response=>{  
        const myObjStr = JSON.stringify(response);
        console.log(JSON.parse(myObjStr));
        this.folders=JSON.parse(myObjStr).folder_list;//response;    
        console.log("folders:",this.folders);
    })

  }

  

}
