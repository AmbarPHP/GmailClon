import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../../models/email.model';
import {MailService} from '../../services/mail.service';
import { EmailAddress } from 'src/app/models/email-address.model';
import { EmailAddressService } from 'src/app/services/email-address.service';



@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {


  public lista_mails:Email[]=[];
 

  constructor(private service:MailService,private service2:EmailAddressService) {
  }


  ngOnInit(): void {
    this.getMails();
  }

  public getMails(){

    
    //obtener aquellos mails recibidos
    //select where type of address equals to type: sender
    //select all addresstype= sender


    this.service.getEmails('http://localhost:3000/emails')
    //this.service.getEmails('http://localhost:4001/getmails')
    .subscribe(response=>{ 
      console.log(response);
      this.lista_mails=response as Email[];
      });
  }

  public getEmail(mailType:string){
  
    this.service2.getEmails("http:localhost:3000/emailAddress").subscribe(response=>{
      console.log(response);
    });
    return ;
  }



}
