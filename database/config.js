const mongoose = require('mongoose');

const Connect = async () => {

    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/contacdb');
        console.log('::::::.|Base de datos online|.::::::      | ',27017);
    }catch(err){
        console.log(err);
        throw new Error('Error en la carga de Datos');
    }
}

module.exports = {
    Connect
}