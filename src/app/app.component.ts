import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lets-cook';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBUl906zx48p-OJ9gW5n2Dq2SORoLO6n7s",
      authDomain: "lets-cook-ng7.firebaseapp.com"
    })
  }
}
