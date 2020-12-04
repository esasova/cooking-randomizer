//liste des plats possibles
const dej = ['Curry aux légumes', 'Lentilles bolognaises', 'Tarte aux poireaux', 'Pâté de pommes de terre', 'Lasagnes'];
const diner = ['Légumes au four', 'Poêlée de poireaux', 'Velouté de potimaron'];
const dessert = ['Gâteau au chocolat', 'Gâteau yaourt', 'Mousse', 'Syrniki', 'Cookies', 'Charlotte aux pommes'];

// récupération des boutons
const btnDej = document.getElementById('btnDej');
const btnDin = document.getElementById('btnDin');
const btnDes = document.getElementById('btnDes');

//récupération des éléménts HTML pour afficher le résultat
const dejResult = document.getElementById('nomDej');
const dinResult = document.getElementById('nomDin');
const desResult = document.getElementById('nomDes');

//fonction générique qui choisit un plat aléatoire et l'affiche sur la page
function choisir(repas, showResult) {
    const randomChoice = Math.floor(Math.random() * repas.length);
    showResult.innerHTML = '';
    let mealChoice = repas[randomChoice];
    console.log(mealChoice)
    //showResult.textContent = mealChoice;
}

choisir(dej, dejResult);