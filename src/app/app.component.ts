import { Component } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {provideAuth} from "@angular/fire/auth";
import firebase from 'firebase/compat/app';
// import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GymWebApp';



}
