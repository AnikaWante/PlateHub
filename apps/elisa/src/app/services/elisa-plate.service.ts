// elisa/src/app/services/elisa-plate.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ElisaPlateService {
  private apiUrl = 'http://localhost:3000/api/elisa-plates';  // Vervang dit door jouw backend URL

  constructor(private http: HttpClient) {}

  getElisaPlates(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addElisaPlate(plateData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, plateData);
  }
}
