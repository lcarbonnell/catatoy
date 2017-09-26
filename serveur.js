const Jouet =require('./Jouet.js');
const TrancheAge = require('./trancheAge.js');
const Categorie = require('./categorie');

console.log('bienvenue dans le catalogue de jouet');

let tranche25 = new TrancheAge("tranche",2,5);
console.log(tranche25.toString());

let categorie1 = new Categorie("Plein Air");
console.log(categorie1.libelle);

let unJouet = new Jouet("draisienne junior bleu",tranche25);
console.log(unJouet.trancheAge);