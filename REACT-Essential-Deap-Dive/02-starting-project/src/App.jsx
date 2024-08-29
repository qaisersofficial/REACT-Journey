import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/Feature1-of-main/CoreConcepts.jsx';
import Examples from './components/Feature2-of-main/Examples.jsx';
function App() {

  return (
    <>
      <Header />
      <main>
          <CoreConcepts/>
          <Examples/> 
      </main>
    </>
  );
}

export default App;
