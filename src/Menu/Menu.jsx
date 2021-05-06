import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './menuData';
import './Menu.css';
import MenuItem from './MenuItem';
import Categories from './Categories';




export default function Menu() {
    const allCategories = ['all', ...new Set(data.map((item) => item.category))];

    const[menuItems, setMenuItems] = useState(data);
    const[categories] = useState(allCategories);

    const filterItems = (category) => {
        if(category === 'all'){
            setMenuItems(data);
            return;
        }
        const newItems = data.filter((item) => item.category === category);
        setMenuItems(newItems);
    }

    return (
        <div className="container menu-container">
            <h1>On the Menu Today</h1>
            <div className="filter-btns">
                <Categories
                    categories={categories}
                    filterItems={filterItems}
                />
            </div>
            <div className="row">
                {menuItems.map((item) => (
                    <div className="col-md-6">
                    <MenuItem
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                    />
                    </div>
                ))}
                </div>
        </div>
    )
}
