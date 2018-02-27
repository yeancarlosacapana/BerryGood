import { Component, OnInit } from '@angular/core';
import { ScrollToService } from 'ng2-scroll-to-el';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Cliente } from '../class/cliente';

declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [AppService]
})
export class HomeComponent implements OnInit {

  public listaDistrito: any[] = [];
  public addCliente: Cliente = new Cliente();
  public errorMessage: string;
  public successMessage: string;
  public userErrorMessage: string;

  constructor(private scrollService: ScrollToService,
              private router: Router,
              private Services: AppService) { }

  ngOnInit() {
    this.getDistrito();
    console.log(this.successMessage);
  }

  scrollToTop(element) {
    this.scrollService.scrollTo(element);
  }
  getDistrito() {
    this.Services.getDistrito().subscribe(rest => {
      this.listaDistrito = rest.json();
     // console.log(this.listaDistrito);
    });
  }
  postCliente() {
    console.log(this.errorMessage);
    console.log(this.successMessage);
    this.Services.postCliente(this.addCliente).subscribe(rest => {
      this.errorMessage = undefined;
      this.successMessage = rest.ok;
    }, error => {
      this.errorMessage = error.json().resp;
      this.successMessage = undefined;
      console.log(error);
    });
    // jQuery('#registerModalContent').modal('hide');
  }
  login() {
    this.Services.loginCustomer(this.addCliente).subscribe(rest => {
      localStorage.setItem('user', JSON.stringify(rest));
      console.log(rest);
    }, error => {
      console.log(this.userErrorMessage, 'prueba');
      if ( this.userErrorMessage === undefined ) {
        this.userErrorMessage = error.json().resp;
      }
    });
  }
}
