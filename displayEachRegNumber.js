// displayEachRegNumber() takes in an array as a parameter
// and prints out each value in a new line.
function displayEachRegNumber(regNumbers){
  for(i in regNumbers){
    console.log(regNumbers[i]);
  }
}
var regList = ['CA 182736','CY 523519','CJ 812328'];
displayEachRegNumber(regList);
