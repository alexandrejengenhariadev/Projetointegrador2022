import { Component, OnInit } from '@angular/core';
import { ComboService } from 'src/app/services/combo.service';
import { Combo } from 'src/app/Combo';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { MensagensService } from 'src/app/services/mensagens.service';

@Component({
  selector: 'app-doacao',
  templateUrl: './doacao.component.html',
  styleUrls: ['./doacao.component.css']
})
export class DoacaoComponent implements OnInit {
  combo?: Combo;
  allCombos: Combo[] = []
  combos: Combo[] =[]
  baseApiUrl = environment.baseApiUrl

  constructor(private comboService:ComboService,
              private route: ActivatedRoute,
              private mensagensServices: MensagensService,
              private router:Router
              ) { }

  ngOnInit(): void {
    this.comboService.getCombos().subscribe((items)=>{
      const data = items.data
      this.allCombos = data
      this.combos = data
     });
      //id que está na rul
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.comboService
    .getCombo(id)
    .subscribe((item)=>(this.combo = item.data));
  }
  async removeHandler(id: number){
    await this.comboService.removeCombo(id).subscribe();
    this.mensagensServices.add("Combo removido com sucesso!");
    this.router.navigate(['/']);
  }

}
