import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home"
import NotFound from './pages/NotFound';
import ProjectList from './pages/ProjectList';
import Skills from './pages/Skills'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Project from './pages/Project';

const theme = createTheme({
  palette: {
    primary: {
      light: '#8561c5',
      main: '#673ab7',
      dark: '#482880',
      contrastText: '#fff',
    },
    secondary: {
      light: '#6a52b3',
      main: '#4527a0',
      dark: '#301b70',
      contrastText: '#fff',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/projects" exact component={ProjectList}/>
          <Route path="/projects/:id" exact component={Project}/>
          <Route path="/skills" exact component={Skills}/>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
