import CategoryList from '../CategoryList/CategoryList'
import Loader from '../Loader/Loader'
import { useState } from 'react'

const CategoryListContainer = () => {

    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    return (
        <div className="container">
            {
                loading
                    ? <Loader/>
                    : <CategoryList/>
            }
        </div>
    )
}

export default CategoryListContainer

