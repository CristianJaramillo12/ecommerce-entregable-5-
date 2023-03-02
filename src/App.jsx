import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Router, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/shared/Header';
import CartPage from './pages/CartPage';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import ProtectedRoutes from './pages/ProtectedRoutes';
import PurchasesPages from './pages/PurchasesPages';
import RegisterPages from './pages/RegisterPages';
import { LoginPages } from './pages/styles/LoginPages';
import { getCartThunk } from './store/slices/cart.slice';
import { getAllProductsThunk } from './store/slices/products.slice';


function App() {

  const { cart } = useSelector(state => state)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
    dispatch(getCartThunk())
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductPage />}></Route>
        <Route path='/user'>
          <Route path='register' element={<RegisterPages />}></Route>
          <Route path='login' element={<LoginPages />} />
        </Route>
        {/* Protected routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path='/cart' element={<CartPage />} />
          <Route path='/purchases' element={<PurchasesPages />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
