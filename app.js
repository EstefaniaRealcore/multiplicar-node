/* Uso de Module --> Modulo: objeto global disponible en toda la applicación
Module {
    id: '.',
    exports: {},
    parent: null,
    filename:
     'C:\\Users\\GarcíaCamposEstefaní\\Documents\\Realcore\\Nodejs\\node\\03-bases-node\\app.js',
    loaded: false,
    children: [],
    paths:
     [ 'C:\\Users\\GarcíaCamposEstefaní\\Documents\\Realcore\\Nodejs\\node\\03-bases-node\\node_modules',
       'C:\\Users\\GarcíaCamposEstefaní\\Documents\\Realcore\\Nodejs\\node\\node_modules',
       'C:\\Users\\GarcíaCamposEstefaní\\Documents\\Realcore\\Nodejs\\node_modules',
       'C:\\Users\\GarcíaCamposEstefaní\\Documents\\Realcore\\node_modules',
       'C:\\Users\\GarcíaCamposEstefaní\\Documents\\node_modules',
       'C:\\Users\\GarcíaCamposEstefaní\\node_modules',
       'C:\\Users\\node_modules',
       'C:\\node_modules' ] }
*/

/* INTRODUCCIÓN AL PASO DE PARÁMETROS POR CONSOLA

//usamos destructuración para traernos la función crearArchivo que está en el archivo ./multiplicar/multiplicar.js
const { crearArchivo } = require('./multiplicar/multiplicar');

// let base = 'abc';

//process es otra librería global de Nodejs. Lo utilizaremos para recibir valores por pantalla de comando
let argv2 = process.argv;
//Es argv[2] porque en la posición 0 y 1 se indican Paths. 
//Pasamos por comando la base de la siguiente manera: 'node app.js --base=3', por lo que parámetro será: '--base=3'
let parametro = argv[2];
let base = parametro.split('=')[1];

//como nos hemos traido la función, y la hemos añadido en la constante crearArchivo, ya podemos utilizarla
crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err));
*/

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
var colors = require('colors/safe');

let comando = argv._[0]; //cogemos posición 0 del array de acciones del comando

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.blue(archivo)))
            .catch(err => console.log(err));
        break;

    default:
        console.log('comando no reconocido');
}