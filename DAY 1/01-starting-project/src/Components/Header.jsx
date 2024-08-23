import React from "react";
const reactdetail = ['Fundamental', 'Crucial', 'Core'];
function genrandomint(high){
  return Math.floor(Math.random() * (high + 1));
} 
 export const Header = () => {
  const description = reactdetail[genrandomint(2)];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}