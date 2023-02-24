console.clear();
// Antes de ES6
function car (brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.printAge = function () {
        let age = new Date().getFullYear() - this.year;
        console.log(`This ${this.brand} ${this.model} is ${age} years old`);
    };
};

let myCar = new car ('Ford','Mustang',1990);
let myCar2 = new car ('Audi','Q7',2015);

console.log(myCar,myCar2);
myCar.printAge();

car.getHP = function () { //No actualiza las instancias.
    console.log("This car has 300 horsepower");
};

// myCar.getHP = function () { //Solo actualiza la instancia myCar.
//     console.log("This car has 300 horsepower");
// };

car.prototype.getHP = function () { //
    console.log("This car has 400 horsepower");
};

myCar.getHP();
myCar2.getHP();

function SUV (brand, model, year, width, height) {
    car.call(this,brand, model, year);
    this.width = width;
    this.height = height;
};
SUV.prototype = Object(car.prototype);

let mySUV = new SUV ('Audi','Q3',2017,2500,2000);
console.log(mySUV);
mySUV.getHP();

mySUV.printAge();
//---------------------------------- Despues de ES6 ----------------------------------
console.log("----- DESPUES DE ES6 -----");
class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    };
    getSummary() {
        console.log(`${this.title} was written by ${this.author} in ${this.year}`);
    };
    getType() {
        console.log('Im a normal book');
    };
};

const book1 = new Book('Metamorphosis', 'Franz Kafka', 1915);
console.log(book1);
book1.getSummary();
book1.getType();

// SubClases (Herencia).
class Magazine extends Book {
    // Introducir este constructor en Magazine sirve para que haga todo lo que hace el libro y ampliarlo.
    constructor (title, author, year, month){
        super(title, author, year)
        this.month = month
    };
    getType() {
        console.log("Im a magazine");
    };
};
// Instanciamos una revista
const mag1 = new Magazine("Super Pop", "Algun Loco", 2015);
mag1.getSummary();
mag1.getType();
// Otro ejemplo de polimorfismo.
console.log("----- Ejemplo Polimorfismo con Animales -----");
class Animal {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    };
    makeSound() {
        console.log(`This ${this.type} named ${this.name} does ${this.sound}`);
    };
};

class cat extends Animal {
    constructor(name) {
        super("cat", name, "miau");
    };
};

class dog extends Animal {
    constructor(name) {
        super("dog", name, "woof");
    };
};