import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

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
  public postCliente(oCliente)
  // tslint:disable-next-line:one-line
  {
    return this.http.post(this.Url + 'cliente', oCliente);
  }
}
