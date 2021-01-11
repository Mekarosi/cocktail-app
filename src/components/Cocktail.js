import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ image, name, id, info, glass }) => {
    return (
        <acticle className='cocktail'>
            <div className='img-container'>
               <img src={image} alt={name}/>
               <div className="cocktail-feeter">
                   <h3>{name}</h3>
                   <h4>{glass}</h4>
                   <p>{info}</p>
                   <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>details</Link>
               </div>
            </div>
        </acticle>
    )
}

export default Cocktail
