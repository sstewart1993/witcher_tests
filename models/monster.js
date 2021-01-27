const Monster = function(name, type, weakness, health, damage, loot){
    this.name = name;
    this.type = type;
    this.weakness = weakness;
    this.health = health;
    this.damage = damage;
    this.loot = loot;
}

module.exports = Monster;