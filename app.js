const {
    argv
} = require('./config/yargs');

const porHacer = require("./por-hacer/por-hacer");
const colors = require('colors')


let comando = argv._[0];

switch (comando) {

    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case "listar":
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log("============ Por hacer ===========".green);
            console.log(tarea.descripcion);
            console.log(`Estado : ${tarea.completado}`);
            console.log("==================================".green);
        }
        break;
    case "actualizar":
        let actualizar = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;
    case "borrar":
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);

        break;
    default:
        console.log("Comando  no es reconocido");
        break;


}