import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  navbarCollapsed:boolean=true;

  toggleButton(){
    this.navbarCollapsed = !this.navbarCollapsed;
    console.log('Se ha hecho clic sobre el boton del menu',this.navbarCollapsed);
  }

}

