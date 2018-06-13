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

  describe("numberOfQuarters", function(){
    it("should return 1 from 25 cents", function(){
      expect(testChanger.numberOfQuarters(25)).toEqual(1);
    });

    it("should return 2 from 50 cents", function(){
      expect(testChanger.numberOfQuarters(50)).toEqual(2);
    });

    it("should return 3 from 85 cents", function(){
      expect(testChanger.numberOfQuarters(85)).toEqual(3);
    });
  });

  describe("numberOfDimes", function(){
    it("should return 1 from 10 cents", function(){
      expect(testChanger.numberOfDimes(10)).toEqual(1);
    });

    it("should return 5 from 50 cents", function(){
      expect(testChanger.numberOfDimes(50)).toEqual(5);
    });

    it("should return 8 from 85 cents", function(){
      expect(testChanger.numberOfDimes(85)).toEqual(8);
    });
  });

  describe("numberOfNickels", function(){
    it("should return 1 from 5 cents", function(){
      expect(testChanger.numberOfNickels(5)).toEqual(1);
    });

    it("should return 5 from 50 cents", function(){
      expect(testChanger.numberOfNickels(50)).toEqual(10);
    });

    it("should return 17 from 85 cents", function(){
      expect(testChanger.numberOfNickels(85)).toEqual(17);
    });
  });

  describe("numberOfPennies", function(){
    it("should return 1 from 1 cent", function(){
      expect(testChanger.numberOfPennies(1)).toEqual(1);
    });

    it("should return 50 from 50 cents", function(){
      expect(testChanger.numberOfPennies(50)).toEqual(50);
    });

    it("should return 85 from 85 cents", function(){
      expect(testChanger.numberOfPennies(85)).toEqual(85);
    });
  });

});
