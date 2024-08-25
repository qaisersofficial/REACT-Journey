// import React, {Component} from "react";
// import { Header } from "./Components/Header";
import reactimg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import configImg from "./assets/config.png";
import js_ui from "./assets/jsx-ui.png";
import statemanagement from "./assets/state-mgmt.png";
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

const CoreConcept = (props) => {

  return (
    <li>
      <img src = {props.image}  alt= {props.title} />
      <h3>{props.Title}</h3>
      <p>{props.Description}</p>
    </li>
  );
}
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept Title="Fundamental"
              Description = "The core concepts of React"
              image = {componentsImg} />
              <CoreConcept Title="Configurable"
              Description = " React concepts you will need for almost any app you are going to build!"
              image = {configImg}/>
              <CoreConcept Title="JSX/UI"
              Description = "React provides you with the JSX UI"
              image = {js_ui}/>
              <CoreConcept Title="State Management"
              Description = "React concepts will amerge you about state management"
              image = {statemanagement}/>
          </ul>
        </section>
       
      </main>
    </div>
  );
}

export default App;
