function forLoop(array) {
  for(var i=0; i < 24; i++) {
    if(i === 0){
      array.push("I'm a 1 strange loop.")
    } else {
      array.push("I'm ${i} strange loops")
    }
  }
}