import { Component, OnInit } from '@angular/core';

import { UsuarioService } from 'src/app/services/usuario.service'; 

import { NgForm } from '@angular/forms';

import { Usuario } from 'src/app/models/usuario'; 

declare var M: any;

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [UsuarioService]
})
export class RegistroComponent implements OnInit {

  constructor(public UsuarioService: UsuarioService) { }
  ngOnInit(): void {

}

  createUsuarios(form?: NgForm) {

    this.UsuarioService.createUsuarios(form?.value)
    .subscribe(res => {
    this.resetForm(form);
    M.toast({html: 'Guardado satisfactoriamente'});
    });

  }

  resetForm(form?: NgForm) { 
    if (form) {
      form.reset();

  this.UsuarioService.getUsuario = new Usuario();
  }}

}
