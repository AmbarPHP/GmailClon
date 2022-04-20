import { Email } from "./email.model";

export class Attachement {

    public idAttachment:number;
    public idEmail:Email;
    public attachementName:string;
    public attachementType:string;
    public attachementData:string;

    public constructor( ){
        this.idAttachment=1;
        this.idEmail=new Email();
        this.attachementName="";
        this.attachementType="";
        this.attachementData="";
        
    }
}
