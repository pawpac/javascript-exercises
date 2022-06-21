const ftoc = function(temp) {
  let result = (temp - 32) * (5/9);
  if (result.toFixed(1) - result.toFixed(0) === 0) {
  return Number(result.toFixed(0));
  } else {
    return Number(result.toFixed(1));
  }
};

const ctof = function(temp) {
  let result = temp * (9/5) + 32;
  if (result.toFixed(1) - result.toFixed(0) === 0) {
  return Number(result.toFixed(0));
  } else {
    return Number(result.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
