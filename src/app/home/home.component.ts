import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs = [
    {
      title: '¿Que hiciste?',
      plus: 5,
      minus: 1,
      text: 'lorem impusn',
      date: moment().locale('es').fromNow(),
      avatar: 'hiciste.png',
      _id: +new Date()
    }
  ];
  constructor() { }

  ngOnInit() {
    document.getElementsByTagName('body')[0].style.minHeight = `${window.innerHeight}px`;
    document.getElementsByTagName('body')[0].style.height = `${window.innerHeight}px`;
  }

  cutter(string: string) {
    return string.substr(0, 140);
  }

}
