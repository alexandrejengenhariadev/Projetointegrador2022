import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagensService } from 'src/app/services/mensagens.service';
import { Usuario } from 'src/app/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {
  usuario!:Usuario;
  btnText: string = "Editar";

  constructor(private usuarioService:UsuarioService,
              private route:ActivatedRoute,
              private mensagensService: MensagensService,
              private router:Router
    
    ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.usuarioService.getUsuario(id).subscribe((item) =>{
      this.usuario = item.data;
    })
  }
  async editHandler(usuarioData: Usuario){
    const id = this.usuario.id;
    const formData = new FormData();
    formData.append('nome',usuarioData.nome);
    formData.append('login',usuarioData.login);
    formData.append('senha',usuarioData.senha);
    
    
    await this.usuarioService.updateUsuario(id!,formData).subscribe();
    this.mensagensService.add(`Usuário ${id} atualizado com sucesso!`);
    this.router.navigate(['/']);
  }

}
