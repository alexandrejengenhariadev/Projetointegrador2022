import { Component, OnInit } from '@angular/core';
import { Doacao } from 'src/app/Doacao';
import { DoacaoService } from 'src/app/services/doacao.service';
import { MensagensService } from 'src/app/services/mensagens.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Combo } from 'src/app/Combo';
import { OngService } from 'src/app/services/ong.service';
import { Ong } from 'src/app/Ong';
import { ComboService } from 'src/app/services/combo.service';

@Component({
  selector: 'app-nova-doacao',
  templateUrl: './nova-doacao.component.html',
  styleUrls: ['./nova-doacao.component.css']
})
export class NovaDoacaoComponent implements OnInit {
  ong!:Ong;
  combo!:Combo;
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
    const idCombo = String(this.combo.id);
    const idOng = String(this.ong.id);
    const formData = new FormData();
    formData.append('nome',idOng);
    formData.append('valor',idCombo);
    
        
    await this.doacaoService.createDoacao(formData).subscribe();
    this.mensagensService.add(`Combo ${idCombo} ${idOng} ${formData} atualizado com sucesso!`);
    this.router.navigate(['/']);
  }

}
