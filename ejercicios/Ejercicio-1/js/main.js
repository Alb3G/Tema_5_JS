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


buttonBg.addEventListener('click',() => {
    document.body.classList.toggle('color');
    // if (document.body.style.backgroundColor == 'khaki') {
    //     document.body.style.backgroundColor = 'white';
    // }else{
    //     document.body.style.backgroundColor = 'khaki';
    // }

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
inputButton.addEventListener('click', () => {
    inputPgh.textContent = input.value
    input.value = " ";
});

//4.2 Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación de tecla del usuario.
const keyUpInput = document.getElementById('keyUpInput');
const changePghContent = (event) => inputPgh.textContent = keyUpInput.value;//esta arrow function podriamos ponerla como anonima dentro del addEventListener para simplificar todavia mas.
keyUpInput.addEventListener('input',changePghContent);//Lo teniamos puesto con Keyup pero el evento input para los inputs es lo mejor.

//5.De forma similar al anterior, pero para un textarea y validará si lo introducido es mayor de 15 caracteres.
const textArea = document.getElementById('valueTxtArea');
const textAreaButton = document.getElementsByTagName('button')[2];


textArea.addEventListener("input", event => {
//   if (event.target.value.length > 15) {
//     event.target.style.color = "red";
//   }else {
//     event.target.style.color = "green";
//   }
    event.target.style.color = event.target.value.length > 15 ? 'red' : 'green';
});

//6. Añadir un input de tipo texto con leyenda: “Escribir un número par”. Añadir un botón. Al pulsar el botón
//nos validará si el número es par o no. En caso negativo, cambiar los bordes del input a rojo.
//Para revertir el estado de una propiedad, podemos utilizar el valor “revert” o dejarla vacío.
const squareButton = document.getElementsByTagName('button')[3];
const squareInput = document.getElementById('squareInput')
squareButton.addEventListener('click',() => {
    if (squareInput.value % 2 === 0){
        squareInput.style.border = '2px solid green';
    }else{
        squareInput.style.border = '2px solid red';
    }
});

//7. Partiendo de una lista ul, crear 10 li con un texto indicando el número del elemento (“Elemento X”)
//usando un bucle for.
const ulAptado7 = document.getElementById('ulaptdo7');
for (let i = 1; i <= 10; i++) {
    const newLi = document.createElement('li');
    newLi.textContent = `Elemento ${i}`;
    ulAptado7.appendChild(newLi);
}

//8. Crear un enlace y un botón. Si pulso el enlace se me abre la URL en la misma página. Si pulso primero el
//botón y luego el enlace, se me abre en una nueva pestaña.
const aButton = document.getElementsByTagName('button')[4];
const aFreepik = document.querySelector('#freepik')
aButton.addEventListener('click',() => aFreepik.target = '_blank');//Tambien se puede hacer con el setAttribute pero esta forma es mas simple.

//9. Añadir un párrafo y un select con 5 opciones de colores: negro, blanco, rojo, amarillo, verde y azul. Al
//seleccionar un color del select, cambiar el color del párrafo.
const colorParagraph = document.querySelector('#colorParagraph');
const options = document.querySelectorAll('option');

document.querySelector('select').addEventListener('change',event => {
    colorParagraph.style.color = event.target.value;
})

//10. Incluir un botón que al pulsarlo genere un número aleatorio y mantenga en una lista actualiza el número
//de elementos que se han generado, los que son pares y los que son impares.
const spanList = document.querySelectorAll('span');
const buttonEj10 = document.getElementsByTagName('button')[5];

buttonEj10.onclick = () => {
    const randomNum = Math.floor(Math.random () * 100);
    spanList[0].textContent = randomNum;
    spanList[1].textContent++; // Number(spanList[1].textContent) + 1;
    randomNum % 2 === 0 ? spanList[2].textContent++ : spanList[3].textContent++;
}

//11. Construir una lista que tenga números. Añadir un input donde poder añadir números y un botón. Al pulsar
//el botón, si el número ya existe en la lista, mostrar un mensaje de error, si no existe, lo añadirá al
//principio.
let numbersList = [1,3,5,7,9];
const ej11Input = document.getElementById('checkNumber');
const buttonEj11 = document.getElementsByTagName('button')[6];
const ulNumbers = document.getElementById('numbersUl');

function fillList () {
    ulNumbers.innerHTML = " ";
    for (let number of numbersList) {
        const newLi = document.createElement('li');
        newLi.textContent = number;
        ulNumbers.appendChild(newLi);
    }
}
buttonEj11.addEventListener('click', () => {
    const number = Number(ej11Input.value);
    if (numbersList.includes(number)) {
        alert('El número ya existe');
    } else {
        numbersList.unshift(number);
        fillList();
        console.log(numbersList);
    }
})
fillList();

//12. Crearemos una clase .btn en CSS que le de ciertos estilos a un botón. Al hacer click en el botón haremos
//“toggle” o alternaremos esa clase, es decir, si está presente la quitaremos y si no está, la añadiremos.
document.getElementById('ej12Button').onclick = e => e.target.classList.toggle('btn');
// const ej12Button = document.getElementsByTagName('button')[7];
// ej12Button.addEventListener('click',() => {ej12Button.classList.toggle('btn')});









