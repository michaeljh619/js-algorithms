/**
 * Used to set an optional parameter with a default value.
 * @param {any} setValue - The actual parameter you want as optional
 * @param {any} defaultValue - The value to set the arg to if no value was set in arg
 * @return {any} Either setValue or defaultValue
 */
module.exports = function(setValue, defaultValue){
    if(setValue === undefined){
        return defaultValue;
    }
    else{
        return setValue;
    }
};