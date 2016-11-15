// totalPhoneBill() takes in a string recording each phone call and sms sent
// and calculates the total bill for the data provided.
function totalPhoneBill(record){
  var recordList = record.split(',');
  var totalCost = 0;
  for(i in recordList){
    if(recordList[i] == "call"){
      totalCost = totalCost + 2.75;
    }
    else{ // If its not a call then its an sms.
      totalCost = totalCost + 0.65;
    }
  }
  return totalCost;
}
const assert = require('assert');
var cost = totalPhoneBill('call,sms,call,sms,sms');
//In the next line we are stringifying cost so that it will be able work with the startsWith() method.
assert.equal((cost+"").startsWith('7.45'),true);
assert.equal((cost+"").startsWith('7.22'),false);
