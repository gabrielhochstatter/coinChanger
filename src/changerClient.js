function Changer(){

  // Should take number of cents and return optimal amount of coins
  // as a string like "3 quarters, 1 dime, 1 nickel, 3 pennies"

  this.calculateCoins = function(amount) {
    this.remainder = amount;
    var output = {
      quarters: this.numberOfCoins(this.remainder, 25),
      dimes: this.numberOfCoins(this.remainder, 10),
      nickels: this.numberOfCoins(this.remainder, 5),
      pennies: this.numberOfCoins(this.remainder, 1),
    };
    return output;
  };

  this.numberOfCoins = function(cents = 0, coinValue = 0) {
    var coins = Math.floor(cents / coinValue);
    this.remainder -= coins * coinValue;
    return coins;
  };
}

var changer = new Changer();

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
