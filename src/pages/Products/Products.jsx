
import "./products.css"
import { DataGrid } from '@material-ui/data-grid'
import {DeleteForever} from '@material-ui/icons'
import {ProductsRows} from "../../misDatos"
import { Link } from 'react-router-dom'
import React, { useState } from 'react'

export default function Products() {

    const [data, setData] = useState(ProductsRows)

    const handleDelete =(id)=>{
        setData(data.filter((item) => item.id !== id));
      }

      const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: "Products", headerName: 'Productos', width: 210, renderCell: (params)=>{
          return(
            <div className="ProductsListUser">
              <img className="ProductsListImg"  src={params.row.img} alt=""/>
              {params.row.Name}
            </div>
          )
        } },
        { field: 'stock', headerName: 'Stock', width: 180 },
        {
          field: 'disponible',
          headerName: 'Disponible',
          width: 150,
        },
        {
          field: 'Precio',
          headerName: 'Precio',
          width: 190,
        },
        {
          field: 'action',
          headerName: 'Accion',
          width: 150,
          renderCell: (params)=>{
            return(
              <>
              <Link to={"/ProductsList/"+params.row.id}>
              <button className="ProductsModif">Editar</button>
              </Link>
               
               <DeleteForever className="ProductsIco" onClick={()=>handleDelete(params.row.id)}/>
              </>
            )
          }
        },
      ];
      
  return (
    <div className="Products">
        <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={9} checkboxSelection/>
    </div>
  )
}
