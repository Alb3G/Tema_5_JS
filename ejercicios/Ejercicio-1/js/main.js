//1.Partimos de un div vacio y le añadimos 2 elementos p con texto lorem dentro
const mainDiv = document.querySelector('#container')

let paragraph = document.createElement('p');
paragraph.id = 'p-1';
paragraph.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum fugit obcae'

let paragraph2 = document.createElement('p');
paragraph2.id = 'p-2';
paragraph2.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum fugit obcae'

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
const listItems = document.getElementsByTagName('li');
let imgContainer = document.getElementsByTagName('img')[0];
const changeImage = event => imgContainer.src = event.target.textContent;
//Opcion que simplificaria / no estarian harcodeados los enlaces crear una funcion const changeImage = (event) => image.src = event.target.textContent;y ya solo habria que llamar al evento click con esta funcion.
listItems[0].addEventListener('click',changeImage)
listItems[1].addEventListener('click',changeImage)
listItems[2].addEventListener('click',changeImage)
//tambien podriamos seleccionar 
//4.Añadir un input de tipo texto y un botón. Al pulsar el botón debe escribirse el texto del input en un párrafo.
const input = document.getElementById('submitInput');
const inputButton = document.getElementsByTagName('button')[1];
const inputPgh = document.getElementById('inputParagraph');
inputButton.addEventListener('click', function (event) {
    if (inputButton === event.target) {
        inputPgh.textContent = input.value 
    }
})
//4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación de tecla del usuario.
const keyUpInput = document.getElementById('keyUpInput');
const changePghContent = (event) => inputPgh.textContent = keyUpInput.value;
keyUpInput.addEventListener('keyup',changePghContent);

//5.De forma similar al anterior, pero para un textarea y validará si lo introducido es mayor de 15 caracteres.
const textArea = document.getElementById('valueTxtArea');
const textAreaButton = document.getElementsByTagName('button')[2];
const maxLength = 15;

textAreaButton.addEventListener("click", function() {
  if (textArea.value.length > maxLength) {
    alert("El máximo de caracteres permitidos es " + maxLength);
    textArea.value = textArea.value.substring(0, maxLength);
  }else {
    alert('Mensaje enviado con Exito')
  }
});

//6. Añadir un input de tipo texto con leyenda: “Escribir un número par”. Añadir un botón. Al pulsar el botón
//nos validará si el número es par o no. En caso negativo, cambiar los bordes del input a rojo.
//Para revertir el estado de una propiedad, podemos utilizar el valor “revert” o dejarla vacío.
const squareButton = document.getElementsByTagName('button')[3];
const squareInput = document.getElementById('squareInput')
// const squareValidation = event =>  squareInput.value % 2 === 0 ? alert('el numero es par') : alert('el numero no es par')
function squareValidation (event) {
    if (squareInput.value % 2 !== 0) {
        squareInput.style.border = '1px solid red';
    }
};
squareButton.addEventListener('click',squareValidation);
