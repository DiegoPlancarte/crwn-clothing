import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/ShopPage.component';
import Header from './components/header/Header.component';
import SignInOut from './pages/sign-in-out/SignInOut.component';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      // this.setState({currentUser: user});
      createUserProfileDocument(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render () {
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInOut} />
      </Switch>
    </div>
  );
  }
}

export default App;
