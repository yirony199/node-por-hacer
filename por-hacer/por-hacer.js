const fs = require("fs");


const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('no se pudo grabar', err);
        console.log("Se guardo correctamente");
    });
}


let listadoPorHacer = [];



const cargarBD = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (e) {
        listadoPorHacer = [];
    }
}


const getListado = () => {
    cargarBD();
    return listadoPorHacer;
}


const crear = (descripcion) => {

    cargarBD();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;

}


const actualizar = (descripcion, completado = true) => {
    cargarBD();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }


}

const borrar = (descripcion) => {
    cargarBD();
    let nuevolistado = listadoPorHacer.filter((tarea) => tarea.descripcion != descripcion);

    if(nuevolistado.length ==  listadoPorHacer.length){
        return false;
    }
    guardarDB();
    listadoPorHacer = nuevolistadoM;
    return true;

}



module.exports = {
    crear,
    guardarDB,
    cargarBD,
    getListado,
    actualizar,
    borrar
}