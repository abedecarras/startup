import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-nav-bar',
  templateUrl: './search-nav-bar.component.html',
  styleUrls: ['./search-nav-bar.component.css']
})
export class SearchNavBarComponent implements OnInit {

  show: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showSearch() {

    this.show = !this.show;
    // let bar = document.getElementById('sb');

    // bar.className = 'show';
  }

  setClass() {
    let classes = {
      'show': this.show
    }    
    
    return classes;
  }

}
