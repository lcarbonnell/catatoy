class Jouet{
    constructor(unLibelle,uneTrancheAge,uneCategorie){
        this._libelle = unLibelle;
        this._trancheAge = uneTrancheAge;
        this._categorie = uneCategorie;
        this._categorie.ajouterJouet(this);
    }

    get libelle(){
        return this._libelle;
    }
    get trancheAge(){
        return this._trancheAge.toString();
    }
    get categorie(){
        return this._categorie.libelle;
    }
}
module.exports = Jouet;