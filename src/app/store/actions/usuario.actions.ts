


import { Action } from '@ngrx/store'
import { Usuario } from '../../models/usuario.model';




export const CARGAR_USUARIO         = '[USUARIO] Cargar Usuario'
export const CARGAR_USUARIO_FAIL    = '[USUARIO] Cargar Usuario Fail'
export const CARGAR_USUARIO_SUCCESS = '[USUARIO] Cargar Usuario Success'


export class CargarUsuario implements Action{
    readonly type = CARGAR_USUARIO
    constructor(public id: string){}
}
export class CargarUsuarioFail implements Action{
    readonly type = CARGAR_USUARIO_FAIL
    constructor(public payload: any){}
}
export class CargarUsuarioSuccess implements Action{
    readonly type = CARGAR_USUARIO_SUCCESS
    constructor(public usuario: Usuario){}
}

export type usuarioActions = CargarUsuario | CargarUsuarioFail | CargarUsuarioSuccess