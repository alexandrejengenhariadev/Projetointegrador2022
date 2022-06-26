import { Component, OnInit } from '@angular/core';
import { OngService } from 'src/app/services/ong.service';
import { Ong } from 'src/app/Ong';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allOngs:Ong[] = [];
  ongs:Ong[] = [];
  baseApiUrl = environment.baseApiUrl;
  searchTerm: string = "";


  constructor(private ongService: OngService) { }

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

  }

}