import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ong } from 'src/app/Ong';




@Component({
  selector: 'app-ong-form',
  templateUrl: './ong-form.component.html',
  styleUrls: ['./ong-form.component.css']
})
export class OngFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Ong>();
  @Input() btnText!: string;
  @Input() ongData:Ong | null = null;

  ongForm!:FormGroup;
  
 

  constructor() { }

  ngOnInit(): void {
    this.ongForm = new FormGroup({
      id:new FormControl(this.ongData ? this.ongData.id :''),
      nome:new FormControl(this.ongData ? this.ongData.nome : '',[Validators.required]),
      cep:new FormControl(this.ongData ? this.ongData.cep :'',[Validators.required]),
      endereco:new FormControl(this.ongData ? this.ongData.endereco :'',[Validators.required]),
      telefone:new FormControl(this.ongData ? this.ongData.telefone :'',[Validators.required]),
      responsavel:new FormControl(this.ongData ? this.ongData.responsavel :'',[Validators.required]),
      email:new FormControl(this.ongData ? this.ongData.email :'',[Validators.required]),
      imagem :new FormControl('')
    });
  }
  get nome(){
    return this.ongForm.get('nome')!;
  }
  get cep(){
    return this.ongForm.get('cep')!;
  }
  get endereco(){
    return this.ongForm.get('endereco')!;
  }
  get telefone(){
    return this.ongForm.get('telefone')!;
  }
  get responsavel(){
    return this.ongForm.get('responsavel')!;
  }
  get email(){
    return this.ongForm.get('email')!;
  }
  onFileSelected(event:any){
    const file: File = event.target.files[0]
    this.ongForm.patchValue({imagem:file})

  }
  submit(){
    if(this.ongForm.invalid){
      return;
    }
    console.log(this.ongForm.value);
    this.onSubmit.emit(this.ongForm.value);
  }

}