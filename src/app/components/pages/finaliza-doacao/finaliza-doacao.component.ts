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
    const idCombo = String(this.combo!.id);
    const idOng = String(this.ong.id);
    const valorCombo = this.combo!.valor;
    
    const formData = new FormData();
    const controle = String(v4);
    formData.append('nome',idOng);
    formData.append('valor',valorCombo);
    formData.append('idCombo',idCombo);
    formData.append('controle',controle);
    
        
    await this.doacaoService.createDoacao(formData).subscribe();
    this.mensagensService.add(`Doacao realizada com sucesso!`);
    this.router.navigate(['/']);
  }

}



