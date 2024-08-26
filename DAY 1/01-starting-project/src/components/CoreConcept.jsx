import { CORE_CONCEPTS } from "./Componentsdata";
const CoreConcept = ({image, title, description}) => {

    return (
      <li>
        <img src = {image}  alt= {title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }