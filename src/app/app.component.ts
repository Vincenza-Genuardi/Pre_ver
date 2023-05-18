import { Component } from '@angular/core';
import { ECommerce } from './models/eCommerce.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oECommerce !: Observable<ECommerce>
  data !: ECommerce
  link : string = 'https://my-json-server.typicode.com/paolocarugati/PC_ecommerce/db'
  constructor(public http: HttpClient) {
    this.makeTypedRequest()
  }
  
   makeTypedRequest() : void
  {
    this.oECommerce = this.http.get<ECommerce>(this.link);
    this.oECommerce.subscribe( d => {this.data = d;});
  }   
}
