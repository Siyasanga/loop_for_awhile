// totalPhoneBill() takes in a string recording each phone call and sms sent
// and calculates the balance after subtracting the bill for the data provided.
function totalPhoneBill(record,balance){
  var recordList = record.split(',');
  var totalCost = 0;
  for(i in recordList){
    if(recordList[i] == "call"){
      totalCost = totalCost + 1.88;
    }
    else if(recordList[i] == "data"){
      totalCost = totalCost + 12;
    }
    else{
      totalCost = totalCost + 0.75;
    }
  }
  if(totalCost <= 0){
    return 0;
  }
  return balance-totalCost;
}
const assert = require('assert');
var cost = totalPhoneBill('call,call,call,data,sms,sms,call,data',50);
//In the next line we are stringifying cost so that it will be able work with the startsWith() method.
assert.equal((cost+"").startsWith('16.98'),true);
assert.equal((cost+"").startsWith('7.22'),false);
