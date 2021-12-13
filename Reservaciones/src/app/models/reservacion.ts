export class Reservacion{
  _id?:number;
  titulo:string;
  descripcion:string;
  fecha:string;
  hora:string;

  constructor(titulo:string, descripcion:string, fecha:string, hora:string){
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fecha = fecha;
    this.hora = hora;
  }
}

