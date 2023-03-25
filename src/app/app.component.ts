import { HttpErrorResponse } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ErrorHandleService } from "./error-handle.service";
import { globalErrorHandlingInterceptor } from "./interceptors.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  response1: any;
  errorResponse: HttpErrorResponse
  constructor(private http: HttpClient, private ErrorHandleService: ErrorHandleService) {}
  ngOnInit() {
    this.ErrorHandleService.showError.subscribe({
      next:(data)=>{
        console.log("data",data)
      },
      error:(error)=>{
        this.errorResponse= error;
        console.log("errrrrrrrrrrror")
      }
    })
  }


  getPosts() {
    this.http.get("https://jsonplaceholder.typicode.com/posts1/1").subscribe({
      next:(data)=>{this.response1= data;}
    })
  }
}
