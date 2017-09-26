class Categorie{
    constructor(unId,unLibelle){
        this._id = unId;
        this._libelle = unLibelle;
        this._lesJouets = [];
    }
    get libelle(){
        return this._libelle;
    }
    ajouterJouet(unJouet){
        this._lesJouets.push(unJouet);
    }
    afficherJouets(display){
        this._lesJouets.forEach(function(unJouet){
            display(unJouet.libelle);
        });
    }
    get_nb_jouets(){
        return this._lesJouets.length;
    }

}
module.exports = Categorie;