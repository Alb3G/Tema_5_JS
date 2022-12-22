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
//var -> function scpope //let & const -> block scope

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

let array = [15, 20, 25];
console.log(array[0], array[1], array[2]);

let [var1, var2,var3] = [15, 20, 25];//Avanzada
console.log(var1, var2, var3);

//------ Const ------
const x = 1;
//const y; Error missing = in const
//x = 2; Error invalid assigment to const 'X'
console.clear();
//------------------ Tipos de Datos -------------------
let str = String("I'm a string");
let str2 = "I'm another string";//Recomendada
console.log(typeof str, typeof str2, typeof "");

let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5,typeof 5.3, typeof "5");


//let str = "string" Es igual a "string"