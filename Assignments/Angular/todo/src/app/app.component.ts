import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ServicetasksService}  from  './servicetasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  task:any;
  variable:any;
  
  constructor(private service1:ServicetasksService) {
    
   }
   

  taskfunc(){
  console.log("entered");
  this.service1.addtolist(this.task);
   this.variable = true; 


  }

}
