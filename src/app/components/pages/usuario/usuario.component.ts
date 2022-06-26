import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Usuario';
import { environment } from 'src/environments/environment';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario?: Usuario;
  baseApiUrl=environment.baseApiUrl;

  constructor(private usuarioService: UsuarioService,
              private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.usuarioService.getUsuario(id).subscribe((item => this.usuario = item.data
      ));


  }

}
