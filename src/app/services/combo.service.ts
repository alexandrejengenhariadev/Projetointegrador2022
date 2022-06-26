import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Combo } from '../Combo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Response } from '../Response';


@Injectable({
  providedIn: 'root'
})
export class ComboService {
  private baseApiUrl=environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/combos`

  constructor(private http: HttpClient) { }
  getCombos():Observable<Response<Combo[]>>{
    return this.http.get<Response<Combo[]>>(this.apiUrl);
  }
  getCombo(id:number):Observable<Response<Combo>>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Combo>>(url);
  }
  createCombo(formData:FormData):Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl,formData);
  }
  removeCombo(id:number){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
  updateCombo(id:number, formData:FormData):Observable<FormData>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }

}
