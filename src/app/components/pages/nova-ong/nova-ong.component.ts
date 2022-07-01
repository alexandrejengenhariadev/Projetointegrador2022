import { Component, OnInit } from '@angular/core';
import { Ong } from 'src/app/Ong';
import { Router } from '@angular/router';

import { OngService } from 'src/app/services/ong.service';
import { MensagensService } from 'src/app/services/mensagens.service';
@Component({
  selector: 'app-nova-ong',
  templateUrl: './nova-ong.component.html',
  styleUrls: ['./nova-ong.component.css']
})
export class NovaOngComponent implements OnInit {
  btnText="Cadastrar";

  constructor(private ongService: OngService, 
              private mensagensService:MensagensService,
              private router:Router
    ) { }

  ngOnInit(): void {}
  async createHandler(ong:Ong){
    const formData = new FormData();
    formData.append("nome",ong.nome);
    formData.append("cep",ong.cep);
    formData.append("endereco",ong.endereco);
    formData.append("telefone",ong.telefone);
    formData.append("responsavel",ong.responsavel);
    formData.append("email",ong.email);
    formData.append("imagem",ong.imagem);
   
    if(ong.imagem){
      formData.append('imagem',ong.imagem);
    }
    await this.ongService.createOng(formData).subscribe();

    this.mensagensService.add('Ong adicionada com sucesso!');

    this.router.navigate(['/']);
    

  }

}