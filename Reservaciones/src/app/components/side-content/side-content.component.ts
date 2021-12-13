import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Reservacion} from 'src/app/models/reservacion';
import { ReservacionService } from 'src/app/services/reservacion.service';

@Component({
  selector: 'app-side-content',
  templateUrl: './side-content.component.html',
  styleUrls: ['./side-content.component.css']
})
export class SideContentComponent implements OnInit {

  reservacionForm: FormGroup;
  titulo = 'Crear Reservacion';
  id:string | null;
  constructor(private fb: FormBuilder,
              private router:Router,
              private toastr: ToastrService,
              private _reservacionService:ReservacionService,
              private aRouter: ActivatedRoute) {
    this.reservacionForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.editarReservacion();
  }

  crearReservacion(){
    console.log(this.reservacionForm)

    console.log(this.reservacionForm.get('titulo')?.value);

    const RESERVACION : Reservacion = {
      titulo: this.reservacionForm.get('titulo')?.value,
      descripcion: this.reservacionForm.get('descripcion')?.value,
      fecha: this.reservacionForm.get('fecha')?.value,
      hora: this.reservacionForm.get('hora')?.value
    }
    // esta condicional es la que nos permite editar.
    if(this.id !== null){
      //editamos reservacion
      this._reservacionService.editarReservacion(this.id, RESERVACION).subscribe(data =>{
        this.toastr.info('La reservacion se ha actualizado con exito!','Reservacion Actualizada');
        this.router.navigate(['/']);
      },error =>{
        console.log(error);
        this.reservacionForm.reset();
      })

    }else{
      //agregamos reservacion
      console.log(RESERVACION);
      this._reservacionService.guardarReservacion(RESERVACION).subscribe(data =>{
        this.toastr.success('La Reservacion se ha hecho con exito!', 'Reservacion Registrado!');
        this.router.navigate(['/']);
      },error =>{
        console.log(error);
        this.reservacionForm.reset();
      });
    }
  }

  editarReservacion(){
    if(this.id !== null){
      this.titulo = 'Editar producto';
      this._reservacionService.obtenerReservacion(this.id).subscribe(data =>{
        this.reservacionForm.setValue({
          titulo: data.titulo,
          descripcion: data.descripcion,
          fecha:data.fecha,
          hora: data.hora
        })
      })
    }
  }

}
