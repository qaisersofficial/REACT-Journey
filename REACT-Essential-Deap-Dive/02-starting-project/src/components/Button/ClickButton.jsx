import './ClickButton.css'
const ClickButton = ({children, isClicked, ...props}) => { 
 
     return <li><button className={isClicked ? 'active' : undefined} {...props}>{children}</button></li>;
}
    export default ClickButton;
