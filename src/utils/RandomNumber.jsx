

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * ( min, max + 1)) + 1
}

export function getRandomDivisionNumber(array) {

  let randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
  
}

