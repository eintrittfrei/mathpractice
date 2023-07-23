
export function calcResult(number1, number2, operator) {

  const mode = ['+', '-', '/']

  if (mode.includes(operator)) {
    if (operator === '+') {
      return number1 + number2
    } else if (operator === '-') {
      return number1 - number2
    } else if ( operator === '/') {
      return number1 / number2
    } else return false 
  }



}