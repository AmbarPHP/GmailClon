
// import {mail_type} from "./email.interface";

export class Email {


    public constructor (
        public id: number,
        public from: string,
        public subject:string,
        public date:string, 
        // public mail_type:mail_type,
    ){

    }

//     export enum  mail_type{
//     Enviado, 
//     Recibido,
//     Importante,
//     Borrador,
//     Spam,
//     In_a_Category
// }

// export interface Detail{
//  id_to:number;
//  id_cc:number;
//  id_replay_to:number;
//  id_atachment:number
// }



}