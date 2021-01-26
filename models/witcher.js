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

module.exports = Witcher;