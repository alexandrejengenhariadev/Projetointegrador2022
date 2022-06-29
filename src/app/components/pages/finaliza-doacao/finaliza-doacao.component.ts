import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OngService } from 'src/app/services/ong.service';
import { MensagensService } from 'src/app/services/mensagens.service';
import { Ong } from 'src/app/Ong';
import { DoacaoService } from 'src/app/services/doacao.service';
import { Doacao } from 'src/app/Doacao';
import { Combo } from 'src/app/Combo';
import { ComboService } from 'src/app/services/combo.service';
import {v4 as uuid, v4} from 'uuid';
import { environment } from 'src/environments/environment';





@Component({
  selector: 'app-finaliza-doacao',
  templateUrl: './finaliza-doacao.component.html',
  styleUrls: ['./finaliza-doacao.component.css']
})
export class FinalizaDoacaoComponent implements OnInit {
  combo?: Combo;
  allCombos: Combo[] = []
  combos: Combo[] =[]
  ong!:Ong;
  allOngs: Ong[]=[]
  ongs: Ong[]=[]
  doacao!:Doacao
  btnText: string = "Doar";
  baseApiUrl = environment.baseApiUrl;

  constructor(private comboService:ComboService,
              private route:ActivatedRoute,
              private mensagensService: MensagensService,
              private router:Router,
              private ongService:OngService,
              private doacaoService:DoacaoService
    
    ) { }

  ngOnInit(): void {
    const idOng = Number(this.route.snapshot.paramMap.get("idOng"));
    this.ongService.getOng(idOng).subscribe((item) =>{
      this.ong = item.data;
    });
    const idCombo = Number(this.route.snapshot.paramMap.get("idCombo"));
    this.comboService.getCombo(idCombo).subscribe((item) =>{
      this.combo = item.data;
    });
    
  }
  async createHandler(){
    const idOng = String(this.ong.id);
    const idNome = String(this.ong.id);
    const valorCombo = this.combo!.valor;
    
    const formData = new FormData();
    
    const myId = uuid();
    formData.append('nome',idNome);
    formData.append('valor',valorCombo);
    formData.append('id_ong',idOng);
    formData.append('controle',myId);
    
        
    await this.doacaoService.createDoacao(formData).subscribe();
    this.mensagensService.add(`Doação para a Ong ${idNome} feita com sucesso!`);
    this.router.navigate(['/']);
  }

}



