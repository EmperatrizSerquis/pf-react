import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/Loader'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'
import Searcher from "../Searcher/Searcher"
import { ModalContext } from '../../context/ModalContext'
import { useContext } from 'react'
import Modal from "../Modal/Modal"

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    
    const [loading, setLoading] = useState(true)

    const[searchParams] = useSearchParams()

    const search = searchParams.get("search")

    const list = []

    const { showModal, setShowModal } = useContext(ModalContext)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productsRef = collection(db, "products")        
            const q = categoryId 
                ? query(productsRef, where("category", "==", categoryId))
                : productsRef
   
        getDocs(q)
            .then((resp) => {
                const items = resp.docs.map((doc) => ({...doc.data(), id: doc.id}))

                const list = search 
                                ? items.filter(item =>item.name.includes(search)) 
                                : items
     
                setProducts(list)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    }, [categoryId])  

    

    return (
        <div className="container">
            <Searcher />
            {
                loading
                    ? <Loader/>
                    : <ItemList items={products} title={categoryId} />
            }
            <Modal open={showModal} modalClose={ () => setShowModal(false) }  />
        </div>
    )
}

export default ItemListContainer

