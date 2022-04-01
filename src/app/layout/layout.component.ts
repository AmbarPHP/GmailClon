import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../services/paises.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public lista_paises:any=[];

  constructor(private service:PaisesService ) { }

  ngOnInit(): void {
    this.FetchData();
  }

  FetchData(){
    this.service.get('http://localhost:3000/paises')
    .subscribe(response =>{
      console.log(response);
      this.lista_paises = response} );
  }

}
