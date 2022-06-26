
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/Usuario';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Usuario>();
  @Input() btnText!: string;
  @Input() usuarioData:Usuario | null = null;

  usuarioForm!:FormGroup;
  
 

  constructor() { }

  ngOnInit(): void {
    this.usuarioForm = new FormGroup({
      id:new FormControl(this.usuarioData ? this.usuarioData.id :''),
      nome:new FormControl(this.usuarioData ? this.usuarioData.nome : '',[Validators.required]),
      login:new FormControl(this.usuarioData ? this.usuarioData.login :'',[Validators.required]),
      senha:new FormControl(this.usuarioData ? this.usuarioData.senha :'',[Validators.required]),
     
    });
  }
  get nome(){
    return this.usuarioForm.get('nome')!;
  }
  get login(){
    return this.usuarioForm.get('login')!;
  }
  get senha(){
    return this.usuarioForm.get('senha')!;
  }
  
  submit(){
    if(this.usuarioForm.invalid){
      return;
    }
    console.log(this.usuarioForm.value);
    this.onSubmit.emit(this.usuarioForm.value);
  }

}