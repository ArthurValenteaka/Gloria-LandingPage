import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  constructor(private http: HttpClient) {}

  getAnalytics(): Observable<any> {
    return this.http
      .get<any[]>(`${environment.SERVER_URL}/api/index.php?tipo=crm&uf=&q=115.573&chave=7358010717&destino=json`)
      .pipe(
        map((res:any) =>{
          return res.data
        }),
        map((sponsors:any) => {
          return sponsors.map((sponsor:any) => {
            sponsor.attributes.image.data.attributes.url = `${environment.miska}${sponsor.attributes.image.data.attributes.url}`;
            return sponsor;
          });
        })
      );
  }

  //   getAnalytics():Observable<any> {
  //   return this.http.get('assets/mocks/analytics.json')
  //   // return this.http.get<any[]>(
  //   //   `${environment.SERVER_URL}instituto-gloria/colaboradores/selecionarTodos`
  //   // );
  // }
}
