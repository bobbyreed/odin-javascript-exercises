const palindromes = function (string) {
    function cleanString(string){
        original = string.toLowerCase();
        original = original.replaceAll(" ", "");
        original = original.replaceAll(".", "");
        original = original.replaceAll(",", "");
        original = original.replaceAll("!", "");
        return original;
    }

    cleanString(string);
    console.log(string);
    console.log(original);

    let reverseString = original.split("").reverse().join("");
    console.log(reverseString);
    if(original === reverseString){
        return true;
    }
    else{
        return false;
    }
};



// Do not edit below this line
module.exports = palindromes;
