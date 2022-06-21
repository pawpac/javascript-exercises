const reverseString = function(string) {
  let newArray = [];
  let splitted = string.split('');
  for (let i = 0; i < splitted.length; i++) {
    newArray.unshift(splitted[i])
  }
  return newArray.join('');
};

// Do not edit below this line
module.exports = reverseString;