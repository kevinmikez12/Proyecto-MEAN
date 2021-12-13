const mongoose = require ('mongoose');

const ReservacionSchema = mongoose.Schema({
  titulo:{
    type:String,
    required:true
  },
  descripcion:{
    type:String,
    required:true
  },
  fecha:{
    type:String,
    required:true
  },
  hora:{
    type:String,
    required:true
  },
  fechaCreacion:{
    type:Date,
    default:Date.now()
  }
})

module.exports = mongoose.model('Reservacion',ReservacionSchema);