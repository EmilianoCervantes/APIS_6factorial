import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignin(form: NgForm){
  	const email = form.value.email;
  	const password = form.value.password;
  	this.authService.signinUser(email, password);
  	const idToken = '';
  	/*var numbers = Observable.timer(2000);
  	numbers.subscribe(x =>{
      //alert(this.authService.isAuthenticated());
      console.log(this.authService.isAuthenticated());
    });
  	if(this.authService.isAuthenticated()){
  		this.onPass();
  	}*/
  	//this.onPass();
  	var numbers = Observable.timer(2000);
  	numbers.subscribe(x =>{
      //alert(this.authService.isAuthenticated());
      console.log(this.authService.isAuthenticated());
      if(this.authService.isAuthenticated()){
  		this.onPass();
  	  }
    });
  }

  onPass() {
   	this.router.navigate(['dispositivos']);
  }

}
