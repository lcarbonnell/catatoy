class Jouet{
    constructor(unLibelle,uneTrancheAge){
        this._libelle = unLibelle;
        this._trancheAge = uneTrancheAge;
    }

    get libelle(){
        return this._libelle;
    }
    get trancheAge(){
        return this._trancheAge.toString();
    }
}
module.exports = Jouet;