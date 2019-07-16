// Base Class
var Sort = function(){
    this.array = [];
};

Sort.prototype.sort = function(array, leastToGreatest){
    // l to g is an optional param
    if(leastToGreatest === undefined){
        leastToGreatest = true;
    }

    this.array = array;
    return this.array;
};

module.exports = Sort;