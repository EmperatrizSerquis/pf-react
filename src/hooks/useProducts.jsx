import { useEffect, useState } from "react"
import { getData } from "../helpers/getData"

export const useProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        getData()
            .then((res) => setProducts(res))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return {
        products,
        loading
    }
}