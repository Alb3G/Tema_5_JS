// Esta parte es para traerme la info de los posts y los selectores.
const URL = "https://jsonplaceholder.typicode.com/posts";
const dataDiv = document.querySelector('#data');
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');
const page = document.querySelector('#page');
// variables 
let pageNumber = 1;
let postPerPage = 20;
// Functions.
async function requestURL (URL) {
    const response = await fetch(URL);
    const data = await response.json();
    createPosts(data);
    console.log(data);
    
    nextButton.addEventListener('click', () => {
        data.forEach(user => {
            pageNumber++;
            page.innerHTML = pageNumber;
            createPosts(paginateArray(data, pageNumber, postPerPage));
        });
    });
};
requestURL(URL);

function createPosts (array) {
    array.slice(1,20).forEach(user => {
        dataDiv.innerHTML += `<h1>${user.title}</h1>
                              <p>${user.body}</p>`
    });
};

function paginateArray(array, pageNumber, pageSize)  {
    const page = array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    return page;
};






// seleccion de los botones.
