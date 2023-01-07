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

const grandParent = document.getElementById("grand-parent");
console.log(grandParent);

const parents = document.getElementsByClassName("parent");
const parent1 = parents [0];
const parent2 = parents [1];
console.log(parent1,parent2);