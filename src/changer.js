var exports = module.exports = {};

exports.Changer = function(){

  // Should take number of cents and return optimal amount of coins
  // as a string like "3 quarters, 1 dimes, 1 nickel, 3 pennies"
  this.numberOfQuarters = function(cents){
    return cents / 25;
  };
};
