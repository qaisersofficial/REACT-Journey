import { useState } from 'react';
import Header from './components/Header/Header.jsx';
import { CORE_CONCEPTS } from "./Componentsdata";
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import ClickButton from './components/Button/ClickButton.jsx';
import { EXAMPLES } from './Componentsdata'; 
function App() {
  // Hook and useState
  const [selectedTopic, setSelectedtopic] =  useState()
  function clickhandler(selectedbutton){
    // selectedbutton =>  Components Props States JSX
setSelectedtopic(selectedbutton);
}
var content = <p>Please Click any button to show topic</p>;
if(selectedTopic) {
  content = <div id="tab-content">
  <h3>{EXAMPLES[selectedTopic].title}</h3>
  <p>{EXAMPLES[selectedTopic].description}</p>
  <pre>
    <code>{EXAMPLES[selectedTopic].code}</code>
  </pre>
 </div>;
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
                  <ClickButton isClicked={selectedTopic=== 'Components'} onTapped={() => clickhandler("Components")}>Components</ClickButton>
                  <ClickButton isClicked={selectedTopic=== 'Props'} onTapped={() => clickhandler("Props")}>Props</ClickButton>
                  <ClickButton isClicked={selectedTopic=== 'State'}onTapped={() => clickhandler("State")}>States</ClickButton>   
                  <ClickButton isClicked={selectedTopic=== 'JSX'} onTapped={() => clickhandler("JSX")}>JSX</ClickButton>  
                         
              </menu>
            
             {content}
        </section >
      </main>
    </div>
  );
}

export default App;
