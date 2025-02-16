const sumAll = function(...args) {
    let runningSum = 0;
    if(/\d+\.\d+/.test(args[0]) || args[0] < 0 || /\d+\.\d+/.test(args[1]) || args[1] < 0 || typeof args[0] !== 'number' || typeof args[1] !== 'number'){
        return "ERROR";
    }
    if(args[0]<args[1]){
        while((args[0])<(args[1]+1)){    
            runningSum += args[0];
            args[0]++;
            }
    }
    else if(args[0]>args[1]){
        while((args[1])<(args[0]+1)){    
            runningSum += args[1];
            args[1]++;
            }
    }
    
        return runningSum;
};

// Do not edit below this line
module.exports = sumAll;
