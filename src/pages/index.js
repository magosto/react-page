import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import {Home} from './Home';
import {Test} from './Test';
import {Bio} from './Bio';
import {About} from './About';
import {Contact} from './Contact';


export default () => (

  <BrowserRouter>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/Home" exact component={Home} />
      <Route path="/Test" exact component={Test} />
     <Route path="/Bio" exact component={Bio} />
      <Route path="/About" exact component={About} />
      <Route path="/Contact" exact component={Contact} />
    </div>
  </BrowserRouter>
);
