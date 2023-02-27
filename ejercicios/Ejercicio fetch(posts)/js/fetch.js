// Esta parte es para traerme la info de los posts.
const URL = "https://jsonplaceholder.typicode.com/posts";
const dataDiv = document.querySelector('#data');
// const body = document.getElementsByTagName('body')[0]; he quitado el body para que los botones vieran abajo del todo.
function createPosts (array) {
    array.slice(1,20).forEach(user => {
        dataDiv.innerHTML += `<h1>${user.title}</h1>
                              <p>${user.body}</p>`
    });
};

async function requestURL (URL) {
    const response = await fetch(URL);
    const data = await response.json();
    createPosts(data);
};
requestURL(URL);

function paginateArray (array,pageSize,pageNumber) {

}

// seleccion de los botones.
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');