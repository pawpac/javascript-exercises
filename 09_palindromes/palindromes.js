const palindromes = function (string) {
  let newArray = [];
  let newString = string.toLowerCase().replace(/\W/g, '');
  let array = newString.split('');

    for (i of array) {
      newArray.unshift(i);
    };

    return newArray.toString() === array.toString();

};

// Do not edit below this line
module.exports = palindromes;
