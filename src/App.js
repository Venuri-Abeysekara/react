import 'bulma/css/bulma.css';
import './App.css';


import Navbar from './components/nav.js';
import MainContainer from './components/maincontainer';
import AboutSection from './components/aboutsection';
import Work from './components/work';
import Education from './components/education';
import AwardsAndCertifications from './components/awards';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainContainer/>
      <AboutSection/>
      <Work/>
      <Education/>
      <AwardsAndCertifications/>
    </div>
  );
}

export default App;
