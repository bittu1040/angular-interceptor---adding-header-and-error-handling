import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor(private http: HttpClient) { }
  Response:any;
  ngOnInit() {
  }

  onClick(){
    this.http.get("https://jsonplaceholder.typicode.com/posts/1").subscribe((data)=>{
      this.Response=  data;
    })
  }

}