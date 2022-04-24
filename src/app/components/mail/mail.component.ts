import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../../models/email.model';
import { MailService } from '../../services/mail.service';
import { EmailAddress } from 'src/app/models/email-address.model';
import { EmailAddressService } from 'src/app/services/email-address.service';



@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {


  public lista_mails:any[]=[];//Email[]=[];
 

  constructor(private service:MailService,private service2:EmailAddressService) {
  }


  ngOnInit(): void {
    this.getEmailType("Recibidos");
  }

 
  public getEmailType(mailType:string){

    console.log("entro a listar correos");

    if(mailType=="Recibidos")
    {
      this.service2.getEmailsAddress("http://localhost:4001/catalog/emailAddress").subscribe(response=>{
        response=[{
          addressName:"perlamarina.franco@gmail.com",
          addressTypeName:"To",
          folderName:"Enviados",
          subject:"20 Easy Ways to Be More Productive as a Developer⚡️",
        },
        {
          addressName:"daniel.franco@gmail.com",
          addressTypeName:"To",
          folderName:"Enviados",
          subject:"20 Easy Ways to Be More Productive as a Developer⚡️",
        },
      ]
        
        this.lista_mails=response;
        console.log("lista_mails",response);
      });
      return ;
    }
    if(mailType=="Enviados")
    {
      this.service2.getEmailsAddress("http:localhost:4001/catalog/emailAddress").subscribe(response=>{
        console.log(response);
      });
      return ;
    }
   
  }



}
