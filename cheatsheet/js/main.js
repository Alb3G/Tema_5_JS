//------------------ JS Externo -------------------
function saludo () {
    alert('Hola desde un script Externo');
    console.log('Has hecho click');
}

document.getElementsByTagName("a").item(2).addEventListener("click", saludo);

//------------------ Depuracion / Logging -------------------
//alert('Mensaje')
console.log("Mensaje");

//------------------ Variables -------------------
//var -> function scpope //let & const(usarla siempre a noser que vayamos a modificarla despues) -> block scope

function saludar() {
    console.log("Inicial: ", contador);
    //Comprobar con var y con let y ver diferencias
    for (var contador = 0; contador < 3; contador++ ) {
        console.log(contador);
    }

    console.log("Final: ", contador);
}
    
saludar();

console.clear();
//------------------ Inicializacion -------------------
let day;
day = 5;

let monthName = "Diciembre"

let month = 10;

let hour, minute, second;

/*let array = [15, 20, 25];
console.log(array[0], array[1], array[2]);

let [var1, var2,var3] = [15, 20, 25];//Avanzada
console.log(var1, var2, var3);*/

//------ Const ------
const x = 1;
//const y; Error missing = in const
//x = 2; Error invalid assigment to const 'X'
console.clear();
//------------------ Tipos de Datos -------------------
//Datos primitivos
//------ Strings ------
let str = String("I'm a string");
let str2 = "I'm another string";//Recomendada
console.log(typeof str, typeof str2, typeof "");

//------ Numbers ------
let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5,typeof 5.3, typeof "5");

//let str = "string" Es igual a "string"

//------ Booleans ------
let bool = Boolean(true);
let bool2 = false;
console.log(typeof bool, typeof bool2, typeof true, typeof 'true');

//------ Undefined ------
let undef;
console.log(typeof undef, undef);

//------ Null ------
let selectedColor = null;//Podremos usarlo para limpiar una variable
console.log(selectedColor, typeof selectedColor);

//Objects
//------ Array ------
let array = Array(1,2,3);
let array2 = [1,2,3];
console.log(array, array2);
console.log(typeof array, typeof array2);

console.log(typeof new Date('2024-05-12'));
console.log(typeof new Error('Mensaje de error'));

console.clear();
//------------------ Strings -------------------
str = "hola futuro";
console.log(str, str.length);
console.log(str.indexOf("futuro"));
console.log('La ultima vez que aparece "u" es en el indice',str.lastIndexOf("u"));

console.log(str.substring(1,3));

console.log("Hola mundo".concat(" adios mundo."));
console.log("Hola mundo" + " Adios mundo.");//Otra forma de concat

str = str + ". Adios Mundo";
str += ". Adios Mundo";
console.log(str);
console.log(str.replaceAll("Mundo", "futuro"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());


