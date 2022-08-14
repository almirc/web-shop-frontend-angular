import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proizvod } from '../models/proizvod';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private httpClient: HttpClient) { }

}

@Injectable({
  providedIn: 'root'
})
export class ProizvodService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getProizvodi(): Observable<Proizvod[]> {
    return this.http.get<Proizvod[]>(`${this.apiServerUrl}/proizvod/all`);
  }

  public addProizvod(proizvod: Proizvod): Observable<Proizvod> {
    return this.http.post<Proizvod>(`${this.apiServerUrl}/proizvod/add`, proizvod);
  }

  public updateProizvod(proizvod: Proizvod): Observable<Proizvod> {
    return this.http.put<Proizvod>(`${this.apiServerUrl}/proizvod/update`, proizvod);
  }

  public deleteProizvod(proizvodId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/proizvod/delete/${proizvodId}`);
  }

}


