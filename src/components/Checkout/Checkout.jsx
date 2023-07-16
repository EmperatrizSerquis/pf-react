import { useContext, useState, useEffect } from 'react'
import { useCartContext } from "../../context/CartContext"
import { AuthContext } from '../../context/AuthContext'
import { Link, useNavigate } from "react-router-dom"
import { writeBatch, collection, where, documentId, addDoc,  doc, getDoc, query, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"
import Select from "../Select/Select"
import CartItem from "../CartItem/CartItem"


const Checkout = () => {
    const { cart, totalAmount, deleteProduct, emptyCart } = useCartContext()

    const navigate = useNavigate()

    function  eliminarCarrito(orderId) {
        emptyCart()
        navigate(`/order/${orderId}`)    
    }


    const { user } = useContext(AuthContext)

    const [orderId, setOrderId] = useState(null)

    const userEmail = localStorage.getItem('email') || ''
    const userName = localStorage.getItem('nombre') || ''
    const userAddress = localStorage.getItem('address') || ''
    

    const [emailUser, setEmailUser] = useState(userEmail)

    useEffect(() => {
        setEmailUser(user.email)
    }, [user])


    const [values, setValues] = useState({
        name: userName,
        address: userAddress,
        email: emailUser,
        payment: 'Cash'
    })

    const [errors, setErrors] = useState({
        nameError: '',
        addressError: '',
        emailError: ''
    })

    const [errorName, setNameError] = useState(false)
    const [errorAddress, setAddressError] = useState(false)
    const [errorEmail, setEmailError] = useState(false)
    const [noProducts, setNoProducts] = useState('')
    const [productsOut, setproductsOut] = useState([])

    const [productsBuyed, setProductsBuyed] = useState([])


    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
       
        // validacion
        if (values.name.length === 0) {
            setErrors({     
                ...errors,
                nameError: 'Your name is required.'
            })
            setNameError(true) 
            return
        }
        if (values.address.length === 0) {
            setErrors({
                ...errors,
                addressError: 'Your address is required.'
                
            })
            setAddressError(true)
            return
        }
        if (values.email.length === 0) {
            setErrors({
                ...errors,
                emailError: 'Your email is required.'
                
            })
            setEmailError(true)
            return
        }
        if (values.email != emailUser) {
            setErrors({
                ...errors,
                emailError: 'Your email must be the login email.'
            })
            setEmailError(true)
            return
        }

        setAddressError(false)
        setEmailError(false)
        setNameError(false) 
        localStorage.setItem('nombre', values.name)
        localStorage.setItem('address', values.address)
       
        const order = {
            client: values,
            items: cart,
            total: totalAmount(),
            fecha: new Date()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productsRef = collection(db, "products")

        const q = query(productsRef, where(documentId(), "in", cart.map(item => item.id)))

        const products = await getDocs(q)

        const outOfStock= []
        

        products.docs.forEach((doc) => {
            const item = cart.find((prod) => prod.id === doc.id)
            const stock = doc.data().stock

            if (stock >= item.quantity) {
                const newStock = stock - item.quantity
                batch.update(doc.ref, {
                    stock: newStock
                })
               
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            setProductsBuyed[order.items]

            batch.commit()
            
                .then(() => {
                    addDoc(ordersRef, order)
                        .then((doc) => {
                            setOrderId(doc.id)
                            /* emptyCart() */
                            /* setCart([]) */
                            /* cart.forEach(  (prod) => {
                                deleteProduct(prod.id)
                            }) */
                        })  
                        .catch(err => console.log(err))
                        .finally(() => {
                            /* emptyCart(); */ 
                         
                          })                    
                })
              
        } else {            
            alert("There are items not available")
            setNoProducts(true)
            setproductsOut(outOfStock)
            outOfStock.forEach((prod) => {
                deleteProduct(prod.id)
            })
        }            
    }
    
    if (orderId) {  
       
        return (
            <>        
             <div className="container">
                <div className="cart">
                    <div className="cart-container" style={{padding: '50px'}}>   
                        <h3>Your Order Nº is Completed</h3>

                        <button className="btn"
                            onClick={() => eliminarCarrito(orderId)}
                        
                        >See your Order</button>
                    </div>
                </div>
            </div>

            </>
        )
    }

        
    return (
        <div className="container">            
            <div className="b-background">
            <div className='my-form'>
            <h2>Checkout</h2>
            <p>You are going to purchase your products with this information. Please check if all your data is correct.</p>
            <hr/>
            <form onSubmit={handleSubmit}>
            {  errorName  ? ( <span>{errors.nameError} </span>) : (<span> </span>)  }
                <input 
                    value={values.name}
                    type="text"
                    placeholder="Your Name"
                    onChange={handleInputChange}
                    name="name"
                />
                { errorAddress  ?  ( <span>{errors.addressError} </span>) : (<span> </span>)  }
                <input 
                    value={values.address}
                    type="text"
                    placeholder="Your address"
                    onChange={handleInputChange}
                    name="address"
                />
                { errorEmail  ?  ( <span>{errors.emailError} </span>) : (<span> </span>) }
                <input 
                    value={values.email}
                    type="email"
                    placeholder="Your Email"
                    onChange={handleInputChange}
                    name="email"
                />
                <Select/>

                <button className="btn" type="submit">Submit</button>
            </form>
            </div>
          </div>
          {
            noProducts && 
            <div className="container">
                <div className="cart">
                    <div className="cart-container" style={{padding: '50px'}}>   
                        <h3>We couldn't process the Order because some of these products are out of stock. <br />
                        Please make sure these articles are not in your Cart and try again. <br />  Would you like to send us a Whatsapp with these products, so we can notify you as soon as they are available?</h3>
                        <div className="cart-content">
                            <h3>Articles out of stock</h3>
                        {
                            productsOut.map((prod) => <CartItem key={prod} {...prod}/>)
                        }
                        </div>

                        <Link className="btn" to="/cart">Go To Cart</Link>
                    </div>
                </div>
            </div>
                
            }
            

        </div>
    )

}

export default Checkout