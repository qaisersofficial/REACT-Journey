import InputField  from "./InputField";
// Defining the UserInput component, which takes in userInput and onChangeInput as props
export default function UserInput ({userInput, onChangeInput}){
  
    return (
        <section id="user-input">
            <div className="input-group">
            {/* Input field for 'Initial Investment' */}
        <InputField 
        label="Initial Investment"
         value = {userInput.initialInvestment}
           onChange ={(event)=>onChangeInput("initialInvestment", event.target.value )}
            />
            {/* Input field for 'Annual Investment' */}
        <InputField 
        label="Annual Investment"
        value = {userInput.annualInvestment}
        onChange ={(event)=>onChangeInput("annualInvestment", event.target.value )}
        />
            {/* Input field for 'Expected Return' */}
        <InputField 
        label="Expected Return" 
        value = {userInput.expectedReturn}  
        onChange ={(event)=>onChangeInput("expectedReturn", event.target.value )}
         />
            {/* Input field for 'Duration' */}
        <InputField 
        label="Duration"
        value = {userInput.duration} 
        onChange ={(event)=>onChangeInput("duration", event.target.value )}
         />
            </div>
        </section>
    );
} 