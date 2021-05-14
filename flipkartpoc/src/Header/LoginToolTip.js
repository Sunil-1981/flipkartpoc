import React from 'react'
import '../styles/header.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StoreIcon from '@material-ui/icons/Store';
import BallotIcon from '@material-ui/icons/Ballot';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ReceiptIcon from '@material-ui/icons/Receipt';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ViewListIcon from '@material-ui/icons/ViewList';

const LoginToolTip = () => {
    return (
        <div className="logintooltip">
            <div className="logintooltipitem">
                <p style={{fontWeight:500, fontSize:'14px'}}>New Customer?</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p className="signup"> Sign Up</p>
            </div>
            <hr />
            <div className="logintooltipitem">
                <AccountCircleIcon />
                <p>My Profile</p>
            </div>
            <hr />
            <div className="logintooltipitem">
                <BallotIcon />
                <p>Filipkart plus Zone</p>
            </div>
            <hr />
            <div className="logintooltipitem">
                <ViewListIcon />
                <p>Orders</p>
            </div>
            <hr />
            <div className="logintooltipitem">
                <ReceiptIcon />
                <p>Rewards</p>
            </div>
            <hr />
            <div className="logintooltipitem">
                <CardGiftcardIcon />
                <p>Gift Card</p>
            </div>
        </div>
    )
}

export default LoginToolTip
