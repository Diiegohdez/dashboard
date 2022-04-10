import React from 'react'
import "./user.css"
import {PermIdentity, DateRange, PhoneAndroid, EmailOutlined, LocationCity, Publish} from "@material-ui/icons"

export default function User() {
  return (
    <div className="User">
      <div className="UserTitleContainer">
        <h1 className="UserTitle">Editar Usuario</h1>
        <button className="UserAdd">Crear</button>
      </div>
      <div className="UserContainer">
        <div className="UserShow">
          <div className="UserShowTop">
            <img className="UserShoeImg" src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=''/>
            <div className="UserShowTopTittle">
              <spam className="UserShowName">Mark Greed</spam>
              <spam className="UserShowTitleName">Software Engineer</spam>
            </div>
          </div>
          <div className="UserShowBotton">
            <span className="UserShowTitle">Detalles De la Cuenta</span>
            <div className="UserShowInfor">
              <PermIdentity className="UserShowIcon"/>
            <span className="UserShowTittleInfo">Mark-Greed10</span>
            </div>
            <div className="UserShowInfor">
              <DateRange className="UserShowIcon"/>
            <span className="UserShowTittleInfo">15-05-1995</span>
            </div>
            <span className="UserShowTitle">Informacion De Contacto</span>
            <div className="UserShowInfor">
              <PhoneAndroid className="UserShowIcon"/>
            <span className="UserShowTittleInfo">+57 601 854 1025</span>
            </div>
            <div className="UserShowInfor">
              <EmailOutlined className="UserShowIcon"/>
            <span className="UserShowTittleInfo">Mark-Greed10@gmail.com</span>
            </div>
            <div className="UserShowInfor">
              <LocationCity className="UserShowIcon"/>
            <span className="UserShowTittleInfo">Medellin - Colombia</span>
            </div>
          </div>
        </div>
        <div className="UserUpdate">
          <span className="UserUpdateTittle">Editar</span>
          <form className="UserUpdateForm">
            <div className="UserUpdateLeft">
              <div className="UserUpdateItems">
                <label>Nombre De Usuario</label>
                <input type="text" placeholder="Mark-Greed10" className="UserUpdateInput"/>
              </div>
              <div className="UserUpdateItems">
                <label>Nombre Completo</label>
                <input type="text" placeholder="Mark-Greed" className="UserUpdateInput"/>
              </div>
              <div className="UserUpdateItems">
                <label>Telefono</label>
                <input type="text" placeholder="+57 601 854 1025" className="UserUpdateInput"/>
              </div>
              <div className="UserUpdateItems">
                <label>Email</label>
                <input type="text" placeholder="Mark-Greed10@gmail.com" className="UserUpdateInput"/>
              </div>
              <div className="UserUpdateItems">
                <label>Direccion</label>
                <input type="text" placeholder="Medellin - Colombia" className="UserUpdateInput"/>
              </div>
            </div>
            <div className="UserUpdateRight">
              <div className="UserUpdateUpload">
                <img src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='' className="UserUpdateImg"/>
                <label htmlFor="file"><Publish/></label>
                <input type="file" id="file" style={{display: "none"}}/>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
