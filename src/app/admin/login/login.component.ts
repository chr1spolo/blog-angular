import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementsByTagName('body')[0].style.minHeight = `${window.innerHeight}px`;
    document.getElementsByTagName('body')[0].style.height = `${window.innerHeight}px`;
  }

}
