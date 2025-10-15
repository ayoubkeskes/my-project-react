//** exercice 1 */
let age = 25;
let name = "Alice";
let isStudent = true ;
console.log("age = ", age);
console.log("Name = ", name);
console.log("Is a student ? : ", isStudent );


//** exercice 2 */

let x = 5;
let y = 10;
console.log("x + y =", x+y)
console.log("x - y =  ", x-y)
console.log("x * y = ", x*y)
console.log("x / y = ", x/y)
console.log("x == y : ", x==y)
console.log("x === y : ", x===y)
console.log("x < y : ", x<y)
console.log("x > y : ", x>y)
console.log("x <= y : ", x<=y)

//** exercice 3 */
if (age>=18){
    console.log("Majeur")
}else{console.log("Mineur")}

for (let index = 1; index < 11; index++) {
    console.log(index);
    
}
let tab= ["orange", "banane", "orange"];
let  i =0;
while (i <tab.length) {
    console.log (tab[i]);
    i++;
}

//**exercice 4  */
function addition(a, b) {
    return a+b;
}
console.log(addition(10,5));

const multiply = (a, b) => a*b;

//**partie 2 manipulation de dom */
//**exercice 1 */
const maDiv = document.querySelector('#maDiv');
const monBouton = document.querySelector('#monBouton');
maDiv.innerText = 'Nouveau texte';

const nouveauPara = document.createElement('p');
nouveauPara.textContent = ' nouveau paragraphe par javascript';


maDiv.appendChild(nouveauPara);

const bouton = document.createElement('button');
bouton.textContent = 'Clique pour un message';

document.body.appendChild(bouton);

bouton.addEventListener('click', function() {
  console.log('Bonjour depuis le bouton ajouté ');
});



// Exercice 3 
const boutonStyle = document.createElement('button');
boutonStyle.textContent = 'Changer la couleur de la div';
document.body.appendChild(boutonStyle);

boutonStyle.addEventListener('click', function() {
  maDiv.style.backgroundColor = 'lightblue';
  maDiv.style.fontSize = '20px';
  maDiv.style.padding = '10px';
});


//  Exercice 4 


monBouton.addEventListener('click', function() {
  maDiv.innerText = 'Le texte a changé !';
});