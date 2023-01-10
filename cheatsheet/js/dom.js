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
changeBackground(parent1.children[1].previousElementSibling,'cyan')

// children[0].parentNode.style.width = '150px'parentNode afecta al padre del contenedor que tenemos seleccionado.

