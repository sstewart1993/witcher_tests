const Witcher = function (steel, silver, sign, ranged){
    this.steel = steel;
    this.silver = silver;
    this.sign = sign;
    this.ranged = ranged;
    this.trophies = []
}

Witcher.prototype.add = function(trophy){
    this.trophies.push(trophy);
}

Witcher.prototype.remove = function(trophy){
    this.trophies.pop(trophy);
}

Witcher.prototype.findHeaviestTrophy = function(){
    let findHeaviestTrophy = this.trophies[0]

    for (const trophy of this.trophies){
        if (trophy.weight > findHeaviestTrophy.weight){
            heaviestTrophy = trophy;
        }
    }
    return heaviestTrophy;
}

Witcher.prototype.findLightestTrophy = function(){
    let findLightestTrophy = this.trophies[0]

    for (const trophy of this.trophies){
        if (trophy.weight < findLightestTrophy.weight){
            lightestTrophy = trophy;
        }
    }
    return lightestTrophy;
}


module.exports = Witcher;