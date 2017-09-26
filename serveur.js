const Jouet =require('./Jouet.js');
const TrancheAge = require('./trancheAge.js');

console.log('bienvenue dans le catalogue de jouet');

let unJouet = new Jouet("draisienne junior bleu");
console.log(unJouet.libelle);

let tranche25 = new TrancheAge("tranche",2,5);
console.log(tranche25.toString());