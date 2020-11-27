const dej = ['Curry aux légumes', 'Lentilles bolognaises', 'Tarte aux poireaux', 'Pâté de pommes de terre', 'Lasagnes'];

let btnDej = document.getElementById('btnDej');
btnDej.addEventListener('click', ()=>{
    let nomDej = document.getElementById('nomDej');
    nomDej.innerHTML = '';
    const randomChoice = Math.floor(Math.random()*dej.length);
    let mealChoice = dej[randomChoice];
    nomDej.textContent = mealChoice;
})