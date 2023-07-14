import { useRef } from "react"
import { useSearchParams} from 'react-router-dom'

const Searcher = () => {
    const [, setSearchParams] = useSearchParams()

    const ref = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const value = ref.current.value

        if (value === '') {
            setSearchParams({})
            return
        }

        setSearchParams({
            search: value
        })

    }

    const handleReset = () => {
        setSearchParams({})
    }

    return (
        <div className="search-container">
            <form className="search-form"  onSubmit={handleSubmit}>
                
                <input type="search" ref={ref} className="search-field" placeholder="Enter your product name..."/>
                <button onClick={handleReset} type="reset" className="search-reset">X</button>
                
                <button type="submit" className="search-btn">
                    Search
                </button>
          
            </form>
        </div>
        
    )
}

export default Searcher