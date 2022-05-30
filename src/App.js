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
import Dress from './Components/Pages/Dress'
import data from './data'
import { useState } from 'react'
import Cart from './Components/Cart/Cart';
import Cosmetics from './Components/Pages/Cosmetics';
import CartFooter from './Components/CartFooter/CartFooter';


function App() {
  const { DressProducts, GameProducts ,TvProducts ,phoneProducts ,rainProducts ,shoeProducts , movieProducts ,schoolProducts ,kitchenProducts ,cosmeticProducts}= data
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const onDelete =(product)=>{
    setCartItems(cartItems.filter((x) =>x.id !== product.id))

  }
  return (
   
    <>
    <Router>

    <Navbar cartItems={cartItems}/>
    
    <Switch>
    <Route exact path='/'>
    <Slider/>
    <Cards/>
    <Footer/>

         </Route>


         <Route  path='/shoes'>
           <Shoes shoeProducts={shoeProducts} onAdd={onAdd} onRemove={onRemove}/>
           <Footer/>

         </Route>
         <Route path='/phones'>
           <Phone phoneProducts={phoneProducts} onAdd={onAdd} onRemove={onRemove} />
           <Footer/>

         </Route>
         <Route path='/rain'>
           <Rain rainProducts={rainProducts} onAdd={onAdd} onRemove={onRemove} />
           <Footer/>

         </Route>
         <Route path='/games'>
           <Games GameProducts={GameProducts} onAdd={onAdd} onRemove={onRemove}/>
           <Footer/>

         </Route>
         <Route path='/tv'>
           <Tv TvProducts={TvProducts} onAdd={onAdd} onRemove={onRemove} />
           <Footer/>

         </Route>
         <Route path='/kitchen'>
           <Kitchen kitchenProducts={kitchenProducts} onAdd={onAdd} onRemove={onRemove}/>
           <Footer/>

         </Route>
         <Route path='/movies'>
           <Movie movieProducts={movieProducts} onAdd={onAdd} onRemove={onRemove}/>
           <Footer/>

         </Route>

         <Route path='/school'>
           <School schoolProducts={schoolProducts} onAdd={onAdd} onRemove={onRemove}/>
           <Footer/>

         </Route>
         
         <Route path='/dresses'>
           <Dress DressProducts={DressProducts} onAdd={onAdd} onRemove={onRemove} />
           <Footer/>

         </Route>

         <Route path='/cart'>
           <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete}/>
           <CartFooter/>
           

         </Route>
         <Route path='/cosmetics'>
           <Cosmetics cosmeticProducts={cosmeticProducts} onAdd={onAdd} onRemove={onRemove}/>
           <Footer/>


         </Route>


    </Switch>
    </Router>
    
    


     
    
    </>
  )
}

export default App;
