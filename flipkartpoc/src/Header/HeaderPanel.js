import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../styles/header.css'

const HeaderPanel = () => {
    return (
        <div className="header">
           <div className="header_logo">
                <img width="100" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_3b0baa.png" alt="logo" />
           </div>
           <div className="header_search">
                <input  placeholder="Search for products, brands and more" type="text" />
                <SearchIcon />
           </div>
           <div className="header_login">
                <button>Login</button>
           </div>
           <div className="header_more">
                <span>More</span>
                <ExpandMoreIcon />
           </div>
           <div className="header_cart">
                <ShoppingCartIcon /> 
                <p>Cart</p>
           </div>
           
        </div>
    )
}

export default HeaderPanel
