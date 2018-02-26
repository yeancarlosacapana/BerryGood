import { Component, OnInit } from '@angular/core';
import { ScrollToService } from 'ng2-scroll-to-el';
import {Router} from '@angular/router';

declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private scrollService: ScrollToService,private routes:Router) { }

  ngOnInit() {
  }

  scrollToTop(element) {
    this.scrollService.scrollTo(element);
  }

}
