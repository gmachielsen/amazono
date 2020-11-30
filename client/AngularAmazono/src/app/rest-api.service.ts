import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RestApiService {

  constructor(private http: HttpClient) { }
    getHeaders() {
      const token = localStorage.getItem('token');
      return token ? new HttpHeaders().set('Authorization', token) : null;
    }
    get(Link: string) {
      return this.http.get(Link, { headers: this.getHeaders() }).toPromise();
    }

    post(Link: string, body: any) {
      return this.http.post(Link, body, { headers: this.getHeaders() }).toPromise();
    }
}
