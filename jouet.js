class Jouet{
    constructor(libelle){
        this._libelle = libelle;
    }
    get libelle(){
        return this._libelle;
    }
}
module.exports = Jouet;