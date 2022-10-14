import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface Usuario{
  nombre: string;
  correo: string;
  password: string;
}

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  formularioCreado!: FormGroup;
  usuarios: Array<Usuario> = new Array<Usuario>();
  esNuevo: boolean = true;
  posicionEditada: number = -1;

  constructor() { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(){
    this.formularioCreado = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]), 
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  agregar(){
    this.usuarios.push(this.formularioCreado.value as Usuario);
    this.formularioCreado.reset();
  }

  editar(){
    let formulario = this.formularioCreado.value
    this.usuarios[this.posicionEditada].nombre = formulario.nombre;
    this.usuarios[this.posicionEditada].correo = formulario.correo;
    this.usuarios[this.posicionEditada].password = formulario.password;
    this.formularioCreado.reset();
    this.esNuevo = true;
    this.posicionEditada = -1;
  }

  editarUsuario(posicion: number){
    this.formularioCreado.setValue({
      nombre: this.usuarios[posicion].nombre, 
      correo: this.usuarios[posicion].correo,
      password: this.usuarios[posicion].password
    });

    this.posicionEditada = posicion;
    this.esNuevo = false;

  }

  eliminarUsuario(posicion: number){
    this.usuarios.splice(posicion, 1);
  }

}
