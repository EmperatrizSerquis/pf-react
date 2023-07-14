import { Link } from "react-router-dom"

const ItemCard = ({id, name, code,  brand, price, img,  category, stock, power, tone}) => {

    return (
        <li>
            <div className='product__card'>
                <figure className="card__banner">
                    
                    <img src={img} alt={name} width="189" height="189" loading="lazy"/>

                </figure>
            <div className="brand-wrapper">
                <p>{code} - {brand} - {category}</p>
            </div>
                <h4 className="card__title">{name}</h4>
                <div>
                {stock <= 10 && <p style={{fontWeight:700, color:'#9c27b0', fontSize: '16px'}}> Only: {stock} items!</p>}

                  <data className="price">$ {price}</data>
                  <p>{power} - {tone}</p>
                </div>
                <div className="btn__wrapper">
                    <Link className="btn__card" to={`/product/${id}`}>See More</Link>
                </div>
            </div>
        </li>
    )
}

export default ItemCard