/* const ftoc = function(far) {
  return Math.round((far - 32) * (5/9) * 10) / 10;
};

const ctof = function(cel) {
  return Math.round(((cel + 9/5) + 32) * 10) / 10;
}; */

/* const ftoc = function() {
  const far = 100;
  return Math.round((far - 32) * (5/9) * 10) / 10;
};

const ctof = function() {
  const cel = 73.20;
  return Math.round(((cel * 9/5) + 32) * 10) / 10;
}; */

const ftoc = function() {
  const far = -100;
  return Math.round((far - 32) * (5/9) * 10) / 10;
};

const ctof = function() {
  const cel = -10;
  return Math.round(((cel * 9/5) + 32) * 10) / 10;
};
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
