import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import { CORE_CONCEPTS } from "./Componentsdata";
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import ClickButton from './components/Button/ClickButton.jsx';
import { EXAMPLES } from './Componentsdata'; 
function App() {
  // Hook and useState
  const [selectedTopic, setSelectedtopic] =  useState('Components')
  function clickhandler(selectedbutton){
    // selectedbutton =>  Components Props States JSX
setSelectedtopic(selectedbutton);
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
                  <ClickButton onTapped={() => clickhandler("Props")}>Props</ClickButton>
                  <ClickButton onTapped={() => clickhandler("State")}>States</ClickButton>   {/* will learn it later*/}
                  <ClickButton onTapped={() => clickhandler("JSX")}>JSX</ClickButton>  
                         
              </menu>
            
             <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
             </div>
        </section >
      </main>
    </div>
  );
}

export default App;
