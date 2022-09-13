import React from 'react';
import { User } from './../Model/Model';
import { Home } from './Home';
import { AuthService } from './../Services/AuthService';
import { Login } from './Login'
import { Logout } from './Logout';
import { Route, Routes, Navigate, HashRouter } from 'react-router-dom'
import { Navbar } from './Navbar';
import { Profile } from './Profile';
import { Spaces } from './spaces/Spaces'
import { DataService } from './../Services/DataService';

interface AppState {
  user: User | undefined
}

export class App extends React.Component<{}, AppState> {

  private authService: AuthService = new AuthService();
  private dataService: DataService = new DataService();

  constructor(props: any) {
    super(props)
    this.state = {
      user: undefined
    }

    this.setUser = this.setUser.bind(this)
    this.clearUser = this.clearUser.bind(this);
  }

  private clearUser() {
    this.setState({
      user: undefined
    });
  }

  private setUser(user: User) {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <div className='wrapper'>
        <HashRouter>
          {/* Shows the Navbar to the user */}
          <Navbar user={this.state.user} />
          <Routes>
            {/* The Home component is the homepage by default */}
            <Route path='/' element={<Home />} />
            {/* Uf the user logs in then it will redirect to profile */}
            <Route
              path='/login'
              element={this.state.user ? <Navigate replace to="/profile" /> : <Login authService={this.authService} setUser={this.setUser} />} />
            {/* If the user clicks on log out they will log out */}
            <Route
              path='/logout'
              element={this.state.user ? <Logout authService={this.authService} user={this.state.user} clearUser={this.clearUser} /> : <Navigate replace to="/login" />} />
            {/* If the user is not logged in they will be redirected to the login screen */}
            <Route
              path='/profile'
              element={this.state.user ? <Profile authService={this.authService} user={this.state.user} /> : <Navigate replace to="/login" />} />
            {/* Spaces will always show but will not let the user reserve if they are not logged in */}
            <Route path='/spaces' element={<Spaces dataService={this.dataService} user={this.state.user} />} />
          </Routes>
        </HashRouter>
      </div>
    )
  }
}