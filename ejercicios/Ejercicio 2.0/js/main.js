function user (name, firstLastName, secondlastName, email, age, city) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondlastName;
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

const users = [
    new user ('Francisco','Perez', 'Ruiz','example1@hotmail.com',28,'Malaga'),
    new user ('Alejandro','Gomez', 'Miranda','example2@outlook.com',40,'Madrid'),
    new user ('Manuela','Jimenez', 'Pajuelo','example3@gmail.es',19,'Getafe'),
];

const userSelect = document.querySelector('#userselect');
const userDataList = document.querySelector('#userData');
const addToCartButton = document.querySelector('#addProductButton');
const emptyCarProducts = document.querySelector('#emptyCarProducts');

users.forEach(user => {
    let newOption = document.createElement('option');
    newOption.textContent = user.name;
    userSelect.appendChild(newOption);
});

function fillList (user) {
    userDataList.innerHTML = " ";
    for (const key in user) {
        const value = user[key];
        if (typeof value !== 'function') {
            let newLi = document.createElement('li');
            newLi.innerHTML = `<b>${key}:</b> ${value}`;
            newLi.classList.add('list-group-item');
            userDataList.appendChild(newLi);
        }
    };
};
fillList(users[0]);

userSelect.addEventListener('change',event => {
    const selectedUser = users.find(user => user.name === userSelect.value);
    fillList(selectedUser);
});

function ButtonActions (event) {
    const selectedUser = users.find(user => user.name === userSelect.value);
    const ButtonActions = event.target === addToCartButton 
        ? selectedUser.incrementCartProducts() 
        : selectedUser.emptyCarProducts();
    fillList(selectedUser);
};

addToCartButton.addEventListener('click',ButtonActions);
emptyCarProducts.addEventListener('click',ButtonActions);