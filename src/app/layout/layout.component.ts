import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private service:PaisesService ) { }

  ngOnInit(): void {
    this.FetchData();
  }

  FetchData(){
    this.service.get('http://localhost:3000/paises').subscribe(respuesta=>{
      console.log(respuesta);
    })
  }

}
