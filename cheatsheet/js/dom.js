//---------- DOM / Document Object Model ----------
//---- Basics ----
console.log(document);
console.log(document.domain);
console.log(document.URL);
document.title = "cheatsheet-js-Dom";
console.log(document.title);
//---- Selectors ---- 
const family = document.getElementsByTagName("div");
console.log(family);

// Array.from(family).forEach(item => console.log(item));Construimos un array desde Html Collections
// for (let familyMember of family) {
//     console.log(familyMember);
// }

const grandParent = document.getElementById("grand-parent");//Todos los selectores devuelven el HTML collection excepto el del ID que devuelve el propio elemento.
console.log(grandParent);

const parents = document.getElementsByClassName("parent");
const parent1 = parents [0];
const parent2 = document.getElementsByClassName("parent")[1];
console.log(parent1,parent2);

const children = document.getElementsByClassName("child");
console.log(children);

let element = document.querySelector("#child-4");//"div#grand-parent>.parent>div.child#child-4"
console.log(element);

// parent1.style.backgroundColor = '#ddd';//Si descomentamos esta linea se queda el color gris hardcodeado y no nos lo pinta de rojo con la propiedad .classList.add()

let all = document.querySelector('*');//Estas 2 lineas es lo mismo que poner (document.querySelector('*').style.backgroundColor = "#3333";).
all.style.backgroundColor = "#3333";

//Selectores para saltar de un contenedor a otro.
//-parentNode & children[nodeNumber] & NextElementSibling & previousElementSibling & firstElementCHild & lastElementChild
const changeBackground = (item,color) => item.style.backgroundColor = color;
// function changeBackgroundV2(item,color) { //aparte de harcodear un color podemos pasarle tmbn el color como argumento a una funcion y elegir el que queramos o con un if podemos decirle que si no nos pasan ningun color hardcodearlo nosotros.
//     if (color = color) {
//         item.style.backgroundColor = color;
//     } else {
//         item.style.backgroundColor = '#333';
//     }
// }
//----------- CHANGEBACKGROUNDV2 ----------
// changeBackgroundV2(children[0])
// changeBackgroundV2(children[1],"red")
// changeBackgroundV2(parent2.children[0],'red')
// changeBackgroundV2(parent2.children[1])
//----------- CHANGEBACKGROUND ----------
// changeBackground(children[0],'darkcyan')
// changeBackground(children[1],'darkcyan');
// changeBackground(parent2.children[1],'aquamarine')
// changeBackground(children[0].parentNode.parentNode,'red')
// children[0].parentNode.style.width = '150px'parentNode afecta al padre del contenedor que tenemos seleccionado.
//----- NextElementSibling && previousElementSibling -----
changeBackground(parent1.children[1].previousElementSibling,'cyan')//lo mas normal sera hacer un solo salto entre contenedores, no mas.
//----- firstElementCHild && lastElementChild -----

//---------- Propiedades / Proppertys ----------
// grandParent.innerHTML = "";//esto borraria todo el HTML de dentro de grandParent
// grandParent.innerHTML = "<h1 style = 'color:white' >Hello World</h1>"

// children[0].innerHTML = 'child 1 vs 2';
console.log(children[0].innerHTML);//El .innerHtml imprime las etiquetas.
console.log(children[0].textContent);// & el .textContent las ignora.

console.log("ClassList: ",parent1.classList);
//----- .classList.remove -----
parent1.classList.remove('bg-dark')
console.log("ClassList removed: ",parent1.classList);
//----- .classList.add -----
parent1.classList.add("bg-red");
console.log("ClassList added: ",parent1.classList);
//----- .classList.toggle -----
parent1.classList.toggle('bg-red')//Alterna la clase, quiere decir que si el elemento tiene la clase la va a eliminar y si el elemento no tiene dicha clase la añadira.

parent1.setAttribute('name','name-del-parent-1')//Añadimos un atributo al elemento.
console.log(parent1);
console.clear();
//----- Crear elementos en el DOM -----
let myDiv = document.createElement('div');//Creamos un elemento div.
myDiv.id = 'new-div';//Le añadimos un id.
myDiv.classList.add('child');//Le añadimos una clase.
myDiv.textContent = 'child-2.5';//Le añadimos un texto.
parent1.appendChild(myDiv);//Añadimos el elemento al DOM.
//parent2.appendChild(myDiv);No lo añade al DOM, lo que hace es moverlo de sitio. / No podemos tener 2 nodos iguales en sitios diferentes.

let myDiv2 = myDiv.cloneNode(true);//Creamos un clon del elemento / true para que incluya el texto o todo el contenido.
parent2.appendChild(myDiv2);//Añadimos el clon al DOM.
myDiv2.textContent = 'child-5';//Añadimos el texto al clon.

myDiv.remove();//Eliminamos el elemento del DOM.

let myDiv3 = myDiv.cloneNode(false);
myDiv3.textContent = 'Before';
parent2.before(myDiv3);//Añadimos el clon al DOM antes del parent2.
parent2.after(myDiv.cloneNode(false));//Añadimos el clon al DOM despues del parent2.

function createNode (tag, id) {
    let node = document.createElement(tag);//Si aqui le escribo la etiqueta 'div' en vez de tag estaría hardcodeando la etiqueta y no podria reutilizar la funcion.
    node.id = id;
    return node;
}

let Node = createNode('div','new-div');
let Table = createNode('table','new-table');


Node.textContent = 'Node';
Node.classList.add('child');

parent1.appendChild(Node);
parent2.appendChild(Table);

let link = createNode('a','new-link');
link.textContent = 'Texto del link';
grandParent.appendChild(link);
link.setAttribute('href','https://www.google.com');

//----- Eventos -----
const colorButton = document.getElementsByTagName('button')[0];
colorButton.addEventListener("click",function (event){
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.tagName);
    
    if (event.ctrlKey) {
        document.body.classList.toggle('bg-red');
    }

    console.log(`X:, ${event.clientX} | Y: ${event.clientY}`);
    console.log(`Crtl: ${event.ctrlKey} | Shift: ${event.shiftKey} | Alt: ${event.altKey}`);
})

const emailInput = document.querySelector('#useremail');
emailInput.addEventListener('focus', inputListener);//Muchos eventos tienen un evento inverso, por ejemplo el focus tiene un blur
emailInput.addEventListener('blur', inputListener);//El blur se ejecuta cuando el input pierde el focus y se suele utilizar para validar el input en los formularios como cuando se pone en rojo.

function inputListener (event) {//No esta muy aconsejado modificar el css asi lo suyo es crear o eliminar las clases a los elementos.
    // if (event.target.tagName == 'DIV') { Recordar bien el uso de event.target para saber que elemento esta disparando el evento.
    //     console.log(event.target);
    //     console.log('Tipo de evento: ',event.type);
    // }

    if (event.type == 'focus') {
        event.target.style.border = '1px solid green';
    } else if (event.type == 'blur') {
        event.target.style.border = '1px solid red';
    }
}

// const divButton = document.getElementsByClassName('container')[0];
const divButton = document.getElementById('container');

divButton.addEventListener('mouseover', inputListener);
divButton.addEventListener('mouseout', inputListener);
