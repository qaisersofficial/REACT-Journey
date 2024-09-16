import { useState } from "react";
import InputField  from "./InputField";
export default function UserInput (){
   const [ userInput, setUserInput ] = useState({
        initialInvestment: 50000,
        annualInvestment: 2500,
        expectedReturn: 10,
        duration: 6
    });
    function handleChange(inputIdentifier, newValue) {
        setUserInput((previousUserInput) => ({
          ...previousUserInput,
          [inputIdentifier]: newValue
        }));
      }
    return (
        <section id="user-input">
            <div className="input-group">
        <InputField label="Initial Investment" value = {userInput.initialInvestment}  onChange ={(event)=>handleChange("initialInvestment", event.target.value )} />
        <InputField label="Annual Investment" value = {userInput.annualInvestment}  onChange ={(event)=>handleChange("annualInvestment", event.target.value )}/>
        <InputField label="Expected Return" value = {userInput.expectedReturn}  onChange ={(event)=>handleChange("expectedReturn", event.target.value )} />
        <InputField label="Duration" value = {userInput.duration} onChange ={(event)=>handleChange("duration", event.target.value )} />
            </div>
        </section>
    );
} 