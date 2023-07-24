/* eslint-disable react/prop-types */

const ResultEntryForm = ({ handleSubmit, inputValue, handleChange, isSubmitButtonDisabled }) => {

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        maxLength={4}
        value={inputValue}
        onChange={handleChange}
        name="result" />
      <input
        type="submit"
        disabled={isSubmitButtonDisabled}
        value="Submit" />
    </form>
  )
}

export default ResultEntryForm