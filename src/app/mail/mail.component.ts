import { Component, OnInit } from '@angular/core';
import {MailService} from '../services/mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
  public lista_mails:any=[];
  constructor(private service:MailService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  public fetchData(){
    this.service.getMails('http://localhost:3000/mails')
    .subscribe(response=>{ 
      console.log(response);
      this.lista_mails=response;
      console.log(response);});
  }

}
