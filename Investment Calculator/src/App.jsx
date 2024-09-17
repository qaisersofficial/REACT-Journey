import Header from "./Components/Header.jsx";
import UserInput from "./Components/UserInput.jsx";
import InvestmentResults from "./Components/InvestmentResults.jsx";
import { useState } from "react";
function App() {
  const [ userInput, setUserInput ] = useState({
    initialInvestment: 50000,
    annualInvestment: 2500,
    expectedReturn: 10,
    duration: 6
});
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
    <UserInput 
    userInput={userInput} 
    onChangeInput = {handleChange}
    />
    {durationisValid && <InvestmentResults input={userInput}/>}
    {!durationisValid &&  <p className="center">Please enter duration greater than zero or a positive number</p> }
  </>)
}

export default App
