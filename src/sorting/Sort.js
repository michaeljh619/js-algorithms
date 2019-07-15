// Base Class
var Sort = function(){
    this.array = [];
};

Sort.prototype.sort = function(array){
    this.array = array;
    return this.array;
};

module.exports = Sort;