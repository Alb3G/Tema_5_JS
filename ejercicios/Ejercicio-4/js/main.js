// Constructor del Obj Book
function book (id, title, author, sales, price) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price;
};
// Array of 10 books
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
// Select the Dom elements.
const booksTable = document.querySelector('#tbody');
// Function to create the content of the table.
function fillTable () {
    booksTable.innerHTML = " ";//Nos vacia la lista cada vez que seleccionamos un usuario.
    books.forEach(book => {
        booksTable.innerHTML += `<tr>
                                    <td>${book.id}</td>
                                    <td>${book.title}</td>
                                    <td>${book.author}</td>
                                    <td>${book.sales}</td>
                                    <td>${book.price}</td>
                                    <td>
                                        <button type="button" class="btn btn-danger" id="${book.id}">Remove</button>
                                    </td>
                                </tr>`
                                const removeBtn = document.getElementById(book.id);
                                removeBtn.addEventListener('click', (event) => {
                                   books = books.filter(book => book.id !== event.target.id);
                                });
    }); 
};
fillTable();
