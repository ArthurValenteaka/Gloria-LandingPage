import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SponsorService {
  constructor(private http: HttpClient) {}

  getSponsor(): Observable<any> {
    return this.http
      .get<any[]>(`${environment.miska}/api/sponsors?populate=*`)
      .pipe(
        map((res: any) => {
          console.log(res.data);
          return res.data;
        }),
        map((sponsors: any) => {
          return sponsors.map((sponsor: any) => {
            sponsor.attributes.image.data.attributes.url = `${environment.miska}${sponsor.attributes.image.data.attributes.url}`;
            return sponsor;
          });
        })
      );
  }
}
