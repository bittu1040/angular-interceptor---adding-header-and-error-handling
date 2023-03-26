import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ErrorHandleService } from "./error-handle.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  response1: any;
  errorResponse: string
  constructor(private http: HttpClient, private ErrorHandleService: ErrorHandleService) {}
  ngOnInit() {
    this.ErrorHandleService.showError.subscribe({
      next:(data)=>{
          this.errorResponse= data;
        console.log("data",data)
          alert("There is server side error");
      },
    })
  }


  getPosts() {
    this.http.get("https://jsonplaceholder.typicode.com/posts1/1").subscribe({
      next:(data)=>{this.response1= data;}
    })
  }
}
