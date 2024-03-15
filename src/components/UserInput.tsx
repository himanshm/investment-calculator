import { ChangeEvent, useState } from 'react';
import Input from './Input';
import { InvestmentDataType } from '../util/investment';

const initialData: InvestmentDataType = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function UserInput() {
  const [userInputs, setUserInputs] = useState(initialData);

  function handleChange(inputIdentifier: string, newValue: number) {
    setUserInputs((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }
  return (
    <section id='user-input'>
      <div className='input-group'>
        <Input
          label='Initial Investment'
          id='initial-investment'
          type='number'
          value={userInputs.initialInvestment}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange('initialInvestment', +event.target.value)
          }
          required
        />
        <Input
          label='Annual Investment'
          id='annual-investment'
          type='number'
          value={userInputs.annualInvestment}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange('annualInvestment', +event.target.value)
          }
          required
        />
      </div>
      <div className='input-group'>
        <Input
          label='Expected Return'
          id='expected-return'
          type='number'
          value={userInputs.expectedReturn}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange('expectedReturn', +event.target.value)
          }
          required
        />
        <Input
          label='duration'
          id='duration'
          type='number'
          value={userInputs.duration}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleChange('duration', +event.target.value)
          }
          required
        />
      </div>
    </section>
  );
}

export default UserInput;
