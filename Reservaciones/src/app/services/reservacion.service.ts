import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservacion } from '../models/reservacion';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {

  url='http://localhost:4000/api/reservaciones/';

  constructor(private http: HttpClient) { }

  getReservaciones(): Observable <any> {
    return this.http.get(this.url);
  }

  eliminarReservacion(id:string): Observable<any>{
    return this.http.delete(this.url + id);
  } 

  guardarReservacion(reservacion:Reservacion): Observable <any>{
    return this.http.post(this.url,reservacion);
  }

  obtenerReservacion(id:string):Observable<any>{
    return this.http.get(this.url + id);
  } 

  editarReservacion(id:string, reservacion:Reservacion):Observable<any>{
    return this.http.put(this.url + id, reservacion);
  }
}
