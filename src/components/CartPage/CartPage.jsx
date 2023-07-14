import InfoContainer from '../InfoContainer/InfoContainer'
import Fancy from "../Fancy/Fancy"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Button from "../Button/Button"
import CartList from "../CartList/CartList"
import CartEmpty from "../CartEmpty/CartEmpty"


const CartPage = () => {
    const { cart } = useContext(CartContext)
    
        return (

            <div>
                <Fancy />

                {

                    cart.length === 0 
                    ? <CartEmpty/>
                    : <CartList/>

                }

                <Button/>
                <InfoContainer>
                Keep in Touch
                <p>mail@mail.com</p>
                </InfoContainer>
            
            
            
            
            </div>
        )
        
}

export default CartPage