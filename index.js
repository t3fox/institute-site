const express = require('express');
const mongoose = require('mongoose');

const { Connect } = require('./database/config');

const PORT = 8080;
const serv = express();
 
serv.use(express.urlencoded({extended: true}));

serv.use(express.static('public'));
serv.set('view engine', 'hbs');

serv.use('/',function(res,req,next){
    next();
});


serv.get('/',(req,res)=>{ res.render('index'); });


serv.post('/newsletter',(req = request,res =response)=>{

    const { nombre, apellido_paterno, apellido_materno,telefono,mail,mensaje } = req.body;
    try{
        const informados = mongoose.model('suscritos',{
            nombre: {
                type:String,
                required:[true,'Se Requiere de un Nombre'],
            },
            apellido_paterno: {
                type:String,
                required:[true,'Se Requiere de un Apellido'],
                unique: true,
            },
            apellido_materno: {
                type:String,
                required:[true,'Se Requiere de un Apellido'] 
        
            },
            telefono: {
                type:Number,
                required:[true,'Se Requiere de una Telefono']
        
            },
            mail:{
                type:String,
                require:[true,'Se requiere de un Correo']
            },
            mensaje: {
                type:String,
                required: [true,'Se Requiere de un Mensaje']
            },
        });
        
        const formulario = new informados({ nombre,apellido_paterno,apellido_materno,telefono,mail,mensaje });

        formulario.save();
        res.render('index');

    }catch(err){

        console.log(err);
    }
  

});






Connect();
serv.listen(PORT, ()=>{
    console.log("Corriendo en ", PORT);
});