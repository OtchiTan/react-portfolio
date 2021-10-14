import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home"
import NotFound from './pages/NotFound';
import Projets from './pages/Projets';
import Competences from './pages/Competences'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/projets" exact component={Projets}/>
        <Route path="/competences" exact component={Competences}/>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
