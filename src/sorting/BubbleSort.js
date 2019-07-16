// requires Base class
Sort = require('./Sort');
// requires opt arg function from tools
var optArg = require('../tools/OptionalArgument');

// Bubble Sort constructor
var BubbleSort = function(leastToGreatest){
    Sort.call(this, leastToGreatest);
};

// create child of Sort and set constructor
BubbleSort.prototype = Object.create(Sort.prototype);
BubbleSort.prototype.constructor = BubbleSort;

// override sort method
BubbleSort.prototype.sort = function(array){
    // set array
    this.array = array;

    // pass through array n amount of times, where n is length
    for(var passes = 0; passes < this.array.length; passes++){
        // perform one pass of BubbleSort
        for(var i = 1; i < this.array.length; i++){
            // current and previous elements
            var curr = this.array[i];
            var prev = this.array[i-1];
            
            // swap if not ordered right
            if(this.shouldSwap(prev, curr)){
                var tmp = curr;
                curr = prev;
                prev = tmp;
            }

            // set back to array
            this.array[i] = curr;
            this.array[i-1] = prev;
        }
    }

    // return
    return this.array;
};

// return name of sort on toString
BubbleSort.prototype.toString = function(){
    return "BubbleSort";
};

module.exports = BubbleSort;