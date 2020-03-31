import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

function Hats(props) {
  return (
    <div>
      <button onClick={() => props.history.push('/topic')}>Take me</button>
      <h1>hates</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/hats" component={Hats}></Route>
      </Switch>
    </div>
  );
}

export default App;
