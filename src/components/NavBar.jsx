import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div >
      <ul className='Navi'>
        <li>logo</li>
        <li>Navegacion1</li>
        <li>Navegacion2</li>
        <li>Navegacion3</li>
        <li>
        <Link to="/auth/login">
          <button className='boton'>Iniciar Sesion</button>
          </Link>
        </li>
        
      </ul>
    </div>
  )
}

export default NavBar
