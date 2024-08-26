import reactimg from "../../assets/react-core-concepts.png";

const reactdetail = ['Fundamental', 'Crucial', 'Core'];
function genrandomint(high){
  return Math.floor(Math.random() * (high + 1));
} 
// export default function Header() { ... }this approach is also valid 
const Header = () => {
    const description = reactdetail[genrandomint(2)];
    return (
      <header>
        {/* dynamicaly access the images */}
        <img src={reactimg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }
  export default Header;