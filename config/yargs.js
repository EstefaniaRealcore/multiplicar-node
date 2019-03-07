//uso del yargs para la definición de entrada de parámetros por consola
//una vez definido el comando listar, si lo llamamos por consola de la siguiente manera: 'node app listar', el resultado es:
/*
Imprime en consola la tabla de multiplicar
Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  --base                                                              [required]
*/
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}