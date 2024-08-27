import './ClickButton.css'
const ClickButton = ({children, onTapped}) => { 
 
     return <li><button onClick={onTapped}>{children}</button></li>;
}
    export default ClickButton;
