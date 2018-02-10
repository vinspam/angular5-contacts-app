import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';

@Injectable()
export class TimeService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return Observable
      .interval(1000)
      .switchMap(() => {
        return this.http.get<any>('http://api.timezonedb.com/v2/get-time-zone?key=23U2KMRNZLO4&format=json&by=zone&zone=Europe/London');
      }).map((data) => data);
  }

}
