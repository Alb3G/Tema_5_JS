// Esta parte es para traerme la info de los posts y los selectores.
const URL = "https://jsonplaceholder.typicode.com/posts";
const dataDiv = document.querySelector('#data');
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');
const currentPageLvl = document.querySelector('#page');
// variables 
let page_number = 1; //Pagina Actual
let page_size = 20; //Post que voy a mostrar por pagina.
let posts = []; // Array vacio donde voy a copiar el array que me devuelva la API.
// Functions.
async function requestURL (URL) {
    const response = await fetch(URL);
    const data = await response.json();

    //Copio mi array en la variable global de un array vacio para poder usar el array en otros sitios.
    posts = [...data]; 
    createPosts(posts);
};
requestURL(URL);

function createPosts () {
    // Paginamos nuestro array con el que vamos a operar usando la funcion de paginar 
    const newPagePosts = paginateArray(posts,page_size,page_number);

    dataDiv.innerHTML = "";
    // El array con el que vamos a iterar con el forEach es nuestro array ya paginado.
    newPagePosts.forEach(post => {
        dataDiv.innerHTML += `<h1>${post.id}. ${post.title}</h1>
                              <p>${post.body}</p>`
    });
    currentPageLvl.textContent = `${page_number}`
};

function paginateArray(array, page_size, page_number) {
    //https://stackoverflow.com/questions/42761068/paginate-javascript-array
    return array.slice((page_number - 1) * page_size, page_number * page_size);
};

function changePage(event) {
    // Lo mas sencillo para los botones es controlarlos con el target 
    if (event.target.id === "nextButton" && page_number < posts.length / page_size) { // Si el id coincide y el numero de la pagina es menor que el numero total de paginas avanzara.
        page_number++
    }else if (event.target.id === "prevButton" && page_number > 1) { // Si el id coincide y el numero de la pagina es mayor que 1 controlo que no vaya hacia atras en la propia pagina 1.
        page_number--
    };
    createPosts()
};
// Listeners.
nextButton.addEventListener('click',changePage);
prevButton.addEventListener('click',changePage);