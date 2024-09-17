import Header from "./Components/Header.jsx";
import UserInput from "./Components/UserInput.jsx";
import InvestmentResults from "./Components/InvestmentResults.jsx";
import { useState } from "react";
function App() {
  // Define initial state for userInput using useState hook
  const [ userInput, setUserInput ] = useState({
    initialInvestment: 50000,
    annualInvestment: 2500,
    expectedReturn: 10,
    duration: 6
});
// Define handleChange function to update userInput state
function handleChange(inputIdentifier, newValue) {
    setUserInput((previousUserInput) => ({
      ...previousUserInput,
      [inputIdentifier]: +newValue
    }));
  }
  const durationisValid = userInput.duration > 0;
  return (
   <>
    <Header />
    {/* Render UserInput component and pass userInput and handleChange as props */}
    <UserInput 
    userInput={userInput} 
    onChangeInput = {handleChange}
    />
     {/* Render InvestmentResults component if duration is valid */}
    {durationisValid && <InvestmentResults input={userInput}/>}
     {/* Render error message if duration is not valid */}
    {!durationisValid &&  <p className="center">Please enter duration greater than zero or a positive number</p> }
  </>)
}

export default App
