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
import Checkout from './Components/Checkout/Checkout';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';


function App() {
  const { DressProducts, GameProducts ,TvProducts ,phoneProducts ,rainProducts ,shoeProducts , movieProducts ,schoolProducts ,kitchenProducts ,cosmeticProducts ,colors}= data
  const [cartItems, setCartItems] = useState([]);

  










  var Total =  cartItems.reduce((a, c) => a + c.qty * c.price, 0);

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

    
    
    <Switch>
    <Route exact path='/'>
           <Signup />
          


         </Route>


         
    <Route  path='/homepage'>
    <Navbar cartItems={cartItems} colors={colors}/>
    <Slider/>
    <Cards/>
    <Footer/>

         </Route>

        
         <Route  path='/shoes'>
         <Navbar cartItems={cartItems} colors={colors}/>
           <Shoes shoeProducts={shoeProducts} onAdd={onAdd} onRemove={onRemove}/>
           <Footer/>

         </Route>
         <Route path='/phones'>
         <Navbar cartItems={cartItems} colors={colors}/>
           <Phone phoneProducts={phoneProducts} onAdd={onAdd} onRemove={onRemove} />
           <Footer/>

         </Route>
         <Route path='/rain'>
         <Navbar cartItems={cartItems} colors={colors}/>
           <Rain rainProducts={rainProducts} onAdd={onAdd} onRemove={onRemove} />
           <Footer/>

         </Route>
         <Route path='/games'>
         <Navbar cartItems={cartItems} colors={colors}/>
           <Games GameProducts={GameProducts} onAdd={onAdd} onRemove={onRemove}/>
           <Footer/>

         </Route>
         <Route path='/tv'>
         <Navbar cartItems={cartItems} colors={colors}/>
           <Tv TvProducts={TvProducts} onAdd={onAdd} onRemove={onRemove} />
           <Footer/>

         </Route>
         <Route path='/kitchen'>
         <Navbar cartItems={cartItems} colors={colors}/>
           <Kitchen kitchenProducts={kitchenProducts} onAdd={onAdd} onRemove={onRemove}/>
           <Footer/>

         </Route>
         <Route path='/movies'>
         <Navbar cartItems={cartItems} colors={colors}/>
           <Movie movieProducts={movieProducts} onAdd={onAdd} onRemove={onRemove}/>
           <Footer/>

         </Route>

         <Route path='/school'>
         <Navbar cartItems={cartItems} colors={colors}/>
           <School schoolProducts={schoolProducts} onAdd={onAdd} onRemove={onRemove}/>
           <Footer/>

         </Route>
         
         <Route path='/dresses'>
         <Navbar cartItems={cartItems} colors={colors}/>
           <Dress DressProducts={DressProducts} onAdd={onAdd} onRemove={onRemove} />
           <Footer/>

         </Route>

         <Route path='/cart'>
         <Navbar cartItems={cartItems} colors={colors}/>
           <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete}/>
           <CartFooter/>
           

         </Route>
         <Route path='/cosmetics'>
         <Navbar cartItems={cartItems} colors={colors}/>
           <Cosmetics cosmeticProducts={cosmeticProducts} onAdd={onAdd} onRemove={onRemove}/>
           <Footer/>


         </Route>
             
         <Route path='/Checkout'>
           <Checkout Total={Total}/>
         
          


         </Route>
         
         <Route path='/login'>
           <Login/>
          


         </Route>

    </Switch>
    </Router>
    
    


     
    
    </>
  )
}

export default App;
