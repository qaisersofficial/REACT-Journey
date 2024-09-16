import moneyimg from "../assets/investment-calculator-logo.png"
export default function Header() {
  return (
    <header id="header">
        <img  src={ moneyimg } alt="Logo of bag showing money "/>
        <h1>Investment Calculator</h1>
    </header>
  )
}