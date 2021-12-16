import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Characters from './pages/Characters';
import About from './pages/About';
import Credits from './pages/Credits';

function App () {
  return (
    <div>
      <Nav />
      <main>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/chars" component={(props) => <Characters {...props} />}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/credits" component={Credits}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
