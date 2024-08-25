// import React, {Component} from "react";
// import { Header } from "./Components/Header";
import reactimg from "./assets/react-core-concepts.png";
const reactdetail = ['Fundamental', 'Crucial', 'Core'];
function genrandomint(high){
  return Math.floor(Math.random() * (high + 1));
} 
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
function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Lets get stated!</h2>
      </main>
    </div>
  );
}

export default App;
