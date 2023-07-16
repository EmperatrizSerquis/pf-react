import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import TitleContainer from '../TitleContainer/TitleContainer'
import CartItem from "../CartItem/CartItem"
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

const CartList = () => {
    const { cart, totalAmount, totalItems, emptyCart } = useContext(CartContext)

    const {  user } = useContext(AuthContext)

    return (
        <div>
            <TitleContainer>
                <h2 className="text-primary">Cart Detail</h2>                
            </TitleContainer> 
            <div className="cart-container">
                <div className="cart">
                    <h3 className="cart-heading">Shopping Cart</h3>
                    <h5 className="cart-action"><button onClick={emptyCart} className="cart-action">Remove All</button></h5>
                </div>

                <div className="cart-content">
                    {
                        cart.map((prod) => <CartItem key={prod.id} {...prod}/>)
                    }                    
                    <hr />
                    <div className="checkout">
                        <div className="total">
                            <div>
                                <div className="subtotal">Sub-total</div>
                                <div className="items">{totalItems()} items</div>
                            </div>
                            <div className="total-amount">${totalAmount()}</div>
                        </div>
                    </div>                  
                </div>
                {
                    user.logged ?

                    <button className='button-cart'><Link  to={"/checkout"}>Checkout</Link></button>                       
                    :
                    <button className='button-cart'><Link  to={"/login"}>Login & Checkout</Link></button>
                    
                } 
                
            </div>

        </div>
    )
}

export default CartList