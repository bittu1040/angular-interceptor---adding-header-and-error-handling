import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import {catchError, map} from "rxjs/operators";
import { ErrorHandleService } from './error-handle.service';


@Injectable()
export class I2 implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modified = req.clone({setHeaders: {'Custom-Header-2': '2'}});
        return next.handle(modified);
    }
}

@Injectable()
export class I3 implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const modified = req.clone({setHeaders: {'Authorization': "bitttttu i3"}});
        return next.handle(modified);
    }
}

@Injectable()
export class globalErrorHandlingInterceptor {

  constructor(private errorHandle: ErrorHandleService){

  }
  intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
  console.log("Passed through the interceptor in request");
  
       return next.handle(request)
             .pipe(
                   map(res => {
                      console.log("Passed through the interceptor in response");
                      return res
                   }),
                   catchError((error: HttpErrorResponse) => {
                      let errorMsg = '';
                      if (error.error instanceof ErrorEvent) {
                         console.log('This is client side error');
                         errorMsg = `Error: ${error.error.message}`;
                      } else {
                         console.log('This is server side error');
                         errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;

                         console.log("error",error)
                         console.log("errorMsg",errorMsg)
                         if(error.status===404){
                           console.log("404 error")
                           this.errorHandle.showError.next(error.message)
                         }
                      }
                      console.log("errorMsg",errorMsg);
                      return throwError(errorMsg);
                   })
             )
  }


}


