
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Combo } from 'src/app/Combo';

@Component({
  selector: 'app-combo-form',
  templateUrl: './combo-form.component.html',
  styleUrls: ['./combo-form.component.css']
})
export class ComboFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Combo>();
  @Input() btnText!: string;
  @Input() comboData:Combo | null = null;
  comboForm!:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.comboForm = new FormGroup({
      id:new FormControl(this.comboData ? this.comboData.id :''),
      produto1:new FormControl(this.comboData ? this.comboData.produto1 : '',[Validators.required]),
      produto2:new FormControl(this.comboData ? this.comboData.produto2 :'',[Validators.required]),
      produto3:new FormControl(this.comboData ? this.comboData.produto3 :'',[Validators.required]),
      produto4:new FormControl(this.comboData ? this.comboData.produto4 :'',[Validators.required]),
      valor:new FormControl(this.comboData ? this.comboData.valor :'',[Validators.required]),
     
    });
   
  }
  get produto1(){
    return this.comboForm.get('produto1')!;
  }
  get produto2(){
    return this.comboForm.get('produto2')!;
  }
  get produto3(){
    return this.comboForm.get('produto3')!;
  }
  get produto4(){
    return this.comboForm.get('produto4')!;
  }
  get valor(){
    return this.comboForm.get('valor')!;
  }
  
  submit(){
    if(this.comboForm.invalid){
      return;
    }
    console.log(this.comboForm.value);
    this.onSubmit.emit(this.comboForm.value);
  }





}
