import NavBar from "../components/NavBar/NavBar"
import Home from "../components/Home/Home"
import ServicesListContainer from "../components/ServicesListContainer/ServicesListContainer"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import TestimonialsContainer from "../components/TestimonialsContainer/TestimonialsContainer"
import Footer from "../components/Footer/Footer"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import About from "../components/About/About"
import Contact from "../components/Contact/Contact"
import CartPage from '../components/CartPage/CartPage'
import LoginPage from '../components/Auth/LoginPage'
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { CartContext } from "../context/CartContext"
import RegisterPage from "../components/Auth/RegisterPage"
import Checkout from "../components/Checkout/Checkout"
import Account from "../components/Account/Account"


const AppRouter = () => {
  const { user } = useContext(AuthContext)
    const { cart } = useContext(CartContext)

    return (
        <BrowserRouter>
                <>
                  <NavBar /> 
                  <Routes>
                    <Route path="/" element={< Home/>} />
                    <Route path="/products" element={<ItemListContainer />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/product/:itemId" element={<ItemDetailContainer />}/>
                    <Route path="/cart" element={<CartPage/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/register" element={<RegisterPage />}/>
                    {cart.length > 0 && <Route path="/checkout" element={< Checkout/>} />  }
                    {user.logged && <Route path="/account" element={< Account/>} />}
                    <Route path="*" element={<Navigate to="/"/>}/>
                  </Routes>
                </>  
            <ServicesListContainer />
            <TestimonialsContainer />
            <Footer />          
        </BrowserRouter>
    )
}

export default AppRouter