import { Component, OnInit, Input } from '@angular/core';
import {storage} from '../data'
 
@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.css']
})
export class HintComponent implements OnInit {
  @Input() que : any;

isdisplayed:any; 
prev:any;
next1:any;
 

  constructor() { }
  next(){
   this.prev= this.que.hint[0]


  }

  previous(){
    this.prev = this.que.hint[1]


  }

  hintfunc() {
    if(this.isdisplayed == 'block'){
      this.isdisplayed = 'none';
    }
    else {
      this.isdisplayed = 'block';
    }
    
  }
  
  ngOnInit() {
    this.isdisplayed = "none";
  }

  

}
