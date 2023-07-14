
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'

const CartItem = ({id, name, price, brand, img, stock, quantity}) => {

    const { deleteProduct } = useContext(CartContext)
   
    return (
        <div className="cart-item" key={id}>
            <div className="image-box">
                <img src={img} alt={name} />
            </div>
        
            <div className="cart-about">
                <h2 className="cart-title"><Link to={`/product/${id}`} >{name}</Link></h2>
                <h3 className="cart-subtitle">{brand}</h3>
                <button onClick={() => deleteProduct(id)} className="cart-action">
                <DeleteForeverIcon color="secondary" />   </button> 
            </div>
            <div className="counter">
            
                <div className="count">{quantity}</div>
                
            </div>
            <div className="prices">
            <div className="unit-amount">Unit Price: ${price}</div>
                <div className="amount">${price*quantity}</div>
            </div>
        </div>
        
    )
}

export default CartItem

