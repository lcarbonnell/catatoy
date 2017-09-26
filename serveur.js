const express = require('express');
const app = express();
const Jouet = require('./jouet.js');
const TrancheAge = require ('./trancheAge.js');
const Categorie = require ('./categorie.js');

//DONEES
let tranche02 = new TrancheAge("tranche02",0,2);
let tranche25 = new TrancheAge("tranche25",2,5);
let tranche48 = new TrancheAge("tranche48",4,8);

let categorie1 = new Categorie("Plein Air");
let categorie2 = new Categorie("Jeux D'imagination");
let categorie3 = new Categorie("Jeux D'éveil");

let lesJouets = [];
let unJouet1 = new Jouet(1,"Draisienne junior bleue",tranche25,categorie1);
lesJouets.push(unJouet1);

let unJouet2 = new Jouet(2,"trottinette  ... ",tranche48,categorie1);
lesJouets.push(unJouet2);

let unJouet3 = new Jouet(3,"Atelier de bricolage Tap Tap véhicule",tranche48,categorie2);
lesJouets.push(unJouet3);

//ROUTES
app.get('/',function(req,res) {
    let ResponseText = 'Bienvenue dans le catalogue de jouets'
    res.send(ResponseText);
});
app.get('/jouets',
    (req,res) =>  {
        let responseText = 'Voici la liste des jouets </br>';
        lesJouets.forEach(
            (unJouet) => {responseText += `Jouet : ${unJouet.libelle}  </br>`;}
        );
        res.send(responseText);
    }
);

//Affiche le jouet d'id :id
    app.get('/jouets/:id',
            (req, res) => {

            let id=req.params.id;

                if (id < lesJouets.length+1){
                    let responseText = `Jouet : ${lesJouets[id-1].libelle}`;
                    res.send(responseText);
                }
            else
            {
                res.status(404).send('Sorry ! Toy doesn\'t exist');
            }
    });



//Demerrage du serveur

try {
    app.listen(8081, "127.0.0.1", () => {
        console.log("Serveur Démarré");
    });

}catch(err){
    console.error('Erreur de demarrage du serveur !',err);
    }
