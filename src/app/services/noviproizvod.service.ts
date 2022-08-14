import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Noviproizvod } from '../models/noviproizvod';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }

}

@Injectable({
  providedIn: 'root'
})
export class NoviproizvodService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getProizvodi(): Observable<Noviproizvod[]> {
    return this.http.get<Noviproizvod[]>(`${this.apiServerUrl}/noviproizvod/all`);
  }

  public addProizvod(noviproizvod: Noviproizvod): Observable<Noviproizvod> {
    return this.http.post<Noviproizvod>(`${this.apiServerUrl}/noviproizvod/add`, noviproizvod);
  }

  public updateProizvod(noviproizvod: Noviproizvod): Observable<Noviproizvod> {
    return this.http.put<Noviproizvod>(`${this.apiServerUrl}/noviproizvod/update`, noviproizvod);
  }

  public deleteProizvod(proizvodId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/noviproizvod/delete/${proizvodId}`);
  }

}


