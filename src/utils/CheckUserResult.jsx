
export function CheckResult(input, result) {
  let userInput = input.result
  let user = parseInt(userInput)
  let computer = parseInt(result)
  console.log('input:', typeof(user))
  console.log('result:', typeof(computer))
  return user === computer
}