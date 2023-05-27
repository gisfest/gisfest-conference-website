import React from 'react';
import './Merchandise.css';
import { MerchandiseData } from '../../utils/data';


const Merchandise = () => {
  return (
    <div className='flexbox product-container'>
        <h1>Get Your Merches</h1>
      <div className="merchandise-conatiner grid-container">
        {MerchandiseData.map((item, id)=> {
            return(
            <div className='merchandise-content' key={id}>
                <div className="merchandise-picture">
                    <img src={item.picture} alt='item-1' />
                </div>
                <div className='merchandise-text'>
                    <p>{item.name}</p>
                    <span>Price:{item.price}</span>
                </div>
                <button><a href={item.link} rel="noreferrer" target='_blank'>Buy Now</a></button>
            </div>

            )   
        })}
     </div>
    </div>
  )
}

export default Merchandise
