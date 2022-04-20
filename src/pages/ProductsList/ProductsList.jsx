import React from 'react'
import { Link } from 'react-router-dom'
import "./productsList.css"
import Chart from "../../Components/Chart/Chart"
import {ProductsData} from "../../misDatos"
import { Publish } from '@material-ui/icons'

export default function ProductsList() {
  return (
    <div className="ProductsList">
        <div className="ProductTitleContainer">
          <h1 className="ProductTitle">Productos</h1>
          <Link to="/NewProducts">
          <button className="butoonaddProduct">Crear</button>
          </Link>
          
        </div>
        <div className="ProductsTop">
          <div className="ProductsTopLeft">
            <Chart data={ProductsData} dataKey="Sales" title="Rendimiento de las Ventas"/>
          </div>
          <di className="ProductsTopRight">
            <div className="ProductsTopInform">
              <img src="https://images.pexels.com/photos/9403812/pexels-photo-9403812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='' className="ProductsInformImg"/>
              <span className="ProductName">  Xiaomi mi 12 pro</span>
            </div>
            <div className="ProductsBottomInform">
              <div className="ProductsInformItem">
                <span className="ProductsInfoKey">Id:</span>
                <span className="ProductsInfoValue">123</span>
              </div>
              <div className="ProductsInformItem">
                <span className="ProductsInfoKey">Ventas:</span>
                <span className="ProductsInfoValue">134</span>
              </div>
              <div className="ProductsInformItem">
                <span className="ProductsInfoKey">Activa:</span>
                <span className="ProductsInfoValue">Si</span>
              </div>
              <div className="ProductsInformItem">
                <span className="ProductsInfoKey">En Stock:</span>
                <span className="ProductsInfoValue">No</span>
              </div>
            </div>
          </di>
        </div>
        <div className="Productsbottom">
          <form className="ProductsForm">
            <div className="ProductsFormLeft">
              <label>Nombre del Producto</label>
              <input type="text" placeholder="Xiaomi mi 12 pro"/>
              <label>En Stock</label>
              <select name="InStock" id="idStock">
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
              <label>Activo</label>
              <select name="InStock" id="idActivo">
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="ProductsFormRight">
              <div className="ProductsUpload">
                <img src="https://images.pexels.com/photos/9403812/pexels-photo-9403812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='' className="ProductsUploadImg"/>
                <label For="file">
                  <Publish/>
                </label>
                <input type="file" id="file" style={{display:"none"}}/>
              </div>
              <button className="ProductsButtonP">Cargar</button>
            </div>

          </form>
        </div>
    </div>
  )
}
