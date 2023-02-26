const URL = "https://jsonplaceholder.typicode.com/users";

function printNames (array) {
   array.forEach(user => {
    console.log(user.name);
   });
};

function printCity (array) {
    array.forEach(user => console.log(user.name,"=>",user.address.city))
};

function printLatitud (array) {
    array.forEach(user => console.log(user.address.geo.lat))
};

function printKeysUser (usersArray) {
    for (const user in usersArray) {
        const value = usersArray[user]
        console.log(value.company.name);
    };
};

fetch(URL)
    .then(response => {
        if (!response.ok) {
            throw Error ("Hay algun problema con la respuesta" + response.statusText);
        };
        return response.json() //El .json() lo que devuelve es otra promesa.
    }) 
    .then(data => printKeysUser(data)).catch(error => console.log(error)); //Siempre hay que poner estos 2 .then el primero para comprobar que todo ha ido ok y el segundo para obtener los datos.
//
// promise.then(response => console.log(response)); //El .then() se aplica sobre promesas y se ejecutara cuando se resuelva la promesa.
// console.log(promise);//Esta linea se ejecutara antes que la de la promesa.
