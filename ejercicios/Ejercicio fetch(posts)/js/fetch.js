const URL = "https://jsonplaceholder.typicode.com/posts";
const body = document.getElementsByTagName('body')[0];
function createPosts (array) {
    array.slice(1,20).forEach(user => {
        body.innerHTML += `<h1>${user.title}</h1>
                           <p>${user.body}</p>`
    });
};

async function requestURL (URL) {
    const response = await fetch(URL);
    const data = await response.json();
    createPosts(data);
};

requestURL(URL);
