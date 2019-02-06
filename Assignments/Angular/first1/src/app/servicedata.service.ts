import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicedataService {
  arr=[];

  constructor() { }

  adduser(newuser:any){
    this.arr.push(newuser);
  }
  getarr(){
    return this.arr;
  }
}
