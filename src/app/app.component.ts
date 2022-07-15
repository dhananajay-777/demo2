import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo2';
  customers : Customer[] = [ {id : 234 , name: 'John'}, {id : 235 , name: 'Adam'}, {id : 236 , name: 'Nick'} ]; 
}
class Customer {
   name: string;
   id: number ;
  constructor (name: string,id: number) {
      this.name = name;
      this.id=id;
  }
}