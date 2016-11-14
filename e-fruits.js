var fruits = ['apple', 'pear', 'mango', 'orange', 'banana'];

// create an empty list for fruits ending with 'e'
var efruits = [];
for (var i=0;i<fruits.length;i++){
    var fruit = fruits[i];
    //check if the current fruit end with 'e'
    if (fruit.endsWith('e')){
        // add fruit ending with 'e' to the list
        efruits.push(fruit);
    }
}
// should print ['apple', 'orange']
console.log(efruits);
