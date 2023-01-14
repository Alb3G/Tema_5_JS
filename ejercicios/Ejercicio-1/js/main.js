//1.Partimos de un div vacio y le añadimos 2 elementos p con texto lorem dentro
const mainDiv = document.querySelector('#container')

let paragraph = document.createElement('p');
paragraph.id = 'p-1';
paragraph.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum fugit obcae'

let paragraph2 = document.createElement('p');
paragraph2.id = 'p-2';
paragraph2.textContent = 'lorem ipsum dolor sit amet'

mainDiv.append(paragraph, paragraph2);


//2.Al pulsar un botón, cambiar el color del fondo del cuerpo de HTML.
const buttonBg = document.getElementsByTagName('button')[0];

buttonBg.addEventListener('click', function () {
//    document.body.classList.toggle('color') no me funciona
    if (document.body.style.backgroundColor == 'khaki') {
        document.body.style.backgroundColor = 'white';
    }else{
        document.body.style.backgroundColor = 'khaki';
    }

});

//3.Partimos de un HTML con una lista de 3 URLs (texto) de imágenes y un element img. Al hacer click en cada URL, cambiará la imagen a la que contenga dicha URL.
let span1 = document.getElementsByTagName('span')[0];
let span2 = document.getElementsByTagName('span')[1];//Estos 3 podriamos tambien seleccionarlos simplemente con un listItems = getElementsByTagName('li');
let span3 = document.getElementsByTagName('span')[2];
let imgContainer = document.getElementsByTagName('img')[0];
//Opcion que simplificaria / no estarian harcodeados los enlaces crear una funcion const changeImage = (event) => image.src = event.target.textContent;y ya solo habria que llamar al evento click con esta funcion.
span1.addEventListener('click',function (event){
    if (event.target == span1) {
        imgContainer.setAttribute('src', 'img/img-ej-js-1.3.jpg')
    }else{}
})

span2.addEventListener('click',function (event){
    if (event.target == span2) {
        imgContainer.setAttribute('src', 'img/img-ej-js-1.1.jpg')
    }
})

span3.addEventListener('click',function (event){
    if (event.target == span3) {
        imgContainer.setAttribute('src', 'img/img-ej-js-1.2.jpg')
    }
})

//4.Añadir un input de tipo texto y un botón. Al pulsar el botón debe escribirse el texto del input en un párrafo.
const input = document.getElementById('submitInput');
const inputButton = document.getElementsByTagName('button')[1];
const inputPgh = document.getElementById('inputParagraph');
inputButton.addEventListener('click', function (event) {
    if (inputButton == event.target) {
        inputPgh.textContent = input.value 
    }
})
//4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación de tecla del usuario.
const keyUpInput = document.getElementById('keyUpInput');
const changePghContent = (event) => inputPgh.textContent = keyUpInput.value;
keyUpInput.addEventListener('keyup',changePghContent);

//5.De forma similar al anterior, pero para un textarea y validará si lo introducido es mayor de 15 caracteres.
const textArea = document.getElementsByTagName('textarea')[0];
const textAreaButton = document.getElementsByTagName('button')[2];

textAreaButton.addEventListener('click', function (event) {
    if (textAreaButton == event.target || textArea.value == 15) {
        alert('Mensaje enviado con Éxito')
    } else {alert('Mensaje no enviado ')}
})



