import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import '../styles/prodcard.css'
import { FormatBold } from '@material-ui/icons';


const ProductCard = ({image, name, discount, actualprice, offerprice}) => {
    return (
        <div className="card">
            <div className="card_heart">
                <FavoriteIcon />
            </div>
            <div className="card_image">
                <img  src={image} alt={name}
                    style={{width:"250px", height:"170px", objectFit:"contain"}}
                />
            </div>
            <div className="productdetails">
                <div className="card_Name">
                    <span>{name}</span>
                </div>
                <div className="card_Desc">
                    <span>Printed Women Pink, Black ...</span>
                </div>
            
                <div className="card_Price">
                    <span className="offerprice">₹{offerprice}&nbsp;&nbsp;</span>
                    <span className="actualprice">₹{actualprice}</span>
                    <span className="discount">&nbsp;&nbsp;25% off</span>
                </div>
                <div className="card_rand">
                    <span className="prodsize">Size </span> 6, 7, 8, 9, 10
                </div>
            </div>
        </div>
    )
}

export default ProductCard
