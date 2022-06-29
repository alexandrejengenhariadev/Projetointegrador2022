import { Component, OnInit } from '@angular/core';
import { OngService } from 'src/app/services/ong.service';
import { Ong } from 'src/app/Ong';
import { environment } from 'src/environments/environment';
import { Doacao } from 'src/app/Doacao';
import { DoacaoService } from 'src/app/services/doacao.service';
import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allOngs:Ong[] = [];
  ongs:Ong[] = [];
  baseApiUrl = environment.baseApiUrl;
  ong!:Ong;
  searchTerm: string = "";
  doacaos:Doacao[]=[];
  allDoacaos:Doacao[] = [];

  


  constructor(private ongService: OngService,
              private doacaoService:DoacaoService
    
    ) { }

  ngOnInit(): void {
    this.ongService.getOngs().subscribe((items)=>{
      const data = items.data;
      data.map((item)=>{
        item.created_at=new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
        );
      });

      this.allOngs = data;
      this.ongs = data;
    });
    this.doacaoService.getDoacaos().subscribe((items)=>{
      const data = items.data;
       this.allDoacaos = data;
      this.doacaos = data;
    const sum = this.doacaos.filter(item => item.valor > '0')
                        .reduce((current) => current, 0);
    });
    
    

  }
  Soma(): number {
    const sum = Number(this.doacaos.filter(item => item.valor )
    .reduce((sum,current)=> sum + Number(current.valor), 0));
    return sum;
                     

  };

};

