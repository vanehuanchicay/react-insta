import React, { Component } from 'react';
import firebase from 'firebase';
import NavBar from '../src/components/NavBar';
import User from '../src/components/User';
// import Modal from '../src/components/Modal';
// import Icons from '../src/components/Icons/';
// import MenuMobile from '../src/components/MenuMobile';
import Pictures from '../src/components/Pictures';
import imgapi from '../src/components/Api/imgapi';
import Footer from '../src/components/Footer';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.handleAuth = this.handleAuth.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  state = {
    user: null
  }
  // Se dispara una vez el componente se renderice, para tener acceso a las porpiedades del usuario 
  componentWillMount () {
    firebase.auth().onAuthStateChanged(user => {
      // comprovar si el usuario viene con información
      if (user) {
        this.setState({ user })
      } else {
        this.setState({ user : null })
      }
    })
  }
  // función que se llama para el autentificacion del usuario
  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/plus.login')

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }
  // función que se llama para desloguear al usuario
  handleLogout () {
    firebase.auth().signOut()
      .then(result => console.log('Te has desconectado correctamente'))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  
  render() {
    return (
      <div className="App">
        <NavBar
          user={this.state.user}
          onAuth={this.handleAuth}
          onLogout={this.handleLogout}
        ></NavBar>
        <User
          user={this.state.user}
        ></User>
        
        <Pictures></Pictures>
        <imgapi></imgapi>
        <Footer></Footer>
      </div>
    );
  }

}

export default App;
