import {Folder} from "../models/folder.model";

export class Email {

    public idEmail:string;
    public folder:Folder;
    public subject:string;
    public body: string;
    public isStartred:Boolean;
    public isReaded:Boolean;
  

    constructor (){
     this.idEmail="";
     this.folder= new Folder();
     this.subject="";
     this.body="";
     this.isStartred=false;
     this.isReaded=false;
    }

   
}



// export interface Detail{
//  id_to:number;
//  id_cc:number;
//  id_replay_to:number;
//  id_atachment:number
// }



