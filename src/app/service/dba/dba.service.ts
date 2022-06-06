import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbaService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getAgenda() {
    console.log("va")
    return this.http.get(this.rootURL + '/getAgenda');
  }

}
