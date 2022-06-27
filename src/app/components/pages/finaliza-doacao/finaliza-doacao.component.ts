import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OngService } from 'src/app/services/ong.service';
import { MensagensService } from 'src/app/services/mensagens.service';
import { Ong } from 'src/app/Ong';
import { DoacaoService } from 'src/app/services/doacao.service';


@Component({
  selector: 'app-finaliza-doacao',
  templateUrl: './finaliza-doacao.component.html',
  styleUrls: ['./finaliza-doacao.component.css']
})
export class FinalizaDoacaoComponent implements OnInit {
  ong!:Ong;
  btnText: string = "Editar";

  constructor(private doacaoService:DoacaoService,
              private route:ActivatedRoute,
              private mensagensService: MensagensService,
              private router:Router,
              private ongService:OngService
    
    ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.ongService.getOng(id).subscribe((item) =>{
      this.ong = item.data;
    })
  }
  async editHandler(ongData: Ong){
    const id = this.ong.id;
    const formData = new FormData();
    formData.append('nome',ongData.nome);
    formData.append('cep',ongData.nome);
    formData.append('endereco',ongData.nome);
    formData.append('telefone',ongData.nome);
    formData.append('responsavel',ongData.nome);
    formData.append('email',ongData.nome);
    if(ongData.imagem){
      formData.append('imagem',ongData.imagem);
    }
    
    await this.ongService.updateOng(id!,formData).subscribe();
    this.mensagensService.add(`Ong ${id} atualizada com sucesso!`);
    this.router.navigate(['/']);
  }

}
