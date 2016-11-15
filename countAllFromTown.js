// countAllFromTown() takes in two parameters, regNumbers which is a string parameter.
// with registration numbers separated with commas. Second parameter is location which is two characters.
// It returns the number of registration numbers in the string that are from the location.
function countAllFromTown(regNumbers, location){
  var regList = regNumbers.split(',');
  var allTown = [];
  for(i in regList){
    if(regList[i].startsWith(location)){
      allTown.push(regList[i]);
    }
  }
  return allTown.length;
}
const assert = require('assert');
var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
assert.deepEqual(fromStellies,3)
