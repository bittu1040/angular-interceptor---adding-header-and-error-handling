import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  Response: any
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onClick(){
    this.http.get("https://jsonplaceholder.typicode.com/posts5/1").subscribe((data)=>{
      this.Response=  data;
    })
  }

}