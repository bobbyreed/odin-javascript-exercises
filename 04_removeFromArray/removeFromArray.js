const removeFromArray = function(array, ...args) {
    for(let j = 0; j < args.length; j++){
        let numToRemove = args[j];
        for(let i = 0; i < array.length; i++){
            if(array[i] == numToRemove && typeof args[j] == typeof array[i]){
                delete array[i];
                array.sort();
                array.pop();
                i = 0;
            }
        }
        
    }    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
