import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlApi = 'https://reqres.in/api'

  constructor(private httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get(`${this.urlApi}/users?per_page=6`)
    .pipe(
      map(resp => resp['data'] )
    )
  }

  getUserById(id: string){
    return this.httpClient.get(`${this.urlApi}/users/${id}`)
    .pipe(
      map(resp => resp['data'] )
    )
  }
}
