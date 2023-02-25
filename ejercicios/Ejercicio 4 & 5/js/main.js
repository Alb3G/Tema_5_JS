class book {
    constructor(id, title, author, sales, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.sales = sales;
        this.price = price;
    }
};
//
let books = [
    new book (1,'Cien años de Soledad','Gabriel Garcia Marquez',740120,20),
    new book (2,'Orgullo y Prejuicio','Jane Austen',678234,15),
    new book (3,'1984','George Orwel',239876,19.99),
    new book (4,'Odisea','Homero',851257,35),
    new book (5,'Lolita','Vladimir Nabokov',134589,9.99),
    new book (6,'Cumbres Borrascosas','Emily Bronte',256435,20),
    new book (7,'Moby-Dick','Herman Melville',871312,18),
    new book (8,'Las mil y una Noches','Mario Vargas Llosa',543879,25),
    new book (9,'Guerra & Paz','Leon Tolstoi',712532,39.99),
    new book (10,'Grandes Esperanzas','Charles Dickens',913456,29.95),
];
let displayedBooks = [...books];
let ascendingOrder = true;
//
const booksTableData = document.querySelector('#booksTbody');
const tfoot = document.getElementsByTagName('tfoot')[0];
const priceHeader = document.querySelector('#priceHeader');
const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const salesInput = document.querySelector('#salesInput');
const priceInput = document.querySelector('#priceInput');
const submitButton = document.querySelector('#submitButton');
const bookForm = document.querySelector('#form');
const filterInput = document.querySelector('#filterInput');
//
function updateTable () {
    booksTableData.innerHTML = " ";
    displayedBooks.forEach(book => {
        booksTableData.innerHTML += `<tr>
                                        <td>${book.id}</td>
                                        <td>${book.title}</td>
                                        <td>${book.author}</td>
                                        <td>${book.sales} $</td>
                                        <td>${book.price} $</td>
                                        <td>
                                            <button type="button" class="btn btn-danger" id="${book.id}">Remove</button>
                                        </td>
                                    </tr>`
    });

    updateTotalPrice();
};
function updateTotalPrice () {
    const totalPrice = displayedBooks.reduce((priceSum,book) => priceSum + book.price,0);
    tfoot.textContent = `Total Price: ${totalPrice.toFixed(2)}$`;
};
function removeBook (e) {
    if(e.target.tagName === "BUTTON") {
        books = books.filter(book => book.id != e.target.id);
        displayedBooks = displayedBooks.filter(book => book.id != e.target.id);
        updateTable();
    }
};
function addNewBook (event) {
    event.preventDefault();
    newId = books[books.length - 1].id + 1;
    books.push(new book(newId,titleInput.value,authorInput.value,salesInput.value,priceInput.value));
    displayedBooks.push(new book(newId,titleInput.value,authorInput.value,salesInput.value,priceInput.value));
    updateTable();
    bookForm.reset();
};
function filterTable (e) {
    displayedBooks = books.filter(book => {
        const lowerTitle = book.title.toLowerCase();
        const lowerInputValue = e.target.value.toLowerCase();

        return lowerTitle.includes(lowerInputValue);
    });
    updateTable();
};

function orderTableByPrice () {
    ascendingOrder = !ascendingOrder;
    displayedBooks.sort((book1,book2) => {
        return ascendingOrder ? book1.price - book2.price : book2.price - book1.price
    });
    document.querySelector("span").innerHTML = ascendingOrder ? "&uarr;" : "&darr;"
    updateTable();
};
//
booksTableData.addEventListener('click',removeBook);
submitButton.addEventListener('click',addNewBook);
filterInput.addEventListener('input',filterTable);
priceHeader.addEventListener("click", orderTableByPrice);
//
updateTable();
