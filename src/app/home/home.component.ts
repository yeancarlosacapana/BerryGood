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
  private successMessage: string;

  constructor(private scrollService: ScrollToService,
              private router: Router,
              private Services: AppService) { }

  ngOnInit() {
    this.getDistrito();
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
    this.successMessage = undefined;
    this.Services.postCliente(this.addCliente).subscribe(rest => {
      jQuery('#registerModalContent').modal('hide');
      this.errorMessage = rest.json();
      // console.log(rest);
      console.log(this.errorMessage);
    });
  }

}
