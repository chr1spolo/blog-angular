import { Component, OnInit } from '@angular/core';

declare var UIkit: any;


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  comElement: HTMLElement;
  constructor() { }

  ngOnInit() {
    let element = document.getElementsByClassName('see_more');
    UIkit.icon(element).svg.then( function(svg) {
      svg.querySelector('polyline').style.stroke = '#040d45'; 
    })
  }

  showComments(){
    /* document.getElementById('comments').innerHTML = ; */
    this.comElement = document.getElementById('comments');
    this.comElement.innerHTML = `
    <div uk-spinner></div>
    `;
    this.comElement.style.margin = '10px';
    this.comElement.style.textAlign = 'center';
    console.log(document.getElementById('comments'));
  }

}
