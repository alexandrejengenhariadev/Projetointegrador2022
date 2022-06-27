import { Component, OnInit } from '@angular/core';
import { ComboService } from 'src/app/services/combo.service';
import { Combo } from 'src/app/Combo';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { MensagensService } from 'src/app/services/mensagens.service';
import { Ong } from 'src/app/Ong';
import { OngService } from 'src/app/services/ong.service';
import { DoacaoService } from 'src/app/services/doacao.service';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css']
})
export class DoacaoComponent implements OnInit {
  ong?: Ong;
  allOngs: Ong[] = [];
  ongs: Ong[] =[];
  baseApiUrl = environment.baseApiUrl;
  combo?: Combo;
  allCombos: Combo[] = [];
  combos: Combo[] =[];
 

  constructor(
    private ongService:OngService,
    private route: ActivatedRoute,
    private router:Router,
    private mensagensService:MensagensService,
    private doacaoService:DoacaoService,
    private comboService:ComboService

    ) { }

  ngOnInit(): void {
      this.ongService.getOngs().subscribe((items)=>{
      const data = items.data
      this.allOngs = data
      this.ongs = data      
     });
     this.comboService.getCombos().subscribe((items)=>{
      const data = items.data
      this.allCombos = data
      this.combos = data      
     });
      //id que está na rul
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ongService
    .getOng(id)
    .subscribe((item)=>(this.ong = item.data));
  }
  async createHandler(nome:string, valor:string){
   
    const formData = new FormData();
    
    
    formData.append('nome',nome);
    formData.append('valor',valor);
    
   
    await this.doacaoService.createDoacao(formData).subscribe();
    this.mensagensService.add("Doação feita com sucesso!");
    this.router.navigate(['/']);
  }

}