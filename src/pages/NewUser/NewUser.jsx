import React from 'react'
import "./newUser.css"

export default function NewUser() {
  return (
    <div className="NewUser">
        <h1 className="NewUserTitle">Nuevo Usuario</h1>
        <form  className="NewUserFor">
            <div className="NewUserIten">
                <label>Nombre</label>
                <input type="text" placeholder="Maria"/>
            </div>
            <div className="NewUserIten">
                <label>Apellido</label>
                <input type="text" placeholder="Marquez"/>
            </div>
            <div className="NewUserIten">
                <label>Email</label>
                <input type="text" placeholder="Maria,M@gmaol.com"/>
            </div>
            <div className="NewUserIten">
                <label>Contraseña</label>
                <input type="password" placeholder="password"/>
            </div>
            <div className="NewUserIten">
                <label>Telefono</label>
                <input type="text" placeholder="+57 620 458 1256"/>
            </div>
            <div className="NewUserIten">
                <label>Dirrecion</label>
                <input type="text" placeholder="Medellin | Colombia"/>
            </div>
            <div className="NewUserIten">
                <label>Genero</label>
                <div className="NewUserGen">
                <input type="radio" name="genero" id="male" value="male" />
                <label for="Masculino">Masculino</label>
                <input type="radio" name="genero" id="female" value="female" />
                <label for="Femenino">Femenino</label>
                <input type="radio" name="genero" id="otro" value="otro" />
                <label for="Otro">Otro</label>
                </div>
                <div className="NewUserIten">
                    <label>Activar</label>
                    <select className="NewUserSelect" name="active" id="active">
                        <option value="si">Si</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>
            <button className="NewUserButton"> Crear</button>
        </form>
    </div>
  )
}
