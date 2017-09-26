const express = require('express');
const bodyParser = require('body-parser');

const Jouet = require('./jouet.js');
const TrancheAge = require('./trancheAge');
const Categorie = require('./categorie');

//données
const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies;

let lesTranches=[];
let tranche02 =  new TrancheAge(1,"tranche02",0,2);
lesTranches.push(tranche02);
let tranche25 =  new TrancheAge(2,"tranche25",2,5);
lesTranches.push(tranche25);
let tranche48 =  new TrancheAge(3,"tranche48",4,8);
lesTranches.push(tranche48);

let lesCateg =[];
let categorie1 = new Categorie(1,"Plein Air");
lesCateg.push(categorie1);
let categorie2 = new Categorie(2,"Jeux d'imagination");
lesCateg.push(categorie2);
let categorie3 = new Categorie(3,"Jeux d'eveil");
lesCateg.push(categorie3);

let lesJouets = [];
let unJouet1 = new Jouet(1,"Draisienne junior bleue",tranche25,categorie1);
lesJouets.push(unJouet1);

let unJouet2 = new Jouet(2,"Trottinette 2 en space Blanche", tranche48, categorie1);
lesJouets.push(unJouet2);

let unJouet3 = new Jouet(3,"Atelier de bricolage Tap tap Céhicules", tranche48, categorie2);
lesJouets.push(unJouet3);

//Routes
app.get('/', function(req,res){
    let responseText = 'Bienvenue dans le catalogue de jouet';
    res.send(responseText);
});

//Affiche tous les jouets

app.get('/jouets',
    (req,res)=>{
        let responseText ='Voici la liste des jouets <br />';
        lesJouets.forEach(
            (unJouet)=>{responseText += `Jouet : ${unJouet.libelle} <br />`;}
        );
        responseText += '<hr>';
        responseText += 'Ajout d\'un nouveau jouet </br>';
        responseText += '<form action="/jouets" method="post">';
        responseText += 'Libelle :<br>';
        responseText += '<input type="text" name="libelle" value=""><br>';
        responseText += 'Categorie :<br>';
        responseText += '<select>';
        responseText += '<select name="categ">';
        responseText += `<option value="1"> ${categorie1.libelle}</option>`;
        responseText += `<option value="2"> ${categorie2.libelle}</option>`;
        responseText += `<option value="3"> ${categorie3.libelle}</option>`;
        responseText +='</select><br>';
        responseText += 'Tranche d\'âge :<br>';
        responseText += '<select name ="tranche">';
        responseText += `<option value="1"> ${tranche02.toString()}</option>`;
        responseText += `<option value="2"> ${tranche25.toString()}</option>`;
        responseText += `<option value="3"> ${tranche48.toString()}</option>`;
        responseText +='</select><br>';
        responseText += '<input type="submit" value="Envoyer">';
        responseText += '</form>';
        res.send(responseText);
    });

app.get('/jouets/:id',
    (req, res)=>{
        let id =req.params.id;
        if(id < lesJouets.length+1){
            let responseText = `Jouet : ${lesJouets[id-1].libelle}`;
            res.send(responseText);
        }
        else
        {
            res.status(404).send('Sorry ! Toy doesn\'t exist');
        }
    });

//Ajoute un jouet
    app.post('/jouets', (req, res) => {
          let jouetLib = req.body.libelle;
          let categ  = req.body.categ;
          let trancheA = req.body.tranche;

              lesJouets.push(new Jouet(lesJouets.length+1,jouetLib,lesTranches[trancheA-1],lesCateg[categ-1]));
          console.log("Jouet ajouté");
          res.redirect('/jouets');


                });



//Demarrage du serveur

try{
    app.listen(8081,'127.0.0.1', ()=>{
        console.log("Serveur demarré");
    });

}catch (err){
    console.error('Erreur de démarrage du serveur !',err)
}