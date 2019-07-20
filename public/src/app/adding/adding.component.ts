import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-adding',
  templateUrl: './adding.component.html',
  styleUrls: ['./adding.component.css']
})
export class AddingComponent implements OnInit {

  

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
  }
  author:any={};
  addinguser(){
    let observable = this._httpService.addAuthor(this.author);
    observable.subscribe(data =>{console.log(data)})
  }
  testing(){
    let observable = this._httpService.gotoindex();
    observable.subscribe(data=>{console.log(data)})
  }

}
