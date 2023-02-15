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
// Seleccionamos todos los elementos del Form.
const titleInput = document.querySelector('#titleInput');
const authorInput = document.querySelector('#authorInput');
const salesInput = document.querySelector('#salesInput');
const priceInput = document.querySelector('#priceInput');
const submitButton = document.querySelector('#submitButton');
const form = document.querySelector('#form');
// Es mas sencilla la forma de 'hardCodear' las propiedades con el InnerHtml.
function fillTable () {
    booksTable.innerHTML = "";//Vaciamos toda la tabla para actualizarla con el contenido nuevo.
    books.forEach(book => {//Usamos un forEach para iterar sobre todos los libros del array.
        // Creamos la Tr
        const newTr = document.createElement('tr');
        // Creamos las Tds con las propiedades del constructor.
        for (let property in book) {
            const newTd = document.createElement('td');
            newTd.textContent = book[property];
            newTr.appendChild(newTd);
        };
        // Creamos otra td para meter el boton cuando lo creemos y anexar esta td a la Tr.
        const buttonTd = document.createElement('td');
        // Creamos el boton con las propiedades de Bootstrap para darle forma.
        const removeButton = document.createElement('button');
        removeButton.classList.add('btn','btn-danger','mb-2');
        // Le damos el id de cada libro a cada boton para simplificar su eliminacion despues.
        removeButton.id = book.id;
        removeButton.textContent = 'Remove';
        // Evento click que nos devolvera un array nuevo sin el libro que hayamos eliminado por la condicion del filter.
        removeButton.addEventListener('click', event => {
            books = books.filter(book => book.id != event.target.id);
            fillTable();
        });
        buttonTd.appendChild(removeButton);
        newTr.appendChild(buttonTd);
        booksTable.appendChild(newTr); 
    });
};
// Llamamos a la funcion para ejecutarla.
fillTable();
// Evento click que nos creara un nuevo libro con los datos del formulario y lo añadira al array de libros.
submitButton.addEventListener('click', event => {
    event.preventDefault();//preventDefault evita todos los comportamientos por defecto de los elementos del DOM.
    newId = books[books.length - 1].id + 1;//Creamos un nuevo id para el nuevo libro que sera el id del ultimo libro + 1.
    // Añadimos el nuevo libro al array de libros.
    books.push(new book (newId, titleInput.value, authorInput.value, salesInput.value, priceInput.value));
    // Llamamos a la funcion para actualizar la tabla con el nuevo libro.
    fillTable();
    // Vaciamos los inputs del formulario.
    form.reset();
});
