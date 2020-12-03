const dej = ['Curry aux légumes', 'Lentilles bolognaises', 'Tarte aux poireaux', 'Pâté de pommes de terre', 'Lasagnes'];
const diner = ['Légumes au four', 'Poêlée de poireaux', 'Velouté de potimaron'];
const dessert = ['Gâteau au chocolat', 'Gâteau yaourt', 'Mousse', 'Syrniki', 'Cookies', 'Charlotte aux pommes'];

let btnDej = document.getElementById('btnDej');
btnDej.addEventListener('click', ()=>{
    let nomDej = document.getElementById('nomDej');
    nomDej.innerHTML = '';
    const randomChoice = Math.floor(Math.random()*dej.length);
    let mealChoice = dej[randomChoice];
    nomDej.textContent = mealChoice;
})