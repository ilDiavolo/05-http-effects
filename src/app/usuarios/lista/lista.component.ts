import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { CargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = []
  loading: boolean
  error: any

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
      this.store.select('usuarios').subscribe(usuarios => {
          this.usuarios = usuarios.users
          this.loading = usuarios.loading
          this.error = usuarios.error
      })
      this.store.dispatch( new CargarUsuarios() )
  }

}
