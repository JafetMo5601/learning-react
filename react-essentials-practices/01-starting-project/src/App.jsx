import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [ userInput, setUserInput ] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10}
  );

  const isInputValid = userInput.duration >= 1;

function handleChange(inputIdentifier, newValue) {
  console.log("Handle change");
  console.log(newValue);
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentifier]: +newValue
      }
  })
}

  return (
    <>
      <Header/>
      <UserInput onChange={handleChange} userInput={userInput}></UserInput>
      { !isInputValid && <p className="cneter"> Please enter a duration greater than zero </p>}
      { isInputValid && <Results userInput={userInput}></Results> }
    </>
  )
}

export default App
