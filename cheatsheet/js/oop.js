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