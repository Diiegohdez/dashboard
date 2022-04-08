import React, { useState } from 'react'
import "./userList.css"
import { DataGrid } from '@material-ui/data-grid'
import {DeleteForever} from '@material-ui/icons'
import {UserRows} from "../../misDatos"
import { Link } from 'react-router-dom'

export default function UserList() {

  const [data, setData]= useState(UserRows)

  const handleDelete =(id)=>{
    setData(data.filter((item) => item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: "user", headerName: 'Nombre de Usuario', width: 210, renderCell: (params)=>{
      return(
        <div className="UserListAvatar">
          <img className="UserListImg"  src={params.row.avatar} alt=""/>
          {params.row.userName}
        </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 180 },
    {
      field: 'status',
      headerName: 'Estado',
      width: 120,
    },
    {
      field: 'transaccion',
      headerName: 'Transaccion Volumen',
      width: 190,
    },
    {
      field: 'action',
      headerName: 'Accion',
      width: 150,
      renderCell: (params)=>{
        return(
          <>
          <Link to={"/UserList/"+params.row.id}>
          <button className="UserListModif">Editar</button>
          </Link>
           
           <DeleteForever className="UserListIco" onClick={()=>handleDelete(params.row.id)}/>
          </>
        )
      }
    },
  ];
  
  
  return (
    <div className="Userlist">
        <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={9} checkboxSelection/>
    </div>
  )
}
