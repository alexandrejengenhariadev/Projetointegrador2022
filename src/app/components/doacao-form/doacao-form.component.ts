import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Doacao } from 'src/app/Doacao';

@Component({
  selector: 'app-doacao-form',
  templateUrl: './doacao-form.component.html',
  styleUrls: ['./doacao-form.component.css']
})
export class DoacaoFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Doacao>();
  @Input() btnText!: string;
  @Input() doacaoData:Doacao | null = null;
  doacaoForm!:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.doacaoForm = new FormGroup({
      id:new FormControl(this.doacaoData ? this.doacaoData.id :''),
      nome:new FormControl(this.doacaoData ? this.doacaoData.nome : '',[Validators.required]),     
      valor:new FormControl(this.doacaoData ? this.doacaoData.valor :'',[Validators.required]),
     
    });
   
  }
  get nome(){
    return this.doacaoForm.get('nome')!;
  }
  get valor(){
    return this.doacaoForm.get('valor')!;
  }
 
  
  submit(){
    if(this.doacaoForm.invalid){
      return;
    }
    console.log(this.doacaoForm.value);
    this.onSubmit.emit(this.doacaoForm.value);
  }







}
