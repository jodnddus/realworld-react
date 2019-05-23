import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './home/Main';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Main} />
    </BrowserRouter>
  );
}

export default App;
