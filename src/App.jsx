import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Accordion from './Accordion/Accordion';
import Menu from './Menu/Menu';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/accordion" component={Accordion} />
        <Route path="/menu" component={Menu} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
