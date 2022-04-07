import React from 'react'
import "./userList.css"
import { DataGrid } from '@material-ui/data-grid'
import {DeleteForever} from '@material-ui/icons'

export default function UserList() {

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
           <button className="UserListModif">Editar</button>
           <DeleteForever className="UserListIco"/>
          </>
        )
      }
    },
  ];
  
  const rows = [
    { id: 1, userName: 'Juan Zapata', avatar:'https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    email:'JuanZ@gmail.com', status:'Active', transaccion:'$150.000' },

    { id: 2, userName: 'Juan Zapata', avatar:'https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    email:'JuanZ@gmail.com', status:'Active', transaccion:'$150.000' },

    { id: 3, userName: 'Juan Zapata', avatar:'https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    email:'JuanZ@gmail.com', status:'Active', transaccion:'$150.000' },

    { id: 4, userName: 'Juan Zapata', avatar:'https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    email:'JuanZ@gmail.com', status:'Active', transaccion:'$150.000' },

    { id: 5, userName: 'Juan Zapata', avatar:'https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    email:'JuanZ@gmail.com', status:'Active', transaccion:'$150.000' },

    { id: 6, userName: 'Juan Zapata', avatar:'https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    email:'JuanZ@gmail.com', status:'Active', transaccion:'$150.000' },

    { id: 7, userName: 'Juan Zapata', avatar:'https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    email:'JuanZ@gmail.com', status:'Active', transaccion:'$150.000' },

    { id: 8, userName: 'Juan Zapata', avatar:'https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    email:'JuanZ@gmail.com', status:'Active', transaccion:'$150.000' },

    { id: 9, userName: 'Juan Zapata', avatar:'https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    email:'JuanZ@gmail.com', status:'Active', transaccion:'$150.000' },

    { id: 10, userName: 'Juan Zapata', avatar:'https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    email:'JuanZ@gmail.com', status:'Active', transaccion:'$150.000' },

  ];
  return (
    <div className="Userlist">
        <DataGrid rows={rows} disableSelectionOnClick columns={columns} pageSize={9} checkboxSelection/>
    </div>
  )
}
