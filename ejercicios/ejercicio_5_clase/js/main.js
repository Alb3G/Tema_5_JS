// Constructors
class Book {
    constructor(id, title, author, sales, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.sales = sales;
        this.price = price;
    }
}

// Data initialization
let books = [
    new Book(1, "The Selfish Gene", "Richard Dawkins", 740120, 5),
    new Book(2, "The God Delusion", "Richard Dawkins", 610120, 7),
    new Book(3, "La nueva mente del emperador", "Roger Penrose", 120000, 17),
    new Book(4, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 9),
    new Book(5, "The Selfish Gene", "Richard Dawkins", 740120, 12),
    new Book(6, "The God Delusion", "Richard Dawkins", 610120, 20),
    new Book(7, "La nueva mente del emperador", "Roger Penrose", 120000, 30),
    new Book(8, "Sapiens: A Brief History of Humankind", " Yuval Noah Harari", 910120, 16),
    new Book(9, "The Selfish Gene", "Richard Dawkins", 740120, 13),
    new Book(10, "The God Delusion", "Richard Dawkins", 610120, 15),
];

let displayedBooks = [...books]; // Para copiar objetos y arrays usaremos el spread operator (...)
let ascendingOrder = true;

// Selectors
const tbody = document.getElementById("books-body");
const tfoot = document.querySelector("tfoot");
const priceHeader = document.querySelector("#priceHeader");

const filterInput = document.querySelector("#filterInput");

const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");
const salesInput = document.getElementById("salesInput");
const priceInput = document.getElementById("priceInput");
const addBookButton = document.getElementById("addBookButton");

// Functions
function updateTotalPrice() {
    const totalPrice = displayedBooks.reduce((priceSum, book) => priceSum + book.price, 0);
    tfoot.textContent = `Precio total ${totalPrice}`;
}

function updateTable() {
    tbody.innerHTML = "";
    
    displayedBooks.forEach(book => {
        tbody.innerHTML += `
            <tr>
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.sales}</td>
                <td>${book.price}</td>
                <td>
                    <button class="btn btn-danger" id="${book.id}">Remove</button>
                </td>
            </tr>`;
    });

    updateTotalPrice();
}

function removeBook(e) {
    if(e.target.tagName === "BUTTON") {
        books = books.filter(book => book.id != e.target.id);
        displayedBooks = displayedBooks.filter(book => book.id != e.target.id);
        updateTable();
    }
}

function addNewBook(e) {
    e.preventDefault();
    
    const newID = books[books.length-1].id + 1;
    const newBook = new Book(newID,
                             titleInput.value,
                             authorInput.value,
                             salesInput.value,
                             Number(priceInput.value));
    
    books.push(newBook);
    displayedBooks.push(newBook);

    updateTable();
    
    addBookButton.parentNode.reset();
}

function filterTable(e) {
    // Opción 1 teniendo en cuenta las mayúsculas (case sensitive)
    displayedBooks = books.filter(book => book.title.includes(e.target.value));
    // Para tener en cuenta otro campo, incluimos en la condición lo siguiente:
    //  || book.author.includes(e.target.value)

    // Opción 2 - Sin tener en cuenta las mayúsculas
    displayedBooks = books.filter(book => {
        const upperTitle = book.title.toUpperCase();
        const upperInputValue = e.target.value.toUpperCase();

        return upperTitle.includes(upperInputValue);
    });

    updateTable();
}

function orderTableByPrice() {
    ascendingOrder = !ascendingOrder;

    displayedBooks.sort((book1, book2) => {
        return ascendingOrder ? book1.price - book2.price : book2.price - book1.price
    });

    document.querySelector("span").innerHTML = ascendingOrder ? "&uarr;" : "&darr;"

    updateTable();
};

// Listeners
tbody.addEventListener("click", removeBook);
addBookButton.addEventListener("click", addNewBook);
filterInput.addEventListener("input", filterTable);
priceHeader.addEventListener("click", orderTableByPrice);

// To set initial state on first load
updateTable();