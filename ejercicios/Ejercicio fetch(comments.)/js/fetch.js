const URL = "https://jsonplaceholder.typicode.com/comments";
const commentList = document.querySelector('#commentList');

function fillList (array) {
    array.slice(0,20).forEach(user => {
        commentList.innerHTML += `<li>${user.name}</li>`;
    });
};
async function userEmailList (URL) {
    const response = await fetch(URL);
    const dataArr = await response.json();
    fillList(dataArr);
};

userEmailList(URL);