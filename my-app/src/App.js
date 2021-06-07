import './App.css';
import Home from './Vistas/Home';
import About from './Vistas/About';
import MySkills from './Vistas/MySkills';
import Work from './Vistas/Work';
import Contact from './Vistas/Contact';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const App = () => (
  <Router>
    
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/myskills" component={MySkills} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Router>
)

export default App;
