import { Component, OnInit } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-superior-bar',
  templateUrl: './superior-bar.component.html',
  styleUrls: ['./superior-bar.component.scss']
})
export class SuperiorBarComponent implements OnInit {


  constructor() { }

  toggleMenu(){
    console.log('Se ha hecho clic sobre el boton del menu');
  }

  ngOnInit(): void {
  }

}
