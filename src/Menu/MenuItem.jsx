import React from 'react'

export default function MenuItem({id, image, title, description, price}) {
    return (
    <article key={id} className="menu-container">
        <div className="menu-image">
            <img src={image} alt={title}/>
        </div>
        <div className="">
            <h4>{title} <span>KSH {price}</span></h4>
            <p>{description}</p>
        </div>
    </article>
    )
}
