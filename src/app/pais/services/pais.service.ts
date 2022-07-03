import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }
  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }
  getPaisPorAlpha(termino: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${termino}`;
    return this.http.get<Country>(url);
  }
  getPaisPorRegion(termino: string): Observable<Country[]> {
    const parametrosHttp = new HttpParams()
      .set('field', 'name')
      .set('field', 'capital')
      .set('field', 'population')
      .set('field', 'flags')
      .set('field', 'cca2');

    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url, { params: parametrosHttp });
  }
}
