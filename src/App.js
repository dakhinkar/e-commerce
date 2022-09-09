
import { Route, Routes,Navigate,  } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import MainNavBar from './Components/MainNavBar/NavBar';
import ProductDetail from './Pages/ProductDetail';
import Products from './Pages/Products';
import FavItem from './Pages/CartItems/FavItem';
import Cart from './Pages/CartItems/Cart';
import Login from './Pages/Auth/Login';

import AuthContext from './Context/AuthContext';
import { useContext } from 'react';
function App() {
  const authCxt = useContext(AuthContext);
  
  return (
   

    <div className="container mx-auto">
      <MainNavBar/>
      <Navbar/>
      <Routes>
          <Route path='/' exact element={<Products/>}></Route>
          <Route path='/:category_id'  element={<Products/>}></Route>
          <Route path='/product/:product_id' element={<ProductDetail />}></Route>
    
        <Route
          path='/favrioute/'
          element={authCxt.isLoggedIn ? <FavItem /> : <Navigate to='/' replace />}>
            
          </Route>
        <Route
          path='/mycart/'
          element={authCxt.isLoggedIn ? <Cart /> : <Navigate to='/' replace />}> 
          </Route>
        <Route path='/auth/' element={<Login />} />
        <Route path='*' element={<Navigate to='/' replace />}>
          
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
