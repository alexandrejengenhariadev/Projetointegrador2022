import { Component, OnInit } from '@angular/core';
import { Combo } from 'src/app/Combo';
import { ComboService } from 'src/app/services/combo.service';
import { MensagensService } from 'src/app/services/mensagens.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-combo',
  templateUrl: './novo-combo.component.html',
  styleUrls: ['./novo-combo.component.css']
})
export class NovoComboComponent implements OnInit {
  btnText = "Cadastrar";

  constructor(private comboService: ComboService,
              private mensagensService:MensagensService,
              private router:Router
               
    ) { }

  ngOnInit(): void {
  }
  async createHandler(combo: Combo){
    const formData=new FormData()
    formData.append('produto1',combo.produto1);
    formData.append('produto2',combo.produto2);
    formData.append('produto3',combo.produto3);
    formData.append('produto4',combo.produto4);
    formData.append('valor',combo.valor);
    await this.comboService.createCombo(formData).subscribe();
    

    this.mensagensService.add('Combo adicionado com sucesso!');

    this.router.navigate(['combos']);
  }
 

}
