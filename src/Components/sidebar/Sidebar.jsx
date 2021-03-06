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
import { Link } from 'react-router-dom'


export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard  </h3>
                <ul className="sidebarList">
                    <Link to="/" className="link">
                    <li className="sidebarItems ">
                        <Home className="sidebarIcon"/>
                        Home
                    </li>
                    </Link>
                    <li className="sidebarItems">
                        <Timeline className="sidebarIcon"/>
                        Analítica
                    </li>
                    <li className="sidebarItems">
                        <TrendingUp className="sidebarIcon"/>
                        Ventas
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick menu  </h3>
                <ul className="sidebarList">
                    <Link to="UserList" className="link">
                    <li className="sidebarItems ">
                        <AccountCircle className="sidebarIcon"/>
                        Usuario
                    </li>
                    </Link>
                    <Link to="Products" className="link">
                    <li className="sidebarItems">
                        <Storefront className="sidebarIcon"/>
                        Producto
                    </li>
                    </Link>
                    
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
