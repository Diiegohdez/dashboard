import React from 'react'
import "./Topbar.css"
import {NotificationsActive, Public, Settings} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <spam className="logo">Unravel</spam>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsActive/>
                    <spam className="topIconBadg">3</spam>
                </div>
                <div className="topbarIconContainer">
                    <Public/>
                    <spam className="topIconBadg">3</spam>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                    
                </div>
                <img src="./profile.png" alt='logo' className="avatarIco"/>
            </div>
        </div>
    </div>
  )
}
