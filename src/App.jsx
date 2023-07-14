import './styles/styles.scss'
import { CartProvider } from "./context/CartContext"
import { AuthContextProvider } from "./context/AuthContext"
import { ModalProvider } from "./context/ModalContext"
import AppRouter from "./router/AppRouter"


function App()  {

  return (

    <AuthContextProvider>
      <ModalProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>  
      </ModalProvider>   
    </AuthContextProvider>  
  )
}

export default App
