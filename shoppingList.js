function shoppingList(grossary){
  var grossaryList = grossary.split(',');
  for(i = 0; i < grossaryList.length; i++){  //
    console.log(grossaryList[i]);  // Printing the value in grossaryList at index i.
  }
}

shoppingList('1x bread,6x hotdog rolls,2x tubs of margarine ');
