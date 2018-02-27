import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.sass'],
  providers: [AppService]
})
export class PromocionesComponent implements OnInit {

  public listaCampain: any[] = [];
  constructor(private Services: AppService) { }

  ngOnInit() {
    this.getAllCampain();
  }
  getAllCampain() {
    this.Services.getCampain().subscribe(rest => {
      this.listaCampain = rest.json();
      // console.log(this.listaCampain);
    });
  }
}
