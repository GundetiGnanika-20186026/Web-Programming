import { Component, OnInit } from '@angular/core';
import {storage} from '../data';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
 questionsfromjs:any;
  




  constructor(private storageobj : storage) {

    

   }
  
  ngOnInit() {
    this.questionsfromjs = this.storageobj.getquestions();
  }

}
