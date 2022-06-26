import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagensService } from 'src/app/services/mensagens.service';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/Usuario';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuario?: Usuario;
  allUsuarios: Usuario[] = []
  usuarios: Usuario[] =[]
  baseApiUrl = environment.baseApiUrl

  constructor(
    private usuarioService:UsuarioService,
    private route: ActivatedRoute,
    private router:Router,
    private mensagensService:MensagensService

    ) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((items)=>{
      const data = items.data
      this.allUsuarios = data
      this.usuarios = data
     });
      //id que está na rul
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usuarioService
    .getUsuario(id)
    .subscribe((item)=>(this.usuario = item.data));
  }
  async removeHandler(id: number){
    await this.usuarioService.removeUsuario(id).subscribe();
    this.mensagensService.add("Ong removida com sucesso!");
    this.router.navigate(['/']);
  }

}