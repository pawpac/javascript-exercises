const findTheOldest = function(array) {
  let person = '';
  let oldest = 0;
  let age = 0;

  for (object of array) {
    if (object.yearOfDeath === undefined) {
      object.today = 2022;
      age = object.today - object.yearOfBirth;
    } else {
      age = object.yearOfDeath - object.yearOfBirth;
    }
      if (age > oldest) {
        person = object.name;
        oldest = age;
      }
  }
  return person;
};

// Do not edit below this line
module.exports = findTheOldest;
