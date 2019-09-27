const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];


switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite);
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
}


//let base = '36';

//console.log(process.argv);

//let argv2 = process.argv;

//console.log(argv);
//console.log(`Limite ${argv.limite}`);
//console.log(argv2);
/*
let parametro = argv[2];
let base = parametro.split('=')[1];

console.log(base);



    */