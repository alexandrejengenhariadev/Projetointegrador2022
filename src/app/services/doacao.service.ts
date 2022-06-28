import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Response } from '../Response';
import {Doacao} from 'src/app/Doacao';



@Injectable({
  providedIn: 'root'
})
export class DoacaoService {
  private baseApiUrl=environment.baseApiUrl;
  private apiUrl = 'https://apipethelper.herokuapp.com/api/doacaos'

  constructor(private http: HttpClient) { }
  getDoacaos():Observable<Response<Doacao[]>>{
    return this.http.get<Response<Doacao[]>>(this.apiUrl);
  }
  getDoacao(id:number):Observable<Response<Doacao>>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Doacao>>(url);
  }
  createDoacao(formData:FormData):Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl,formData);
  }
 

}
