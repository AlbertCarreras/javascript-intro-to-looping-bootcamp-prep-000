function forLoop(array) {
  for(var i = 1; i < 25; i++) {
    if(i === 0){
      array.push("I'm a 1 strange loop.")
    } else {
      array.push("I'm ${i} strange loops")
    }
  }
}