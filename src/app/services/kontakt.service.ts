import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Kontakt } from '../models/kontakt';


@Injectable({
  providedIn: 'root'
})
export class KontaktService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getKontakti(): Observable<Kontakt[]> {
    return this.http.get<Kontakt[]>(`${this.apiServerUrl}/kontakt/all`);
  }

  public addKontakt(kontakt: Kontakt): Observable<Kontakt> {
    return this.http.post<Kontakt>(`${this.apiServerUrl}/kontakt/add`, kontakt);
  }

  public updateKontakt(kontakt: Kontakt): Observable<Kontakt> {
    return this.http.put<Kontakt>(`${this.apiServerUrl}/kontakt/update`, kontakt);
  }

  public deleteKontakt(kontaktId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/kontakt/delete/${kontaktId}`);
  }

}
