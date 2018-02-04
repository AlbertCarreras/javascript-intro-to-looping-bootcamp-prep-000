function forLoop(array) {
  for(var i = 1; i < 25; i++) {
    if(i === 1){
      array.push("I'm a 1 strange loop.")
      return array
    } else {
      array.push("I'm ${i} strange loops")
      return array
    }
  }
}