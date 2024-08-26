import { CORE_CONCEPTS } from "./Componentsdata";
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

const CoreConcept = ({image, title, description}) => {

  return (
    <li>
      <img src = {image}  alt= {title} />
      <h3>{title}</h3>
      <p>{description}</p>
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
          {/* <CoreConcept 
          title={CORE_CONCEPTS[0].title}
          description = {CORE_CONCEPTS[0].description}
          image = {CORE_CONCEPTS[0].image}
          /> */}
          <CoreConcept {...CORE_CONCEPTS[0]}/>
          {/* <CoreConcept 
          title = {CORE_CONCEPTS[1].title}
          description = {CORE_CONCEPTS[1].description}
          image = {CORE_CONCEPTS[1].image}
          /> */}
          <CoreConcept {...CORE_CONCEPTS[1]}/>

          {/* <CoreConcept 
          title = {CORE_CONCEPTS[2].title}
          description = {CORE_CONCEPTS[2].description}
          image = {CORE_CONCEPTS[2].image}
          /> */}
          <CoreConcept {...CORE_CONCEPTS[2]}/>

          {/* <CoreConcept 
          title = {CORE_CONCEPTS[3].title}
          description = {CORE_CONCEPTS[3].description}
          image = {CORE_CONCEPTS[3].image}
          /> */}
          <CoreConcept {...CORE_CONCEPTS[3]}/>

          </ul>
        </section>
       
      </main>
    </div>
  );
}

export default App;
