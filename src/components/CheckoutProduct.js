import React from 'react'
import './checkoutproduct.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './UserContextProvider';
export default function CheckoutProduct({id,title,image,price,rating}) {
    const[{basket},dispatch]=useStateValue()
    const handle=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return (
        <div className="cproduct">
            <img src={image}></img>
            <div className="cproduct_info">
                <p>{title}</p>
                <p className="cproduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="cproduct_rating">
                {Array(rating).fill().map((_)=>(
                    <StarIcon />
                ))}

                </div>
                 
                <button onClick={handle}>Remove From Basket</button>   
            </div>            
        </div>
    )
}
