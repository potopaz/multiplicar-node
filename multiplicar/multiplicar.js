const fs = require('fs');
const colors = require('colors');

let listarArchivo = (base, limite = 10) => {

    if (!Number(base)) {
        reject(`El dato ingresado ${base} No es un numero`);
        return
    }

    console.log('============================'.green);
    console.log(`Tabla de ${base}`.green);
    console.log('============================'.green);

    for (i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${i*base}`);
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`El dato ingresado ${base} No es un numero`);
            return
        }

        for (i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }al${ limite }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tablas/tabla-${ base }al${ limite }.txt`);
        });
    });

}

module.exports = {
    crearArchivo: crearArchivo,
    listarArchivo
}