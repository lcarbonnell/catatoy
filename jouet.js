class Jouet{
    constructor(unId,unLibelle,uneTrancheAge,uneCategorie){
        this._Id = unId;
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
    };
    convenir(unAge){
        return(unAge>= this._trancheAge.ageMin )&&(unAge<=this._trancheAge.ageMax)
    }
}
module.exports = Jouet;