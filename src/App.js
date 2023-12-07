
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer.jsx';
import menBanner from '../src/Components/Assets/banner_mens.png'
import womenBanner from '../src/Components/Assets/banner_women.png'
import kidsBanner from '../src/Components/Assets/banner_kids.png'
function App() {
  return (
     <div>
      <BrowserRouter>
           <Navbar/>
           <Routes>
              <Route path='/' element = {<Shop/>}/>
              <Route path='/mens' element = {<ShopCategory banner= {menBanner} Category = "men"/>} />
              <Route path='/womens' element = {<ShopCategory banner= {womenBanner}  Category = "women"/>} />
              <Route path='/kids' element = {<ShopCategory banner= {kidsBanner}  Category = "kid"/>} />
              <Route path='/product' element = {<Product/>} >
                   <Route path=':productId' element = {<Product/>} />
              </Route>
              <Route path='/cart' element = {<Cart/>} />
              <Route path='/login' element = {<LoginSignup/>} />
           </Routes>
           <Footer/>
      </BrowserRouter>
     </div>
  );
}

export default App;
