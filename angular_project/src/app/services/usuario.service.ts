import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  getUsuario: Usuario;
  usuarios : Usuario[];
  readonly URL_API = 'http://localhost:3000/api/usuarios';
  
  constructor(private http: HttpClient) {
    this.getUsuario = new Usuario();
    this.usuarios = [];
  
  }
  
  getUsuarios(){
    return this.http.get(this.URL_API);
  }
  
  createUsuarios(Usuario:Usuario){
    return this.http.post(this.URL_API, Usuario);
  }
  
  updateUsuarios(Usuario:Usuario){
    return this.http.patch(this.URL_API + `/${Usuario._Id}`, Usuario);//
  
  }
  
  deleteUsuarios(_Id: string) { 
  return this.http.delete(this.URL_API + `/${_Id}`);
  }
}
