import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';

// tslint:disable-next-line:import-blacklist
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  private Url: String = 'http://127.0.0.1:8000/api/';

  constructor(private http: Http) { }

  public getDistrito()
  // tslint:disable-next-line:one-line
  {
    return this.http.get(this.Url + 'distrito');
  }
  public postCliente(oCliente): any
  // tslint:disable-next-line:one-line
  {
    return this.http.post(this.Url + 'cliente', oCliente).map((response: Response) => response.json()).catch((error) => {
      return Observable.throw(error);
    });
  }
  public loginCustomer(oCustomer): any {
    return this.http.post(this.Url + 'client', oCustomer).map((response: Response) => response.json()).catch((error) => {
      return Observable.throw(error);
    });
  }
  public getCampain() {
    return this.http.get(this.Url + 'campain');
  }
  public getCategory() {
    return this.http.get(this.Url + 'categoria');
  }
  public getProductCategory() {
    return this.http.get(this.Url + 'productCategory');
  }
  public getProductos() {
    return this.http.get(this.Url + 'producto');
  }
}
