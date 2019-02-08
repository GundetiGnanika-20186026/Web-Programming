import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uri = 'http://localhost:4000';
  user : any;
  constructor(private http : HttpClient) { }
  //------------------------------------------------------------------------
  //SignUp user
  addUser(name, phone, email,address,password) {
    this.user = {
      name: name,
      email:email,
      phone : phone,
      password:password,
      address : [address],
      cart : [],
      wallet : 0.0
    };
    if(address == "" ) {
      this.user = {
        name: name,
        email:email,
        phone : phone,
        password:password,
        address : [],
        cart : [],
        wallet : 0.0
      }
    }
    return this.http.post(`${this.uri}/user/add`,this.user);
  }

  //SignIn user
  login(username, password) {

    var loginuser = {
        username : username,
        password : password
      };
      return this.http.post(`${this.uri}/user/login`, loginuser);
  }
  //-----------------------------------------------------------------------------------

  getAllproducts(){
    return this.http.get(`${this.uri}/getallProducts`);
  }

  getproduct(id:any) {
    //console.log(id);
    return this.http.get(`${this.uri}/getproduct/${id}`);
  }

  //----------------------------------------------------------------------------------------

  addtocart(userid : any, prodid : any) {
    var usercatprods = {
      userid : userid,
      prodid : prodid
    }
    return this.http.post(`${this.uri}/user/addcart`, usercatprods);
  }

  saveComment(userid : any,prodid : any,comment : any) {
     var commentarray = {
       userid : userid,
       prodid : prodid,
       comment : comment
     }
     return this.http.post(`${this.uri}/product/comment`, commentarray);
  }

  //-------------------share details------------------------------------------------

  addtowallet(userid : any){
    var useridobj = {
      userid:userid
    }
    return this.http.post(`${this.uri}/user/wallet`, useridobj);
  }
}
