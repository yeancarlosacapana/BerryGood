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
  public listaProducts: any[] = [];
  constructor( private Services: AppService) { }

  ngOnInit() {
    this.getAllCategory();
    this.getProductCategory();
    this.getProducts();
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
  addItem(productCategory, isChecked) {
    if ( isChecked) {
      console.log('check');
    } else {
      console.log('uncheck');
    }
    this.listaAdd.push(productCategory);
    console.log(this.listaAdd);

  }
  getProducts() {
    this.Services.getProductos().subscribe(rest => {
      this.listaProducts = rest.json();
      console.log(this.listaProducts);
    });
  }
}
