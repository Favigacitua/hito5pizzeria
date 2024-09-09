import React from 'react'
import Button from "react-bootstrap/Button";
import './Profile.css'

export const Profile = () => {

  return (
    <div className='datosUsuario'>
      <div >
        <img src='./usuario.jpg' alt='foto-del-usuario' className='usuarioImg'/>
        </div>
        <div className='usuarioTexto'>
        <p style={{marginBottom:'0px'}}><span style={{ fontWeight:'bold'}}>Usuario: </span> Superior_zoo</p>
        <p> <span style={{ fontWeight:'bold', paddingRight:'16px'}}>Email:</span>   Ren_michigan@gmail.com</p>
        <Button variant="dark" style={{marginTop:'10px'}}>Cerrar sesión</Button>
        </div>
        

    </div>
  )
}

export default Profile