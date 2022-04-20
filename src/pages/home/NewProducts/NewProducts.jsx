import { Publish } from '@material-ui/icons'
import React from 'react'
import "./newProducts.css"

export default function NewProducts() {
  return (
    <div className="NewProducts">
      <h1 className="NewProductoTitle">Nuevo Producto</h1>
      <form className="NewProductsForm">
        <div className="NewProductsUploadButton">
          <img src="https://images.pexels.com/photos/9403812/pexels-photo-9403812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='' className="NewProductImg"/>
          <label for="file">
          <Publish/>
          </label>
          <input type="file" id="file" style={{display:"none"}}/>
        </div>
        <div className="NewProductsItems">
          <label>Nombre</label>
          <input type="text" placeholder="Xiaomi mi 11 Pro"/>
          <label>Stock</label>
          <input type="text" placeholder="147" />
          <label>Activo</label>
          <select name="Stock" id="Activo">
            <option value="si">Si</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="NewProductoCreate">Crear</button>
        
      </form>

        
    </div>
  )
}
