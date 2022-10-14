import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  formularioCreado!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(){
    this.formularioCreado = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]), 
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
    //this.fb.group({
    //   nombre: [null, Validators.required],
    //   correo: [null, Validators.compose([
    //     Validators.required,
    //     Validators.email
    //   ])],
    //   password: [null, Validators.compose([
    //     Validators.required,
    //     Validators.minLength(8)
    //   ])]
    // })
  }

  agregar(){
    console.log(this.formularioCreado.value)
  }

}
