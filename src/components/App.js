import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/home';
import Header from './Header';
import Login from './Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
