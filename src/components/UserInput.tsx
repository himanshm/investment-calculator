import Input from './Input';

function UserInput() {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <Input
          label='Initial Investment'
          id='inital-investment'
          type='number'
          required
        />
        <Input
          label='Annual Investment'
          id='annual-investment'
          type='number'
          required
        />
      </div>
      <div className='input-group'>
        <Input
          label='Expected Return'
          id='expected-return'
          type='number'
          required
        />
        <Input label='duration' id='duration' type='number' required />
      </div>
    </section>
  );
}

export default UserInput;
