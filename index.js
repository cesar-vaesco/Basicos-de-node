const fs = require('fs');

// PAra crear un nuevo archivo
// Parametros: nombre del archivo creado, contenido del archivo, un callback que nos permite conocer el estado de la creación del archivo
fs.writeFile('./texto.txt', 'Línea uno', function(err) {

    if (err) {
        console.log(err)
    }

    console.log('Archivo creado');
});

console.log('Última línea de código');