// This function takes in regNumbers which is a string of comma seperated
// registration numbers. It splits the string into an array
// Using a forIn loop it probes the array to return a of registrations starting with 'CJ'
function countAllPaarl(regNumbers){
  var regList = regNumbers.split(',');
  var allFromPaarl = [];
  for(i in regList){
    if(regList[i].startsWith('CJ')){
      allFromPaarl.push(regList[i]);
    }
  }
  return allFromPaarl.length;
}
const assert = require('assert');
assert.equal(countAllPaarl('CA 182736,CY 523519,CJ 812328,CJ 111222,EC 812328'),2);
