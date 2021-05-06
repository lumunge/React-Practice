import React from 'react'

export default function MenuItem({id, image, title, description, price}) {
    return (
    <div key={id} className="menu-item">
        <div className="menu-image">
            <img src={image} alt={title}/>
        </div>
        <div className="">
            <h4 className="title">{title} <span className="price">KSH {price}</span></h4>
            <p className="desc">{description}</p>
        </div>
    </div>
    )
}
