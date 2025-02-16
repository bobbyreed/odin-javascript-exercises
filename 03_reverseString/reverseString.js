const reverseString = function(string) {
    let charArray = [];
    for(let i = 0; i < string.length; i++){
        charArray[i] = string.charAt(i);
    }
    charArray.reverse();
    return charArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
