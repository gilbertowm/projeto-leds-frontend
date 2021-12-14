import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Membro } from './membros/membro';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MembrosService {

  constructor( private http: HttpClient) { 
    
  }

  salvar( membro: Membro) : Observable<Membro>{
    return this.http.post<Membro>('http://localhost:8080/api/membros',membro);
  }

  
  getMembros():Observable<Membro[]>{
    return this.http.get<Membro[]>('http://localhost:8080/api/membros');
  }
  

  getMembroById(id : number) : Observable<Membro>{
    return this.http.get<any>(`http://localhost:8080/api/membros/${id}`);
  }

  atualizar( membro: Membro) : Observable<any>{
    return this.http.put<Membro>(`http://localhost:8080/api/membros/${membro.id}`,membro);
  }

  deletar(membro : Membro) : Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/membros/${membro.id}`);
  }
    
}
