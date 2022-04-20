import {Folder} from "../models/folder.model";
import { EmailAddress } from "./email-address.model";

export class Email {

    public idEmail:EmailAddress;
    public folder:Folder;
    public subject:string;
    public body: string;
    public isStartred:Boolean;
    public isReaded:Boolean;
  

    constructor (){
     this.idEmail=new EmailAddress();
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



