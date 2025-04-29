const getTheTitles = function() {
    const books = Array.from(arguments[0]);
    return books.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
