module.exports = function(setValue, defaultValue){
    if(setValue === undefined){
        return defaultValue;
    }
    else{
        return setValue;
    }
};