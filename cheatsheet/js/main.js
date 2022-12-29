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
//var -> function scope //let & const(usarla siempre a noser que vayamos a modificarla despues) -> block scope

function saludar () {
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
let day = 5;
// day = 5;

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

console.log(`el dia de mi cumple es el ${day}`);

//------ Parsing / Conversion de un tipo a otro ------
let number = Number('1000s');//NaN = Not a number. no genera error pero no podremos operar con ese dato.
console.log(number, typeof number);

number = Number('1000');
console.log(number, typeof number);

number += "1000";//number += Number("1000"); Tendria que llevar el constructor Number para que nos pasara el string a numero
console.log(number, typeof number);

console.log("1" + 1, "1" - 1);//primer caso transforma el numero a string y concatena, segundo caso transforma el string a number y los resta.

console.clear();
//------------------ Objects -------------------
let person = {
    //key : value, es la forma de representar propiedades a la hora de crear un objeto.
    name: "Jhon",
    age: 30,
    blonde: false,
    walk: function() {//Pre ES6
        console.log('Hey estoy saltando');
    },
    jump() {
        console.log('Hey estoy saltando');
    }//ES6
}
//------ Acceso por punto / Dot notation ------
console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años`);

person.name = "Jane";

console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años`);

//------ Acceso por corchetes / Brackets notation ------
let propertyName = "age";
console.log(person[propertyName]);

//------------------ Ampliacion -------------------
person.children = ["Marta", "Peter"];
console.log(person);
console.log(person.children[1]);

/*console.log(`${person.name},tiene ${person.children.length} hijos y sus nombres son  ${person.children[0]} y ${person.children[1]}`)*/

person.jump();
person.walk();

//------ This ------
const person2 = {
    name:"Alberto",
    talk () {
        console.log(this);
        console.log(`Me llamo ${this.name}`);//person2 lo sustituimos por this
    }
}
// this hace referencia al objeto en el que se encuentre
const person3 = {
    name:"Marina",
    talk () {
        console.log(this);
        console.log(`Me llamo ${this.name}`);//person2 lo sustituimos por this
    }
}
// console.log(this); si printeamos this solamente en un log lo que nos sale es el localhost donde esta nuestra pagina
person2.talk();
person3.talk();
console.clear();
//------------------ Arrays -------------------
let selectedColors = ['red','blue'];
console.log(selectedColors, selectedColors.length, typeof selectedColors);

selectedColors[2] = 'green';//si no existe lo crea
console.log(selectedColors, selectedColors.length);

selectedColors.push('violet','white');//lo añade como ultimo index es decir al final del array.(Podemos indexar varios elementos)
console.log(selectedColors, selectedColors.length);

let removedItem = selectedColors.pop()//La funcion pop es lo que vamos a utilizar para eliminar el o los ultimos elementos de un array.
console.log(selectedColors, selectedColors.length);//Dichos elementos podemos incluso guardarlos en otra variable por si quisiesemos operar con ese dato,
                                                   //Puesto que el return de pop es el valor que elimina e igual pasa con Shift.
selectedColors.unshift('white');//Permite indexar un elemento al principio del array.
console.log(selectedColors, selectedColors.length);

selectedColors.shift();//Permite eliminar un elemento del principio del array.
console.log(selectedColors, selectedColors.length);

selectedColors.sort();//nos ordena todos los elementos del array alfabeticamente.
console.log(selectedColors, selectedColors.length);

console.log('El azul esta en el indice',selectedColors.indexOf('red'));//Funciona igual que los arrays y nos dice el index en el que se encuentra ese elemento.

// console.log(selectedColors[selectedColors.indexOf('blue') + 1])

console.log(selectedColors.slice(1,3))//Devuelve los valores que se encuentren en esa franja. Si no especificamos tamaño a eliminar lo deleteara todo desde el startpoint.

console.log('Splice devuelve estos valores que ha eliminado: ',selectedColors.splice(1,3))//Splice(1,3)-> El 1 indica el Startpoint y el 3 el numero de elementos a eliminar.
console.log('El array se queda asi: ',selectedColors);

//Ejercicio de practica crear objeto boy con nombre, altura, genero y amigos como propertys//START!

const boy = {
    name:'hasbulla',
    height:1.00,
    gender:'male',
    friends:['peter']
}
console.log(boy);

boy.friends.push('abdurozik', 'kabib', 'messi');
console.log(boy);

boy.friends.unshift('speed');
console.log(boy.friends);
//FIN DEL EJERCICIO PRACTICO//END!!