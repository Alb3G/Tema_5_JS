function user (name,firstLastName,secondLastName,email,age,city) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.cartProducts = 0;
    this.addCartProducts = function () {
        this.cartProducts ++;
    };
    this.emptyCartProducts = function () {
        this.cartProducts = 0;
    };
};
//
const users = [
    new user ('Francisco','Perez', 'Ruiz','example1@hotmail.com',28,'Madrid'),
    new user ('Alejandro','Gomez', 'Miranda','example2@outlook.com',40,'Madrid'),
    new user ('Manuela','Jimenez', 'Pajuelo','example3@gmail.es',19,'Madrid'),
];
//
const userSelect = document.querySelector('#userselect');
const userDataList = document.querySelector('#userData');
const addProductsButton = document.querySelector('#addProductButton');
const emptyCartButton = document.querySelector('#emptyCarProducts');
//
users.forEach(user => {
    const newOption = document.createElement('option')
    newOption.textContent = user.name;
    userSelect.append(newOption);
});
//
function fillList (user) {
    userDataList.innerHTML = " ";
    for (const key in user) {
        const value = user[key];
        if (typeof value !== 'function') {
            const newLi = document.createElement('li');
            newLi.innerHTML = `<b>${key}:</b>${value}`;
            newLi.classList.add('list-group-item');
            userDataList.appendChild(newLi);
        }
    }
}
//
userSelect.addEventListener('change', event => {
    const selectedUser = users.find(user => user.name === userSelect.value);
    fillList(selectedUser);
});
//
fillList(users[0]);
//
function processProducts (event) {
    const selectedUser = users.find(user => user.name === userSelect.value);
    const buttonActions = event.target === addProductsButton 
    ? selectedUser.addCartProducts() 
    : selectedUser.emptyCartProducts();
    fillList(selectedUser)
};
//
addProductsButton.addEventListener('click',processProducts);
emptyCartButton.addEventListener('click',processProducts);