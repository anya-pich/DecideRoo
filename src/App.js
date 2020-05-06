import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import Routes from './config/routes'
import Header from './components/Header'
import Footer from './components/Footer'
import UserModel from './models/user'

class App extends Component {
  state = {
    userName: localStorage.getItem('un')
  }

  setCurrentUser = (name) => {
    this.setState({ userName: name })
    localStorage.setItem('un', name)
  }
  
  logout = (event) => {
    event.preventDefault();
    localStorage.removeItem('un')
    this.setState({ userName: null })
  }
  
  render() {
    return (
      <>
        <Header 
          currentUser={this.state.currentUser} 
          logout={this.logout}   
        />
        <div className="container py-3">
          <Routes 
            currentUser={this.state.currentUser} 
            setCurrentUser={this.setCurrentUser} 
          />
        </div>
        <Footer />
      </>
    )
  }
}

export default withRouter(App);
