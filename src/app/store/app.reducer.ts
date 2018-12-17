


import * as reducers from './reducers/index'
import { ActionReducerMap } from '@ngrx/store';


export interface AppState {
    usuarios: reducers.UsuariosState,
    usuario: reducers.UsuarioState
}


export const appReducers: ActionReducerMap<AppState> = {
    usuarios: reducers.usuariosReducer,
    usuario: reducers.usuarioReducer
}