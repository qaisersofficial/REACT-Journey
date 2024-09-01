import { useState } from 'react';
import ClickButton from '../Button/ClickButton.jsx';
import { EXAMPLES } from '../../Componentsdata'; 
import Section from './Section.jsx';
import Tab from './Tab.jsx';
export default function Examples() {
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
    return(
        <Section title = "Examples" id = "examples">
          <Tab buttons = {
            <>
             <ClickButton isClicked={selectedTopic=== 'Components'} onClick={() => clickhandler("Components")}>Components</ClickButton>
                <ClickButton isClicked={selectedTopic=== 'Props'} onClick={() => clickhandler("Props")}>Props</ClickButton>
                <ClickButton isClicked={selectedTopic=== 'State'} onClick={() => clickhandler("State")}>States</ClickButton>   
                <ClickButton isClicked={selectedTopic=== 'JSX'} onClick={() => clickhandler("JSX")}>JSX</ClickButton>  
            </>
          }>
          {content}
          </Tab>
      </Section >
    );
}