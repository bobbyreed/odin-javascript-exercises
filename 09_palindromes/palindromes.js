const palindromes = function (string) {
    cleanString(string);
    console.log(string);
    console.log(original);

    let reverseString = string.split("").reverse().join("");
    if(original === reverseString){
        return true;
    }
    else{
        return false;
    }
};

function cleanString(string){
    string, original.toLowerCase();
    string, original = string.replaceAll(" ", "");
    string, original = string.replaceAll(".", "");
    string, original = string.replaceAll("!", "");
    return string, original;
}

// Do not edit below this line
module.exports = palindromes;
