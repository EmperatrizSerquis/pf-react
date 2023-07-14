import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/Loader'
import { useState, useEffect } from 'react'
import { collection, getDocs, query, where, limit } from 'firebase/firestore'
import { db } from '../../firebase/config'
import Fancy from "../Fancy/Fancy"
import Banner from "../Banner/Banner"
import Button from "../Button/Button"
import { useContext } from 'react'
import { ModalContext } from '../../context/ModalContext'

import Modal from "../Modal/Modal"

const Home = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { showModal, setShowModal } = useContext(ModalContext)

    const items = []

    useEffect(() => {
        setLoading(true)

        const featuredProducts = collection(db, "products")     

        const q = query(featuredProducts, limit(4))
   
        getDocs(q)
            .then((resp) => {
                const items = resp.docs.map((doc) => ({...doc.data(), id: doc.id}))
     
                setProducts(items)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [])

    const title = "Featured Products"

    return (
        <div>
            <Fancy />
            <Banner />    
                       
            {
                loading
                    ? <Loader/>
                    : <ItemList items={products} title={title} />
            }

            <Button  />
            <Modal open={showModal} modalClose={ () => setShowModal(false) }  />
            
        </div>
    )
}

export default Home

