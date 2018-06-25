var usd = {
  quarters: 25,
  dimes: 10,
  nickels: 5,
  pennies: 1
};

function Changer(currency){

  this.currency = currency;

  this.calculateCoins = function(amount, currency = this.currency) {
    this.remainder = amount;
    var output = {};
    for (var coin in currency) {
      output[coin] = this.numberOfCoins(this.remainder, currency[coin]);
    }
    return output;
  };

  this.numberOfCoins = function(cents = 0, coinValue = 0) {
    var coins = Math.floor(cents / coinValue);
    this.remainder -= coins * coinValue;
    return coins;
  };
}

var changer = new Changer(usd);

var changerApp = new Vue({
  el: '#changerApp',
  data: {
    cents: 0,
    coins: changer.calculateCoins(0)
  },
  methods: {
    calculator: function(){
      this.coins = changer.calculateCoins(this.cents);
    }
  }
});
