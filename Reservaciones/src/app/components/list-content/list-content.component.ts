import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Reservacion } from 'src/app/models/reservacion';
import { ReservacionService } from 'src/app/services/reservacion.service';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html'
})
export class ListContentComponent implements OnInit {

  listReservaciones : Reservacion[] = [];

  constructor(private _reservacionService: ReservacionService,
              private toastr: ToastrService) {}

  ngOnInit(): void {
    this.obtenerReservaciones();
  }

  obtenerReservaciones(){
    this._reservacionService.getReservaciones().subscribe(data =>{
      console.log(data);
      this.listReservaciones = data ;
    },error => {
      console.log(error);
    })
  }

  eliminarReservacion(id:any){
    this._reservacionService.eliminarReservacion(id).subscribe(data => {
      this.toastr.error('La reservacion fue eliminado con exito!', 'Reservacion eliminado');
      this.obtenerReservaciones();
    },error => {
      console.log(error);
    })
  }

}
