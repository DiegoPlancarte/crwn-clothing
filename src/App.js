import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
