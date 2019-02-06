import { Component, OnInit, Input } from '@angular/core';
import{ServicedataService} from '../servicedata.service';

import { FormsModule }   from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private details:ServicedataService) { }
  list = {};
   dateer:any;
   twoer :any;
   pass1er : any;
   passer:any;
   emider:any;
   nameer :any;
   sucess:any;

   regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

 

     name:any;
     emid:any;
     pass : any;
     pass1 :any;
     dob1 :any;



    valid(){

      if(this.name != null){
          if(this.emid != null){
              if(this.regexp.test(this.emid)){
                 if(this.pass!= null){
                    if(this.pass1 != null){
                       if(this.pass == this.pass1){
                           if(this.dob1 != null){
                                this.list ={"Name":this.name,"Email":this.emid,"password":this.pass,"d-o-b":this.dob1}
                                this.details.adduser(this.list);
                                this.sucess = "sucessfully registered";

                            }
                             else{
                                  this.dateer = "****please enter Date of Birth****";
                            }


                        }
                        else{
                             this.twoer = "*****please recheck the entered passwords****";
                        }
                    }
                    else{
                            this.pass1er = "****please re-enter the password****";
                    }

                  }
                  else{
                            this.passer = "****please enter the password****";
                  }
          
              }
              else{
                        this.emider = "***please enter a valid email id ***";
              }
          }
        
          else {
                this.emider = "****please enter email-id****" ;
          }
      }
      else{
        this.nameer = "****please enter your name****";
      } 

}
   

   
 

  

  

  ngOnInit() {
  }

}
