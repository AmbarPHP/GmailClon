
interface IEmailMock {
     addressName?:string;
     addressTypeName?:string;
     folderName?:string;
     fecha?:string;
     subject?:string;
     body?:string;
     isStartred?:boolean;
     isReaded?:boolean;
}
  
            

export class EmailMock implements IEmailMock{
    public addressName?:string;
    public addressTypeName?:string;
    public folderName?:string;
    public fecha?:string;
    public subject?:string;
    public body?:string;
    public isStartred?:boolean;
    public isReaded?:boolean;


    constructor (data?:Partial<IEmailMock>){

        this.addressName=(data?data.addressName:'')||'';
        this.addressTypeName=(data?data.addressTypeName:'')||'';
        this.folderName=(data?data.folderName:'')||'';
        this.fecha=(data?data.fecha:'')||'';
        this.subject=(data?data.subject:'')||'';
        this.body=(data?data.body:'')||'';
        this.isStartred=(data?data.isStartred:false)||false;
        this.isReaded=(data?data.isReaded:false)||false;
    }

   
}
