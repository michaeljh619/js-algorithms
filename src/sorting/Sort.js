var optArg = require('../tools/OptionalArgument');

// Base Class
var Sort = function(leastToGreatest){
    // l to g is an optional param
    this.leastToGreatest = optArg(leastToGreatest, true);
};

Sort.prototype.sort = function(array){
    return array;
};

Sort.prototype.shouldSwap = function(firstElement, secondElement){
    var swap = false;
    if(this.leastToGreatest){
        if(firstElement > secondElement){
            swap = true;
        }
    }
    else{
        if(firstElement < secondElement){
            swap = true;
        }
    }
    return swap;
};

Sort.prototype.setLeastToGreatest = function(leastToGreatest){
    this.leastToGreatest = leastToGreatest;
};

module.exports = Sort;