import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from './../../models/usuario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = []

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsers().subscribe( users => {
      // console.log(users)
      this.usuarios = users
    })
  }

}
