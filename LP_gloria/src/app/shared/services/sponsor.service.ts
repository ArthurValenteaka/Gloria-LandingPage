import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {

  constructor(private http: HttpClient) { }

  getSponsor(): Observable<any> {
    return this.http.get('assets/mocks/sponsors.json');
  }
}
