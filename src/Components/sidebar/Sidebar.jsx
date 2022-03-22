import React from 'react'
import "./Sidebar.css"
import {Home,
       Timeline,
       TrendingUp,
       AccountCircle,
       Storefront,
       AttachMoney,
       BarChart,
       DynamicFeed,
       MailOutline,
       ChatBubbleOutline,
       WorkOutline,
       Report,
       Assessment} from "@material-ui/icons"


export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard  </h3>
                <ul className="sidebarList">
                    <li className="sidebarItems ">
                        <Home className="sidebarIcon"/>
                        Home
                    </li>
                    <li className="sidebarItems">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarItems">
                        <TrendingUp className="sidebarIcon"/>
                        Sale
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick menu  </h3>
                <ul className="sidebarList">
                    <li className="sidebarItems ">
                        <AccountCircle className="sidebarIcon"/>
                        Usuario
                    </li>
                    <li className="sidebarItems">
                        <Storefront className="sidebarIcon"/>
                        Producto
                    </li>
                    <li className="sidebarItems">
                        <AttachMoney className="sidebarIcon"/>
                        Transaciones
                    </li>
                    <li className="sidebarItems">
                        <BarChart className="sidebarIcon"/>
                        Reporte
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notificacion  </h3>
                <ul className="sidebarList">
                    <li className="sidebarItems ">
                        <MailOutline className="sidebarIcon"/>
                        Correo
                    </li>
                    <li className="sidebarItems">
                        <DynamicFeed className="sidebarIcon"/>
                        feedback
                    </li>
                    <li className="sidebarItems">
                        <ChatBubbleOutline className="sidebarIcon"/>
                        Mensajes
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">staff  </h3>
                <ul className="sidebarList">
                    <li className="sidebarItems ">
                        <WorkOutline className="sidebarIcon"/>
                        Administrar
                    </li>
                    <li className="sidebarItems">
                        <Assessment
                         className="sidebarIcon"/>
                        Analítica
                    </li>
                    <li className="sidebarItems">
                        <Report className="sidebarIcon"/>
                        Reportes
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
