import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import './App.css';

import { Home, About, PostNew } from './routes';
import { NavBar } from './components';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <NavBar/>
          <Switch>
            <Container className="route_container" fluid>
              <Route exact path="/about" component={About} />
              <Route exact path="/post/new" component={PostNew} />
              <Route exact path="/" component={Home} />
            </Container>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
