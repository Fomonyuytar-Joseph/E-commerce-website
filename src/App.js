import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FirstAdvert from './Components/Adverts/FirstAdvert';



function App() {
  return (
    <>
    <Router>
      <Navbar/>
      </Router>
      <FirstAdvert/>
      
      
      </>
    
  );
}

export default App;
