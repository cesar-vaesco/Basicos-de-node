//Creamos un objeto

const sum = function sumar(n1, n2) {
    return n1 + n2;
}

const res = function restar(n1, n2) {
    return n1 - n2;
}

const multi = function multiplicar(n1, n2) {
    return n1 * n2;
}

const div = function dividir(n1, n2) {

    if (n2 == 0) {
        console.log('No se puede dividir por 0');
    } else {
        return n1 / n2;
    }
}



// // Agregamos valores al objeto
// Matematica.sumar = sumar;
// Matematica.restar = restar;
// Matematica.multiplicar = multiplicar;
// Matematica.dividir = dividir;

//Función para exportar
const saludo = function hello(nombre) {
    console.log(`Hola ${nombre}`);
}

const despedida = (nombre) => {
    console.log(`Adios ${nombre}`);
}

// Importamos el objeto
module.exports = {
    saludo,
    sum,
    res,
    multi,
    div,
    despedida
};