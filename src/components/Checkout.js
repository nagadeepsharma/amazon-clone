import React from 'react'
import { useStateValue } from './UserContextProvider'
import './checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
export default function Checkout() {
    const[{basket}]=useStateValue()
    return (
        <div className="checkout">
        <div className="checkoutl">
            <img className="c_banner" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB42349266_.jpg"></img>
        {basket?.length===0?(
            <div>
                <h2 className="c_title">Your Shopping cart is empty</h2>
                <p className='c_title'>You have no items in your basket .To buyone or more click 'AddToBasket' next to the item.</p>
            </div>
        ):(
            <div>
                <h2 className="c_title">Your Shopping basket</h2>
                {basket.map(item=>(
                    <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                     />
                ))}
            </div>
        )}
        
        </div>
        {basket.length>0&&(
            <div className='checkoutr'>
                <Subtotal />
            </div>
        )}
        </div>
    )
}
