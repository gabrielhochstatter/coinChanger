var usd = {
  "Quarters": 25,
  "Dimes": 10,
  "Nickels": 5,
  "Pennies": 1
};

var gbp = {
  "2 Pounds": 200,
  "1 Pound": 100,
  "50p": 50,
  "20p": 20,
  "10p": 10,
  "5p": 5,
  "2p": 2,
  "1p": 1
};

var euro = {
  "2 Euros": 200,
  "1 Euro": 100,
  "50 Cents": 50,
  "20 Cents": 20,
  "10 Cents": 10,
  "5 Cents": 5,
  "2 Cents": 2,
  "1 Cent": 1
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
    changer: changer,
    cents: 0,
    coins: this.changer.calculateCoins(0),
    currencies: [
      { name: "USD", currency: usd },
      { name: "GBP", currency: gbp },
      { name: "EUR", currency: euro }
    ],
    currentCurrency: usd
  },
  methods: {
    calculator: function(){
      this.coins = this.changer.calculateCoins(this.cents);
    },
    updateCurrency: function(currency){
      this.changer = new Changer(currency);
      this.calculator();
    }
  }
});
