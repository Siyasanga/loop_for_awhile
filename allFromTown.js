// allFromTown() takes in two parameters, regNumbers which is a string parameter.
// with registration numbers separated with commas. Second parameter is location which is two characters.
// It returns all the registration numbers in the string that are from the location.
function allFromTown(regNumbers, location){
  var regList = regNumbers.split(',');
  var allTown = [];
  for(i in regList){
    if(regList[i].startsWith(location)){
      allTown.push(regList[i]);
    }
  }
  return allTown;
}
const assert = require('assert');
var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
assert.deepEqual(fromStellies,['CL 124', 'CL 345', 'CL 341'])
//console.log(fromStellies);
