import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ong } from '../Ong';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Response } from '../Response';


@Injectable({
  providedIn: 'root'
})
export class OngService {
  private baseApiUrl=environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/ongs`

  constructor(private http: HttpClient) { }
  getOngs():Observable<Response<Ong[]>>{
    return this.http.get<Response<Ong[]>>(this.apiUrl);
  }
  getOng(id:number):Observable<Response<Ong>>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Ong>>(url);
  }
  createOng(formData:FormData):Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl,formData);
  }
  removeOng(id:number){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
  updateOng(id:number, formData:FormData):Observable<FormData>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }


  }
