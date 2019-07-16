// require base class
var Sort = require('./Sort');

// require optargs function
var optArg = require('../tools/OptionalArgument');

// Constructor
var MergeSort = function(leastToGreatest){
    Sort.call(this, leastToGreatest);
};

// make prototype of Sort type
MergeSort.prototype = Object.create(Sort.prototype);
// set constructor in prototype
MergeSort.prototype.constructor = MergeSort;

// toString returns class name
MergeSort.prototype.toString = function(){
    return 'MergeSort';
};

// sort function
MergeSort.prototype.sort = function(array){
    // base case
    if(array.length <= 1){
        return array;
    }
    // recursive case
    else{
        var halfLength = array.length / 2;
        var left = array.slice(0, halfLength);
        var right = array.slice(halfLength, array.length);
        return this.__merge(this.sort(left), this.sort(right));
    }
};

MergeSort.prototype.__merge = function(array1, array2){
    var mergedArray = [];
    while(array1.length > 0 && array2.length > 0){
        var ele1 = array1[0];
        var ele2 = array2[0];
        var swap = this.shouldSwap(ele1, ele2);

        // remove element and push to mergedArray
        if(!swap){
            mergedArray.push(array1.shift());
        }
        else{
            mergedArray.push(array2.shift());
        }
    }

    // concatenate leftover array to merged array
    if(array1.length > 0){
        return mergedArray.concat(array1);
    }
    else{
        return mergedArray.concat(array2);
    }
};

module.exports = MergeSort;