import { Component, OnInit } from '@angular/core';
import { OngService } from 'src/app/services/ong.service';
import { Ong } from 'src/app/Ong';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ong',
  templateUrl: './ong.component.html',
  styleUrls: ['./ong.component.css']
})
export class OngComponent implements OnInit {
  ong?: Ong;
  baseApiUrl=environment.baseApiUrl;

  constructor(private ongService: OngService,
              private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.ongService.getOng(id).subscribe((item => this.ong = item.data
      ));


  }

}
