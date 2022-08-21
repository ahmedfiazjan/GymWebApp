import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import * as firebase from 'firebase/compat/app';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {
  showProgressBar: boolean = false;
  error: boolean = false;
  constructor(public auth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm) {
    this.showProgressBar = true;
    // console.log(loginForm.value.email);
    this.auth.signInWithEmailAndPassword(loginForm.value.email,loginForm.value.password).then(r => {
      console.log(r);
      this.router.navigate(['/home']);
    }).catch(e => {
      console.log(e);
      this.showProgressBar = false;
      this.error = true;
    });
  }
}
