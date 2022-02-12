import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='pit justify-center'>
      <h2 className='pot'>Inicia sesion en tu cuenta</h2>
      <form className='pat'>
        <div>
          <input  className="pet" type="email" placeholder='email@com' required/>
          <input className='pet' type="password" required/>
        </div>
        <div>
        <div className='pot'>
          <label htmlFor='recuerdame'>
          <input type="checkbox"/>
          Recuerdame
          </label>
        </div>
        <div>
          <Link to="/">
            Olvidaste tu contraseña?
          </Link>
        </div>
        </div>
        <div>
          <Link to="/private/admin">
          <button type="submit">Iniciar sesion</button>
          </Link>
        </div>
        <div>O</div>
        <div>
          <button>Continua con Google</button>
        </div>
        </form>
    </div>
  )
}

export default Login
