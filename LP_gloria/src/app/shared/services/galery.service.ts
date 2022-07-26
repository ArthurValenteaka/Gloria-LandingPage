import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GaleryService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });


  constructor(private http: HttpClient) { }

  getImagesGalery():Observable<any> {
    return this.http.get('assets/mocks/galeryMock.json')
  }
}
