const Monster = require("./monster");

const Witcher = function (steel, silver, sign, ranged, health, wallet){
    this.steel = steel;
    this.silver = silver;
    this.sign = sign;
    this.ranged = ranged;
    this.health = health;
    this.wallet = wallet
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

Witcher.prototype.battleSilver = function(witcher, monster){
    let attacks = monster.health / witcher.silver
    return attacks
}

Witcher.prototype.battleSteel = function(witcher, monster){
    let attacks = monster.health / witcher.steel
    return attacks
}

Witcher.prototype.gettingLoot = function(witcher, monster){
    let wallet = witcher.wallet + monster.loot 
    return wallet
}

Witcher.prototype.buying = function(witcher, amount){
    let wallet = witcher.wallet - amount 
    return wallet
}

Witcher.prototype.steelAttack = function(witcher, monster){
    let monsterHealth = monster.health - witcher.steel
    return monsterHealth
}

Witcher.prototype.silverAttack = function(witcher, monster){
    let monsterHealth = monster.health - witcher.silver
    return monsterHealth
}

Witcher.prototype.rangedAttack = function(witcher, monster){
    let monsterHealth = monster.health - witcher.ranged
    return monsterHealth
}

Witcher.prototype.monsterAttack = function(witcher, monster){
    let witcherHealth = witcher.health - monster.damage
    return witcherHealth
}


module.exports = Witcher;