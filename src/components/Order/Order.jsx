import {  useState, useEffect } from 'react'
import { useCartContext } from "../../context/CartContext"
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'
import OrderDetail from '../OrderDetail/OrderDetail'
import { doc, getDoc} from 'firebase/firestore'
import { db } from '../../firebase/config'


const Order = () => {
    const { emptyCart } = useCartContext()
    const [order, setOrder] = useState(null)
    const [loading, setLoading] = useState(true)
    const { orderId } = useParams()

    useEffect(() => {
        setLoading(true)

        const orderRef = doc(db, "orders", orderId)

        getDoc(orderRef)

            .then((doc) => {

                setOrder({
                    ...doc.data(),
                    id: doc.id
                })
            })
            .catch((err) => console.log(err))
            .finally(() => {
               
                setLoading(false)

            })

    }, [orderId])


    return (
        <div className="container">
             <div className="cart-container" style={{padding: '50px'}}> 
                <h2 >Your Purchase was succesfully registered!</h2>
                <hr/>
                </div>

                {
            loading 
                ? <Loader/>
                : <OrderDetail {...order}/>
           }
            </div>
    )
}

export default Order