// requires Base class
Sort = require('./Sort');

// Bubble Sort constructor
var BubbleSort = function(){
    Sort.call(this);
};

// create child of Sort and set constructor
BubbleSort.prototype = Object.create(Sort);
BubbleSort.prototype.constructor = BubbleSort;

// override sort method
BubbleSort.prototype.sort = function(array, leastToGreatest){
    // optional param, set to true if not set
    if(leastToGreatest === undefined){
        leastToGreatest = true;
    }

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
            var swap = false;
            if(leastToGreatest && prev > curr){
                swap = true;
            }
            else if(!leastToGreatest && prev < curr){
                swap = true;
            }
            if(swap){
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