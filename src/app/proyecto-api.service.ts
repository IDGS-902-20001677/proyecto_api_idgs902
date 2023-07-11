import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utl } from './interface/utl';

@Injectable({
  providedIn: 'root'
})
export class ProyectoApiService {

  private _alumnosUtl:Utl[]=[
    {
      id:1234,
      nombre:'pedro',
      edad:23,
      correo: 'pedro@gmail.com',
 
    },
    {
      id:772,
      nombre:'Paulina',
      edad:23,
      correo: 'paulina@gmail.com',
    },
 
    {
      id:22,
      nombre:'Dario',
      edad:23,
      correo: 'dario@gmail.com',
 
    },
  ]
 
  constructor(private http:HttpClient) { }
 
get alumnos():Utl[]{
  return[...this._alumnosUtl]
}
 
public getAlumnos():Observable<Utl[]>{
  return this.http.get<Utl[]>('https://localhost:7173/api/Grupos')
}
 
agregarNuevoAlumno(datos:Utl){
  return this.http.post('https://localhost:7173/api/Grupos',datos)
}
}
