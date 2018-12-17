
import { Injectable } from '@angular/core'
import { Actions, Effect } from '@ngrx/effects';

import { of } from 'rxjs'

import * as fromUsuariosActions from '../actions'
import { switchMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects{

    constructor( 
        private actions$: Actions,
        private usuariosService: UsuarioService
    ){}

    @Effect()
    cargarUsuarios$ = this.actions$.ofType( fromUsuariosActions.CARGAR_USUARIOS )
    .pipe(
        switchMap(() => {
            return this.usuariosService.getUsers()
            .pipe(
                map(users => new fromUsuariosActions.CargarUsuariosSuccess(users)),
                catchError( error => of(new fromUsuariosActions.CargarUsuariosFail(error)) )
            )
        })
    )
}