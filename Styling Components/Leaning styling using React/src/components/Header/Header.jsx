import logo from '../../assets/logo.png';
import './Header.css';
import classes from './Header.module.css';
import styled from 'styled-components';
const StyledHeaderComponent = styled.header `
display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
`
const StyledImage = styled.img `
  object-fit: contain;
  margin-bottom: 2rem;
  width: 11rem;
  height: 11rem;
`
const StyledMainHeading = styled.h1 `
  font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: uppercase;
    color: #9a3412;
    font-family: 'Pacifico', cursive;
    margin: 0;
`
export default function Header() {
  return (
    <StyledHeaderComponent>
      <StyledImage src={logo} alt="A canvas" />
      <StyledMainHeading>ReactArt</StyledMainHeading>
      <p 
      // style={{
      //   color:"#a39191",
      //   textAlign:' center',
      //   margin: 0
      // }}
      //this class name will same because i prefer here to use css module styling 
      className={classes.paragragh}
       >A community of artists and art-lovers.</p>
    </StyledHeaderComponent>
  );
}
