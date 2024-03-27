import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import { InvestmentDataType } from './util/investment';
import Results from './components/Results';

const initialData: InvestmentDataType = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInputs, setUserInputs] = useState(initialData);

  const inputIsValid = userInputs.duration >= 1;

  function handleChange(inputIdentifier: string, newValue: number) {
    setUserInputs((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput inputs={userInputs} onChangeInput={handleChange} />
      {!inputIsValid && (
        <p className='center'>Please enter valid input data!</p>
      )}
      {inputIsValid && <Results inputs={userInputs} />}
    </>
  );
}

export default App;
