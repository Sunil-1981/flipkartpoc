import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import GetAppIcon from '@material-ui/icons/GetApp';
import '../styles/header.css'


const MoreToolTip = () => {
    return (
        <div className="moretooltip">
            <div className="moretooltipitem">
                <NotificationsIcon />
                <p>Notification Preference</p>
            </div>
            <hr/>
            <div className="moretooltipitem">
                <MonetizationOnIcon />
                <p>Sell on Filipkart</p>
            </div>
            <hr/>
            <div className="moretooltipitem">
                <LiveHelpIcon />
                <p>24/7 Live Support</p>
            </div>
            <hr/>
            <div className="moretooltipitem">
                <TrendingUpIcon />
                <p>Advertise</p>
            </div>
            <hr/>
            <div className="moretooltipitem">
                <GetAppIcon />
                <p>Download App</p>
            </div>
        </div>
    )
}

export default MoreToolTip
