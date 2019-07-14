// Base Class
const Sort = function(array){
    this.array = array;
}

Sort.prototype.sort() = function(){
    return this.array;
}

module.exports.Sort = Sort;