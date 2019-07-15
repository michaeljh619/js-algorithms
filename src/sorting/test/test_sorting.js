// mocha asser
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

// Sort types
var BubbleSort = require('../BubbleSort');

// add all sort constructors to array to test
var sortTypes = [new BubbleSort()];

/*
 * Sorting Tests
 */
describe('Sorting', function(){

    describe('Sorting with empty array', function(){
        sortTypes.forEach(function(sortType){
            var sortName = sortType.toString();
            it(sortName + ' will return an empty array', function(){
                var empty = [];
                var result = sortType.sort(empty);

                assert.lengthOf(result, 0);
            });
        });
    });

    describe('Sorting with non-empty arrays', function(){
        sortTypes.forEach(function(sortType){
            var sortName = sortType.toString();
            it(sortName + ' will return a sorted array', function(){
                // array of arrays to sort
                var data = [
                    [[1], [1]],
                    [[3,1], [1,3]],
                    [[1,2], [1,2]],
                    [[5, 17, 12], [5,12,17]],
                    [[4, 5, 1, 2], [1,2,4,5]]
                ];
                data.forEach(function(a){
                    var unsorted = a[0];
                    var answer = a[1];
                    var sorted = sortType.sort(unsorted);

                    expect(sorted).to.eql(answer);
                });
            });
        });
    });
});