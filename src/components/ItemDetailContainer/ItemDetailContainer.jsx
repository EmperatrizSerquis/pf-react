import { useState, useEffect } from 'react'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import CategoryList from "../CategoryList/CategoryList"
import { doc, getDoc} from 'firebase/firestore'
import { db } from '../../firebase/config'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const itemRef = doc(db, "products", itemId)

        getDoc(itemRef)

            .then((doc) => {

                setItem({
                    ...doc.data(),
                    id: doc.id
                })
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))

    }, [itemId])

    return (
        <div className="container">
            <CategoryList />
           {
            loading 
                ? <Loader/>
                : <ItemDetail {...item}/>
           }
        </div>
    )
}

export default ItemDetailContainer
