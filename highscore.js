var scores = [56,73,51,87,45,23,47];
var highScore = 0;

for(var i=0; i<scores.length; i++;){
    var score = scores[i];
    if (score > highScore){
        highScore = score;
    }
}

//this should print 87
console.log(highScore);
