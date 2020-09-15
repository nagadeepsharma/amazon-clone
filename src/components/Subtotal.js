import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './UserContextProvider'
export default function Subtotal() {
    const[{basket},dispatch]=useStateValue()
    const baskettotal=()=>{
        var sum=0;
        basket.forEach(b=>{
            sum=sum+(b.price)
        })
        return sum
    }
    return (
        <div className='subtotal'>
            <CurrencyFormat
            renderText={(value)=>(
                <p>
            Subtotal ({basket.length} items):<strong>${baskettotal()}</strong>
                </p>
            )}
            decimailScale={2}
            value={0}
            displayType={"text"}
            thousandSeperator={true}
             />
            <button>Proceed to Checkout</button>
        </div>
    )
}
