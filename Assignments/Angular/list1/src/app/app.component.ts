import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'list1';
  submit1:any;
  number = [1,2,3,4,5,6,7,8,9];

  buttonsfunc(){
    console.log("entered");
    this.submit1 = true;

  }
}
