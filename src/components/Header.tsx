import logoImg from '../assets/investment-calculator-logo.png';
function Header() {
  return (
    <header id='header'>
      <img src={logoImg} alt='Logo showing a money bag' />
      <h1>Investment Calculator</h1>
    </header>
  );
}

export default Header;
