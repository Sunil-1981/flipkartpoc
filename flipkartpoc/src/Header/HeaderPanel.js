import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import '../styles/header.css'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import MoreToolTip from './MoreToolTip'
import LoginToolTip from './LoginToolTip'
import 'tippy.js/themes/light.css'

const HeaderPanel = () => {
    return (
        <div className="header">
           <div className="header_logo">
                <a href="/" >
                    <img width="100" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_3b0baa.png" alt="logo" />
                </a>
           </div>
           <div className="header_search">
                <input  placeholder="Search for products, brands and more" type="text" />
                <SearchIcon />
           </div>
           <div className="header_login">
                <Tippy theme="light" interactive={true}  content={<LoginToolTip></LoginToolTip>}>
                    <button>Login</button>
                </Tippy>
                
           </div>
           <div className="header_more">
                <Tippy theme="light" interactive={true} content={<MoreToolTip></MoreToolTip>}>
                    <span>More</span>
                </Tippy>
                
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
