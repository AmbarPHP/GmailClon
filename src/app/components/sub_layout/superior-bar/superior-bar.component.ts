import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-superior-bar',
  templateUrl: './superior-bar.component.html',
  styleUrls: ['./superior-bar.component.scss']
})
export class SuperiorBarComponent implements OnInit {

 //navbarCollapsed:boolean=true;

  @Output() onToggle: EventEmitter <any> = new  EventEmitter()
  constructor() { }

  toggleMenu(){
    //this.navbarCollapsed = !this.navbarCollapsed;
    this.onToggle.emit();
    console.log('Se ha emitido');
  }

  ngOnInit(): void {
  }

}
