var exports = module.exports = {};

exports.Changer = function(){

  // Should take number of cents and return optimal amount of coins
  // as a string like "3 quarters, 1 dime, 1 nickel, 3 pennies"

  this.calculateCoins = function(amount) {
    this.remainder = amount;
    var output = {
      quarters: this.numberOfQuarters(this.remainder),
      dimes: this.numberOfDimes(this.remainder),
      nickels: this.numberOfNickels(this.remainder),
      pennies: this.numberOfPennies(this.remainder),
    };
    return output;
  };

  this.numberOfQuarters = function(cents) {
    var quarters = Math.floor(cents / 25);
    this.remainder -= quarters * 25;
    return quarters;
  };

  this.numberOfDimes = function(cents) {
    var dimes = Math.floor(cents / 10);
    this.remainder -= dimes * 10;
    return dimes;
  };

  this.numberOfNickels = function(cents) {
    var nickels = Math.floor(cents / 5);
    this.remainder -= nickels * 5;
    return nickels;
  };

  this.numberOfPennies = function(cents) {
    return cents;
  };
};
