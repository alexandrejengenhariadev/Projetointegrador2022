import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

import { MensagensService } from 'src/app/services/mensagens.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  btnText="Cadastrar";

  constructor(private usuarioService: UsuarioService, 
              private mensagensService:MensagensService,
              private router:Router
    ) { }

  ngOnInit(): void {}
  async createHandler(usuario:Usuario){
    const formData = new FormData();
    formData.append("nome",usuario.nome);
    formData.append("login",usuario.login);
    formData.append("senha",usuario.senha);
   
    await this.usuarioService.createUsuario(formData).subscribe();

    this.mensagensService.add('Usuário adicionada com sucesso!');

    this.router.navigate(['/']);
    

  }

}