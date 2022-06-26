import { Component, OnInit } from '@angular/core';
import { ComboService } from 'src/app/services/combo.service';
import { Combo } from 'src/app/Combo';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MensagensService } from 'src/app/services/mensagens.service';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css'],
})
export class ComboComponent implements OnInit {
combo?: Combo;
baseApiUrl = environment.baseApiUrl;
  constructor(private comboservice: ComboService, 
              private route: ActivatedRoute,
              private mensagensServices: MensagensService,
              private router:Router
              ) { }

  ngOnInit(): void {
    //id que está na rul
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.comboservice
    .getCombo(id)
    .subscribe((item)=>(this.combo = item.data));
   
  }
  async removeHandler(id: number){
    await this.comboservice.removeCombo(id).subscribe();
    this.mensagensServices.add("Combo removido com sucesso!");
    this.router.navigate(['combos']);
  }
  
}
