const p= document.createElement('p');
p.style.color='red'; 
const h3= document.createElement('h3');
h3.style.color='blue';
const div= document.createElement('div');
div.style.cssText= "background-color: pink; border:solid 2px black;";
const p1= document.createElement('p');
p.textContent= "Hey, I'm Red!";
h3.textContent="I'm a blue h3!";

const h1= document.createElement('h1');
h1.textContent="I'm in a div";
p1.textContent="ME TOO";

div.appendChild(h1); div.appendChild(p1);
const container= document.querySelector('body');
container.append(...[p, h3, div]);