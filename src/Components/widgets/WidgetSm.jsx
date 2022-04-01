import React from 'react'
import "./widgetSm.css"
import {Visibility} from "@material-ui/icons"

export default function WidgetSm() {
  return (
    <div className="WidgetSm">
        <span className="WidgtSmTittle">Agregar nuevo Miembro</span>
        <ul className="WidgetSmList">
            <li className="WidgetSmListItem">
                <img src="https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_960_720.jpg" alt="" className="WidgetSmImg"/>
                <div className="WidgetSmUser">
                    <span className="WidgetSmUsername">Maria Alkaba</span>
                    <span className="WidgetSmUserTittle">Software Engineer</span>
                </div>
                <button className="WidgetSmButton">
                   <Visibility className="WidgetSmIcon"/>
                   Mostrar
                </button>
            </li>
            <li className="WidgetSmListItem">
                <img src="https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_960_720.jpg" alt="" className="WidgetSmImg"/>
                <div className="WidgetSmUser">
                    <span className="WidgetSmUsername">Maria Alkaba</span>
                    <span className="WidgetSmUserTittle">Software Engineer</span>
                </div>
                <button className="WidgetSmButton">
                   <Visibility className="WidgetSmIcon"/>
                   Mostrar
                </button>
            </li>
            <li className="WidgetSmListItem">
                <img src="https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_960_720.jpg" alt="" className="WidgetSmImg"/>
                <div className="WidgetSmUser">
                    <span className="WidgetSmUsername">Maria Alkaba</span>
                    <span className="WidgetSmUserTittle">Software Engineer</span>
                </div>
                <button className="WidgetSmButton">
                   <Visibility className="WidgetSmIcon"/>
                   Mostrar
                </button>
            </li>
            <li className="WidgetSmListItem">
                <img src="https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116_960_720.jpg" alt="" className="WidgetSmImg"/>
                <div className="WidgetSmUser">
                    <span className="WidgetSmUsername">Maria Alkaba</span>
                    <span className="WidgetSmUserTittle">Software Engineer</span>
                </div>
                <button className="WidgetSmButton">
                   <Visibility className="WidgetSmIcon"/>
                   Mostrar
                </button>
            </li>
        </ul>
      
    </div>
  )
}
