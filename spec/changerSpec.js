var changer = require("../src/changer.js");

describe("coinChanger", function(){
  var testChanger;
  beforeEach(function(){
    testChanger = new changer.Changer();
  });

  describe("calculateCoins", function(){
    it("should return an object with correct amounts of each coin", function(){
      var actual = testChanger.calculateCoins(25);
      var expected = {
        quarters: 1,
        dimes: 0,
        nickels: 0,
        pennies: 0
      };
      expect(actual).toEqual(expected);
    });

    it("should return an object with correct amounts of each coin", function(){
      var actual = testChanger.calculateCoins(1);
      var expected = {
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 1
      };
      expect(actual).toEqual(expected);
    });

    it("should return an object with correct amounts of each coin", function(){
      var actual = testChanger.calculateCoins(19);
      var expected = {
        quarters: 0,
        dimes: 1,
        nickels: 1,
        pennies: 4
      };
      expect(actual).toEqual(expected);
    });
  });

  describe("numberOfCoins", function(){
    it("should return correct amount of coins for the values passed in", function(){
      var cents = 100;
      var coinValue = 25;
      var expected = 4;
      expect(testChanger.numberOfCoins(cents, coinValue)).toEqual(expected);
    });

    it("should return correct amount of coins for the values passed in", function(){
      var cents = 84;
      var coinValue = 25;
      var expected = 3;
      expect(testChanger.numberOfCoins(cents, coinValue)).toEqual(expected);
    });

    it("should return correct amount of coins for the values passed in", function(){
      var cents = 6;
      var coinValue = 1;
      var expected = 6;
      expect(testChanger.numberOfCoins(cents, coinValue)).toEqual(expected);
    });
  });

});
