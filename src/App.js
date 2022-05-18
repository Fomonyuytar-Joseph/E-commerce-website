import Navbar from './Components/Navbar/Navbar'
import Slider from './Components/Slider/Slider'
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router ,Switch,  Route } from 'react-router-dom';
import Shoes from './Components/Pages/Shoes';
import Phone from './Components/Pages/Phone';
import Rain from './Components/Pages/Rain';
import Games from './Components/Pages/Game'
import Tv from './Components/Pages/Tv';
import Kitchen from './Components/Pages/Kitchen';
import Movie from './Components/Pages/Movie';
import School from './Components/Pages/School';





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
         <Route path='/rain'>
           <Rain/>

         </Route>
         <Route path='/games'>
           <Games/>

         </Route>
         <Route path='/tv'>
           <Tv/>

         </Route>
         <Route path='/kitchen'>
           <Kitchen/>

         </Route>
         <Route path='/movies'>
           <Movie/>

         </Route>

         <Route path='/school'>
           <School/>

         </Route>

    </Switch>
    </Router>
    <Footer/>
    


     
    
    </>
  )
}

export default App;
