import { useState } from 'react';
// import "./AuthInputs.css";
// import classes from '../Header/Header.module.css';
import styled from 'styled-components';
const StyledAuthInputs = styled.div `
  width: 100%;
  max-width: 28rem;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background: linear-gradient(180deg, #474232 0%, #28271c 100%);
  color: white;
`
const ControlContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`
const Label = styled.label `
 display: block;
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({$invalid})=>$invalid ? "#f87171" : "#6b7280"} ;
`

const Input = styled.input `
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color:  ${({$invalid})=>$invalid ? "#fed2d2" : "#d1d5db"} ;
  color: ${({$invalid})=>$invalid ? "#ef4444" : "#374151" } ;
  border: 1px solid ${({$invalid})=>$invalid ? "#f73f3f" : "transparent" };
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`
const StyledActionDiv = styled.div `
 display: flex;
  justify-content: flex-end;
  gap: 1rem;
`
const StyledSignInBtn = styled.button `
padding: 1rem 2rem;
font-weight: 600;
text-transform: uppercase;
border-radius: 0.25rem;
color: #1f2937;
background-color: #f0b322;
border-radius: 6px;
border: none;
// how to use hover in styled components
&:hover {
background-color: #f0920e;
color: #ffd063;
cursor: pointer;
}
// how to use focus in styled components
&:focus {
outline: none;
}
`;
const StyledTextButton = styled.button `
  color: #f0b322;
  border: none;
  cursor: pointer;
  background: none;
  line-height: inherit;

  // hover effect
   &:hover {
    color: #f0920e;
  }

`
export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <StyledAuthInputs>
      <ControlContainer>
        <p >
          <Label $invalid={emailNotValid}>Email</Label>
          <Input
          // style={{
          //   backgroundColor: emailNotValid ? "#fed2d2" : "white",
          //   color: emailNotValid ? "#ef4444" : "black",
          //   borderColor: emailNotValid ? '#f73f3f': 'black'
          // }}            
          type="email"
          $invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p >
          <Label $invalid={passwordNotValid}>Password</Label>
          <Input
          //  style={{
          //   backgroundColor: passwordNotValid ? "#fed2d2" : "white",
          //   color: passwordNotValid ? "#ef4444" : "black",
          //   borderColor: passwordNotValid ? '#f73f3f': 'black'
          // }}    
            type="password"
            $invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </ControlContainer>
      <StyledActionDiv>
        <StyledTextButton >
          Create a new account
        </StyledTextButton>
        <StyledSignInBtn onClick={handleLogin}>Sign In</StyledSignInBtn>
      </StyledActionDiv>
    </StyledAuthInputs>
  );
}
