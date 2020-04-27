import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  userForm;
  constructor(private http : HttpClient) { }
  postSer(data): Observable<any> {
    console.log(data)
    return this.http.post('https://url-shortener-n.herokuapp.com/create', data)
  }
  getSer(): Observable<any> {
    return this.http.get('https://url-shortener-n.herokuapp.com/list')
  }
}
