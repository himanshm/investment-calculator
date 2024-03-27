import { ChangeEvent } from 'react';
import Input from './Input';
import { InvestmentDataType } from '../util/investment';

type UserInputProps = {
  inputs: InvestmentDataType;
  onChangeInput: (identifier: string, value: number) => void;
};

function UserInput({ onChangeInput, inputs }: UserInputProps) {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <Input
          label='Initial Investment'
          id='initial-investment'
          type='number'
          value={inputs.initialInvestment}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeInput('initialInvestment', +event.target.value)
          }
          required
        />
        <Input
          label='Annual Investment'
          id='annual-investment'
          type='number'
          value={inputs.annualInvestment}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeInput('annualInvestment', +event.target.value)
          }
          required
        />
      </div>
      <div className='input-group'>
        <Input
          label='Expected Return'
          id='expected-return'
          type='number'
          value={inputs.expectedReturn}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeInput('expectedReturn', +event.target.value)
          }
          required
        />
        <Input
          label='duration'
          id='duration'
          type='number'
          value={inputs.duration}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChangeInput('duration', +event.target.value)
          }
          required
        />
      </div>
    </section>
  );
}

export default UserInput;
