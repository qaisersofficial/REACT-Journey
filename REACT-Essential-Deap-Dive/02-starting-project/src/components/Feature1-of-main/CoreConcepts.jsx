import { CORE_CONCEPTS } from "../../Componentsdata.js";
import CoreConcept from '../CoreConcept/CoreConcept.jsx';
import Section from '../Feature2-of-main/Section.jsx';
export default function CoreConcepts (){
    return (
                <Section title="CoreConcepts" id="core-concepts">
        <ul>

        {/* <CoreConcept 
        title={CORE_CONCEPTS[0].title}
        description = {CORE_CONCEPTS[0].description}
        image = {CORE_CONCEPTS[0].image}
        /> */}

        {/* <CoreConcept {...CORE_CONCEPTS[0]}/> */}
        {/* we can access the array element by this unique methode   */}
        {CORE_CONCEPTS.map((conceptItem) => (
        <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}

        </ul>
        </Section>
    );
}
