//Al inicio añadimos todos los requireds
//Require tipo 1 - require directo de la librería ya existente en Nodejs 
const myFileSystem = require('fs');
//Require tipo 2 - express no es una librería precargada en Nodejs por lo que hay que preinstalarla
// const exp = require('express');
//Require tipo 3 - require de archivos que nosotros creamos en el proyecto. Indicamos el path dónde se encuentra el archivo.
// const myFile = require('./fs');
const color = require('colors');

//podemos especificar valor por defecto a una variable si no viene informada en la llamada a la función --> limite = 10
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${base} no es un número`);
            return; //termina aquí el código
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            // console.log(`${base} * ${i} = ${base*i}`);
            data += `${base} * ${i} = ${base*i} \n`;
        }

        //parámetro 1: nombre del archivo
        //parámetro 2: datos a grabar
        //parámetro 3: callback
        myFileSystem.writeFile(`./tablas/tabla-${base}-limite${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });

};

let listarTabla = (base, limite) => {

    console.log('=================================='.green);
    console.log(`tabla de ${base} limite ${limite}`.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
};

// Pasamos la función crearArchivo como objeto en el parámetro global export
module.exports = {
    // podemos indicarlo así: crearArchivo: crearArchivo, o gracias a javascript ES6, unicamente de la siguiente manera:
    crearArchivo,
    listarTabla
};