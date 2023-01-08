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

parent1.style.backgroundColor = '#ddd';

let all = document.querySelector('*');//Estas 2 lineas es lo mismo que poner (document.querySelector('*').style.backgroundColor = "#3333";).
all.style.backgroundColor = "#3333";

//Selectores para saltar de un contenedor a otro.
const changeBackground = (item) => item.style.backgroundColor = '#333';
children[0].parentNode.style.width = '150px'//parentNode afecta al padre del contenedor que tenemos seleccionado.
changeBackground(children[1]);