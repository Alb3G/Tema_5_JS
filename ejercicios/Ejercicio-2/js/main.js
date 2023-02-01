// Plantilla para crear Objetos.
function user (name, firstLastName, secondlastName, email, age, city) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondlastName = secondlastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.cartProducts = 0;
    this.incrementCartProducts = function () {
        this.cartProducts++;
    };
    this.emptyCarProducts = function () {
        this.cartProducts = 0;
    }
};
// Array de Objetos creados con la plantilla.
const users = [
    new user ('Francisco','Perez', 'Ruiz','example1@hotmail.com',28,'Madrid'),
    new user ('Alejandro','Gomez', 'Miranda','example2@outlook.com',40,'Madrid'),
    new user ('Manuela','Jimenez', 'Pajuelo','example3@gmail.es',19,'Madrid'),
];
// ForEach usado para seleccionar solamente los emails de los usuarios.
users.forEach(user => console.log(user.email));
// Seleccionamos los elemetos en el Dom y guardamos sus referencias.
const userSelect = document.querySelector('#userselect');//Select.
const userDataList = document.querySelector('#userData');//Ul.
const addToCartButton = document.querySelector('#addProduct');//Add products Button.
const emptyCartProductsButton = document.querySelector('#emptyCart');//Empty cart for selected user.
// Add Nombre de los usuarios al Select iterando sobre el array.
users.forEach((user) => {
    let newOption = document.createElement('option');
    newOption.textContent = user.name;
    userSelect.appendChild(newOption);
});
//Rellenamos la lista con todas las propiedades de un usuario cualquiera.
function fillList (user) {
    userDataList.innerHTML = " ";//Nos vacia la lista cada vez que seleccionamos un usuario.
    for (const key in user) {
        const value = user[key];
        if (typeof value !== 'function'){//para filtrar las funciones y que no nos las muestre en la lista.
            let newLi = document.createElement('li');
            newLi.innerHTML = `<b> ${key}:</b> ${value}`;
            newLi.classList.add('list-group-item');
            userDataList.appendChild(newLi);
        }
    };
}
//Añadir listeners necesarios.
userSelect.addEventListener('change',(event) => {
    const selectedUser = users.find(user => user.name === userSelect.value);//Nos sirve para saber que usuario esta siendo seleccionado en el select.
    fillList(selectedUser);
});
fillList(users[0]);//Estado inicial de la tabla para que aparezca con el primer usuario.
//Creamos funcion para dar funcionalidad a nuestros 2 botones.
function processProducts (event) {
    const selectedUser = users.find(user => user.name === userSelect.value);
    const ButtonActions = event.target === addToCartButton 
        ? selectedUser.incrementCartProducts() 
        : selectedUser.emptyCarProducts();

    fillList(selectedUser);
}

addToCartButton.addEventListener('click',processProducts);
emptyCartProductsButton.addEventListener('click',processProducts);
