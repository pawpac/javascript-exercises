const fibonacci = function(member) {
  if (parseInt(member) < 0) {
    return 'OOPS'
  } else {
    let first = 1;
    let second = 1;
    let arr = [];

    arr.push(first);
    arr.push(second);

    for (let i = 0; i < (parseInt(member)-2); i++) {
      let outcome = first + second;
      arr.push(outcome);

      first = second;
      second = outcome;
    }
  return parseInt(arr.slice(-1));
}
};

// Do not edit below this line
module.exports = fibonacci;
