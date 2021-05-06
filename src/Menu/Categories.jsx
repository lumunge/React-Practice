
const Categories = ({categories, filterItems}) => {
    return (
        <div className="category">
            {categories.map((category, index) => {
                return <button key={index} className="filter-btn" onClick={() => filterItems(category)}>{category}</button>
            })}
        </div>
    )
}

export default Categories;
