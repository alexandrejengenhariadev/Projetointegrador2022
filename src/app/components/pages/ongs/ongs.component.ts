import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { OngService } from 'src/app/services/ong.service';
import { Ong } from 'src/app/Ong';
import { MensagensService } from 'src/app/services/mensagens.service';


@Component({
  selector: 'app-ongs',
  templateUrl: './ongs.component.html',
  styleUrls: ['./ongs.component.css']
})
export class OngsComponent implements OnInit {
  ong?: Ong;
  allOngs: Ong[] = []
  ongs: Ong[] =[]
  baseApiUrl = environment.baseApiUrl

  constructor(
    private ongService:OngService,
    private route: ActivatedRoute,
    private router:Router,
    private mensagensService:MensagensService

    ) { }

  ngOnInit(): void {
      this.ongService.getOngs().subscribe((items)=>{
      const data = items.data
      this.allOngs = data
      this.ongs = data
     });
      //id que está na url
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ongService
    .getOng(id)
    .subscribe((item)=>(this.ong = item.data));
  }
  async removeHandler(id: number){
    await this.ongService.removeOng(id).subscribe();
    this.mensagensService.add("Ong removida com sucesso!");
    this.router.navigate(['/']);
  }

}