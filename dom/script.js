/* obtener un elemento/nodo del DOM */

const element = document.getElementsByTagName("h1");
console.log(element[0]);

const elementID = document.getElementById('noticia1');
console.log(elementID);

const elementClass = document.getElementsByClassName('titulo');
console.log(elementClass[0]);


/*query selector*/
const h1 = document.querySelector('h1');
console.log(h1);

const h1ByClass = document.querySelector('titulo');

h1.textContent = "cambiado desde  js";