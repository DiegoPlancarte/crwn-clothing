import './App.css';
import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/homepage/Homepage.component';
import ShopPage from './pages/shop/ShopPage.component';
import Header from './components/header/Header.component';
import SignInOut from './pages/sign-in-out/SignInOut.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInOut} />
      </Switch>
    </div>
  );
}

export default App;
