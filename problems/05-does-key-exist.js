/***********************************************************************
Write a function `doesKeyExist(obj, key)` that takes in an object and a
key and returns true if the key is inside the object and false if the
key is not inside the object.

Examples:

let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}
doesKeyExist(obj1, 'course'); // => true
doesKeyExist(obj1, 'name'); // => false
***********************************************************************/

function doesKeyExist(obj, key) {
  /*
  if (obj[key] === undefined) {
    return false;
  }

  return true;
  */

  if (key in obj) {
    return true;
  }

  return false;
}

let obj1 = {bootcamp: 'App Academy', course: 'Bootcamp Prep'}

console.log(doesKeyExist(obj1, 'course')); // => true
console.log(doesKeyExist(obj1, 'name')); // => false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = doesKeyExist;
