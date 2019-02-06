import { Component, OnInit, Input } from '@angular/core';
import {ServicetasksService}  from  '../servicetasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // @Input() giventask:any;

  
  constructor(private service1:ServicetasksService) {
    
   }

  ngOnInit() {
  }
  array = this.service1.getarray(); 

  deletevalue(obj:any){
    this.service1.deleteelement(obj);

  }
}
