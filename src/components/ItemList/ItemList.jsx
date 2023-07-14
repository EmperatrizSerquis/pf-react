import ItemCard from "../ItemCard/ItemCard"
import CategoryList from "../CategoryList/CategoryList"


const ItemList = ({items = [], title}) => {


    return (
        <div>
            <CategoryList />
            <div className="products">
                <h2 className="products__title">{title}</h2>
                <div className="products__container">
                    <ul className='grid__list'>
                        {
                            items.map((prod) => <ItemCard key={prod.id} {...prod}/>)
                        }
                    </ul>
                </div>
            </div>
        

        </div>
    )
}

export default ItemList