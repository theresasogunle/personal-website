import React from 'react'
import {Switch,Route}from 'react-router-dom';
import Home from './home/home';
import About from './about/about';
import Contact from './contact/contact'
// import Project from './projects'
// import Resume from './resume'

import './main.scss'

const Main = () => (
    <Switch>
    <Route exact path ="/" component={Home} />
    <Route exact path ="/about" component={About} />
    <Route exact path ="/contact" component={Contact} />
    {/* <Route exact path ="/project" component={Project} />
    <Route exact path ="/resume" component={Resume} /> */}
</Switch>
)
  



export default Main;