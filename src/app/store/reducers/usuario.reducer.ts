import { Usuario } from '../../models/usuario.model';

import * as fromUsuario from '../actions/index'
import { CARGAR_USUARIO } from '../actions/usuario.actions';



export interface UsuarioState{
    user: Usuario,
    loaded: boolean,
    loading: boolean,
    error: any
}

const estadoInicial: UsuarioState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
}


export function usuarioReducer( state = estadoInicial, actions: fromUsuario.usuarioActions): UsuarioState {

    switch (actions.type) {
        case fromUsuario.CARGAR_USUARIO:
            return{
                ...state,
                loading: true,
                error: null
            }
        case fromUsuario.CARGAR_USUARIO_SUCCESS:
            return{
                ...state,
                loading: false,
                loaded: true,
                user: {...actions.usuario}
            }
            
        case fromUsuario.CARGAR_USUARIO_FAIL:
            return{
                ...state,
                loading: false,
                loaded: false,
                error: {
                    status: actions.payload.status,
                    message: actions.payload.message,
                    url: actions.payload.url
                }
            }
    
        default:
            return state
    }
}