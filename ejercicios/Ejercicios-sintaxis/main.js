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
function lastIndex(array) {
    return array[array.length - 1];
} 

const emptyArray = [];

function pushArrays (array) {
    for (let i = 0; i <= 10; i++) {
    array.push(i)
    }
}
pushArrays(emptyArray);
console.log(emptyArray);
console.log(lastIndex(emptyArray));

//9. Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy
//frecuentemente, pero tiene tres especies: pollos (2 patas), vacas (4 patas) y cerdos (4 patas). Tu función
//recibirá la cantidad de animales en ese orden y devolverá la cantidad de patas totales. Ejemplo: countLegs(5, 2, 8); // output: 50
function countLegs (pollos, vacas, cerdos) {
    let result = (pollos * 2) + (vacas * 4) + (cerdos * 4);
    return result;
}
console.log(countLegs(5,2,8));

//10. Crea una función que determine si dos datos recibidos por argumentos son del mismo tipo.
const typeofFunction = (a, b) => {
    if (typeof a === typeof b) {
        console.log("Los datos son del mismo tipo");
    } else {
        console.log("Los datos son de distinto tipo");
    }
}
typeofFunction(5,'5');

//11. Crea una función que reciba un string con una frase y devuelva un array donde cada elemento será una
//palabra de la frase original. Investigar método existente de los strings para este fin.
function stringToArray(str) {
    return str.split(" ");
}
let stringEjercicio11 = stringToArray("Esto es un string para probar la funcinon stringToArray");
console.log(stringEjercicio11);

//12. Inicializa dos objetos, address1 y address2 con las propiedades: provincia, ciudad, municipio, código postal, calle, número, planta, y número de puerta.

const address1 = {
    provincia:'Malaga',
    ciudad:'Malaga',
    municipio:'Malaga',
    codigoPotal:29007,
    calle:'C/Spengler',
    numero:7,
    planta:2,
    puerta:'J'
}
console.log(address1);
const address2 = {
    provincia:'Madrid',
    ciudad:'Madrid',
    municipio:'Parla',
    codigoPotal:28981,
    calle:'C/Pinto',
    numero:7,
    planta:5,
    puerta:1
}
console.log(address2);
//13. Los dominios en la web, se componen del nombre de dominio (codespaceacademy) y de un TLD (toplevel domain) como, por ejemplo .com / .es / .org, etc. 
//Crea una función que se llame parseDomain() que reciba por argumento un string y devuelva un objeto con dos propiedades: domain y tld.
function parseDomain(str) {//No resuelto Explicado por Github Copilot.
    let array = str.split('.');
    return {
        domain: array[0],
        tld: array[1]
    }
}
console.log(parseDomain('codespaceacademy.com'));

//14. Nos han prohibido el uso del operador de igualdad estricta (===), pero queremos poder seguir utilizando
//dicha funcionalidad. Crea una función que devuelva true si dos números tienen el mismo valor y el
//mismo tipo de dato. Debemos usar el operador lógico “&&”.

const equality = (firstNumber, secondNumber) => {
    if (firstNumber == secondNumber && typeof firstNumber == typeof secondNumber) {
        return true
    } else{
        return false
    }
}
console.log(equality(5,5));
console.log(equality('5',5));

//15. Crea una función que reciba dos strings y devuelva true si tienen la misma longitud y false en caso contrario.
const lengthEquality = (str1, str2) => {
    if (str1.length === str2.length) {
        return true
    }else {
        return false
    }
}
strEj15_1 = "Hello World";
strEj15_2 = "Hola Mundo.";
strEj15_3 = "Dam o Daw que estudiar?"
console.log(`Ejercicio 15: ${lengthEquality(strEj15_1,strEj15_2)}`);
console.log(`Ejercicio 15: ${lengthEquality(strEj15_1,strEj15_3)}`);

//16. Crea una función que reciba un string y determine si está vacío sin utilizar la propiedad length.
function emptyString (str) {
    if (str === "") {
        console.log('El string esta vacio');
    }else {
        console.log(`Contenido del String: ${str}`);
    }
}

let stringVacio = "";
let stringConContenido = "Hello World";

emptyString(stringVacio);
emptyString(stringConContenido);

//17. Imprimir elemento a elemento el array del apartado 1 de cuatro formas diferentes:
//• for of
for (let item of stringArray) {
    console.log(`For of: ${item}`);
}
//• forEach.
stringArray.forEach(function (value){
    console.log(`For each: ${value}`);
});
//• for
for (let i = 0; i <= stringArray.length - 1; i++) {
    console.log(`For: ${stringArray[i]}`);
}
//• while
let i = 0;
while (i < stringArray.length) {
    console.log(`While: ${stringArray[i]}`);
    i++;
}

//18. Crea una función que reciba un string y un número N y devuelva el string original repetido N veces;
function repeatString(str, n) {//MDN Web Docs del parametro repeat para los strings.
    newString = str.repeat(n);
    return newString;
}
console.log(repeatString(stringConContenido,3));
console.log(repeatString('Me llamo Alberto ',3));
//19. Crea una función que recibe un objeto con dos campos, votos positivos y votos negativos y que devuelva la cuenta final.
const votos = (upVotes, downVotes) => console.log(`Los votos totales son: ${upVotes - downVotes}`);
votos(35,15);

//20. Crea una función que recibe un array de tipos de datos mezclados y que devuelva otro array con el tipo de cada uno de los elementos.
const mixArray = ["I'm learning JS in a Bootcamp 🚀", 7.5, {}, 0, undefined, [], "codespace"];
function fillArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(typeof array[i]);
    }
    return newArray;
}
fillArray(mixArray);
console.log(fillArray(mixArray));

//21. Función que dado un array de números con formato string devuelva un array con los números ya parseados.
let arrayEj_21 = ['1','2','3','4','5'];
function parsedNumbers (array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i])//Le decimos que para cada indice del array que nos pasan vamos a sustituir ese indice por su mismo valor pero convertido a numero.
    }
    return array
}
console.log(parsedNumbers(arrayEj_21));

//22. Crea una función de flecha que devuelva “Positivo” si el número que recibe por argumento es mayor o igual que cero 
//y “Negativo” en caso contrario. Usa el operador ternario.
const ternaria = (number) => (number >= 0) ? 'Positivo' : 'Negativo';
console.log(ternaria(0));
console.log(ternaria(-1));

//23. Crea una función que dado un array cualquiera y un índice, borre el elemento guardado en ese índice.
function deleteIndexValue (array,index) {
    array.splice(index,1)
    console.log(array);
}

deleteIndexValue(arrayEj_21,2)

//24. Usando la función del apartado anterior, crea otra función que dado un array de números y un número a
//filtrar, devuelva un array borrando todos las apariciones de dicho número.//Resuelto por chatGpt no cuenta.
let filterArray = [2,3,4,3,6,3,8];
function filterNumber(array, num) {
    return array.filter(function(item) {
        return item !== num;
    });
}
console.log(filterNumber(filterArray,3));

//27. Crea una función que compare strings sin tener en cuenta las mayúsculas / minúsculas.
function stringCompare (str1,str2) {
   if (str1.toLowerCase() === str2.toLowerCase()){
        return true
    } else {
        return false
    }
}
console.log(stringCompare('Hello World','HELLO WORLD'));

//28. Crea una función que convierta en mayúscula sólo la primera letra de cada palabra de un string dado. El
//apartado 11 será de ayuda. Investigar cómo unir un array de strings en un único string.
function capitalize () {}