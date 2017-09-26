const Jouet =require('./Jouet.js');
const TrancheAge = require('./trancheAge.js');

console.log('bienvenue dans le catalogue de jouet');

let tranche25 = new TrancheAge("tranche",2,5);
console.log(tranche25.toString());

let unJouet = new Jouet("draisienne junior bleu",tranche25);
console.log(unJouet.trancheAge);