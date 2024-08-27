import './ClickButton.css'
const ClickButton = (props) => { 
    function clickhandler(){
        alert("You Click a button");
    }
     return <li><button onClick={clickhandler}>{props.children}</button></li>;
}
    export default ClickButton;
