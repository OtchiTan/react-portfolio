import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home"
import NotFound from './pages/NotFound';
import ProjectList from './pages/ProjectList';
import Skills from './pages/Skills'
import Project from './pages/Project';



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/projects" exact component={ProjectList}/>
        <Route path="/projects/:id" exact component={Project}/>
        <Route path="/skills" exact component={Skills}/>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
