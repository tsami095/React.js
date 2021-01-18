import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Contact from './components/pages/Contact';
import signUp from './components/pages/signUp';
import LearnButton from './components/pages/LearnButton';
import MoreButton from './components/pages/MoreButton';

const App=()=>
 {
  return(
  
    <Router >
     
     <Switch>
       <Route path ='/' exact component={Home} ></Route>
       <Route path ='/services' exact component={Services} ></Route>
       <Route path ='/contact' exact component={Contact} ></Route>
       <Route path ='/signUp' exact component={signUp} ></Route>
       <Route path ='/LearnButton' exact component={LearnButton} ></Route>
       <Route path ='/MoreButton' exact component={MoreButton} ></Route>
       </Switch>
    </Router>
  );
}

export default App;
