// This function takes in regNumbers which is a string of comma seperated
// registration numbers. It splits the string into an array
// Using a forIn loop it probes the array to return all registrations starting with 'CJ'
function allPaarl(regNumbers){
  var regList = regNumbers.split(',');
  var allFromPaarl = [];
  for(i in regList){
    if(regList[i].startsWith('CJ')){
      allFromPaarl.push(regList[i]);
    }
  }
  return allFromPaarl;
}
const assert = require('assert');
allFromPaarl = allPaarl('CA 182736,CY 523519,CJ 812328,CJ 111222,EC 812328');
console.log(allFromPaarl);
// Having complications when comparing array with assert.equal() method.
assert.deepEqual(allPaarl('CA 182736,CY 523519,CJ 812328,CJ 111222,EC 812328'),allFromPaarl);
