import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private http: HttpClient) { }


  getImagesGalery():Observable<any> {
    return this.http.get('assets/mocks/galeryMock.json')
  }
}
