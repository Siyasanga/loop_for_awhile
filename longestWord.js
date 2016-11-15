// LongestWord() takes in a sentence in string format
// It returns the longest word from the sentence.
function LongestWord(sentence){
  var wordsInSentence = sentence.split(' ');
  var longlen = ''; // longest word is set to be an empty string.
  for(i in wordsInSentence){
    if(wordsInSentence[i].length>longlen.length){
      longlen = wordsInSentence[i]; // assigning the new long word to longlen
    }
  }
  return longlen;
}
const assert = require('assert');
assert.equal(LongestWord('A friend of yours started.'),'started.');
  
