import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../../models/email.model';
import {MailService} from '../../services/mail.service';


@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {


  public lista_mails:Email[]=[];
 

  constructor(private service:MailService) {
  }


  ngOnInit(): void {
    this.getMails();
  }

  public getMails(){

    
    
    this.service.getEmails('http://localhost:3000/emails')
    //this.service.getEmails('http://localhost:4001/getmails')
    .subscribe(response=>{ 
      console.log(response);
      this.lista_mails=response as Email[];
      });
  }



}
