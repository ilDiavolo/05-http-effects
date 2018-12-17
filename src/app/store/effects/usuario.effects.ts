
import { Injectable } from '@angular/core'
import { Actions, Effect } from '@ngrx/effects';

import { of } from 'rxjs'

import * as fromUsuariosActions from '../actions'
import { switchMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects{

    constructor( 
        private actions$: Actions,
        private usuarioService: UsuarioService
    ){}

    @Effect()
    cargarUsuario$ = this.actions$.ofType( fromUsuariosActions.CARGAR_USUARIO )
    .pipe(
        switchMap( action => {   // 2da opcion action: fromUsuariosActions.CARGAR_USUARIO
            const id = action['id']
            return this.usuarioService.getUserById(id)
            .pipe(
                map(user => new fromUsuariosActions.CargarUsuarioSuccess(user)),
                catchError( error => of(new fromUsuariosActions.CargarUsuarioFail(error)) )
            )
        })
    )
}