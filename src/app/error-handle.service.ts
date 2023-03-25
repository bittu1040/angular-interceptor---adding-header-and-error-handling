import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ErrorHandleService {

  constructor() { }
  showError= new Subject<string>();

}