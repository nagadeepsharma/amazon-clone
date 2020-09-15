import React, { useContext } from 'react'
import StarIcon from '@material-ui/icons/Star';
import './product.css'
import { useStateValue } from './UserContextProvider';
export default function Product({id,title,price,rating,image}) {
    const[{},dispatch]=useStateValue()
    const handle=()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id,title,price,rating,image
            }
        })
    }
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                {Array(rating).fill().map((_)=>(
                    <StarIcon />
                ))}

                </div>
                <img src={image}></img> 
                <button onClick={handle}>Add To Basket</button>   
            </div>            
        </div>
    )
}
