import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/home';
import Header from './Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <hr />
        <Route path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
