import CategoryCard from "../CategoryCard/CategoryCard"

const categories = [
    {
        value: "lamps",
        label: "Lamps",
    },
    {
        value: "aros",
        label: "Aros",
    },
    {
        value: "apliques",
        label: "Apliques",
    },
    {
        value: "tiras",
        label: "Tiras",
    },
]

const CategoryList = () => {

    return (
        <div>

                <div className='container category'>
                    <h2>Led Products</h2>
                
                    <ul className="filter-list"> 
                    {
                        categories.map((cat) => <CategoryCard key={cat.value} {...cat}/>)
                    }
                    </ul> 
                </div>

        </div>
    )
}

export default CategoryList