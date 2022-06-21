const removeFromArray = function(mainArray, ...toBeRemoved) {
    let array = mainArray;
    for (let i = 0; i < mainArray.length; i++) {
        if (array.includes(toBeRemoved[i])) {
            array.splice(array.indexOf(toBeRemoved[i]), 1)
        }    
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;