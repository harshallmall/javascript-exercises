/* const leapYears = function() {
    const endYear = 1996;
    if ((endYear % 4 == 0) && (endYear % 100 != 0) || (endYear % 400 == 0)) {
        {return true;}
    } else {return false;}
}; */

/* const leapYears = function() {
    const endYear = 1997;
    if ((endYear % 4 == 0) && (endYear % 100 != 0) || (endYear % 400 == 0)) {
        {return true;}
    } else {return false;}
}; */

/* const leapYears = function(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0); 
}; */

/* const leapYears = function() {
    const year = 1900;
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0); 
}; */

/* const leapYears = function() {
    const year = 1600;
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0); 
}; */

const leapYears = function() {
    const year = 700;
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0); 
};
// Do not edit below this line
module.exports = leapYears;
