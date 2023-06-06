import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vjezbanje7';
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedOption = this.subscriptions[1];

  @ViewChild('f', {static: false}) forma: NgForm;
  onSubmit(){
    console.log(this.forma.value);
  }
}
