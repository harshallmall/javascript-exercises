//function sumAll() {
  //let sum = 0;
  //const num = 4
  //for (let i = 1; i <= num; i++) {
      //sum += i;
  //}
    //return sum;
 //};

 //function sumAll() {
  //let sum = 0;
  //const num = 4000
  //for (let i = 1; i <= num; i++) {
      //sum += i;
  //}
    //return sum;
 //};

/*  function sumAll() {
  let sum = 0;
  const num = 123;
  for (let i = 1; i <= num; i++) {
      sum += i;
  }
    return sum;
 }; */

/*  const sumAll = function(min, max) {
  if (min < 0 || max < 0) return "ERROR";
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
}; */

/* const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
}; */

const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};
// Do not edit below this line
module.exports = sumAll;
