//------------------ JS Externo -------------------
function saludo () {
    alert('Hola desde un script Externo');
    console.log('Has hecho click');
}

// document.getElementsByTagName("a").item(2).addEventListener("click", saludo);

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
    blonde: true,
    walk: function() {//Pre ES6
        console.log('Hey estoy saltando');
    },
    jump() {
        console.log('Hey estoy saltando');
    },//ES6
    introduce () {
        console.log(`Hola, me llamo ${this.name} tengo ${this.age} años y soy ${this.blonde ? 'Rubia' : 'Morena'}`)
    }
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
//---- Push ----
selectedColors.push('violet','white');//lo añade como ultimo index es decir al final del array.(Podemos indexar varios elementos)
console.log(selectedColors, selectedColors.length);
//---- Pop ----
let removedItem = selectedColors.pop()//La funcion pop es lo que vamos a utilizar para eliminar el ultimo elemento de un array.
console.log(selectedColors, selectedColors.length);//Dicho elemento podemos incluso guardarlo en otra variable por si quisiesemos operar con ese dato, Puesto que el return de pop es el valor que elimina e igual pasa con Shift.
//---- Unshift ----
selectedColors.unshift('white');//Permite indexar un elemento al principio del array.
console.log(selectedColors, selectedColors.length);
//---- Shift ----
selectedColors.shift();//Permite eliminar un elemento del principio del array.
console.log(selectedColors, selectedColors.length);
//---- Sort ----
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
    friends:['A.tate'],
    loseFriends() {
        this.friends.pop();
    }
}
console.log(boy);
// indexamos 3 elementos 
boy.friends.push('abdurozik', 'kabib', 'messi');
console.log(boy);

boy.friends.unshift('speed');
console.log(boy.friends);

boy.loseFriends();
console.log(boy);
//FIN DEL EJERCICIO PRACTICO//END!!
console.clear()
//------------------ Condicionales / IF & ELSE -------------------
//operadores
//5 === '5' ->seria false porque para que sean iguales tienen que coincidir el valor y el tipo
//5 == '5' ->seria true poque con el doble igual coincide el valor y lo da por true pq al no ser igualdad estricta no tiene que coincidir el tipo.
//5 !== '5' -> false, desigualdad estricta, tanto en === como en !== siempre van a ser las recomendadas por codigo limpio mas que nada y para trabajar.
//5 != '5' -> true, la desigualdad no es estricta.
const randomNumber = 5;
const guessedNumber = '5';
// Procedimiento normalmente es comprobar el tipo de dato que el usuario esta introduciendo, si el tipo concuerda con lo que nosotros pedimos podemos
// proceder a realizar la logica que necesitemos peeero si los tipos no coinciden deberiamos parsearlo al que nosotros necesitemos para poder trabajar con el.
if (typeof randomNumber !== typeof guessedNumber) {
    console.log("Cuidado los numeros son de tipos distintos");
}

if (randomNumber == guessedNumber && randomNumber !== guessedNumber) {
    console.log("Cuidado los numeros son de tipos distintos 1");
}

// if (randomNumber === guessedNumber) {
//     console.log("Has acertado el numero");
// } else if (randomNumber > guessedNumber) {
//     console.log("El numero introducido es mayor");
// } else {
//     console.log("El numero introducido es menor");
// }

//------ Ternary Operator / Operador ternario(ternarias) ------

// console.log(`Hola, me llamo ${person.name} tengo ${person.age} años y soy ` + (person.blonde ? 'Rubia' : 'Morena')); Aqui esta concatenando strings.
person.introduce();

let variable = 12 < 10 ? 'el primero es menor' : 'el primero es mayor';
console.log(variable);
//------ Switch ------
let option = 3;
switch (option) {
    case 1:
        //Bloque de codigo para valor 1
        console.log("option vale 1");
        break;
    case 2:
        //Bloque de codigo para valor 2
        console.log("option vale 2");
        break;
    case 3:
        //Bloque de codigo para valor 3
        console.log("option vale 3");
        break;
    default:
        console.log("otra opcion");
        break;
}

//------------------ Functions / Funciones -------------------
//---- Nombradas ----
function suma(num1,num2) {
    let result = num1 + num2;
    return result;
}

suma(2,2)

function greet(name,lastName) {
   console.log(`Hola ${name} ${lastName}.`);
}
greet("Alberto","Guzman");

// function square(num1) {
//    return num1 * num1;
// }

// console.log(square(2), typeof square(2));

//---- Anónimas ----
let numbersArray = [5,51,1,15,2];
console.log(numbersArray);
numbersArray.sort();//Ordena segun las tablas Asci
console.log(numbersArray);

function orderNumbers (a, b) { //Logica de la funcion sort dentro de una funcion con un If
    if (a < b) {
        return -1;
    } else if (a === b) {
        return 0;
    } else {
        return 1;
    }
}
numbersArray.sort(function (a, b) {return a - b});//La resta hace toda la logica del if de arriba y si lo metemos en una funcion anonima es lo que usaremos para ordenar arrays.
// numbersArray.sort(orderNumbers);
console.log(numbersArray);
//Mismo proceso que con los numeros pero con objetos.
function orderPerson (person1, person2) { 
    if (person1.age < person2.age) {
        return -1;
    } else if (person1.age === person2.age) {
        return 0;
    } else {
        return 1;
    }
}
const person4 = {
    name:"A",
    age:44
}
const person5 = {
    name:"B",
    age:50
}
const person6 = {
    name:"C",
    age:23
}
let personArray = [person4, person5, person6];
personArray.sort(orderPerson);//con la anonima -> personArray.sort(function (a,b) {return a.age - b.age})
console.log(personArray);
console.clear();
//---- Arrow Functions----
const perimeterOfSquare = (side) => side * 4;
console.log(perimeterOfSquare(5));

// numbersArray.sort(function (a, b) {return a - b});
// numbersArray.sort((a, b) =>  b - a);//Ejemplo para pasar una funcion anonima a una de flecha
// console.log(numbersArray);

const square = (num1) => num1 * num1;//La funcion nombrada como square esta arriba esta es la version arrow.
console.log(square(10));
//------------------ Bucles -------------------
//---- For ----
for (let i = 0; i <= 10; i++) {
console.log(`Indice ${i}`);
}
//Definir y rellenar un array.
let emptyArray =[];//de 0 a 10
for (let i = 0; i <= 10; i++) {
    emptyArray.push(i)
}
console.log(emptyArray);

const emptyArrayV2 =[];//de 10 a 0
for (let i = 10; i >= 0; i--) {
    emptyArrayV2.push(i)
}
console.log(emptyArrayV2);
//---- While ----
while (true) {
    break;
}

console.log("No entra en bucle infinto");
//---- ForEach ----
function myFunction (item,index) {//Funcion nombrada
    console.log(`Indice ${index}: ${item}`);
};

numbersArray.forEach(myFunction);

// arrayNumbers.foreach(function(value,index) { 
//    console.log(`Indice ${index}: ${value}`)
// });

numbersArray.forEach((item, index) => console.log(`Indice ${index} -> ${item}`))

let otherArray = [];
numbersArray.forEach(item => otherArray.push(item));//Hacemos el foreach al array que queremos copiar.
console.log(otherArray);
console.clear();
//---- For Of ----
for (let item of numbersArray) {
    console.log(item);
}
//---- Continue ----
for (let i = 0; i < 5; i++ ) {
    if (i === 3){
        continue //Salta a la siguiente iteracion.
    } else {}
    console.log("Using Continue",i);
}
//---- Break ----
let i = 0;
let k;
mainLoop:while (true) { //Podemos dar etiquetas envolventes a los loops para indicar con un break que bucle queremos romper.
    console.log("Outer loop", i);
    i++;
    k = 1;
    while (true) {
        console.log("Inner loop", k);
        k++;
        if (i === 5 && k === 5) {
            break mainLoop;
        } else if (k === 5) {
            break;
        }
    }
}

console.clear();
