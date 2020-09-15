import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from'@material-ui/icons/ShoppingBasket'
import {userContext, useStateValue} from './UserContextProvider'

export default function Header() {
    const[{basket}]=useStateValue()
    return (
        <div className='header'>
            <Link to='/'>
            <img className="logo" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fflowersinsyrup.com%2Fwordpress%2Fwp-content%2Fuploads%2F2016%2F11%2FAmazon-Logo-1024x373.png&f=1&nofb=1"></img>
            </Link>
            <div className="header_search">
            <input type="text" className="header_searchInput"></input>
            <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <Link className="header_link">
                    <div className="header_option">
                        <span className="header_one">Hello,</span>
                        <span className="header_two">Sign in</span>
                    </div>
                </Link>

                <Link className="header_link">
                    <div className="header_option">
                        <span className="header_one">Returns,</span>
                        <span className="header_two">&Orders</span>
                    </div>
                </Link>

                <Link className="header_link">
                    <div className="header_option">
                        <span className="header_one">Your</span>
                        <span className="header_two">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_basketcount">{basket.length}</span>
                    </div>
                </Link>
            </div>

        </div>
    )
}
