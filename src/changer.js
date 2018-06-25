var exports = module.exports = {};

exports.Changer = function(currency){

  this.currency = currency;

  this.calculateCoins = function(amount, currency = this.currency) {
    this.remainder = amount;
    var output = {};
    for (var coin in currency) {
      output[coin] = this.numberOfCoins(this.remainder, currency[coin]);
    }
    return output;
  };

  this.numberOfCoins = function(cents, coinValue) {
    var coins = Math.floor(cents / coinValue);
    this.remainder -= coins * coinValue;
    return coins;
  };
};
