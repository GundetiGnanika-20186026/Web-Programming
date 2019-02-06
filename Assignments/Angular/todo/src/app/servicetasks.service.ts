import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicetasksService {
  arr = [];
  i:any;

  constructor() { }
  addtolist(obj:any){
    this.arr.push(obj);

  }
  getarray(){
    return this.arr;
  }

  deleteelement(obj:any){
    for(this.i = 0;this.i<this.arr.length;this.i++){
      if(this.arr[this.i] === obj){
        this.arr.splice(this.i,1);

      }
    }

  }
 
}
