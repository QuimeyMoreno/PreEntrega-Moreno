import './App.css'
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import CartContextProvider from './components/context/CartContext';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />}></Route>
            <Route path={"/productos"} element={<ItemListContainer />}></Route>
            <Route path={"/categoria/:id"} element={<ItemListContainer />}></Route>
            <Route path={"/item/:id"} element={<ItemDetailContainer />}></Route>
            <Route path={"/cart"} element={<Cart />}></Route>
            <Route path={"/checkout"} element={<Checkout />}></Route>
            <Route path={"*"} element={<Error404 />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>


    </>
  )
}

export default App
