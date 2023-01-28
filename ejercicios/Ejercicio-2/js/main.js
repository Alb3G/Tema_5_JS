function user (name, firstLastName, secondlastName, email, age, city, cartProducts) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondlastName = secondlastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.cartProducts = cartProducts;
    this.incrementCartProducts = function () {
        this.cartProducts++;
    };
    this.emptyCarProducts = function () {
        this.cartProducts = 0;
    }
};
const users = [
    new user ('Francisco','Perez', 'Perez','example1@hotmail.com',28,'Madrid',0),
    new user ('Alejandro','Gomez', 'Miranda','example2@outlook.com',40,'Madrid',0),
    new user ('Francisco','Perez', 'Perez','example3@gmail.es',19,'Madrid',0),
];

users.forEach(user => console.log(user.email));