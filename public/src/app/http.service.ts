import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  
  constructor(private _http: HttpClient) { 
  }

  addAuthor(author){
    console.log('Add User In HTTP SERviCE');
    this._http.post('/adding',author);
  }
  gotoindex(){
    console.log('TEsting in HTTP Service');
    this._http.get('/home');
  }
}
