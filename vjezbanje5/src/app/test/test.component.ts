import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>{{ "Hello " + parentData }}</h2>
  <button (click)="opali()">Send Event</button>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  @Input('hihihi') public parentData;
  @Output() public childEvent = new EventEmitter();


  opali(){
    this.childEvent.emit("Hey Ida!"); 
  }
}
