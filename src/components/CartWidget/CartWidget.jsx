import Badge from '@mui/material/Badge';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from "react-router-dom"


export default function CartWidget() {

    const { showCartContent, totalItems } = useContext(CartContext)
    return (
        <div className="cart">
            <button> 
                <Link to="/cart">
                    <ShoppingCartCheckoutIcon color="action" /> 
             
                    <Badge badgeContent={totalItems()} color="secondary"></Badge>   
                </Link> 
            </button>  
    
        </div>
    );
  }
