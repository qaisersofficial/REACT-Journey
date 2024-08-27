import Header from './components/Header/Header.jsx';
import { CORE_CONCEPTS } from "./Componentsdata";
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import ClickButton from './components/Button/ClickButton.jsx'
function App() {
  function clickhandler(selectedbutton){
    // selectedbutton =>  Components Props States JSX
  alert(selectedbutton);
}
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
         
          <CoreConcept {...CORE_CONCEPTS[1]}/>

          <CoreConcept {...CORE_CONCEPTS[2]}/>
          
          <CoreConcept {...CORE_CONCEPTS[3]}/>

          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
              <menu>
                  <ClickButton  onTapped={() => clickhandler("Components")}>Components</ClickButton>
                  <ClickButton onTapped={() => clickhandler("props")}>Props</ClickButton>
                  <ClickButton onTapped={() => clickhandler("States")}>States</ClickButton>   {/* will learn it later*/}
                  <ClickButton onTapped={() => clickhandler("JSX")}>JSX</ClickButton>            
              </menu>
        </section >
      </main>
    </div>
  );
}

export default App;
