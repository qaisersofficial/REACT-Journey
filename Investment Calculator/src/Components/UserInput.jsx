import InputField  from "./InputField";
export default function UserInput ({userInput, onChangeInput}){
  
    return (
        <section id="user-input">
            <div className="input-group">
        <InputField 
        label="Initial Investment"
         value = {userInput.initialInvestment}
           onChange ={(event)=>onChangeInput("initialInvestment", event.target.value )}
            />
        <InputField 
        label="Annual Investment"
        value = {userInput.annualInvestment}
        onChange ={(event)=>onChangeInput("annualInvestment", event.target.value )}
        />
        <InputField 
        label="Expected Return" 
        value = {userInput.expectedReturn}  
        onChange ={(event)=>onChangeInput("expectedReturn", event.target.value )}
         />
        <InputField 
        label="Duration"
        value = {userInput.duration} 
        onChange ={(event)=>onChangeInput("duration", event.target.value )}
         />
            </div>
        </section>
    );
} 