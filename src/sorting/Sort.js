var optArg = require('../tools/OptionalArgument');

// Base Class
var Sort = function(){
    this.array = [];
};

Sort.prototype.sort = function(array, leastToGreatest){
    // l to g is an optional param
    leastToGreatest = optArg(leastToGreatest, true);

    this.array = array;
    return this.array;
};

module.exports = Sort;