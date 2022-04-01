import React from 'react'
import "./widgetLg.css"

export default function WidgetLg() {

  const Button = ({type}) =>{
    return <button className={"WidgetLgButton " + type}>{type}</button>
  }
  return (
    <div className="WidgetLg">
        <h3 className="WidgetLgTittle">Ultimas Transacciones</h3>
        <table className="WidgetLgTable">
          <tr className="WidgetLgTr">
            <th className="WidgetLgTh">Cliente</th>
            <th className="WidgetLgTh">Fecha</th>
            <th className="WidgetLgTh">Cantidad</th>
            <th className="WidgetLgTh">Estado</th>
          </tr>
          <tr className="WidgetLgTr">
            <td className="WidgeLgUser">
               <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="WidgetLgImg"  />
               <span className="WidgetLgName">Matias Hardas</span>
            </td> 
            <td className="WidgetLgData"> 10 Agosto 2022</td>
            <td className="WidgetLgAmount"> $ 150.00</td>
            <td className="WidgetLgStatus"> <Button type="Aprobado"/> </td>
          </tr>
          <tr className="WidgetLgTr">
            <td className="WidgeLgUser">
               <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="WidgetLgImg"  />
               <span className="WidgetLgName">Matias Hardas</span>
            </td> 
            <td className="WidgetLgData"> 10 Agosto 2022</td>
            <td className="WidgetLgAmount"> $ 150.00</td>
            <td className="WidgetLgStatus"> <Button type="Rechazado"/> </td>
          </tr>
          <tr className="WidgetLgTr">
            <td className="WidgeLgUser">
               <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="WidgetLgImg"  />
               <span className="WidgetLgName">Matias Hardas</span>
            </td> 
            <td className="WidgetLgData"> 10 Agosto 2022</td>
            <td className="WidgetLgAmount"> $ 150.00</td>
            <td className="WidgetLgStatus"> <Button type="Pendiente"/> </td>
          </tr>
          <tr className="WidgetLgTr">
            <td className="WidgeLgUser">
               <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" className="WidgetLgImg"  />
               <span className="WidgetLgName">Matias Hardas</span>
            </td> 
            <td className="WidgetLgData"> 10 Agosto 2022</td>
            <td className="WidgetLgAmount"> $ 150.00</td>
            <td className="WidgetLgStatus"> <Button type="Aprobado"/> </td>
          </tr>
          

        </table>
    </div>
  )
}
