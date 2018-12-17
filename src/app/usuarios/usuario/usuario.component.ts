import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { CargarUsuario } from '../../store/actions/usuario.actions';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private store: Store<AppState>) { }

  usuario: Usuario
  loading: boolean
  error: any

  ngOnInit() {
    
    this.store.select('usuario').subscribe(data => {
      this.usuario = data.user
      this.loading = data.loading
      this.error = data.error
    })

    this.activatedRoute.params.subscribe(params => {
      const id = params['id']
      this.store.dispatch(new CargarUsuario(id))
    })
  }

}
