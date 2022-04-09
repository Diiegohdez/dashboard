import React from 'react'
import "./user.css"

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
              <spam className="UserShowTitle">Software Engineer</spam>
            </div>
          </div>
          <div className="UserShowBotton"></div>
        </div>
        <div className="UserUpdate"></div>
      </div>
    </div>
  )
}
