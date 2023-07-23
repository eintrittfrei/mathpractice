import { getRandomNumber } from "../utils/RandomNumber"
import { calcResult } from "../utils/calcResult"
import { useState } from "react"
import { CheckResult } from "../utils/CheckUserResult"


function Addition() {
  const [isResultCorrect, setIsResultCorrect] = useState(null)
  const [computerResult, setComputerResult] = useState('')
  const [challengeText, setChallengeText] = useState('')
  const [inputValue, setInputValue] = useState(
    {
      result: ''
    })

let number1
let number2
let result
let resultIsCorrect

function generateChallenge() {
  setIsResultCorrect(null)
  number1 = getRandomNumber(1, 1000)
  number2 = getRandomNumber(1, 1000)
  const operator = '+'
  setChallengeText(`${number1} + ${number2}`)
  result =  calcResult(number1, number2, operator)
  setComputerResult(result)
  console.log('Result no state', result)
  console.log('RESULT', computerResult)
}

function handleChange(event) {
  event.preventDefault()
  const value = { inputValue, [event.target.name]: event.target.value }
  setInputValue(value)
}

function handleSubmit(event) {
  event.preventDefault()
  resultIsCorrect = CheckResult(inputValue, computerResult)
  setIsResultCorrect(resultIsCorrect)
  console.log(resultIsCorrect)
}



  return (
    <>
  <div>
    <div>
      <h1>Addition</h1>
      <button className="button-new-math" type="button" onClick={generateChallenge}>New Math</button>
      <h2>{challengeText}</h2>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          name="result" 
          maxLength={4} 
          value={inputValue.result} 
          onChange={handleChange} />
          <input 
          type="submit" 
          value="Submit" />
        </form>
    </div>
  </div>
  {isResultCorrect === null ? null : 
  (isResultCorrect ? 
    <div>
    <h3>Correct! </h3>
  </div>
  :
  <div>
  <h3>Not correct! </h3>
  </div>
  )
  }
  
</>

  )
}

export default Addition