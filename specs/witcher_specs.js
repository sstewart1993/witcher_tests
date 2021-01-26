const assert = require('assert');
const Witcher = require("../models/witcher");
const Trophy = require("../models/trophy");

describe("Witcher", function(){

    let witcher;
    let gryphon;
    let snake;

    beforeEach(function (){
        witcher = new Witcher(45, 60, "igni", 12);
        gryphon = new Trophy("Gryphon", 2.4, "5% bonus gold")
        snake = new Trophy("Snake", 1.1, "potions last longer")
    })

    it('check steel', function(){
        const actual = witcher.steel;
        assert.strictEqual(actual, 45)
    })

    it('check silver', function(){
        const actual = witcher.silver;
        assert.strictEqual(actual, 60)
    })

    it('check sign', function(){
        const actual = witcher.sign;
        assert.strictEqual(actual, "igni")
    })

    it('check ranged', function(){
        const actual = witcher.ranged;
        assert.strictEqual(actual, 12)
    })

    it("check trophies", function(){
        const actual = witcher.trophies
        assert.deepStrictEqual(actual, [])
    })

    it("check trophy weight", function(){
        const actual = gryphon.weight;
        assert.strictEqual(actual, 2.4)
    })

    it('add trophies', function(){
        witcher.add(gryphon)
        witcher.add(snake)
        const actual = witcher.trophies
        assert.deepStrictEqual(actual, [gryphon, snake])
    })

    
})