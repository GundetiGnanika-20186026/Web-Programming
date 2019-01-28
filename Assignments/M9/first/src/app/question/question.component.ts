import { Component, OnInit, Input } from '@angular/core';
import{storage} from '../data';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
@Input() que:any;
dis:any;
disdan:any;
butonblock : any;

  constructor(private storageobj:storage) { }
  evaluation(variable:any){
    this.butonblock = true;
   if(variable == this.que.answer){
     this.dis = "block";
   }
   else{
     this.disdan = "block";
   }
  }

  ngOnInit() {
    this.dis = "none";
    this.disdan = "none";
    this.butonblock = false;

  }

}
