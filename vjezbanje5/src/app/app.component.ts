import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task 5';
  public name : string = 'someone';
  public inputValue :string = '';
  public niz = [];
  public i = 0;


  prvaFun(){
    this.niz.push(this.i);
    console.log(this.niz);
    this.i++;
  }

}
