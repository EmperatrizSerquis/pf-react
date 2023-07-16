import { useState, useEffect, createContext, useContext } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const startCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(startCart)

    const [showCart, setShowCart] = useState(false)
  
    const addToCart = (item) => {
        if(isInCart(item.id)) {           
            updateQuantity(item.id, item.quantity)            
        } else {
            setCart([...cart, item])  
                
        }    
        Swal.fire({
            title: `You have added ${item.quantity} ${item.name} to your cart`,
            icon: "success",
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
          })

    }

    const updateQuantity = (id, quantity) => {

        const newCart = cart.slice()
        const item = newCart.find(i => i.id === id)
        item.quantity = quantity
        setCart(newCart)
    }

    const deleteProduct = (id) => {
        setCart( cart.filter((prod) => prod.id !== id) )
    }
  
    const isInCart = (id) => {
      return cart.some((prod) => prod.id === id)
    }

    const totalAmount = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
    }

    const totalItems = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }

    const emptyCart = () => {
        setCart([]);
    }

    const showCartContent = () => {
        setShowCart(true)
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    return (
        <CartContext.Provider value={{
            cart,
            showCartContent,
            addToCart,
            isInCart,
            totalAmount,
            emptyCart,
            deleteProduct,
            totalItems
        }}>
            {children}
        </CartContext.Provider>
    )
}