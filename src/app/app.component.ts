import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  count=0;
  display=false;
  toggle(){
    this.display =! this.display;
  }
  counter(type: string){
    type==='add'?this.count++:this.count--
  }
}
