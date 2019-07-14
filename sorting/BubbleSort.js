// requires Base class
Sort = require('./Sort');

// Bubble Sort constructor
const BubbleSort = function(array){
    Sort.call(this, array);
}

// create child of Sort and set constructor
BubbleSort.prototype = Object.create(Sort);
BubbleSort.prototype.constructor = BubbleSort;

// override sort method
BubbleSort.prototype.sort = function(){
    // pass through array n amount of times, where n is length
    for(var passes = 0; passes < this.array.length; passes++){
        // perform one pass of BubbleSort
        for(var i = 1; i < this.array.length; i++){
            // current and previous elements
            var curr = this.array[i];
            var prev = this.array[i-1];
            
            // swap if not ordered right
            if(prev > curr){
                var tmp = curr;
                curr = prev;
                prev = tmp;
            }

            // set back to array
            this.array[i] = curr;
            this.arrray[i-1] = prev;
        }
    }
}

module.exports.BubbleSort = BubbleSort;