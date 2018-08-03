import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NavService {
  constructor(private http: HttpClient) {
    this.getItems().subscribe(data => {
      console.log(data);
    });
  }

  public getItems(): Observable<any> {
    return this.http.get('./assets/data/nav.json');
  }
}