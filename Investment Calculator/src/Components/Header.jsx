// Importing the image (logo) from the assets folder
import moneyimg from "../assets/investment-calculator-logo.png"
export default function Header() {
  return (
    <header id="header">
       {/* Displaying the imported image with an alt description */}
        <img  src={ moneyimg } alt="Logo of bag showing money "/>
        <h1>Investment Calculator</h1>
    </header>
  )
}