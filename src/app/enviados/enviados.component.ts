import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enviados',
  templateUrl: './enviados.component.html',
  styleUrls: ['./enviados.component.scss']
})
export class EnviadosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.showMail();
  }

  public showMail(){
    console.log("descarga los mails");
  }

}
