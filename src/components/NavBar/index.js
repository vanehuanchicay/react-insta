import React from 'react';
import logo from '../../logo.png';
//import '../../../src/App.css';

// tomamos como parametro el nombre de la app, usuario, metodos login y logout
const NavBar = ({ appName, user, onAuth, onLogout }) => {
	// función que imprime la imagen y nombre del usuario y un boton que desloguea al usuario
  function renderUserData () {
    return (
      <ul className='nav navbar-nav navbar-right'>
        <li>
          <img className='responsive-img img-user' src={user.photoURL} />
        </li>
        <li>
          <button className='btn btn-logout' onClick={onLogout}>Logout</button>
        </li>
      </ul>
    )
  }
  // boton para detectar el evento de click que va a llamar a la función onAuth
  function renderLoginButton () {
    return (
      <ul className='right'>
        <li>
          <button className='btn-log' onClick={onAuth}>Login</button>
        </li>
      </ul>
    )
  }
  // retornamos con una condicional si se recibe un usuario se llama a renderData y de lo contrario el otro
  return (
    <div>
      <nav className="nav-bar navbar navbar-defaul">
        <div className="container">
          <div className="collapse navbar-collapse">
            <a href=""><img className="logo" src={ logo } alt="instagram"/></a>
            <ul id="nav-mobile" className="nav navbar-nav navbar-right">
              <li>{user ? renderUserData() : renderLoginButton()}</li>
               
            </ul>
          </div>

        </div>
      </nav>
    </div>
  )

  
	}

export default NavBar;


