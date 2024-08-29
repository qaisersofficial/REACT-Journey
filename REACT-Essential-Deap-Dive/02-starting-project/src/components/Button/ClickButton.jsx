import './ClickButton.css'
const ClickButton = ({children, onTapped, isClicked}) => { 
 
     return <li><button className={isClicked ? 'active' : undefined} onClick={onTapped}>{children}</button></li>;
}
    export default ClickButton;
