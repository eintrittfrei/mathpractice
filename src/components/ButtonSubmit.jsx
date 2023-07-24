/* eslint-disable react/prop-types */

const ButtonSubmit = ({ onClick, isDisabled, children }) => {
  
  return (
    <button
    className="button-new-math" 
    type="button" 
    onClick={onClick} 
    disabled={isDisabled}
    >
    {children}
    </button>
  )

}

export default ButtonSubmit