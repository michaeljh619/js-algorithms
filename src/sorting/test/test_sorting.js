// mocha asser
var assert = require('assert');

// Sort types
var Sort = require('../Sort');
var BubbleSort = require('../BubbleSort');

describe('Sorting', function(){
    describe('a', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
});