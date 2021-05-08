import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Navbar/Home';
import Accordion from './Accordion/Accordion';
import Menu from './Menu/Menu';
import Todo from './Todo/Todo';
import './App.css';


function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/accordion" component={Accordion} />
        <Route path="/menu" component={Menu} />
        <Route path="/todo" component={Todo} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
