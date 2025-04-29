const fibonacci = function(index) {
    if(index < 0){
        return "OOPS";
    }
    if(index == 0){
        return 0;
    }    
    fib = [1, 1];
        if(index <= 2){
            return 1;
        }
        else if(index > 2){
            for(let i = 2; i < index; i++) {
                fib[i] = fib[i - 1] + fib[i - 2];
            }
            return fib[index - 1];
        }
};

// Do not edit below this line
module.exports = fibonacci;
