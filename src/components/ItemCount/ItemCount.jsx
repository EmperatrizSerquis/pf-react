
const ItemCount = ({ stock, quantity, setQuantity,  handleAdd }) => {

    const handlePlus = () => {       
        quantity < stock && setQuantity(quantity + 1)
    }

    const handleLess = () => {
        quantity > 1 && setQuantity(quantity - 1)
    }


    return (
        <div className="counter">
            <button onClick={handleLess} className={quantity === 1 ? "btn btn-action" : "btn btn-shop"} disabled={quantity === 1}>-</button>
            <span className="num">{quantity}</span>
            <button onClick={handlePlus} className="btn btn-action" disabled={quantity === stock}>+</button>

            <button onClick={handleAdd}  className={quantity === stock ? "btn btn-action" : "btn btn-shop"} >Add to Cart</button>
        </div>
    )
}

export default ItemCount