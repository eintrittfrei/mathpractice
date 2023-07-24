import { getRandomDivisionNumber } from "../../utils/RandomNumber"
import { calcResult } from "../../utils/calcResult"
import { useState } from "react"
import { CheckResult } from "../../utils/CheckUserResult"
import ButtonSubmit from "../ButtonSubmit"
import ResultEntryForm from "../ResultEntryForm"

function Division() {
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [isResultCorrect, setIsResultCorrect] = useState(null)
  const [computerResult, setComputerResult] = useState('')
  const [challengeText, setChallengeText] = useState('')
  const [inputValue, setInputValue] = useState({
      result: '',
    })

  let number1
  let number2
  let result
  let resultIsCorrect

  function generateChallenge() {

    setIsResultCorrect(null)
    setInputValue({ ...inputValue, result: '' })
    setIsButtonDisabled(true)
    setIsSubmitButtonDisabled(false)

   number1 = getRandomDivisionNumber([ ])
   number2 = getRandomDivisionNumber([ ])



    const operator = '/'

    setChallengeText(`${number1} ${operator} ${number2}`)
    result = calcResult(number1, number2, operator)
    setComputerResult(result)  
  }

  function handleChange(event) {
    event.preventDefault()
    const value = { ...inputValue, result: event.target.value }
    setInputValue(value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    resultIsCorrect = CheckResult(inputValue, computerResult)
    setIsResultCorrect(resultIsCorrect)
    handleButtonDisabled()
  }

  function handleButtonDisabled() {
    if (resultIsCorrect) {
      setIsButtonDisabled(false)
      setIsSubmitButtonDisabled(true)
    }
  }

  return (
    <>
      <div className="wrapper">
        <div>
          <h1>Division</h1>

          <ButtonSubmit
            onClick={generateChallenge}
            isDisabled={isButtonDisabled}
          >Next challenge</ButtonSubmit>

          <h2>{challengeText}</h2>

          <ResultEntryForm
            handleSubmit={handleSubmit}
            inputValue={inputValue.result}
            handleChange={handleChange}
            isSubmitButtonDisabled={isSubmitButtonDisabled}
          />
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

export default Division