import { Component, OnInit } from '@angular/core';

declare var UIkit: any;


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  kit;
  constructor() { }

  ngOnInit() {
    let element = document.getElementsByClassName('see_more');
    UIkit.icon(element).svg.then( function(svg) {
      svg.querySelector('polyline').style.stroke = '#040d45'; 
    })
  }

}
