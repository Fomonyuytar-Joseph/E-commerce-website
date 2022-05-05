import Navbar from './Components/Navbar/Navbar'
import Slider from './Components/Slider/Slider'
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router ,Switch,  Route } from 'react-router-dom';





function App() {
  return (
   
    <>
    
    <Navbar/>
    <Slider/>
    <Cards/>
    <Footer/>
    


     
    
    </>
  )
}

export default App;
