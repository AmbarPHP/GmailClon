import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss']
})
export class LeftBarComponent implements OnInit {

  public grupos:any=[];
  constructor() { }

  ngOnInit(): void {
    this.getGrupos();
  }

  public getGrupos(){
    this.grupos=[
    {"icon":"https://www.gstatic.com/images/icons/material/system/1x/inbox_white_20dp.png",
    "name":"Destacados"},
    {"icon":"https://www.gstatic.com/images/icons/material/system_gm/1x/schedule_white_20dp.png",
    "name":"Pospuestos"},
    {"icon":"https://www.gstatic.com/images/icons/material/system_gm/1x/star_border_white_20dp.png",
    "name":"Importantes"},
    {"icon":"https://www.gstatic.com/images/icons/material/system_gm/1x/send_white_20dp.png",
    "name":"Enviados"},
    {"icon":"https://www.gstatic.com/images/icons/material/system_gm_filled/1x/label_gm_grey_24dp.png",
    "name":"Tags"},
    {"icon":"https://www.gstatic.com/images/icons/material/system_gm/1x/schedule_send_white_20dp.png",
    "name":"Programados"},
    {"icon":"https://www.gstatic.com/images/icons/material/system_gm/1x/insert_drive_file_white_20dp.png",
    "name":"Borradores"},
    {"icon":"https://www.gstatic.com/images/icons/material/system/1x/inbox_white_20dp.png",
    "name":"Todos"},
    {"icon":"https://www.gstatic.com/images/icons/material/system_gm/1x/report_white_20dp.png",
    "name":"Spam"},
    {"icon":"https://www.gstatic.com/images/icons/material/system_gm/1x/delete_white_20dp.png",
    "name":"Papelera"},
    {"icon":"","name":"Categorias"},
    {"icon":"","name":"Social"},
    {"icon":"","name":"Gestionar Etiquetas"},
    {"icon":"","name":"Nueva Etiqueta"}]
  }

}
