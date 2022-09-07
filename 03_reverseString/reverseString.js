//const reverseString = function() {
    //let str = "hello there";
    //let part1 = str.slice(0, 5);
    //let part2 = str.slice(6, 11);
    //let part3 = part1.replace("hello", "olleh");
    //let part4 = part2.replace("there", "ereht");
   //return part4.concat(" ", part3);
//};

//const reverseString = function() {
    //let str = "hello";
    //let part1 = str.slice(0, 5);
    //let part3 = part1.replace("hello", "olleh");
    //return part3;
//};

//const reverseString = function() {
    //let str = "123! abc!"
    //let part1 = str.slice(0, 4);
    //let part2 = str.slice(5, 9);
    //let part3 = part1.replace("123!", "!321");
    //let part4 = part2.replace("abc!", "!cba");
    //return part4.concat(" ", part3);
//};

const reverseString = function(string) {
    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
