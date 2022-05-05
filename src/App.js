import Navbar from './Components/Navbar/Navbar'
import Slider from './Components/Slider/Slider'
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router ,Switch,  Route } from 'react-router-dom';
import Shoes from './Components/Pages/Shoes';
import Phone from './Components/Pages/Phone';





function App() {
  return (
   
    <>
    <Router>

    <Navbar/>
    
    <Switch>
    <Route exact path='/'>
    <Slider/>
    <Cards/>

         </Route>


         <Route  path='/shoes'>
           <Shoes/>

         </Route>
         <Route path='/phones'>
           <Phone/>

         </Route>

    </Switch>
    </Router>
    <Footer/>
    


     
    
    </>
  )
}

export default App;
