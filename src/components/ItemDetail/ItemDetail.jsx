import { useState, useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({id, name, code, description, brand, price, img, category, stock, power, tone }) => {

    const { addToCart, isInCart } = useContext(CartContext)

    const qSave = Number(localStorage.getItem('quantity')) || 1

    const [quantity, setQuantity] = useState(1)

    const navigate = useNavigate()

    const handleAdd = () => {
        const item = {
            id, 
            name,
            code, 
            description, 
            brand, 
            price, 
            img, 
            category,
            stock, 
            power,
            tone,
            quantity            
        }
        addToCart(item)
    }

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className="container product">
            <button onClick={handleBack} className="btn btn-primary">GO Back</button>
            
            <div className="product__details">
                <div className="product__detail__img">
                    <figure className="product__display">
                        <img src={img} width="700" height="700" loading="lazy"
                        alt={name} className="w-100" />
                    </figure>
                  
                </div>
                
                <div className="product__detail__content">
                    <h3 className="product__title">{name}</h3>
                    <h4> CATEGORY: <span> {category} </span> </h4>
                    {stock <= 10 && <p style={{fontWeight:700, color:'#9c27b0'}}>Only: {stock} items!</p>}
                    
                    <h4> IN STOCK: <span> {stock} </span> </h4>
                    <h3 className="product__price">Price: ${price}</h3>
                    <p className="product__text">{description}</p>
                  
                    <ItemCount 
                        stock={stock}
                        quantity={quantity}
                        setQuantity={setQuantity}
                        handleAdd={handleAdd}
                    />

                    {
                        isInCart(id)
                        && 
                        <div className="text-center">
                            <p className="mb-20">This Item is already in your Cart.  </p> 
                            <Link className="btn btn-center" to="/cart">Buy Now</Link>
                        </div>
                              
                    }

           
                <h4 className="description__title">Additional Information :</h4>
                    <table className="description__table" border="1px">
                        <tbody>
                        <tr className="table-row">
                            <th className="table-heading" scope="row">Brand</th>
                            <td className="table-data">{brand}</td>
                        </tr>

                        <tr className="table-row">
                            <th className="table-heading" scope="row">Power</th>
                            <td className="table-data">{power}</td>
                        </tr>
                        <tr className="table-row">
                            <th className="table-heading" scope="row">Tone</th>
                            <td className="table-data">{tone}</td>
                        </tr>
                        </tbody>
                    </table>

                </div>

            </div>
           
        </div>
    )
}

export default ItemDetail