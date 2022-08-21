import {Component, EventEmitter, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import * as firebase from 'firebase/compat/app';
import {Router} from "@angular/router";
import {MatTabChangeEvent} from "@angular/material/tabs";


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  tabName: EventEmitter<any> = new EventEmitter();
  email: string = 'test@gmail.com';
  pass: string  = '123456';
  constructor(public auth: AngularFireAuth, private router: Router) {
  }

  login() {
    this.router.navigate(["/login"]);
  }

  logout() {
    this.auth.signOut().then(r => {
      console.log(r);
      this.router.navigate(['/login']);
    }).catch(e => {
      console.log(e);
    });
  }

  ngOnInit(): void {
  }

  selectedTabChange(matTabChangeEvent: MatTabChangeEvent) {
    // console.log(matTabChangeEvent.tab);

    this.tabName.emit(matTabChangeEvent.tab.textLabel);
    console.log(matTabChangeEvent.tab.textLabel);
  }
}
