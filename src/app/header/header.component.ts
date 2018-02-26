import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit  {

  public frambueza = (document.getElementById('frambueza'));
  public arandano = document.getElementById('arandano');
  public aguaymanto = document.getElementById('aguaymanto');
  constructor() { }

  ngOnInit() {

  }


}
