
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const OrderDetail = ({id, client, items, total }) => {

    return (
        <div className="container">
            <div className="cart">
                    <div className="cart-container" style={{padding: '50px'}}>   
                   
                    {client.name} <br />
                    {client.email} <br />
                    {client.address} <br /><br />

                        <h3>Order N º {id}  </h3>
                   
                        <div className="cart-content">
                            <h3>Articles</h3>
                        {
                            items.map((prod) => <CartItem key={prod} {...prod}/>)
                        }
                        </div>
                        <div className="checkout">
                            <div className="total">
                                <div style={{padding: '50px'}}> TOTAL ${total}</div>
                            </div>
                      
                    </div> 
                    <Link className="btn" to="/products">Shopping Again?</Link>
                    </div>
                  
                </div>
           
        </div>
    )
}

export default OrderDetail