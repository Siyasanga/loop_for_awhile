// wordLengths() takes in a sentence in string format
// It returns the sum of the word Lengths.
function wordLengths(sentence){
  var wordsInSentence = sentence.split(' ');
  var wordsLen = 0; 
  for(i in wordsInSentence){
    wordsLen = wordsLen + wordsInSentence[i].length;
  }
  return wordsLen;
}
const assert = require('assert');
sentence = 'A friend of yours started.';
assert.equal(wordLengths(sentence),(sentence.length-sentence.split(' ').length+1);
