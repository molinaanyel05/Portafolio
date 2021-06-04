import logo from './logo.svg';
import './App.css';
import SexyNavBar from './SexyNavBar';
import AnyelFea from './AnyelFea';
import AnyelSexy from './AnyelSexy';
import {Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <SexyNavBar/>
      <Switch>
        <Route exact path='/' component={AnyelFea}/>
        <Route path='/gorilla' component={AnyelSexy}/>         
      </Switch>
    </div>
  );
}

export default App;
