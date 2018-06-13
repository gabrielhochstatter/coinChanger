var changer = require("../src/changer.js");

describe("coinChanger", function(){
  var testChanger;
  beforeEach(function(){
    testChanger = new changer.Changer();
  });

  describe("calculateCoins", function(){
    it("should return 1", function(){
      // expect(testChanger.returnOne()).toEqual(1);
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
      expect(testChanger.numberOfQuarters(25)).toEqual(1);
    });
  });

});
