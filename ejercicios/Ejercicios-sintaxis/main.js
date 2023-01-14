//1. Define e inicializa un array con 5 elementos string en una sola línea.
const stringArray = ['Ies Belen','Politecnico','Campanillas','Mijas','UMA'];
console.log(stringArray);

//2. Define un array inicialmente vacío. Añade tres elementos de tipo number posteriormente. Elimina por
//completo el primero y añade dos nuevos números al inicio. En cada paso, imprime la longitud y el array
//entero por consola utilizando un string template del tipo: `Longitud: ${}`.
let langArray = [];
console.log(langArray,`Length: ${langArray.length}`);
//Añadimos y eliminamos los numeros que pide el ejercicio
//Indexamos 3 numbers.
langArray.push(5,10,15);
console.log(langArray,`Length: ${langArray.length}`);
//Eliminamos el primero.
langArray.shift();
console.log(langArray,`Length: ${langArray.length}`);
//Indexamos 2 nuevos numeros al principio.
langArray.unshift(2,3);
console.log(langArray,`Length: ${langArray.length}`);

//3.Escribe una función nombrada que devuelva true si el argumento dado es de tipo boolean y false en caso contrario.
function isBoolean (arg) {
    if (typeof arg === typeof true ) {
        return true;
    }else {
        return false;
    }
}
let bool1 = true;
let bool2 = false;
let nobool = undefined;
console.log(isBoolean(bool1));

//4.Escribe una función que devuelva la longitud de un string recibido por argumento.
const stringLength = (string) => console.log(`La longitud del string es de: ${string.length} caracteres`);
stringLength('Hello World');

//5.Crea una función de flecha que reciba una cantidad de minutos y lo devuelva convertido en segundos.
const minsToSecs = mins => console.log(`${mins} minutos son ${mins * 60} segundos`);
minsToSecs(5);

//6.Crea una función que reciba un número y devuelva el siguiente número par. (Si él es par, lo devolverá directamente).
function square (number) {
    if (number % 2 === 0) {
        return number
    }else {
        return (number + 1)
    }
}
console.log(square(5));

//7. Crea una función que reciba una edad y devuelva la cantidad de días que esa persona ha vivido. Puedes obviar los años bisiestos.
const personAge= (age) => {
    if (age <= 0 || age > 100) {
        console.log('La edad introducida no es correcta');
    }else {
        console.log(`Teniendo ${age} años has vivido ${age * 365} dias`);
    }
};
personAge(24);

//8. Crea una función que reciba un array y devuelva su último elemento. Prueba tu función con varios arrays de diferentes longitudes.