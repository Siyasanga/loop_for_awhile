// This function takes in regNumbers which is a string of comma seperated
// registration numbers. It splits the string into an array
// Using a forIn loop it probes the array to return the first number plate that starts with 'CJ'
function firstPaarl(regNumbers){
  var regList = regNumbers.split(',');
  for(i in regList){
    if(regList[i].startsWith('CJ')){
      return regList[i];
    }
  }
}
const assert = require('assert');
assert.equal(firstPaarl('CA 182736,CY 523519,CJ 812328,CJ 111222,EC 812328'),'CJ 812328');
