const fs = require('fs');

const crearArchivo = async (base = 5, l  = false, h = 10) => {

    
    let salida = '';
    let consola = '';

    for (let index = 1; index <= h; index++) {
        salida+=`${base} X ${index} ${ '=' } ${base*(index)} \n`;
        consola+=`${base} X ${index} ${ '='.green } ${base*(index)} \n`;
    }

    if (l){
        console.log(`Tabla del ${colors.blue(base)} \n`.green);
        console.log(consola);
    }

    try {
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
        return `tabla-${base}.txt`
    } catch (err) {
        throw error;
    }
    
}

module.exports = {
   crearArchivo
}