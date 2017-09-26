class Jouet{
    constructor(unLibelle){
        this._libelle = unLibelle;
    }

    get libelle(){
        return this._libelle;
    }
}
module.exports = Jouet;