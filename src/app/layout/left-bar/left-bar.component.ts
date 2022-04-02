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
    this.grupos=["Destacados" 
    ,"Pospuestos"
    ,"Importantes"
    ,"Enviados"
    ,"Tags"
    ,"Programados"
    ,"Borradores"
    ,"Todos"
    ,"Spam"
    ,"Papelera"
    ,"Categorias"
    ,"Social"
    ,"Gestionar Etiquetas"
    ,"Nueva Etiqueta"]
  }

}
