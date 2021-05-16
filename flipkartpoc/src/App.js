import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import ViewAllProducts from './Products/ViewAllProducts'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Router>
      
        <Switch>
          <Route path="/viewall" component={ViewAllProducts}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
