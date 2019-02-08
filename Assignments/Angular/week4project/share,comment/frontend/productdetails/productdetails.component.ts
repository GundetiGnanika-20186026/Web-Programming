import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  id : any;
  product : any;
  userid :any;
  comment: any;
  
  constructor(private userService : UserService, private router: Router, private route : ActivatedRoute) { 
    
  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getproduct();
  }

  getproduct() {
    this.userService.getproduct(this.id).subscribe((data) => {
      this.product = data[0];
      this.userid = data[1];
    })
  }

  addtocart(id) {
    this.userService.addtocart(this.userid, id).subscribe((data) => {
      if(data) {
        alert("Product added to cart successfully");
       
      } 
    });
  }


  sharefunc(){
    this.userService.addtowallet(this.userid).subscribe((data) => {
      if(data) {
        alert(" Thanks for sharing !!. 10 rs will be added to your wallet ");
      }
      else{

      }
    });

  }

  saveComment() {
    this.userService.saveComment(this.userid, this.product._id , this.comment).subscribe((data) => {
       this.comment = "";
    });
    window.location.reload();
  }
}
