function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    if(i === 0){
      array.push("I'm a 1 strange loop.")
      return array
    } else {
      array.push("I'm ${i} strange loops")
      return array
    }
  }
}