
export function CheckResult(input, result) {

  const userInput = input.result
  const user = parseInt(userInput)
  const computer = parseInt(result)
  return user === computer
  
}