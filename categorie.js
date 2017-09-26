class Categorie{
    constructor(unLibelle){
        this._libelle = unLibelle;
    }
    get libelle(){
        return this._libelle;
    }
}
module.exports = Categorie;