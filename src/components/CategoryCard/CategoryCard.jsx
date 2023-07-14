import { Link } from "react-router-dom"


const CategoryCard = ({value, label}) => {

    return (
        <li>
            <Link className="filter-btn filter-text" to={`/category/${value}`}>{label} </Link>
        </li>
    )
}

export default CategoryCard