import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceuserService } from 'src/app/service/serviceuser.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css'],
})
export class FormComponentComponent implements OnInit{


  usuarioForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    correo: new FormControl(''),
    documento: new FormControl(''),
    fechaIngreso: new FormControl(''),
    direccion: new FormControl(''),
    telefono: new FormControl(''),
    edad: new FormControl(''),
    fechaNac: new FormControl(''),

  });
  router: any;
  constructor(private userService: ServiceuserService, router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  addUsuario(): void {
    console.log("Entro al boton");

    let usuario = {
      id: this.usuarioForm.get('id')?.value,
      nombre: this.usuarioForm.get('nombre')?.value,
      apellido: this.usuarioForm.get('apellido')?.value,
      correo: this.usuarioForm.get('correo')?.value,
      documento: this.usuarioForm.get('documento')?.value,
      fechaNac: this.usuarioForm.get('fechaNac')?.value,
      edad: this.usuarioForm.get('edad')?.value,
      direccion: this.usuarioForm.get('direccion')?.value,
      telefono: this.usuarioForm.get('telefono')?.value,
      fechaIngreso: this.usuarioForm.get('fechaIngreso')?.value

    };

    this.userService.crearUsuario(usuario).subscribe(resp => {
        console.log("#$##$#$#$",resp);

      if (resp.status === 'ok' && resp.code===200) {
          Swal.fire('registro exitoso')
        this.router.navigate(['table-usuario']);
      }

      else {
        alert("Registro fallido: "+ resp.status)
      }
    });
  }


}
