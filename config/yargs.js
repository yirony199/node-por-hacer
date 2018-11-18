const argv = require('yargs')

    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        descripcion: {
            demand: true,
            alias: "d",
            desc: "Descripcion de la tarea por hacer"
        }
    })
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: "d",
            desc: "Descripcion de la tarea por hacer"
        },
        completado: {
            alias: "c",
            default: true,
            desc: "Marca como completado o pendiente la tarea"
        }
    })
    .command('borrar', "Borrar descripcion", {
        descripcion: {
            demand: true,
            alias: "d",
            desc: "Descripcion de la tarea por hacer"
        }
    })
    .help()
    .argv;


module.exports = {
    argv
};