import logo from '../../assets/logo.png';
import './Header.css';
import classes from './Header.module.css';
export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p 
      // style={{
      //   color:"#a39191",
      //   textAlign:' center',
      //   margin: 0
      // }}
      className={classes.paragragh}
       >A community of artists and art-lovers.</p>
    </header>
  );
}
