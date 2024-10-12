import { useState } from 'react';
import "./AuthInputs.css";
// import classes from '../Header/Header.module.css';
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
    <div id="auth-inputs">
      <div className="controls">
        <p >
          <label className={`label ${emailNotValid ? "invalid" : ""}`}>Email</label>
          <input
          // style={{
          //   backgroundColor: emailNotValid ? "#fed2d2" : "white",
          //   color: emailNotValid ? "#ef4444" : "black",
          //   borderColor: emailNotValid ? '#f73f3f': 'black'
          // }}            
          type="email"
            className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p >
          <label className={`label ${passwordNotValid ? "invalid" : ""}`}>Password</label>
          <input
          //  style={{
          //   backgroundColor: passwordNotValid ? "#fed2d2" : "white",
          //   color: passwordNotValid ? "#ef4444" : "black",
          //   borderColor: passwordNotValid ? '#f73f3f': 'black'
          // }}    
            type="password"
            className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </div>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className='button' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
