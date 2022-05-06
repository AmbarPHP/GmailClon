import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../../models/email.model';
import { MailService } from '../../services/mail.service';
import { EmailMock } from 'src/app/models/email-mock.model';
import { EmailAddressService } from 'src/app/services/email-address.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {


  //public lista_mails:Email[]=[];
  public list:EmailMock[]=[];
  

  constructor(private service:MailService,private service2:EmailAddressService, private route:ActivatedRoute ) {
  }


  ngOnInit(): void {
    this.getEmailType();
                                                                                 
  }
 
  public getEmailType(){

    const mailType=this.route.snapshot.paramMap.get('type')||'';

    let type=mailType.toLowerCase();
    console.log("Obtiene el tipo de folder",type);

    this.service2.getEmailsType("http://localhost:4001/catalog/emailMock/"+type)
      .subscribe(response=>{
        this.list=response;
      });
    
  
   
  }



}
