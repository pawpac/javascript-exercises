const repeatString = function repeatString(string, num) {
  let newString = "";
    if (num < 0) {
      newString = "ERROR";
    } else {
      for (i = 0; i < num; i++) {
        newString = newString + string;
      }
    }
  return newString;
}

// Do not edit below this line
module.exports = repeatString;
