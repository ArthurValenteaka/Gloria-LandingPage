import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as owners from '../../core/mocks/mockOwners.json';

@Injectable({
  providedIn: 'root',
})
export class AboutHerService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getOwners(): Observable<any> {
    return of(owners);
  }
}
