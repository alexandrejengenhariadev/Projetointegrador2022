import { Component, OnInit } from '@angular/core';
import { ComboService } from 'src/app/services/combo.service';
import { Combo } from 'src/app/Combo';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { MensagensService } from 'src/app/services/mensagens.service';
import { Ong } from 'src/app/Ong';
import { OngService } from 'src/app/services/ong.service';
import { DoacaoService } from 'src/app/services/doacao.service';
import { Doacao } from 'src/app/Doacao';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css']
})
export class DoacaoComponent implements OnInit {
  combo?: Combo;
  allCombos: Combo[] = []
  combos: Combo[] =[]
  ong?: Ong;
  allOngs: Ong[] = []
  ongs: Ong[] =[]
  baseApiUrl = environment.baseApiUrl

  constructor(private comboService:ComboService,
              private route: ActivatedRoute,
              private ongService: OngService,
              private mensagensService: MensagensService,
              private router:Router,
              private doacaoService:DoacaoService
              ) { }

  ngOnInit(): void {
    this.comboService.getCombos().subscribe((items)=>{
      const data = items.data
      this.allCombos = data
      this.combos = data
     });
      //id que está na url
    const idCombo = Number(this.route.snapshot.paramMap.get('id'));
    this.comboService
    .getCombo(idCombo)
    .subscribe((item)=>(this.combo = item.data));
    const idOng = Number(this.route.snapshot.paramMap.get('id'));
    this.ongService
    .getOng(idOng)
    .subscribe((item)=>(this.ong = item.data));

       
  }
  async createHandler(nome:string, valor:string){
    
    const formData = new FormData();
    formData.append('nome',nome);
    formData.append('valor',valor);
    
    await this.doacaoService.createDoacao(formData).subscribe();
    this.mensagensService.add('Doação atualizada com sucesso!');
    this.router.navigate(['/']);

  }

}
