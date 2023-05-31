import { Component } from '@angular/core';

@Component({
  selector: 'app-direkt',
  templateUrl:'./direkt.component.html',
  styleUrls: ['./direkt.component.css']
})
export class DirektComponent {
  isButtonClicked: boolean = false;
  log = [];
  color = '';


  handleClick() {
    this.isButtonClicked = !this.isButtonClicked;
    this.log.push(this.log.length + 1);
  }

  
}
