//Partimos de un div vacio y le añadimos 2 elementos p con texto lorem dentro
const mainDiv = document.querySelector('#container')
let paragraph = document.createElement('p');
paragraph.id = 'p-1';
paragraph.textContent = 'lorem ipsum dolor sit amet'

let paragraph2 = document.createElement('p');
paragraph2.id = 'p-2';
paragraph2.textContent = 'lorem ipsum dolor sit amet'

mainDiv.appendChild(paragraph);
mainDiv.appendChild(paragraph2);

//Al pulsar un botón, cambiar el color del fondo del cuerpo de HTML.
let buttonBg = document.getElementsByTagName('button')[0];
buttonBg.addEventListener('click', function (event) {
   
})







