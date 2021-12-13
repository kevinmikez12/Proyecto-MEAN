const Reservacion = require ("../models/reservacion");

exports.crearReservacion = async (req,res)=>{

  try{

    let reservacion;

    //creamos nuestra reservacion
    reservacion = new Reservacion(req.body);

    await reservacion.save();
    res.send(reservacion);

  }catch(error){
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}

exports.obtenerReservaciones = async(req,res)=>{

  try{

    const reservaciones = await Reservacion.find();
    res.json(reservaciones);

  }catch(error){
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}

exports.actualizarReservacion = async (req,res) =>{

  try{

    const{titulo, descripcion, fecha, hora} = req.body;
    let reservacion = await Reservacion.findById(req.params.id);

    if(!reservacion){
      res.status(404).json({msg:"No existe la reservacion"});
    }

    reservacion.titulo = titulo;
    reservacion.descripcion = descripcion;
    reservacion.fecha = fecha;
    reservacion.hora = hora;

    reservacion = await Reservacion.findOneAndUpdate({_id:req.params.id},reservacion,{new: true})
    res.json(reservacion);


  }catch(error){
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}

exports.obtenerReservacion = async (req,res) =>{

  try{

    let reservacion = await Reservacion.findById(req.params.id);

    if(!reservacion){
      res.status(404).json({msg:"No existe la reservacion"});
    }

    res.json(reservacion);


  }catch(error){
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}

exports.eliminarReservacion = async (req,res) =>{

  try{

    let reservacion = await Reservacion.findById(req.params.id);

    if(!reservacion){
      res.status(404).json({msg:"No existe la reservacion"});
    }

    await Reservacion.findByIdAndRemove({_id:req.params.id})
    res.json({msg: 'Reservacion eliminado con exito!'});


  }catch(error){
    console.log(error);
    res.status(500).send('Hubo un error');
  }
}