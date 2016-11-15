// LongestWord() takes in a sentence in string format
// It returns the shortest word from the sentence.
function LongestWord(sentence){
  var wordsInSentence = sentence.split(' ');
  var shortLen = wordsInSentence[0]; // shortest word is set to be the first word in sentence.
  for(i in wordsInSentence){
    if(wordsInSentence[i].length < shortLen.length){
      shortLen = wordsInSentence[i]; // assigning the new short word to shortLen
    }
  }
  return shortLen;
}
const assert = require('assert');
assert.equal(LongestWord('A friend of yours started.'),'A');
