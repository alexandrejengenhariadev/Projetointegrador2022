import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Response } from '../Response';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseApiUrl=environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/usuarios`

  constructor(private http: HttpClient) { }
  getUsuarios():Observable<Response<Usuario[]>>{
    return this.http.get<Response<Usuario[]>>(this.apiUrl);
  }
  getUsuario(id:number):Observable<Response<Usuario>>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Usuario>>(url);
  }
  createUsuario(formData:FormData):Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl,formData);
  }
  removeUsuario(id:number){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
  updateUsuario(id:number, formData:FormData):Observable<FormData>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }


  }
