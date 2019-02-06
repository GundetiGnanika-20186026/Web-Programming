import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import{ServicedataService} from '../servicedata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emid:any;
  password1:any;
  i:any;
  error2:any;
  error1:any;
  sucess1 : any;
  arr1 = [];

  constructor(private details: ServicedataService) { }

  logfun() {
    console.log("entered");
    this.arr1 = this.details.getarr();
    console.log(this.arr1);

    if(this.emid != null){
      console.log("entered first");
      if(this.password1 != null){
        console.log("entered second");
      
        for(this.i=0;this.i<this.arr1.length;this.i++){
          console.log("entered for");
          if(this.emid == this.arr1[this.i].Email && this.password1==this.arr1[this.i].password){
            console.log("enterd lasty blok");
            this.sucess1 = "log in sucessful";
          }

        }
        

      }
      else{
        this.error2 = "***please enter the password***";
      }

    }
    else{
      this.error1 = "***please enter the Email Address***";
    }

    if(this.sucess1 != "log in sucessful"){
      this.sucess1 = "**log in failed please check the details **";
    }
   


  }


  ngOnInit() {
  }

}
