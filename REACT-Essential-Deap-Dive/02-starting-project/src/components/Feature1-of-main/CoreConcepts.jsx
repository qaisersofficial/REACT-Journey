import { CORE_CONCEPTS } from "../../Componentsdata.js";
import CoreConcept from '../CoreConcept/CoreConcept.jsx';

export default function CoreConcepts (){
    return (
                <section id="core-concepts">
        <h2>Core Concepts</h2>
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
        </section>
    );
}
