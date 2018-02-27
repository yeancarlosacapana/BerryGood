import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass'],
  providers: [AppService]
})
export class CheckoutComponent implements OnInit {

  public listaCategoria: any[] = [];
  public listaProductCategory: any[] = [];
  public addProduct = {};
  public listaAdd: any[] = [];
  constructor( private Services: AppService) { }

  ngOnInit() {
    this.getAllCategory();
    this.getProductCategory();
  }
  getAllCategory() {
    this.Services.getCategory().subscribe(rest => {
      this.listaCategoria = rest.json();
      // console.log(this.listaCategoria);
    });
  }
  getProductCategory() {
    this.Services.getProductCategory().subscribe(rest => {
      this.listaProductCategory = rest.json();
      console.log(this.listaProductCategory);
    });
  }
  addItem(i) {
    // this.listaAdd.push({this.listaProductCategory[i]});
    // console.log(this.);
  }
}
